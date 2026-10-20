import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Process } from "@/components/sections/process";
import { Testimonials } from "@/components/sections/testimonials";
import { About } from "@/components/sections/about";
import { Faq } from "@/components/sections/faq";
import { Contact } from "@/components/sections/contact";
import { Sheet } from "@/components/sheet";
import { FilmIntro } from "@/components/film/intro";
import { Finale } from "@/components/film/finale";

export default function Home() {
  return (
    <>
      <Sheet className="mt-2">
        <Hero />
        <Services />
        <Process />
        <Testimonials />
        <About />
        <Faq />
        <Contact />
      </Sheet>
      <Finale />
      <FilmIntro />
    </>
  );
}
