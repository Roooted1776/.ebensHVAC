import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/lib/site";

export function Services() {
  return (
    <section id="services" className="surface-paper section-y texture-grid">
      <div className="container-x">
        <Reveal>
          <SectionHeading
            eyebrow="Core services"
            title="Built around how Treasure Coast homeowners actually search."
            body="Air conditioning, plumbing, and indoor air — one locally owned team, clear next steps, and a fast path to book."
          />
        </Reveal>

        <ul className="mt-14 space-y-0 divide-y divide-line border-y border-line">
          {services.map((service, i) => (
            <li key={service.id}>
              <Reveal delay={i * 0.06}>
                <article className="group grid gap-6 py-10 md:grid-cols-[7rem_1fr_auto] md:gap-10 md:py-12">
                  <p className="display text-3xl text-ice-deep/80 md:pt-1">
                    {service.number}
                  </p>
                  <div>
                    <p className="eyebrow mb-2">{service.eyebrow}</p>
                    <h3 className="display text-2xl text-ink sm:text-3xl">
                      {service.title}
                    </h3>
                    <p className="prose-muted mt-3">{service.summary}</p>
                    <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                      {service.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-2 text-sm text-ink/80"
                        >
                          <span
                            className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal"
                            aria-hidden
                          />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-end md:justify-end">
                    <Link
                      href={service.href}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-teal transition-colors group-hover:text-ice-deep"
                    >
                      Book {service.title.split(" ")[0]}
                      <span aria-hidden>→</span>
                    </Link>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
