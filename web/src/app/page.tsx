import { Hero } from "@/components/sections/Hero";
import { UrgencyBand } from "@/components/sections/UrgencyBand";
import { Services } from "@/components/sections/Services";
import { WhyUs } from "@/components/sections/WhyUs";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { Financing } from "@/components/sections/Financing";
import { ServiceArea } from "@/components/sections/ServiceArea";
import { FAQ } from "@/components/sections/FAQ";
import { CTABand } from "@/components/sections/CTABand";

export default function HomePage() {
  return (
    <main id="main">
      <Hero />
      <UrgencyBand />
      <Services />
      <WhyUs />
      <Process />
      <Testimonials />
      <Financing />
      <ServiceArea />
      <FAQ />
      <CTABand />
    </main>
  );
}
