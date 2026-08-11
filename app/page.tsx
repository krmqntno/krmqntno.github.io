import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Process } from "@/components/sections/process";
import { Testimonials } from "@/components/sections/testimonials";
import { About } from "@/components/sections/about";
import { Faq } from "@/components/sections/faq";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Process />
      <Testimonials />
      <About />
      <Faq />
      <Contact />
    </>
  );
}
