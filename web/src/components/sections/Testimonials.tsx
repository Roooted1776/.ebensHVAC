import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site, testimonials } from "@/lib/site";

export function Testimonials() {
  return (
    <section id="reviews" className="section-y surface-ink texture-grid-dark">
      <div className="container-x">
        <Reveal>
          <SectionHeading
            onDark
            eyebrow="Reviews"
            title="What Treasure Coast homeowners say."
            body={`${site.rating.value}★ average across ${site.rating.count} reviews — AC, plumbing, and dual-service feedback reflected here, not two lonely quotes.`}
          />
        </Reveal>

        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-on-dark">
          <p>
            <span className="font-semibold text-ice">{site.rating.value}★</span>{" "}
            average rating
          </p>
          <p>{site.bbb.label}</p>
          <p>Since {site.founded}</p>
        </div>

        <ul className="mt-12 grid gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <li key={t.name + t.detail}>
              <Reveal delay={i * 0.05}>
                <figure className="flex h-full flex-col rounded-[var(--radius-lg)] border border-line-on-dark bg-ink-elevated/80 p-6 md:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-ice">
                    {t.service}
                  </p>
                  <blockquote className="mt-4 flex-1 text-base leading-relaxed text-paper/90">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-6 border-t border-line-on-dark pt-4">
                    <p className="font-semibold text-paper">{t.name}</p>
                    <p className="mt-0.5 text-sm text-muted-on-dark">{t.detail}</p>
                  </figcaption>
                </figure>
              </Reveal>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-xs text-muted-on-dark">{site.rating.note}</p>
      </div>
    </section>
  );
}
