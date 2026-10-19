"use client";

import Link from "next/link";
import {
  Check,
  ShieldCheck,
  FileCheck,
  Award,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { COLOUR_PALETTE } from "@/constants/colour";
import { HOME_QUALITY_DATA } from "@/data/heroBannerData";

export default function HomeQualitySection() {
  return (
    <section
      id="quality-section"
      aria-label="Quality Policy - Reflex Industrial Solutions"
      className="relative overflow-hidden pt-6 pb-16 sm:pt-10 sm:pb-20 lg:pt-12 lg:pb-24"
      style={{ backgroundColor: COLOUR_PALETTE.cream }}
    >
      {/* Ambient warm lighting behind the card */}
      <div
        className="pointer-events-none absolute -top-20 right-1/4 h-80 w-80 rounded-full opacity-25 blur-3xl"
        style={{ backgroundColor: COLOUR_PALETTE.secondary }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-10 left-10 h-72 w-72 rounded-full opacity-20 blur-3xl"
        style={{ backgroundColor: COLOUR_PALETTE.accent }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ================================================================ */}
        {/* LIGHT ARCHITECTURAL POLICY BOARD (CLEAN, BRIGHT, ZERO DARK MODE) */}
        {/* ================================================================ */}
        <div
          className="rounded-[2.25rem] border border-stone-200/90 bg-white/95 p-6 shadow-xl backdrop-blur-md sm:rounded-[2.75rem] sm:p-10 lg:p-14"
          style={{
            boxShadow: "0 20px 50px -15px rgba(26, 32, 16, 0.08)",
          }}
        >
          {/* ============================================================ */}
          {/* HEADER SECTION                                               */}
          {/* ============================================================ */}
          <div className="mx-auto max-w-3xl text-center">
            {/* Symmetrical Flanked Eyebrow */}
            <div className="mb-3 flex items-center justify-center gap-3 sm:gap-4">
              <span
                className="h-[2px] w-8 rounded-full sm:w-12"
                style={{ backgroundColor: COLOUR_PALETTE.accent }}
                aria-hidden="true"
              />
              <span
                className="text-xs font-bold tracking-[0.22em] uppercase sm:text-sm"
                style={{ color: COLOUR_PALETTE.primaryDark }}
              >
                {HOME_QUALITY_DATA.eyebrow}
              </span>
              <span
                className="h-[2px] w-8 rounded-full sm:w-12"
                style={{ backgroundColor: COLOUR_PALETTE.accent }}
                aria-hidden="true"
              />
            </div>

            {/* Stately Title */}
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1A2010] sm:text-4xl md:text-5xl">
              {HOME_QUALITY_DATA.title}
            </h2>

            {/* Short & Clean Narrative Intro */}
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed font-normal text-stone-600 sm:text-base">
              {HOME_QUALITY_DATA.intro}
            </p>
          </div>

          {/* ============================================================ */}
          {/* 8 QUALITY POLICY DIRECTIVES (SYMMETRICAL 2-COLUMN LIGHT GRID) */}
          {/* ============================================================ */}
          <div className="mt-10 grid grid-cols-1 gap-3.5 sm:mt-12 sm:gap-4 md:grid-cols-2">
            {HOME_QUALITY_DATA.policyPoints.map((item) => (
              <div
                key={item.id}
                className="group flex items-start gap-3.5 rounded-2xl border border-stone-200/80 bg-stone-50/70 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-amber-400/60 hover:bg-white hover:shadow-md sm:p-4.5"
              >
                {/* Checkmark Badge in Brand Olive Green */}
                <span
                  className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-xl text-white shadow-sm transition-transform duration-200 group-hover:scale-105"
                  style={{ backgroundColor: COLOUR_PALETTE.primaryDark }}
                >
                  <Check className="h-4 w-4 stroke-[2.5]" />
                </span>

                {/* Point Number & Direct Policy Statement */}
                <div className="min-w-0 flex-1">
                  <div className="mb-1 flex items-center gap-2">
                    <span
                      className="text-[11px] font-bold tracking-wider uppercase"
                      style={{ color: COLOUR_PALETTE.accent }}
                    >
                      Rule {item.number}
                    </span>
                    <span className="h-1 w-1 rounded-full bg-stone-300" />
                    <span className="text-[11px] font-semibold tracking-wider text-stone-500 uppercase">
                      Standard
                    </span>
                  </div>
                  <p className="text-xs leading-relaxed font-medium text-stone-800 transition-colors group-hover:text-stone-950 sm:text-sm">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* ============================================================ */}
          {/* BOTTOM GUARANTEE RIBBON & TRUST ASSURANCES                   */}
          {/* ============================================================ */}
          <div className="mt-10 rounded-2xl border border-stone-200/80 bg-[#FAF7F2] p-4 sm:mt-12 sm:p-6">
            <div className="flex flex-col items-center justify-between gap-5 lg:flex-row">
              {/* Trust Badges */}
              <div className="grid w-full grid-cols-1 gap-4 text-center sm:grid-cols-3 sm:text-left lg:w-auto">
                <div className="flex items-center gap-3">
                  <span
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-white"
                    style={{ backgroundColor: COLOUR_PALETTE.primaryDark }}
                  >
                    <FileCheck className="h-4.5 w-4.5" />
                  </span>
                  <div>
                    <span className="block text-xs font-bold text-stone-900">
                      100% Certificate of Quality
                    </span>
                    <span className="block text-[11px] text-stone-500">
                      Every single consignment
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-white"
                    style={{ backgroundColor: COLOUR_PALETTE.primaryDark }}
                  >
                    <ShieldCheck className="h-4.5 w-4.5" />
                  </span>
                  <div>
                    <span className="block text-xs font-bold text-stone-900">
                      Zero-Defect Standard
                    </span>
                    <span className="block text-[11px] text-stone-500">
                      Production Manual SOPs
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-white"
                    style={{ backgroundColor: COLOUR_PALETTE.primaryDark }}
                  >
                    <Award className="h-4.5 w-4.5" />
                  </span>
                  <div>
                    <span className="block text-xs font-bold text-stone-900">
                      Retained Batch Archive
                    </span>
                    <span className="block text-[11px] text-stone-500">
                      Sample audit traceability
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex shrink-0 flex-wrap items-center justify-center gap-3">
                <Link
                  href={HOME_QUALITY_DATA.ctaHref}
                  className="group relative inline-flex items-center gap-2.5 rounded-full py-2.5 pr-3.5 pl-6 text-xs font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 sm:text-sm"
                  style={{
                    backgroundColor: COLOUR_PALETTE.primaryDark,
                  }}
                >
                  <span>{HOME_QUALITY_DATA.ctaText}</span>
                  <span
                    className="flex h-6 w-6 items-center justify-center rounded-full text-white transition-transform duration-300 group-hover:translate-x-0.5"
                    style={{
                      backgroundColor: COLOUR_PALETTE.accent,
                    }}
                  >
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </Link>

                <Link
                  href={HOME_QUALITY_DATA.secondaryCtaHref}
                  className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white px-4 py-2.5 text-xs font-medium text-stone-700 transition-all duration-200 hover:border-stone-400 hover:text-stone-900 active:scale-95 sm:text-sm"
                >
                  <span>{HOME_QUALITY_DATA.secondaryCtaText}</span>
                  <ExternalLink className="h-3.5 w-3.5 text-stone-500" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
