import Image from "next/image";
import { Section } from "@/components/section";

export function About() {
  return (
    <Section id="ueber-mich" className="bg-background">
      <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,420px)_1fr] lg:gap-14">
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-secondary">
          <Image
            src="/img/kerim.jpg"
            alt="Kerim Quintino am Laptop"
            width={1000}
            height={1333}
            sizes="(max-width: 1024px) 100vw, 420px"
            className="h-full w-full object-cover object-[50%_35%]"
            priority={false}
          />
        </div>

        <div className="max-w-xl">
          <p className="mb-3 text-[13px] font-medium uppercase tracking-[0.12em] text-primary">
            Über mich
          </p>
          <h2 className="display text-3xl sm:text-4xl">
            Du musst Instagram nicht verstehen. Ich mach das den ganzen Tag.
          </h2>

          <div className="mt-6 flex flex-col gap-4 text-[17px] leading-relaxed text-muted-foreground">
            <p>
              Ich bin Kerim, 28, aus Hamm. Im Monat mache ich über 120 Beiträge
              für sieben Kanäle. Was läuft und was kippt, sehe ich nicht in
              einer Studie, sondern an meinen eigenen Zahlen.
            </p>
            <p>
              Heißt für dich: du musst nicht wissen, wie ein Hook aufgebaut ist
              oder warum Leute in Sekunde drei wegwischen. Dafür hast du mich.
              Weil wir jeden Monat zusammen durch die Zahlen gehen, kriegst du
              es trotzdem mit.
            </p>
            <p>
              Was ich dir nicht abnehmen kann: vor der Kamera stehst du. Deine
              Storys macht niemand für dich. Wer gar nichts tun will, wird auch
              mit dem besten Schnitt nicht sichtbar.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
