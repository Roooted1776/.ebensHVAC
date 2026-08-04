"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site";
import { cn } from "@/lib/cn";

const serviceOptions = [
  { value: "ac", label: "Air Conditioning" },
  { value: "plumbing", label: "Plumbing" },
  { value: "iaq", label: "Indoor Air Quality" },
  { value: "quote", label: "Free replacement quote" },
  { value: "maintenance", label: "Maintenance / membership" },
] as const;

const urgencyOptions = [
  { value: "urgent", label: "ASAP / same-day if available" },
  { value: "few-days", label: "Within a few days" },
  { value: "flexible", label: "Flexible / planning ahead" },
] as const;

export function BookingForm() {
  const params = useSearchParams();
  const initialService = useMemo(() => {
    const s = params.get("service");
    const intent = params.get("intent");
    if (intent === "quote") return "quote";
    if (intent === "maintenance") return "maintenance";
    if (s === "ac" || s === "plumbing" || s === "iaq") return s;
    return "ac";
  }, [params]);

  const [service, setService] = useState(initialService);
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        className="rounded-[var(--radius-lg)] border border-line bg-mist p-8 text-center md:p-12"
        role="status"
      >
        <p className="eyebrow mb-3">Request received</p>
        <h2 className="display text-3xl text-ink">Thanks — we’ll confirm shortly.</h2>
        <p className="mx-auto mt-4 max-w-md text-muted">
          This is a demo form. In production, this would create a booking lead
          for EBens. Prefer to talk now?
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href={site.phoneHref} size="lg">
            Call {site.phone}
          </Button>
          <Button href="/" variant="secondary" size="lg">
            Back to home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-[var(--radius-lg)] border border-line bg-white p-6 shadow-md md:p-10"
      noValidate
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Full name" htmlFor="name" required>
          <input
            id="name"
            name="name"
            required
            autoComplete="name"
            className={inputClass}
            placeholder="Jordan Rivera"
          />
        </Field>
        <Field label="Phone" htmlFor="phone" required>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            className={inputClass}
            placeholder="(772) 555-0100"
          />
        </Field>
        <Field label="Email" htmlFor="email" className="sm:col-span-2">
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className={inputClass}
            placeholder="you@email.com"
          />
        </Field>
        <Field label="Service needed" htmlFor="service" required>
          <select
            id="service"
            name="service"
            required
            className={inputClass}
            value={service}
            onChange={(e) => setService(e.target.value)}
          >
            {serviceOptions.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Timing" htmlFor="urgency" required>
          <select id="urgency" name="urgency" required className={inputClass} defaultValue="few-days">
            {urgencyOptions.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </Field>
        <Field
          label="City / ZIP"
          htmlFor="location"
          className="sm:col-span-2"
          required
        >
          <input
            id="location"
            name="location"
            required
            className={inputClass}
            placeholder="Port St. Lucie, 34986"
          />
        </Field>
        <Field
          label="What’s going on?"
          htmlFor="details"
          className="sm:col-span-2"
        >
          <textarea
            id="details"
            name="details"
            rows={4}
            className={cn(inputClass, "resize-y min-h-[7rem]")}
            placeholder="AC not cooling, water heater issue, tune-up, etc."
          />
        </Field>
      </div>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted max-w-sm">
          Demo only — nothing is sent to a live CRM. Prefer phone?{" "}
          <a href={site.phoneHref} className="font-semibold text-teal">
            {site.phone}
          </a>
        </p>
        <Button type="submit" size="lg" className="w-full sm:w-auto">
          Request booking window
        </Button>
      </div>
    </form>
  );
}

const inputClass = cn(
  "w-full rounded-[var(--radius-md)] border border-line-strong bg-paper px-3.5 py-2.5 text-sm text-ink",
  "placeholder:text-muted/70",
  "transition-colors focus:border-ice-deep focus:bg-white focus:outline-none focus:ring-2 focus:ring-ice/40",
);

function Field({
  label,
  htmlFor,
  required,
  children,
  className,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <label htmlFor={htmlFor} className="text-sm font-medium text-ink">
        {label}
        {required ? <span className="text-teal"> *</span> : null}
      </label>
      {children}
    </div>
  );
}
