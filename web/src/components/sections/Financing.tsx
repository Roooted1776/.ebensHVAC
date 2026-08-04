import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Financing() {
  return (
    <section className="section-y bg-white">
      <div className="container-x">
        <div className="grid gap-10 overflow-hidden rounded-[var(--radius-xl)] border border-line bg-mist lg:grid-cols-[1.2fr_1fr]">
          <Reveal className="p-8 md:p-12 lg:p-14">
            <SectionHeading
              eyebrow="Replacement & care plans"
              title="Know the cost path before you commit."
              body="Free system replacement quotes for AC and water heaters. Ask about financing on larger installs and maintenance agreements that keep you ahead of summer breakdowns."
            />
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/book?intent=quote" size="lg">
                Request a free quote
              </Button>
              <Button href="/book?intent=maintenance" variant="secondary" size="lg">
                Ask about maintenance
              </Button>
            </div>
            <p className="mt-5 text-xs text-muted">
              Financing availability and terms confirmed on your estimate —
              placeholder until EBens supplies partner details.
            </p>
          </Reveal>

          <Reveal
            delay={0.1}
            className="flex flex-col justify-center gap-6 border-t border-line bg-white/60 p-8 md:p-12 lg:border-t-0 lg:border-l"
          >
            {[
              {
                title: "Free replacement quotes",
                body: "No-obligation pricing for new AC systems and water heaters.",
              },
              {
                title: "Competitive, transparent options",
                body: "Cost-efficient paths first — clear on what can wait.",
              },
              {
                title: "Maintenance that prevents peak-season failure",
                body: "Tune-ups that extend equipment life in Florida heat.",
              },
            ].map((item) => (
              <div key={item.title}>
                <h3 className="text-base font-semibold text-ink">{item.title}</h3>
                <p className="mt-1 text-sm text-muted">{item.body}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
