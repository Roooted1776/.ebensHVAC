import type { Metadata } from "next";
import { Suspense } from "react";
import { BookingForm } from "@/components/sections/BookingForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book Online",
  description:
    "Schedule air conditioning or plumbing service with EBens in Port St. Lucie. Online booking available 24/7.",
};

export default function BookPage() {
  return (
    <main id="main" className="surface-paper pt-24 pb-20 md:pt-28 md:pb-28">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow mb-3">Book online · 24/7</p>
          <h1 className="display text-4xl text-ink sm:text-5xl text-balance">
            Request a service window with {site.name}.
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-muted">
            Repairs, maintenance, or a free replacement quote. We’ll confirm the
            soonest available appointment — urgent cooling prioritized when the
            schedule allows.
          </p>
          <p className="mt-4 text-sm">
            Prefer to call?{" "}
            <a
              href={site.phoneHref}
              className="font-semibold text-teal hover:text-ice-deep"
            >
              {site.phone}
            </a>
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-2xl">
          <Suspense
            fallback={
              <div className="h-96 animate-pulse rounded-[var(--radius-lg)] border border-line bg-mist" />
            }
          >
            <BookingForm />
          </Suspense>
        </div>
      </div>
    </main>
  );
}
