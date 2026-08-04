export const site = {
  name: "EBens",
  legalName: "Ebens Air Conditioning & Plumbing",
  tagline: "Air conditioning & plumbing for the Treasure Coast.",
  phone: "(772) 213-9902",
  phoneHref: "tel:+17722139902",
  email: "CustomerService@Ebens.com",
  emailHref: "mailto:CustomerService@Ebens.com",
  address: {
    line1: "781 NW Enterprise Dr. Suite 105",
    city: "Port St. Lucie",
    state: "FL",
    zip: "34986",
    full: "781 NW Enterprise Dr. Suite 105, Port St. Lucie, FL 34986",
  },
  hours: [
    { day: "Mon – Fri", time: "8:00 am – 6:00 pm" },
    { day: "Saturday", time: "8:00 am – 5:00 pm" },
    { day: "Sunday", time: "Closed" },
  ],
  founded: 2002,
  rating: {
    value: 4.9,
    count: "200+",
    note: "Aggregated from public review platforms (demo figure)",
  },
  bbb: {
    accredited: true,
    label: "BBB Accredited",
  },
  nav: [
    { label: "Services", href: "/#services" },
    { label: "Why EBens", href: "/#why" },
    { label: "Reviews", href: "/#reviews" },
    { label: "Service Area", href: "/#service-area" },
    { label: "FAQ", href: "/#faq" },
  ],
} as const;

export const services = [
  {
    id: "air-conditioning",
    number: "01",
    title: "Air Conditioning",
    eyebrow: "Florida-ready cooling",
    summary:
      "Repair, maintenance, and replacement built for Treasure Coast heat — clear diagnostics, honest options, free replacement quotes.",
    points: [
      "AC repair & diagnostics",
      "Preventive tune-ups",
      "System replacement & install",
      "All major brands serviced",
    ],
    href: "/book?service=ac",
  },
  {
    id: "plumbing",
    number: "02",
    title: "Plumbing",
    eyebrow: "Lasting home water systems",
    summary:
      "Licensed residential plumbing focused on lasting fixes — water heaters, drains, fixtures, and disposals with upfront communication.",
    points: [
      "Water heater repair & install",
      "Drain cleaning",
      "Toilet, sink & fixture work",
      "Garbage disposal service",
    ],
    href: "/book?service=plumbing",
  },
  {
    id: "indoor-air-quality",
    number: "03",
    title: "Indoor Air Quality",
    eyebrow: "Cleaner air, quieter systems",
    summary:
      "Duct and dryer vent cleaning plus whole-home filtration that works with your HVAC — better airflow, fewer allergens.",
    points: [
      "Air duct cleaning",
      "Dryer vent cleaning",
      "Whole-home filtration",
      "Air purification options",
    ],
    href: "/book?service=iaq",
  },
] as const;

export const testimonials = [
  {
    quote:
      "My compressor was loud and the house wouldn’t cool. Brian found the issue fast — done in about 30 minutes, and it was already cooling again. Quieter, too. I signed up for a service policy after that visit.",
    name: "Maria P.",
    detail: "Port St. Lucie · AC repair",
    service: "Air Conditioning",
  },
  {
    quote:
      "Larry walked me through every step while troubleshooting my AC. Kind, clear, and I actually understood what was wrong. That kind of communication is rare.",
    name: "Andrew B.",
    detail: "Treasure Coast · AC service",
    service: "Air Conditioning",
  },
  {
    quote:
      "Called after 5pm on a Friday when the unit was blowing hot air. Next available was Saturday afternoon — Andy arrived early, gave the cost-efficient option first, and it worked. No pressure for the expensive path.",
    name: "Local homeowner",
    detail: "Port St. Lucie · Weekend AC repair",
    service: "Emergency / After-hours",
  },
  {
    quote:
      "Recommended for both AC maintenance and plumbing. Trevor handled the AC side with clear certification and care; Steven handled the plumbing with the same professionalism.",
    name: "Jacqueline C.",
    detail: "Treasure Coast · AC + Plumbing",
    service: "Dual service",
  },
] as const;

export const faqs = [
  {
    q: "Can I book online?",
    a: "Yes. Use Book Online anytime — 24/7 scheduling for service, maintenance, or a free replacement quote. Prefer a person? Call us during business hours.",
  },
  {
    q: "Do you offer same-day or urgent service?",
    a: "When the schedule allows, we prioritize urgent cooling and plumbing issues — especially in peak Florida heat. Book online or call and we’ll give you the soonest available window.",
  },
  {
    q: "What areas do you serve?",
    a: "Port St. Lucie and the broader Treasure Coast, including Fort Pierce, Stuart, Jensen Beach, Vero Beach, Palm City, Sebastian, and neighboring communities.",
  },
  {
    q: "Are your technicians licensed and insured?",
    a: "Yes. EBens dispatches licensed, insured technicians for air conditioning and plumbing work. We’re locally owned and have served the area since 2002.",
  },
  {
    q: "Do you provide free replacement quotes?",
    a: "Yes — free, no-obligation quotes for AC and water heater replacements so you can compare options against your budget and comfort goals.",
  },
  {
    q: "What about financing or maintenance plans?",
    a: "Ask when you book — we can walk you through financing options for larger replacements and maintenance agreements that keep systems running through summer. Details confirmed on your estimate.",
  },
] as const;

export const cities = [
  "Port St. Lucie",
  "Fort Pierce",
  "Stuart",
  "Jensen Beach",
  "Vero Beach",
  "Palm City",
  "Sebastian",
  "Hutchinson Island",
  "St. Lucie West",
  "Tradition",
  "White City",
  "Okeechobee",
] as const;

export const processSteps = [
  {
    step: "01",
    title: "Book online or call",
    body: "Pick a service window that fits — or tap to call. Tell us what’s going on with your AC or plumbing.",
  },
  {
    step: "02",
    title: "We confirm & arrive prepared",
    body: "You’ll get clear scheduling communication. Technicians arrive ready to diagnose, not upsell.",
  },
  {
    step: "03",
    title: "Honest options, clear pricing",
    body: "You’ll know what’s wrong, what it costs, and what can wait — before major work begins.",
  },
  {
    step: "04",
    title: "Comfort restored",
    body: "Repairs, installs, or maintenance done right for Florida homes — then you’re back to cool air or running water.",
  },
] as const;
