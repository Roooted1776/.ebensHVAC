import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { processSteps } from "@/lib/site";

export function Process() {
  return (
    <section className="section-y bg-white">
      <div className="container-x">
        <Reveal>
          <SectionHeading
            eyebrow="What to expect"
            title="From tap-to-book to comfort restored."
            body="No coupon clutter. A simple path so you know what happens after you reach out."
          />
        </Reveal>

        <ol className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {processSteps.map((step, i) => (
            <li key={step.step}>
              <Reveal delay={i * 0.06}>
                <article className="relative h-full pr-4">
                  <p className="display text-4xl text-ice-deep/40">{step.step}</p>
                  <h3 className="mt-4 text-lg font-semibold text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {step.body}
                  </p>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
