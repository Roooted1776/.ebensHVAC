"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqs } from "@/lib/site";
import { cn } from "@/lib/cn";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section-y bg-white">
      <div className="container-x grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal>
          <SectionHeading
            eyebrow="FAQ"
            title="Quick answers before you book."
            body="Still deciding? Request a window online — we’ll help you choose the right next step."
          />
        </Reveal>

        <ul className="divide-y divide-line border-y border-line">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <li key={item.q}>
                <Reveal delay={i * 0.04}>
                  <h3>
                    <button
                      type="button"
                      className="flex w-full items-start justify-between gap-4 py-5 text-left"
                      aria-expanded={isOpen}
                      onClick={() => setOpen(isOpen ? null : i)}
                    >
                      <span className="text-base font-semibold text-ink sm:text-lg">
                        {item.q}
                      </span>
                      <span
                        className={cn(
                          "mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-line text-sm text-teal transition-transform",
                          isOpen && "rotate-45",
                        )}
                        aria-hidden
                      >
                        +
                      </span>
                    </button>
                  </h3>
                  <div
                    className={cn(
                      "grid transition-[grid-template-rows] duration-300",
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-5 pr-10 text-sm leading-relaxed text-muted sm:text-base">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
