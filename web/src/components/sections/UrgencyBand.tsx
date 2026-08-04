import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/site";

export function UrgencyBand() {
  return (
    <section
      className="border-y border-line bg-white"
      aria-label="Urgent service"
    >
      <div className="container-x flex flex-col gap-4 py-5 sm:flex-row sm:items-center sm:justify-between sm:py-6">
        <Reveal className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-4">
          <p className="text-sm font-semibold text-ink">
            AC down in the Florida heat?
          </p>
          <p className="text-sm text-muted">
            Book online anytime — we prioritize urgent cooling & plumbing when
            the schedule allows.
          </p>
        </Reveal>
        <Reveal delay={0.08} className="flex shrink-0 gap-4 text-sm font-semibold">
          <Link href="/book" className="text-teal hover:text-ice-deep">
            Book now →
          </Link>
          <a href={site.phoneHref} className="text-ink hover:text-teal">
            {site.phone}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
