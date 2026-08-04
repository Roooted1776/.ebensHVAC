"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site";
import { cn } from "@/lib/cn";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const isHome = pathname === "/";
  const solid = !isHome || scrolled || open;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const mobileMenu =
    mounted && open
      ? createPortal(
          <div
            id="mobile-nav"
            className="fixed inset-0 z-[60] bg-ink lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            <div className="container-x flex h-16 items-center justify-between border-b border-line-on-dark">
              <Link
                href="/"
                className="display text-2xl text-paper"
                onClick={() => setOpen(false)}
              >
                {site.name}
              </Link>
              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-[var(--radius-md)] text-paper"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
              >
                <span className="relative block h-4 w-5" aria-hidden>
                  <span className="absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 rotate-45 bg-current" />
                  <span className="absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 -rotate-45 bg-current" />
                </span>
              </button>
            </div>
            <nav
              className="container-x flex h-[calc(100svh-4rem)] flex-col gap-1 overflow-y-auto py-6"
              aria-label="Mobile"
            >
              {site.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-[var(--radius-md)] px-3 py-3 text-lg font-medium text-paper hover:bg-white/5"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-auto flex flex-col gap-3 border-t border-line-on-dark pt-6 pb-8">
                <a
                  href={site.phoneHref}
                  className="rounded-[var(--radius-md)] px-3 py-3 text-base font-semibold text-ice"
                >
                  Call {site.phone}
                </a>
                <Button href="/book" variant="on-dark" size="lg" className="w-full">
                  Book Online
                </Button>
              </div>
            </nav>
          </div>,
          document.body,
        )
      : null;

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background,box-shadow] duration-300",
          solid
            ? "bg-ink/95 shadow-md border-b border-line-on-dark"
            : "bg-transparent",
        )}
      >
        <div className="container-x flex h-16 items-center justify-between gap-4 md:h-[4.25rem]">
          <Link
            href="/"
            className="group flex items-baseline gap-2 text-paper"
            onClick={() => setOpen(false)}
          >
            <span className="display text-2xl tracking-tight md:text-[1.75rem]">
              {site.name}
            </span>
            <span className="hidden text-[0.65rem] font-medium uppercase tracking-[0.16em] text-ice sm:inline">
              AC · Plumbing
            </span>
          </Link>

          <nav
            className="hidden items-center gap-7 lg:flex"
            aria-label="Primary"
          >
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-on-dark transition-colors hover:text-paper"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href={site.phoneHref}
              className="text-sm font-semibold text-paper transition-colors hover:text-ice"
            >
              {site.phone}
            </a>
            <Button href="/book" variant="on-dark" size="sm">
              Book Online
            </Button>
          </div>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-[var(--radius-md)] text-paper lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <div className="relative h-4 w-5" aria-hidden>
              <span className="absolute left-0 top-0 h-0.5 w-full bg-current" />
              <span className="absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 bg-current" />
              <span className="absolute left-0 bottom-0 h-0.5 w-full bg-current" />
            </div>
          </button>
        </div>
      </header>
      {mobileMenu}
    </>
  );
}
