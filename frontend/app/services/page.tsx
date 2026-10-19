import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Home, Phone, ArrowRight, Droplets } from "lucide-react";
import { COLOUR_PALETTE } from "@/constants/colour";
import { SERVICES_PAGE_DATA } from "@/data/servicesPageData";
import { IndustriesInteractiveShowcase } from "@/components/services/IndustriesInteractiveShowcase";

export const metadata: Metadata = {
  title: "Industries Served | Reflex Industrial Solutions",
  description:
    "Total water management and specialty chemical solutions across 14 major process industries, including refineries, power, steel, fertilizers, textiles, and chemicals.",
  openGraph: {
    title: "Industries Served | Reflex Industrial Solutions",
    description:
      "Total water management and specialty chemical solutions across 14 major process industries.",
    type: "website",
    url: "/services",
  },
};

export default function ServicesPage() {
  const data = SERVICES_PAGE_DATA;

  return (
    <main
      className="relative min-h-screen pt-28 pb-24 sm:pt-32 sm:pb-28 lg:pt-36 lg:pb-32"
      style={{ backgroundColor: COLOUR_PALETTE.cream }}
    >
      {/* Ambient background glows */}
      <div
        className="pointer-events-none absolute top-20 right-10 h-[500px] w-[500px] rounded-full opacity-25 blur-[120px]"
        style={{ backgroundColor: COLOUR_PALETTE.secondary }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/2 left-0 h-[450px] w-[450px] rounded-full opacity-20 blur-[100px]"
        style={{ backgroundColor: COLOUR_PALETTE.accent }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-6xl space-y-12 px-4 sm:space-y-16 sm:px-6 lg:px-8">
        {/* ================================================================ */}
        {/* SECTION 1: EDITORIAL MASTHEAD                                    */}
        {/* ================================================================ */}
        <section aria-label="Services Header" className="space-y-6">
          {/* Breadcrumb Navigation */}
          <nav
            aria-label="Breadcrumb"
            className="inline-flex items-center gap-2 text-xs font-medium text-stone-600 sm:text-sm"
          >
            <Link
              href="/"
              className="flex items-center gap-1.5 transition-colors hover:text-stone-900"
            >
              <Home className="h-3.5 w-3.5" />
              <span>Home</span>
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-stone-400" />
            <span
              className="font-semibold"
              style={{ color: COLOUR_PALETTE.primaryDark }}
            >
              Industries Served
            </span>
          </nav>

          {/* Symmetrical Flanked Eyebrow Badge */}
          <div className="flex items-center gap-2.5">
            <span
              className="h-[2px] w-8 rounded-full"
              style={{ backgroundColor: COLOUR_PALETTE.accent }}
              aria-hidden="true"
            />
            <div className="inline-flex items-center gap-2 rounded-full border border-stone-300/80 bg-white/80 px-3.5 py-1 shadow-2xs backdrop-blur-xs">
              <span
                className="h-1.5 w-1.5 animate-pulse rounded-full"
                style={{ backgroundColor: COLOUR_PALETTE.accent }}
                aria-hidden="true"
              />
              <span className="text-[11px] font-bold tracking-[0.2em] text-stone-800 uppercase sm:text-xs">
                {data.companyName} • Sector Portfolio
              </span>
            </div>
            <span
              className="h-[2px] w-8 rounded-full"
              style={{ backgroundColor: COLOUR_PALETTE.accent }}
              aria-hidden="true"
            />
          </div>

          {/* Stately Display Headline (Unified, balanced single heading) */}
          <h1 className="text-left text-3xl leading-[1.15] font-extrabold tracking-tight text-[#1A2010] sm:text-4xl md:text-5xl lg:text-6xl">
            Industries We Serve
          </h1>

          {/* Subtitle */}
          <p className="max-w-3xl text-left text-base leading-relaxed font-normal text-stone-700 sm:text-lg">
            {data.subtitle}
          </p>

          {/* Technical Capability Pillars */}
          <div className="grid max-w-4xl grid-cols-2 gap-3 pt-2 sm:grid-cols-4">
            <div className="rounded-2xl border border-stone-300/70 bg-white/70 p-3.5 shadow-2xs backdrop-blur-xs">
              <span className="text-[11px] font-bold tracking-wider text-stone-500 uppercase">
                Coverage
              </span>
              <p className="mt-0.5 text-sm font-bold text-stone-900 sm:text-base">
                14 Core Sectors
              </p>
            </div>
            <div className="rounded-2xl border border-stone-300/70 bg-white/70 p-3.5 shadow-2xs backdrop-blur-xs">
              <span className="text-[11px] font-bold tracking-wider text-stone-500 uppercase">
                Chemistry
              </span>
              <p className="mt-0.5 text-sm font-bold text-stone-900 sm:text-base">
                Custom Formulations
              </p>
            </div>
            <div className="rounded-2xl border border-stone-300/70 bg-white/70 p-3.5 shadow-2xs backdrop-blur-xs">
              <span className="text-[11px] font-bold tracking-wider text-stone-500 uppercase">
                Compliance
              </span>
              <p className="mt-0.5 text-sm font-bold text-stone-900 sm:text-base">
                ZLD & Water Reuse
              </p>
            </div>
            <div className="rounded-2xl border border-stone-300/70 bg-white/70 p-3.5 shadow-2xs backdrop-blur-xs">
              <span className="text-[11px] font-bold tracking-wider text-stone-500 uppercase">
                Field Service
              </span>
              <p className="mt-0.5 text-sm font-bold text-stone-900 sm:text-base">
                24/7 Diagnostics
              </p>
            </div>
          </div>
        </section>

        {/* ================================================================ */}
        {/* SECTION 2: INTERACTIVE COMMAND SPOTLIGHT & SECTOR TILES          */}
        {/* ================================================================ */}
        <section aria-label="Interactive Industries Showcase">
          <IndustriesInteractiveShowcase data={data} />
        </section>

        {/* ================================================================ */}
        {/* SECTION 3: MINIMALIST DIRECT CONTACT FOOTER STRIP                */}
        {/* ================================================================ */}
        <section
          aria-label="Connect"
          className="flex flex-col items-center justify-between gap-6 border-t border-stone-300/80 pt-6 sm:flex-row"
        >
          <div className="flex items-center gap-3">
            <span
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-white shadow-sm"
              style={{ backgroundColor: COLOUR_PALETTE.primaryDark }}
            >
              <Droplets className="h-5 w-5" />
            </span>
            <div>
              <span className="block text-sm font-bold text-stone-900">
                Reflex Industrial Solutions
              </span>
              <span className="block text-xs text-stone-600">
                Specialty Water Chemistry • Turnkey Solutions • India
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={data.contact.phoneHref}
              className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white px-4 py-2 text-xs font-semibold text-stone-800 transition-colors hover:border-stone-400 sm:text-sm"
            >
              <Phone className="h-3.5 w-3.5 text-stone-500" />
              <span>{data.contact.phone}</span>
            </a>

            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full py-2 pr-3 pl-5 text-xs font-semibold text-white shadow-md transition-all duration-300 hover:shadow-lg active:scale-95 sm:text-sm"
              style={{ backgroundColor: COLOUR_PALETTE.primaryDark }}
            >
              <span>Contact Us</span>
              <span
                className="flex h-5 w-5 items-center justify-center rounded-full text-white transition-transform duration-300 group-hover:translate-x-0.5"
                style={{ backgroundColor: COLOUR_PALETTE.accent }}
              >
                <ArrowRight className="h-3 w-3" />
              </span>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
