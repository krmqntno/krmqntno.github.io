"use client";

import { useActionState, useEffect, useRef } from "react";
import Link from "next/link";
import { Check, Loader2 } from "lucide-react";
import { submitContact, type ContactState } from "@/app/actions/contact";
import { cn } from "@/lib/utils";

const initial: ContactState = { ok: false };

const needs = [
  "Kompletter Kanal, Reels und Karussells",
  "Nur Reels und Schnitt",
  "Nur Skripte und Hooks",
  "DM Automation",
  "Etwas anderes",
];

const field =
  "w-full rounded-xl border border-input bg-background px-4 py-3 text-[15px] outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring/20";
const labelCls = "mb-2 block text-sm font-medium";
const errCls = "mt-1.5 text-sm text-destructive";

export function ContactForm() {
  const [state, action, pending] = useActionState(submitContact, initial);
  const startedAtRef = useRef<HTMLInputElement>(null);

  // Zeitstempel erst im Browser setzen, sonst wäre er bei statischem HTML
  // auf den Build Zeitpunkt eingefroren.
  useEffect(() => {
    if (startedAtRef.current) {
      startedAtRef.current.value = String(Date.now());
    }
  }, []);

  if (state.ok) {
    return (
      <div className="flex flex-col items-start rounded-2xl border border-border bg-card p-8 sm:p-10">
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground">
          <Check size={20} />
        </span>
        <h3 className="mt-5 text-xl font-semibold tracking-tight">
          Angekommen.
        </h3>
        <p className="mt-2 max-w-md text-[15px] leading-relaxed text-muted-foreground">
          Ich schaue mir dein Profil an und melde mich innerhalb von zwei
          Werktagen. Wenn es schneller gehen soll, schreib mir auf Instagram.
        </p>
      </div>
    );
  }

  return (
    <form
      action={action}
      className="rounded-2xl border border-border bg-card p-7 sm:p-9"
      noValidate
    >
      <input type="hidden" name="startedAt" ref={startedAtRef} defaultValue="" />
      {/* Honeypot, absichtlich versteckt */}
      <div aria-hidden className="hidden">
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelCls}>
            Name
          </label>
          <input
            id="name"
            name="name"
            autoComplete="name"
            className={cn(field, state.fieldErrors?.name && "border-destructive")}
            placeholder="Vor und Nachname"
          />
          {state.fieldErrors?.name ? (
            <p className={errCls}>{state.fieldErrors.name}</p>
          ) : null}
        </div>

        <div>
          <label htmlFor="email" className={labelCls}>
            Mailadresse
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className={cn(field, state.fieldErrors?.email && "border-destructive")}
            placeholder="du@beispiel.de"
          />
          {state.fieldErrors?.email ? (
            <p className={errCls}>{state.fieldErrors.email}</p>
          ) : null}
        </div>

        <div>
          <label htmlFor="instagram" className={labelCls}>
            Instagram <span className="text-muted-foreground">optional</span>
          </label>
          <input
            id="instagram"
            name="instagram"
            className={field}
            placeholder="@deinhandle"
          />
        </div>

        <div>
          <label htmlFor="need" className={labelCls}>
            Worum geht es?
          </label>
          <select
            id="need"
            name="need"
            defaultValue=""
            className={cn(field, state.fieldErrors?.need && "border-destructive")}
          >
            <option value="" disabled>
              Bitte auswählen
            </option>
            {needs.map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
          {state.fieldErrors?.need ? (
            <p className={errCls}>{state.fieldErrors.need}</p>
          ) : null}
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="message" className={labelCls}>
          Nachricht
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className={cn(
            field,
            "resize-y",
            state.fieldErrors?.message && "border-destructive"
          )}
          placeholder="Was machst du, wo steht dein Kanal gerade, was soll sich ändern?"
        />
        {state.fieldErrors?.message ? (
          <p className={errCls}>{state.fieldErrors.message}</p>
        ) : null}
      </div>

      <div className="mt-5">
        <label
          htmlFor="consent"
          className="flex cursor-pointer items-start gap-3 text-sm text-muted-foreground"
        >
          <input
            id="consent"
            name="consent"
            type="checkbox"
            className="mt-0.5 h-4 w-4 shrink-0 accent-[var(--primary)]"
          />
          <span>
            Meine Angaben dürfen zur Bearbeitung der Anfrage gespeichert und
            verarbeitet werden. Details in der{" "}
            <Link href="/datenschutz" className="text-primary hover:underline">
              Datenschutzerklärung
            </Link>
            .
          </span>
        </label>
        {state.fieldErrors?.consent ? (
          <p className={errCls}>{state.fieldErrors.consent}</p>
        ) : null}
      </div>

      {state.error ? (
        <p className="mt-5 rounded-xl bg-destructive/10 px-4 py-3 text-sm text-destructive">
          {state.error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={pending}
        className="mt-7 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-8 text-[15px] font-medium text-background transition-all hover:brightness-125 disabled:opacity-60 sm:w-auto"
      >
        {pending ? (
          <>
            <Loader2 size={17} className="animate-spin" />
            Wird gesendet
          </>
        ) : (
          "Anfrage senden"
        )}
      </button>
    </form>
  );
}
