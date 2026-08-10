import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Process } from "@/components/sections/process";
import { Work } from "@/components/sections/work";
import { Testimonials } from "@/components/sections/testimonials";
import { About } from "@/components/sections/about";
import { Comparison } from "@/components/sections/comparison";
import { Faq } from "@/components/sections/faq";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Process />
      <Work />
      <Testimonials />
      <About />
      <Comparison />
      <Faq />
      <Contact />
    </>
  );
}
