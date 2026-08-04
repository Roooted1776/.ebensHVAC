import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/lib/site";

const pillars = [
  {
    title: "Dual-trade under one roof",
    body: "AC and plumbing from the same local team — fewer handoffs when your home needs both cooling and water system care.",
  },
  {
    title: "Booking-first, not phone-only",
    body: "Schedule online 24/7 for repairs, tune-ups, or free replacement quotes. Call when you want a person — either path is clear.",
  },
  {
    title: "Trust you can see",
    body: `${site.rating.value}★ from ${site.rating.count} reviews, BBB accredited, licensed & insured technicians — the signals competitors lead with, finally on the homepage.`,
  },
  {
    title: `Treasure Coast since ${site.founded}`,
    body: "Family-owned on NW Enterprise Dr — same service corridor as the market’s biggest names, with neighborhood-scale accountability.",
  },
];
export function WhyUs() {
  return (
    <section id="why" className="section-y surface-mist">
      <div className="container-x">
        <div className="grid items-end gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="Why EBens"
              title="The upgrade isn’t louder marketing. It’s clearer proof and a faster book."
              body="Competitors on Enterprise Drive lead with review counts, emergency language, and financing. This demo puts those conversion levers where homeowners actually look."
            />
          </Reveal>

          <Reveal delay={0.1} className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-lg)] md:aspect-[16/10]">
            <Image
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1600&q=80"
              alt="Technician servicing residential HVAC equipment"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
            <p className="absolute bottom-4 left-4 right-4 text-sm font-medium text-paper">
              Licensed technicians · All major AC brands · Free replacement quotes
            </p>
          </Reveal>
        </div>

        <ul className="mt-14 grid gap-8 sm:grid-cols-2">
          {pillars.map((item, i) => (
            <li key={item.title}>
              <Reveal delay={i * 0.05}>
                <article className="h-full border-t border-line-strong pt-6">
                  <h3 className="display text-xl text-ink sm:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                    {item.body}
                  </p>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
