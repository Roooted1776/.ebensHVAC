"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden bg-ink text-paper">
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=2400&q=80"
          alt="Modern Florida home exterior at dusk"
          fill
          priority
          className="object-cover object-[center_35%]"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, rgba(7,24,32,0.94) 0%, rgba(7,24,32,0.86) 38%, rgba(7,24,32,0.62) 72%, rgba(7,24,32,0.72) 100%), linear-gradient(to top, rgba(7,24,32,0.92) 0%, rgba(7,24,32,0.35) 42%, transparent 70%)",
          }}
        />
        <div className="absolute inset-0 texture-grid-dark opacity-40" />
      </div>

      <div className="container-x flex min-h-[100svh] flex-col justify-end pb-16 pt-28 md:justify-center md:pb-24 md:pt-32">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <p className="eyebrow eyebrow-on-dark mb-5">
            Port St. Lucie · Treasure Coast · Since {site.founded}
          </p>

          <h1 className="display text-[clamp(2.75rem,8vw,5.5rem)] text-balance">
            <span className="block text-ice">{site.name}</span>
            <span className="mt-2 block text-[0.62em] font-normal tracking-[-0.015em] text-paper/95">
              Cool homes. Clear plumbing. Booked in minutes.
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-on-dark sm:text-lg">
            Family-owned air conditioning & plumbing for Treasure Coast
            homeowners — same-day windows when available, free replacement
            quotes, and online booking around the clock.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href="/book" variant="on-dark" size="lg">
              Book a service window
            </Button>
            <Button href={site.phoneHref} variant="on-dark-outline" size="lg">
              Call {site.phone}
            </Button>
          </div>
        </motion.div>

        <motion.ul
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-12 grid max-w-3xl gap-3 border-t border-line-on-dark pt-8 sm:grid-cols-3"
          aria-label="Trust highlights"
        >
          {[
            {
              label: `${site.rating.value}★ average`,
              sub: `${site.rating.count} reviews`,
            },
            { label: site.bbb.label, sub: "Local & insured" },
            { label: "Online booking 24/7", sub: "Urgent jobs prioritized" },
          ].map((item) => (
            <li key={item.label} className="min-w-0">
              <p className="text-sm font-semibold text-paper">{item.label}</p>
              <p className="mt-0.5 text-xs text-muted-on-dark">{item.sub}</p>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
