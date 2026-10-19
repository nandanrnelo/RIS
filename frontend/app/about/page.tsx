import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  ChevronRight,
  Home,
  ArrowRight,
  ShieldCheck,
  Droplets,
} from "lucide-react";
import { COLOUR_PALETTE } from "@/constants/colour";
import { ABOUT_PAGE_DATA } from "@/data/aboutPageData";

export const metadata: Metadata = {
  title: "About Us | Reflex Industrial Solutions - Industrial Water Management",
  description:
    "We are Reflex Industrial Solutions. An elite industrial water management agency catering to water challenges across heavy process industries with over 100 years of combined team leadership.",
  openGraph: {
    title: "About Us | Reflex Industrial Solutions",
    description:
      "Promoted and managed by water treatment professionals with over 100 years of combined experience in industrial water management.",
    type: "website",
    url: "/about",
  },
};

export default function AboutPage() {
  const data = ABOUT_PAGE_DATA;
  const [ch1, ch2, ch3] = data.chapters;

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

      <div className="relative z-10 mx-auto max-w-6xl space-y-16 px-4 sm:space-y-20 sm:px-6 lg:space-y-24 lg:px-8">
        {/* ================================================================ */}
        {/* SECTION 1: EDITORIAL MASTHEAD                                    */}
        {/* ================================================================ */}
        <section aria-label="Editorial Header" className="space-y-6">
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
              Corporate Profile
            </span>
          </nav>

          {/* Symmetrical Flanked Eyebrow */}
          <div className="flex items-center gap-3">
            <span
              className="h-[2px] w-10 rounded-full"
              style={{ backgroundColor: COLOUR_PALETTE.accent }}
              aria-hidden="true"
            />
            <span
              className="text-xs font-bold tracking-[0.25em] uppercase sm:text-sm"
              style={{ color: COLOUR_PALETTE.primaryDark }}
            >
              {data.companyName}
            </span>
          </div>

          {/* Headline (Left-aligned, crisp, natural tracking) */}
          <h1 className="text-left text-4xl leading-[1.1] font-extrabold tracking-tight text-[#1A2010] sm:text-5xl lg:text-6xl">
            <span>{data.headlineLine1}</span>
            <span
              className="mt-1 block sm:mt-2"
              style={{ color: COLOUR_PALETTE.primaryDark }}
            >
              {data.headlineLine2}
            </span>
          </h1>

          {/* Spacious Lead Narrative (Comfortable width, clean justification, no gaping holes) */}
          <p className="max-w-4xl text-left text-base leading-relaxed font-normal hyphens-auto text-stone-700 [text-align-last:left] [text-justify:inter-word] sm:text-justify sm:text-lg">
            {data.leadParagraph}
          </p>
        </section>

        {/* ================================================================ */}
        {/* SECTION 2: CINEMATIC INDUSTRIAL VISUAL VIGNETTE                  */}
        {/* ================================================================ */}
        <section
          aria-label="Field Operations"
          className="relative overflow-hidden rounded-[2rem] border border-stone-300/80 bg-stone-900 shadow-2xl sm:rounded-[2.5rem]"
        >
          <div className="relative h-[340px] w-full sm:h-[420px] lg:h-[480px]">
            <Image
              src={data.image.src}
              alt={data.image.alt}
              fill
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="object-cover object-center"
              priority
            />

            {/* Ambient vignette gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/20" />

            {/* Top-Left Live Field Beacon */}
            <div className="absolute top-4 left-4 z-20 flex items-center gap-2 rounded-full border border-white/20 bg-black/60 px-4 py-1.5 text-white shadow-lg backdrop-blur-md sm:top-6 sm:left-6">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="text-xs font-semibold tracking-wide sm:text-sm">
                Active Industrial Water Operations
              </span>
            </div>

            {/* Top-Right ISO Badge */}
            <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 rounded-full border border-white/20 bg-black/60 px-3.5 py-1.5 text-amber-300 shadow-lg backdrop-blur-md sm:top-6 sm:right-6">
              <ShieldCheck className="h-4 w-4" />
              <span className="text-xs font-bold tracking-wider uppercase">
                ISO 9001:2015
              </span>
            </div>

            {/* Inset Secondary Operational Clarifier View */}
            <div className="absolute right-6 bottom-6 hidden items-center gap-3 rounded-2xl border border-white/20 bg-black/75 p-2.5 text-white shadow-2xl backdrop-blur-xl sm:flex">
              <div className="relative h-16 w-20 overflow-hidden rounded-xl">
                <Image
                  src={data.image.insetVideoSrc}
                  alt="Industrial clarifier weir"
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </div>
              <div className="pr-3">
                <span className="block text-[11px] font-bold tracking-wider text-amber-300 uppercase">
                  Process Facility
                </span>
                <span className="text-xs text-stone-300">
                  Total Clarification Systems
                </span>
              </div>
            </div>

            {/* Bottom-Left Direct Technical Hotline Bar */}
            <div className="absolute bottom-4 left-4 z-20 flex flex-wrap items-center gap-3 sm:bottom-6 sm:left-6">
              <a
                href={data.image.phoneHref}
                className="group inline-flex items-center gap-3 rounded-full bg-white px-5 py-2.5 text-xs font-bold text-stone-900 shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-95 sm:text-sm"
              >
                <span
                  className="flex h-7 w-7 items-center justify-center rounded-full text-white"
                  style={{ backgroundColor: COLOUR_PALETTE.primaryDark }}
                >
                  <Phone className="h-3.5 w-3.5" />
                </span>
                <span>
                  {data.image.phoneLabel}: {data.image.phone}
                </span>
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-black/50 px-4 py-2.5 text-xs font-semibold text-white backdrop-blur-md transition-all duration-200 hover:bg-black/70 sm:text-sm"
              >
                <span>Request Plant Survey</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* ================================================================ */}
        {/* SECTION 3: CHAPTER 01 - CORPORATE SCOPE & LEADERSHIP             */}
        {/* ================================================================ */}
        <section
          aria-label="Corporate Scope and Leadership"
          className="space-y-6 border-t border-stone-300/80 pt-10 sm:pt-14"
        >
          {/* Chapter Eyebrow & Title */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-stone-500 uppercase">
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: COLOUR_PALETTE.accent }}
              />
              <span>
                {ch1.chapterNumber} / {ch1.tagline}
              </span>
            </div>
            <h2 className="text-left text-2xl font-extrabold tracking-tight text-[#1A2010] sm:text-3xl lg:text-4xl">
              {ch1.title}
            </h2>
          </div>

          {/* Balanced 2-Column Editorial Grid with Pristine Justification */}
          <div className="grid grid-cols-1 items-start gap-8 text-sm leading-relaxed font-normal text-stone-700 sm:text-base md:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <p className="text-justify hyphens-auto [text-align-last:left] [text-justify:inter-word]">
                {ch1.paragraphs[0]}
              </p>
              <p className="text-justify hyphens-auto [text-align-last:left] [text-justify:inter-word]">
                {ch1.paragraphs[1]}
              </p>
            </div>
            <div className="space-y-4">
              <p className="text-justify hyphens-auto [text-align-last:left] [text-justify:inter-word]">
                {ch1.paragraphs[2]}
              </p>
              <p className="text-justify hyphens-auto [text-align-last:left] [text-justify:inter-word]">
                {ch1.paragraphs[3]}
              </p>
            </div>
          </div>
        </section>

        {/* ================================================================ */}
        {/* SECTION 4: CHAPTER 02 - HERITAGE & STRATEGIC INFRASTRUCTURE      */}
        {/* ================================================================ */}
        <section
          aria-label="Heritage and Strategic Infrastructure"
          className="space-y-6 border-t border-stone-300/80 pt-10 sm:pt-14"
        >
          {/* Chapter Eyebrow & Title */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-stone-500 uppercase">
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: COLOUR_PALETTE.primaryDark }}
              />
              <span>
                {ch2.chapterNumber} / {ch2.tagline}
              </span>
            </div>
            <h2 className="text-left text-2xl font-extrabold tracking-tight text-[#1A2010] sm:text-3xl lg:text-4xl">
              {ch2.title}
            </h2>
          </div>

          {/* Balanced 2-Column Editorial Grid */}
          <div className="grid grid-cols-1 items-start gap-8 text-sm leading-relaxed font-normal text-stone-700 sm:text-base md:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <p className="text-justify hyphens-auto [text-align-last:left] [text-justify:inter-word]">
                {ch2.paragraphs[0]}
              </p>
              <p className="text-justify hyphens-auto [text-align-last:left] [text-justify:inter-word]">
                {ch2.paragraphs[1]}
              </p>
            </div>

            <div className="space-y-5">
              <p className="text-justify hyphens-auto [text-align-last:left] [text-justify:inter-word]">
                {ch2.paragraphs[2]}
              </p>

              {ch2.quote && (
                <div
                  className="rounded-2xl border-l-4 p-5 shadow-sm"
                  style={{
                    backgroundColor: "rgba(216, 201, 168, 0.28)",
                    borderLeftColor: COLOUR_PALETTE.accent,
                  }}
                >
                  <p className="text-left text-xs leading-relaxed font-semibold text-stone-900 sm:text-sm">
                    &ldquo;{ch2.quote}&rdquo;
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ================================================================ */}
        {/* SECTION 5: CHAPTER 03 - THE OFFERINGS & ENVIRONMENTAL MANDATE     */}
        {/* ================================================================ */}
        <section
          aria-label="The Offerings and Environmental Mandate"
          className="space-y-6 border-t border-b border-stone-300/80 py-10 sm:py-14"
        >
          {/* Chapter Eyebrow & Title */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-stone-500 uppercase">
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: COLOUR_PALETTE.accent }}
              />
              <span>
                {ch3.chapterNumber} / {ch3.tagline}
              </span>
            </div>
            <h2 className="text-left text-2xl font-extrabold tracking-tight text-[#1A2010] sm:text-3xl lg:text-4xl">
              <span>The </span>
              <span style={{ color: COLOUR_PALETTE.accent }}>Offerings</span>
              <span> & Environmental Responsibility</span>
            </h2>
          </div>

          {/* Balanced 2-Column Editorial Grid */}
          <div className="grid grid-cols-1 items-start gap-8 text-sm leading-relaxed font-normal text-stone-700 sm:text-base md:grid-cols-2 lg:gap-12">
            <div>
              <p className="text-justify hyphens-auto [text-align-last:left] [text-justify:inter-word]">
                {ch3.paragraphs[0]}
              </p>
            </div>
            <div className="space-y-5">
              <p className="text-justify hyphens-auto [text-align-last:left] [text-justify:inter-word]">
                {ch3.paragraphs[1]}
              </p>
              <p
                className="pt-2 text-left text-base font-bold sm:text-lg"
                style={{ color: COLOUR_PALETTE.primaryDark }}
              >
                {data.closingStatement}
              </p>
            </div>
          </div>
        </section>

        {/* ================================================================ */}
        {/* SECTION 6: MINIMALIST DIRECT CONTACT FOOTER STRIP                */}
        {/* ================================================================ */}
        <section
          aria-label="Connect"
          className="flex flex-col items-center justify-between gap-6 pt-2 sm:flex-row"
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
              href={data.image.phoneHref}
              className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white px-4 py-2 text-xs font-semibold text-stone-800 transition-colors hover:border-stone-400 sm:text-sm"
            >
              <Phone className="h-3.5 w-3.5 text-stone-500" />
              <span>{data.image.phone}</span>
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
