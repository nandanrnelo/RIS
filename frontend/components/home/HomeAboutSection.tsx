"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  ArrowRight,
  Droplets,
  Flame,
  ShieldCheck,
  Activity,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { COLOUR_PALETTE } from "@/constants/colour";
import { HOME_ABOUT_DATA, BusinessAreaCard } from "@/data/heroBannerData";

function getBusinessAreaIcon(type: BusinessAreaCard["iconType"]) {
  switch (type) {
    case "pre-treatment":
      return <Droplets className="h-5 w-5" />;
    case "boiler":
      return <Activity className="h-5 w-5" />;
    case "fuel":
      return <Flame className="h-5 w-5" />;
    case "cooling":
      return <ShieldCheck className="h-5 w-5" />;
    default:
      return <CheckCircle2 className="h-5 w-5" />;
  }
}

export default function HomeAboutSection() {
  return (
    <section
      id="about-section"
      aria-label="About Reflex Industrial Solutions"
      className="relative overflow-hidden pt-4 pb-16 sm:pt-6 sm:pb-20 lg:pt-8 lg:pb-24"
      style={{ backgroundColor: COLOUR_PALETTE.cream }}
    >
      {/* ==================================================================== */}
      {/* AMBIENT BACKGROUND GLOWS & TEXTURES                                  */}
      {/* ==================================================================== */}
      <div
        className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full opacity-35 blur-3xl"
        style={{ backgroundColor: COLOUR_PALETTE.secondary }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-10 bottom-0 h-96 w-96 rounded-full opacity-20 blur-3xl"
        style={{ backgroundColor: COLOUR_PALETTE.accent }}
        aria-hidden="true"
      />

      {/* Decorative Dot Matrix: Top Left */}
      <div
        className="pointer-events-none absolute top-6 left-6 h-36 w-36 opacity-65 select-none sm:top-10 sm:left-12 lg:left-16"
        aria-hidden="true"
      >
        <Image
          src={HOME_ABOUT_DATA.images.dotPatternTop}
          alt=""
          width={144}
          height={144}
          className="object-contain"
        />
      </div>

      {/* Decorative Dot Matrix: Center Partition */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 z-0 h-32 w-32 -translate-x-1/2 -translate-y-1/2 opacity-75 select-none lg:left-[47%]"
        aria-hidden="true"
      >
        <Image
          src={HOME_ABOUT_DATA.images.dotPatternCenter}
          alt=""
          width={128}
          height={128}
          className="object-contain"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-12 xl:gap-16">
          {/* ================================================================ */}
          {/* LEFT CONTENT COLUMN: STORY, VALUE & CAPABILITIES                 */}
          {/* ================================================================ */}
          <div className="lg:col-span-6 xl:col-span-6">
            {/* Eyebrow Pill Tag with Live Gold Beacon */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-stone-200/90 bg-white/80 px-4 py-1.5 shadow-xs backdrop-blur-md">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span
                  className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
                  style={{ backgroundColor: COLOUR_PALETTE.accent }}
                />
                <span
                  className="relative inline-flex h-2 w-2 rounded-full"
                  style={{ backgroundColor: COLOUR_PALETTE.accent }}
                />
              </span>
              <span
                className="text-xs font-bold tracking-widest uppercase"
                style={{ color: COLOUR_PALETTE.primaryDark }}
              >
                {HOME_ABOUT_DATA.eyebrowBadge.tag}
              </span>
              <span className="text-xs font-medium text-stone-400">/</span>
              <span className="text-xs font-semibold text-stone-700">
                {HOME_ABOUT_DATA.eyebrowBadge.label}
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="mt-5 text-3xl leading-[1.14] font-extrabold tracking-tight text-[#1A2010] sm:text-4xl md:text-5xl lg:text-[2.85rem]">
              Engineering Reliable{" "}
              <span
                className="relative inline-block"
                style={{ color: COLOUR_PALETTE.primaryDark }}
              >
                Water Solutions
                <svg
                  className="absolute -bottom-1 left-0 h-2 w-full text-current opacity-30"
                  viewBox="0 0 100 8"
                  preserveAspectRatio="none"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M0 4C30 1 70 7 100 4"
                    stroke={COLOUR_PALETTE.accent}
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{" "}
              for Heavy Industry
            </h2>

            {/* Narrative Body Paragraph */}
            <p className="mt-5 text-base leading-relaxed font-normal text-stone-700/90 sm:text-lg">
              {HOME_ABOUT_DATA.description}
            </p>

            {/* Actions: Primary Read More & Secondary CTA */}
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href={HOME_ABOUT_DATA.ctaHref}
                className="group relative inline-flex items-center gap-3 rounded-full py-3.5 pr-4 pl-7 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0 sm:text-base"
                style={{
                  backgroundColor: COLOUR_PALETTE.primaryDark,
                }}
              >
                <span>{HOME_ABOUT_DATA.ctaText}</span>
                <span
                  className="flex h-8 w-8 items-center justify-center rounded-full text-white transition-transform duration-300 group-hover:translate-x-1"
                  style={{
                    backgroundColor: COLOUR_PALETTE.accent,
                  }}
                >
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </div>
          </div>

          {/* ================================================================ */}
          {/* RIGHT VISUAL COLUMN: ARCHITECTURAL FRAME & TELEMETRY             */}
          {/* ================================================================ */}
          <div className="lg:col-span-6 xl:col-span-6">
            <div className="relative mx-auto w-full max-w-[560px] lg:mr-0 lg:ml-auto">
              {/* Outer Double-Bezel Architectural Shell */}
              <div
                className="hover:shadow-3xl relative rounded-[2.5rem] border border-stone-200/90 bg-white/95 p-3 shadow-2xl backdrop-blur-md transition-all duration-500 sm:p-4"
                style={{
                  boxShadow: "0 25px 60px -15px rgba(26, 32, 16, 0.18)",
                }}
              >
                {/* Inner Image Viewport */}
                <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] bg-stone-900 sm:aspect-[16/12] lg:aspect-[4/3]">
                  <Image
                    src={HOME_ABOUT_DATA.images.hero.src}
                    alt={HOME_ABOUT_DATA.images.hero.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 560px"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    priority
                  />

                  {/* Top specular reflection and subtle gradient vignette */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />

                  {/* Top-Left: Live Field Operations Status Pill */}
                  <div className="absolute top-4 left-4 z-20 flex items-center gap-2 rounded-full border border-white/25 bg-black/65 px-3.5 py-1.5 text-white shadow-lg backdrop-blur-md">
                    <span className="relative flex h-2 w-2" aria-hidden="true">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                    </span>
                    <span className="text-xs font-semibold tracking-wide">
                      {HOME_ABOUT_DATA.telemetry.liveStatus}
                    </span>
                  </div>

                  {/* Top-Right: ISO 9001:2015 Certification Tag */}
                  <div className="absolute top-4 right-4 z-20 flex items-center gap-2 rounded-full border border-stone-200/60 bg-white/95 px-3.5 py-1.5 shadow-lg backdrop-blur-md">
                    <Sparkles
                      className="h-3.5 w-3.5"
                      style={{ color: COLOUR_PALETTE.accent }}
                    />
                    <span
                      className="text-xs font-bold tracking-tight"
                      style={{ color: COLOUR_PALETTE.primaryDark }}
                    >
                      {HOME_ABOUT_DATA.telemetry.certificationBadge}
                    </span>
                  </div>

                  {/* Bottom: Integrated Telemetry & Hotline Bar */}
                  <div className="absolute inset-x-3 bottom-3 z-20 flex items-center justify-between gap-3 rounded-2xl border border-stone-200/80 bg-white/95 p-3 shadow-xl backdrop-blur-xl sm:inset-x-4 sm:bottom-4 sm:p-4">
                    {/* Left: Direct Hotline with active phone badge */}
                    <div className="flex items-center gap-3">
                      <div
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 hover:rotate-6 sm:h-11 sm:w-11"
                        style={{
                          backgroundColor: `${COLOUR_PALETTE.secondary}50`,
                          color: COLOUR_PALETTE.primaryDark,
                        }}
                      >
                        <Phone className="h-5 w-5" />
                      </div>
                      <div className="flex flex-col">
                        <span
                          className="text-[11px] font-bold tracking-wider uppercase"
                          style={{ color: COLOUR_PALETTE.primaryDark }}
                        >
                          {HOME_ABOUT_DATA.telemetry.hotlineLabel}
                        </span>
                        <a
                          href={HOME_ABOUT_DATA.telemetry.phoneHref}
                          className="text-sm font-extrabold tracking-tight text-stone-900 transition-colors duration-200 hover:text-amber-800 sm:text-base"
                        >
                          {HOME_ABOUT_DATA.telemetry.phone}
                        </a>
                      </div>
                    </div>

                    {/* Center Divider */}
                    <div className="hidden h-8 w-px bg-stone-200 sm:block" />

                    {/* Right: Process Reliability Stat Pill */}
                    <div className="hidden flex-col items-end sm:flex">
                      <span
                        className="text-sm font-extrabold tracking-tight sm:text-base"
                        style={{ color: COLOUR_PALETTE.primaryDark }}
                      >
                        {HOME_ABOUT_DATA.telemetry.metricValue}
                      </span>
                      <span className="text-[10px] font-semibold tracking-wide text-stone-500 uppercase">
                        {HOME_ABOUT_DATA.telemetry.metricLabel}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
