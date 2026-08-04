import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { site } from "@/lib/site";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} | Air Conditioning & Plumbing · Port St. Lucie`,
    template: `%s | ${site.name}`,
  },
  description:
    "Family-owned air conditioning and plumbing for Port St. Lucie and the Treasure Coast. Book online, get free replacement quotes, licensed technicians since 2002.",
  metadataBase: new URL("https://ebens-demo.local"),
  openGraph: {
    title: `${site.name} — AC & Plumbing, Treasure Coast`,
    description:
      "Premium demo redesign: book online, trust-forward HVAC & plumbing for Port St. Lucie homeowners.",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${jakarta.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-[var(--radius-md)] focus:bg-white focus:px-4 focus:py-2 focus:text-ink focus:shadow-md"
        >
          Skip to content
        </a>
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
