import type { Metadata } from "next";
import Link from "next/link";
import {
  ChevronRight,
  Home,
  ShieldCheck,
  Phone,
  ArrowRight,
  Award,
} from "lucide-react";
import { COLOUR_PALETTE } from "@/constants/colour";
import { QUALITY_PAGE_DATA } from "@/data/qualityPageData";
import { QualityInteractiveShowcase } from "@/components/quality/QualityInteractiveShowcase";

export const metadata: Metadata = {
  title: "Quality Policy & Assurance | Reflex Industrial Solutions",
  description:
    "Zero-defect quality governance across 100% raw material verification, production SOP adherence, finished product analytics, and certified batch COA documentation.",
  openGraph: {
    title: "Quality Policy & Assurance | Reflex Industrial Solutions",
    description:
      "Zero-defect quality governance and analytical testing laboratory protocols across all industrial chemical operations.",
    type: "website",
    url: "/quality",
  },
};

export default function QualityPage() {
  const data = QUALITY_PAGE_DATA;

  return (
    <main
      className="relative min-h-screen pt-28 pb-24 sm:pt-32 sm:pb-28 lg:pt-36 lg:pb-32"
      style={{ backgroundColor: COLOUR_PALETTE.cream }}
    >
      {/* Ambient warm background glows */}
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
        <section aria-label="Quality Header" className="space-y-6">
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
              Quality Policy
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
                {data.companyName} • Quality Policy
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
            {data.headline}
          </h1>

          {/* Lead Narrative */}
          <p className="max-w-3xl text-left text-base leading-relaxed font-normal text-stone-700 sm:text-lg">
            {data.leadParagraph}
          </p>

          {/* 4-Pillar Quality KPI Bar */}
          <div className="grid max-w-4xl grid-cols-2 gap-3 pt-2 sm:grid-cols-4">
            {data.kpis.map((kpi, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-stone-300/70 bg-white/70 p-3.5 shadow-2xs backdrop-blur-xs"
              >
                <span className="text-[11px] font-bold tracking-wider text-stone-500 uppercase">
                  {kpi.label}
                </span>
                <p className="mt-0.5 text-lg font-extrabold text-stone-900 sm:text-xl">
                  {kpi.value}
                </p>
                <p className="mt-1 text-[11px] leading-tight text-stone-500">
                  {kpi.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ================================================================ */}
        {/* SECTION 2: INTERACTIVE QUALITY LIFECYCLE & DIRECTIVES SHOWCASE   */}
        {/* ================================================================ */}
        <section aria-label="Quality Lifecycle and Directives">
          <QualityInteractiveShowcase data={data} />
        </section>
      </div>
    </main>
  );
}
