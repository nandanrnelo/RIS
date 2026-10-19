"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Flame,
  ShieldCheck,
  Droplets,
  Filter,
  Sparkles,
  Cpu,
  Layers,
  Gauge,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { COLOUR_PALETTE } from "@/constants/colour";
import { HOME_PRODUCTS_DATA, ProductItem } from "@/data/heroBannerData";

function getProductIcon(iconType: ProductItem["iconType"]) {
  switch (iconType) {
    case "boiler-water":
      return <Gauge className="h-5 w-5" />;
    case "fuel-fireside":
      return <Flame className="h-5 w-5" />;
    case "cooling-water":
      return <ShieldCheck className="h-5 w-5" />;
    case "raw-waste":
      return <Droplets className="h-5 w-5" />;
    case "ro-membrane":
      return <Filter className="h-5 w-5" />;
    case "speciality":
      return <Sparkles className="h-5 w-5" />;
    case "equipment":
      return <Cpu className="h-5 w-5" />;
    case "boiler-feed":
      return <Layers className="h-5 w-5" />;
    default:
      return <Droplets className="h-5 w-5" />;
  }
}

export default function HomeProductsSection() {
  return (
    <section
      id="products-section"
      aria-label="Engineered Products - Reflex Industrial Solutions"
      className="relative overflow-hidden pt-8 pb-16 sm:pt-12 sm:pb-20 lg:pt-14 lg:pb-24"
      style={{ backgroundColor: COLOUR_PALETTE.cream }}
    >
      {/* ==================================================================== */}
      {/* AMBIENT BACKGROUND GLOWS & TEXTURES                                  */}
      {/* ==================================================================== */}
      <div
        className="pointer-events-none absolute top-1/4 -right-24 h-96 w-96 rounded-full opacity-25 blur-3xl"
        style={{ backgroundColor: COLOUR_PALETTE.secondary }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-10 -left-20 h-96 w-96 rounded-full opacity-20 blur-3xl"
        style={{ backgroundColor: COLOUR_PALETTE.accent }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ================================================================ */}
        {/* SECTION HEADER: SYMMETRICAL EYEBROW & BALANCED HEADLINE          */}
        {/* ================================================================ */}
        <div className="mx-auto max-w-4xl text-center">
          {/* Eyebrow with Symmetrical Accent Flanks */}
          <div className="mb-3 flex items-center justify-center gap-3 sm:mb-4 sm:gap-4">
            <span
              className="h-[2px] w-8 rounded-full sm:w-12"
              style={{ backgroundColor: COLOUR_PALETTE.accent }}
              aria-hidden="true"
            />
            <span
              className="text-xs font-bold tracking-[0.22em] uppercase sm:text-sm"
              style={{ color: COLOUR_PALETTE.primaryDark }}
            >
              {HOME_PRODUCTS_DATA.eyebrow}
            </span>
            <span
              className="h-[2px] w-8 rounded-full sm:w-12"
              style={{ backgroundColor: COLOUR_PALETTE.accent }}
              aria-hidden="true"
            />
          </div>

          {/* Stately Section Headline: Perfectly Balanced 2-Line Hierarchy */}
          <h2 className="text-3xl leading-[1.2] font-extrabold tracking-tight text-[#1A2010] sm:text-4xl md:text-5xl lg:text-[2.65rem]">
            <span className="block text-[#1A2010]">
              {HOME_PRODUCTS_DATA.titleLine1}
            </span>
            <span
              className="mt-1 block sm:mt-1.5"
              style={{ color: COLOUR_PALETTE.primaryDark }}
            >
              {HOME_PRODUCTS_DATA.titleLine2}
            </span>
          </h2>

          {/* Symmetrical Description Paragraph */}
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed font-normal text-stone-600 sm:mt-5 sm:text-lg">
            {HOME_PRODUCTS_DATA.description}
          </p>
        </div>

        {/* ================================================================ */}
        {/* CINEMATIC INDUSTRIAL FACILITY HERO BANNER                        */}
        {/* ================================================================ */}
        <div className="mt-10 sm:mt-12">
          <div
            className="group hover:shadow-3xl relative rounded-[2rem] border border-stone-200/90 bg-white/90 p-2.5 shadow-2xl backdrop-blur-md transition-all duration-500 sm:rounded-[2.5rem] sm:p-3.5"
            style={{
              boxShadow: "0 25px 60px -15px rgba(26, 32, 16, 0.16)",
            }}
          >
            <div className="relative aspect-[16/7] w-full overflow-hidden rounded-[1.5rem] bg-stone-900 sm:aspect-[21/9] sm:rounded-[2rem]">
              <Image
                src={HOME_PRODUCTS_DATA.image.src}
                alt={HOME_PRODUCTS_DATA.image.alt}
                fill
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                priority
              />

              {/* Gradient overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-black/30" />

              {/* Top-Left Telemetry Pill */}
              <div className="absolute top-3 left-3 z-20 flex items-center gap-2 rounded-full border border-white/20 bg-black/60 px-3.5 py-1.5 text-white shadow-lg backdrop-blur-md sm:top-5 sm:left-5">
                <span className="relative flex h-2 w-2" aria-hidden="true">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                <span className="text-xs font-semibold tracking-wide sm:text-sm">
                  {HOME_PRODUCTS_DATA.image.tag}
                </span>
              </div>

              {/* Bottom Inset Caption */}
              <div className="border-stone-150 absolute bottom-3 left-3 z-20 max-w-md rounded-xl border bg-white/95 px-3.5 py-2 shadow-lg backdrop-blur-md sm:bottom-5 sm:left-5">
                <span
                  className="block text-xs font-bold tracking-tight sm:text-sm"
                  style={{ color: COLOUR_PALETTE.primaryDark }}
                >
                  {HOME_PRODUCTS_DATA.image.caption}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ================================================================ */}
        {/* 8 BENTO PRODUCT CARDS GRID                                       */}
        {/* ================================================================ */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {HOME_PRODUCTS_DATA.products.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="group relative flex flex-col justify-between rounded-2xl border border-stone-200/80 bg-white/80 p-5 shadow-xs backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-stone-300 hover:bg-white hover:shadow-xl"
            >
              {/* Top Metadata: Step Number, Icon & Popular Badge */}
              <div>
                <div className="flex items-center justify-between">
                  {/* Step & Icon */}
                  <div className="flex items-center gap-2.5">
                    <div
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
                      style={{
                        backgroundColor: `${COLOUR_PALETTE.secondary}45`,
                        color: COLOUR_PALETTE.primaryDark,
                      }}
                    >
                      {getProductIcon(item.iconType)}
                    </div>
                    <span className="font-mono text-xs font-bold text-stone-400">
                      {item.stepNumber}
                    </span>
                  </div>

                  {/* Optional Popular Pill */}
                  {item.popularBadge && (
                    <span
                      className="rounded-full px-2.5 py-0.5 text-[10px] font-bold tracking-wider text-white uppercase shadow-xs"
                      style={{ backgroundColor: COLOUR_PALETTE.accent }}
                    >
                      {item.popularBadge}
                    </span>
                  )}
                </div>

                {/* Product Title */}
                <h3
                  className="mt-4 text-base font-bold tracking-tight transition-colors duration-200 group-hover:text-amber-900 sm:text-lg"
                  style={{ color: COLOUR_PALETTE.primaryDark }}
                >
                  {item.title}
                </h3>

                {/* Subtitle / Tagline */}
                <p className="mt-0.5 text-xs font-semibold tracking-wider text-stone-500 uppercase">
                  {item.tagline}
                </p>

                {/* Description */}
                <p className="mt-2.5 line-clamp-3 text-xs leading-relaxed text-stone-600 sm:text-sm">
                  {item.description}
                </p>
              </div>

              {/* Bottom Card Footer: Learn More Link Indicator */}
              <div className="mt-5 flex items-center justify-between border-t border-stone-200/60 pt-3 text-xs font-semibold text-stone-700 transition-colors group-hover:text-stone-950">
                <span className="inline-flex items-center gap-1">
                  Explore Formulations
                </span>
                <span
                  className="flex h-6 w-6 items-center justify-center rounded-full text-white transition-transform duration-300 group-hover:translate-x-1"
                  style={{ backgroundColor: COLOUR_PALETTE.accent }}
                >
                  <ArrowRight className="h-3 w-3" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* ================================================================ */}
        {/* BOTTOM ACTION CTA HUB                                            */}
        {/* ================================================================ */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4 sm:mt-14">
          <Link
            href={HOME_PRODUCTS_DATA.ctaHref}
            className="group relative inline-flex items-center gap-3 rounded-full py-3.5 pr-4 pl-7 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0 sm:text-base"
            style={{
              backgroundColor: COLOUR_PALETTE.primaryDark,
            }}
          >
            <span>{HOME_PRODUCTS_DATA.ctaText}</span>
            <span
              className="flex h-8 w-8 items-center justify-center rounded-full text-white transition-transform duration-300 group-hover:translate-x-1"
              style={{
                backgroundColor: COLOUR_PALETTE.accent,
              }}
            >
              <ArrowRight className="h-4 w-4" />
            </span>
          </Link>

          <Link
            href={HOME_PRODUCTS_DATA.secondaryCtaHref}
            className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white/70 px-6 py-3.5 text-sm font-medium text-stone-800 shadow-xs transition-all duration-300 hover:border-stone-400 hover:bg-white active:scale-95 sm:text-base"
          >
            <span>{HOME_PRODUCTS_DATA.secondaryCtaText}</span>
            <ExternalLink className="h-4 w-4 text-stone-500" />
          </Link>
        </div>
      </div>
    </section>
  );
}
