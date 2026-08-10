"use server";

import { headers } from "next/headers";
import { Resend } from "resend";
import { z } from "zod";
import { site } from "@/content/site";

const schema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Bitte trag deinen Namen ein.")
    .max(80, "Das ist zu lang."),
  email: z
    .string()
    .trim()
    .min(1, "Ohne Mailadresse kann ich dir nicht antworten.")
    .email("Diese Mailadresse sieht nicht richtig aus."),
  instagram: z.string().trim().max(60, "Das ist zu lang.").optional(),
  need: z.string().trim().min(1, "Bitte wähle aus, worum es geht."),
  message: z
    .string()
    .trim()
    .min(20, "Schreib bitte zwei bis drei Sätze, sonst kann ich nichts damit anfangen.")
    .max(2000, "Bitte kürzer fassen."),
  consent: z.literal("on", {
    message: "Ohne dein Einverständnis darf ich die Anfrage nicht verarbeiten.",
  }),
});

export type ContactState = {
  ok: boolean;
  error?: string;
  fieldErrors?: Partial<Record<keyof z.infer<typeof schema>, string>>;
};

/** Best effort Rate Limit. Reicht gegen simple Bots, ersetzt keine WAF. */
const hits = new Map<string, number[]>();
const WINDOW_MS = 60 * 60 * 1000;
const MAX_PER_WINDOW = 5;

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_PER_WINDOW;
}

export async function submitContact(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  // Honeypot. Echte Menschen sehen dieses Feld nicht.
  if (typeof formData.get("website") === "string" && formData.get("website")) {
    return { ok: true };
  }

  // Zeitfalle. Unter drei Sekunden war es kein Mensch.
  const startedAt = Number(formData.get("startedAt") ?? 0);
  if (!startedAt || Date.now() - startedAt < 3000) {
    return { ok: false, error: "Das ging zu schnell. Bitte noch einmal senden." };
  }

  const parsed = schema.safeParse({
    name: formData.get("name") ?? "",
    email: formData.get("email") ?? "",
    instagram: formData.get("instagram") ?? "",
    need: formData.get("need") ?? "",
    message: formData.get("message") ?? "",
    consent: formData.get("consent") ?? "",
  });

  if (!parsed.success) {
    const fieldErrors: ContactState["fieldErrors"] = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0] as keyof z.infer<typeof schema>;
      if (key && !fieldErrors[key]) fieldErrors[key] = issue.message;
    }
    return { ok: false, fieldErrors };
  }

  const h = await headers();
  const ip = (h.get("x-forwarded-for") ?? "unknown").split(",")[0].trim();
  if (rateLimited(ip)) {
    return {
      ok: false,
      error: "Zu viele Anfragen. Melde dich bitte direkt per Mail.",
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL ?? site.email;
  const from = process.env.CONTACT_FROM_EMAIL ?? "onboarding@resend.dev";

  if (!apiKey) {
    console.error("RESEND_API_KEY fehlt. Anfrage konnte nicht versendet werden.");
    return {
      ok: false,
      error:
        "Das Formular ist gerade nicht erreichbar. Schreib mir bitte direkt an " +
        site.email,
    };
  }

  const { name, email, instagram, need, message } = parsed.data;

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: `Website <${from}>`,
      to: [to],
      replyTo: email,
      subject: `Anfrage über die Website: ${name}`,
      text: [
        `Name: ${name}`,
        `Mail: ${email}`,
        `Instagram: ${instagram || "nicht angegeben"}`,
        `Anliegen: ${need}`,
        "",
        message,
      ].join("\n"),
    });

    if (error) {
      console.error("Resend error", error);
      return {
        ok: false,
        error: "Der Versand hat nicht geklappt. Schreib mir bitte an " + site.email,
      };
    }
  } catch (err) {
    console.error("Resend exception", err);
    return {
      ok: false,
      error: "Der Versand hat nicht geklappt. Schreib mir bitte an " + site.email,
    };
  }

  return { ok: true };
}
