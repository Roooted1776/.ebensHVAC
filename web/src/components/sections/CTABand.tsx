import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/site";

export function CTABand() {
  return (
    <section className="section-y surface-ink texture-grid-dark">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow eyebrow-on-dark mb-4">Ready when you are</p>
          <h2 className="display text-3xl text-paper sm:text-4xl md:text-5xl text-balance">
            Book EBens online — or call and talk to someone local.
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-base text-muted-on-dark">
            Repairs, maintenance, or a free replacement quote. Online scheduling
            is open 24/7; phones during business hours.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/book" variant="on-dark" size="lg">
              Book a service window
            </Button>
            <Button href={site.phoneHref} variant="on-dark-outline" size="lg">
              Call {site.phone}
            </Button>
          </div>
          <p className="mt-6 text-sm text-muted-on-dark">
            {site.address.full}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
