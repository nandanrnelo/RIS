"use client";

import Image from "next/image";
import Link from "next/link";
import { Check, Phone, ArrowRight, ExternalLink } from "lucide-react";
import { COLOUR_PALETTE } from "@/constants/colour";
import { HOME_SERVICES_DATA } from "@/data/heroBannerData";

export default function HomeServicesSection() {
  return (
    <section
      id="services-section"
      aria-label="Industrial Services - Reflex Industrial Solutions"
      className="relative overflow-hidden pt-6 pb-16 sm:pt-10 sm:pb-20 lg:pt-12 lg:pb-24"
      style={{ backgroundColor: COLOUR_PALETTE.cream }}
    >
      {/* ==================================================================== */}
      {/* AMBIENT BACKGROUND GLOWS                                             */}
      {/* ==================================================================== */}
      <div
        className="pointer-events-none absolute -top-24 left-1/4 h-96 w-96 rounded-full opacity-20 blur-3xl"
        style={{ backgroundColor: COLOUR_PALETTE.secondary }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-10 bottom-10 h-96 w-96 rounded-full opacity-15 blur-3xl"
        style={{ backgroundColor: COLOUR_PALETTE.accent }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ================================================================ */}
        {/* MASTER ARCHITECTURAL CONTAINER (BALANCED 1:1 ENCLOSURE)          */}
        {/* ================================================================ */}
        <div
          className="rounded-[2.25rem] border border-stone-200/90 bg-white/95 p-6 shadow-2xl backdrop-blur-md sm:rounded-[2.75rem] sm:p-8 lg:p-12"
          style={{
            boxShadow: "0 25px 60px -15px rgba(26, 32, 16, 0.12)",
          }}
        >
          {/* Section Header */}
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
                {HOME_SERVICES_DATA.eyebrow}
              </span>
              <span
                className="h-[2px] w-8 rounded-full sm:w-12"
                style={{ backgroundColor: COLOUR_PALETTE.accent }}
                aria-hidden="true"
              />
            </div>

            {/* Stately Section Headline */}
            <h2 className="text-3xl leading-[1.2] font-extrabold tracking-tight text-[#1A2010] sm:text-4xl md:text-5xl">
              <span className="block text-[#1A2010]">
                {HOME_SERVICES_DATA.titleLine1}
              </span>
              <span
                className="mt-1 block sm:mt-1.5"
                style={{ color: COLOUR_PALETTE.primaryDark }}
              >
                {HOME_SERVICES_DATA.titleLine2}
              </span>
            </h2>

            {/* Subtitle */}
            <p className="mx-auto mt-3.5 max-w-2xl text-sm leading-relaxed font-normal text-stone-600 sm:text-base">
              {HOME_SERVICES_DATA.description}
            </p>
          </div>

          {/* ============================================================== */}
          {/* 2-COLUMN SPLIT: LEFT PHOTO ANCHOR + RIGHT 8-SERVICE CHECKLIST */}
          {/* ============================================================== */}
          <div className="mt-9 grid grid-cols-1 items-stretch gap-8 sm:mt-11 lg:grid-cols-12 lg:gap-10">
            {/* LEFT COLUMN: AUTHENTIC ENGINEER IMAGE (EQUAL HEIGHT) */}
            <div className="flex flex-col lg:col-span-5 xl:col-span-5">
              <div className="group relative h-full min-h-[380px] w-full overflow-hidden rounded-[1.75rem] border border-stone-200/80 bg-stone-900 shadow-md sm:min-h-[440px] sm:rounded-[2rem] lg:min-h-[490px]">
                <Image
                  src={HOME_SERVICES_DATA.image.src}
                  alt={HOME_SERVICES_DATA.image.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 520px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  priority
                />

                {/* Ambient overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30" />

                {/* Top-Left Live Beacon Pill */}
                <div className="absolute top-3 left-3 z-20 flex items-center gap-2 rounded-full border border-white/20 bg-black/60 px-3.5 py-1.5 text-white shadow-lg backdrop-blur-md sm:top-5 sm:left-5">
                  <span className="relative flex h-2 w-2" aria-hidden="true">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  </span>
                  <span className="text-xs font-semibold tracking-wide sm:text-sm">
                    {HOME_SERVICES_DATA.image.tag}
                  </span>
                </div>

                {/* Bottom Overlay Card: Hotline & Standards */}
                <div className="absolute inset-x-3 bottom-3 z-20 rounded-2xl border border-white/15 bg-black/65 p-3.5 text-white shadow-xl backdrop-blur-xl sm:inset-x-4 sm:bottom-4 sm:p-4">
                  <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
                    <div>
                      <span className="block text-[11px] font-bold tracking-widest text-amber-300 uppercase">
                        {HOME_SERVICES_DATA.image.caption}
                      </span>
                      <p className="mt-0.5 text-xs text-stone-200">
                        {HOME_SERVICES_DATA.image.phoneLabel}
                      </p>
                    </div>

                    <a
                      href={HOME_SERVICES_DATA.image.phoneHref}
                      className="inline-flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-xs font-bold text-[#1A2010] shadow-md transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
                      style={{ backgroundColor: COLOUR_PALETTE.cream }}
                    >
                      <span
                        className="flex h-5 w-5 items-center justify-center rounded-full text-white"
                        style={{ backgroundColor: COLOUR_PALETTE.primaryDark }}
                      >
                        <Phone className="h-3 w-3" />
                      </span>
                      <span>{HOME_SERVICES_DATA.image.phone}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: 8 STREAMLINED INDUSTRIAL SERVICES */}
            <div className="flex flex-col justify-between lg:col-span-7 xl:col-span-7">
              {/* Service Items List */}
              <div className="space-y-2 sm:space-y-2.5">
                {HOME_SERVICES_DATA.services.map((item) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    className="group flex items-center justify-between gap-3 rounded-xl border border-stone-200/70 bg-stone-50/70 p-2.5 transition-all duration-200 hover:translate-x-1 hover:border-stone-300 hover:bg-white hover:shadow-xs sm:p-3"
                  >
                    <div className="flex min-w-0 items-center gap-3">
                      {/* Checkmark Icon in Brand Olive Green */}
                      <span
                        className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg text-white transition-transform duration-200 group-hover:scale-105"
                        style={{ backgroundColor: COLOUR_PALETTE.primaryDark }}
                      >
                        <Check className="h-3.5 w-3.5 stroke-[2.5]" />
                      </span>

                      {/* Service Title & Concise Scope */}
                      <div className="min-w-0">
                        <span className="block text-sm leading-snug font-bold text-[#1A2010] transition-colors group-hover:text-amber-950 sm:text-[0.95rem]">
                          {item.title}
                        </span>
                        <span className="mt-0.5 hidden truncate text-xs text-stone-500 sm:block">
                          {item.scope}
                        </span>
                      </div>
                    </div>

                    {/* Sliding Arrow Indicator */}
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-stone-400 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-stone-900">
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </Link>
                ))}
              </div>

              {/* Bottom Action Buttons Row */}
              <div className="mt-5 flex flex-wrap items-center gap-3 border-t border-stone-200/80 pt-4">
                <Link
                  href={HOME_SERVICES_DATA.ctaHref}
                  className="group relative inline-flex items-center gap-2.5 rounded-full py-2.5 pr-3.5 pl-6 text-xs font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 sm:text-sm"
                  style={{
                    backgroundColor: COLOUR_PALETTE.primaryDark,
                  }}
                >
                  <span>{HOME_SERVICES_DATA.ctaText}</span>
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
                  href={HOME_SERVICES_DATA.secondaryCtaHref}
                  className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white/80 px-4 py-2.5 text-xs font-medium text-stone-700 transition-all duration-200 hover:border-stone-400 hover:bg-white active:scale-95 sm:text-sm"
                >
                  <span>{HOME_SERVICES_DATA.secondaryCtaText}</span>
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
