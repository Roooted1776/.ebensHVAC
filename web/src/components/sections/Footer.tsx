import Link from "next/link";
import { site, services } from "@/lib/site";

export function Footer() {
  return (
    <footer className="surface-ink texture-grid-dark border-t border-line-on-dark">
      <div className="container-x section-y !py-16 md:!py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="display text-3xl text-paper">{site.name}</p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-on-dark">
              Locally owned air conditioning & plumbing for Port St. Lucie and
              the Treasure Coast since {site.founded}.
            </p>
            <p className="mt-6 text-sm text-muted-on-dark">
              {site.address.line1}
              <br />
              {site.address.city}, {site.address.state} {site.address.zip}
            </p>
            <div className="mt-4 flex flex-col gap-1 text-sm">
              <a
                href={site.phoneHref}
                className="font-semibold text-ice hover:text-white"
              >
                {site.phone}
              </a>
              <a
                href={site.emailHref}
                className="text-muted-on-dark hover:text-paper"
              >
                {site.email}
              </a>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ice">
              Services
            </p>
            <ul className="mt-4 space-y-2">
              {services.map((s) => (
                <li key={s.id}>
                  <Link
                    href={`/#services`}
                    className="text-sm text-muted-on-dark hover:text-paper"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/book"
                  className="text-sm font-medium text-ice hover:text-white"
                >
                  Book Online
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ice">
              Hours
            </p>
            <ul className="mt-4 space-y-2 text-sm text-muted-on-dark">
              {site.hours.map((h) => (
                <li key={h.day} className="flex justify-between gap-4">
                  <span>{h.day}</span>
                  <span className="text-paper/80">{h.time}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-muted-on-dark">
              Online booking available 24/7. Urgent requests prioritized when
              the schedule allows.
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-line-on-dark pt-8 text-xs text-muted-on-dark sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.legalName}. Demo redesign concept.
          </p>
          <p>
            {site.bbb.label} · {site.rating.value}★ · {site.rating.count} reviews
          </p>
        </div>
      </div>
    </footer>
  );
}
