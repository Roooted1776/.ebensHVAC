import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cities, site } from "@/lib/site";

export function ServiceArea() {
  return (
    <section id="service-area" className="section-y surface-mist texture-grid">
      <div className="container-x">
        <Reveal>
          <SectionHeading
            eyebrow="Service area"
            title="Port St. Lucie and the towns next door."
            body={`Based at ${site.address.line1} — serving the Treasure Coast with named coverage for the searches that actually happen.`}
          />
        </Reveal>

        <Reveal delay={0.08}>
          <ul className="mt-12 flex flex-wrap gap-2 sm:gap-3">
            {cities.map((city) => (
              <li
                key={city}
                className="rounded-[var(--radius-md)] border border-line bg-white px-3.5 py-2 text-sm font-medium text-ink shadow-sm"
              >
                {city}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="mt-8 max-w-xl text-sm text-muted">
            Also serving neighboring communities across Indian River, Martin,
            and St. Lucie counties. Not sure if you’re in range? Book online or
            call — we’ll confirm before we dispatch.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
