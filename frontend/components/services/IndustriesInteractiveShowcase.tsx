"use client";

import { useState, useMemo, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  ChevronLeft,
  ChevronRight,
  Phone,
  ArrowRight,
  ShieldCheck,
  Check,
  Maximize2,
} from "lucide-react";
import { COLOUR_PALETTE } from "@/constants/colour";
import { IndustryItem, ServicesPageData } from "@/data/servicesPageData";

interface IndustriesInteractiveShowcaseProps {
  data: ServicesPageData;
}

export function IndustriesInteractiveShowcase({
  data,
}: IndustriesInteractiveShowcaseProps) {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const spotlightRef = useRef<HTMLDivElement>(null);

  // Filter 14 industries based on search query
  const filteredIndustries = useMemo(() => {
    if (!searchQuery.trim()) return data.industries;
    const q = searchQuery.toLowerCase();
    return data.industries.filter((item) =>
      item.name.toLowerCase().includes(q)
    );
  }, [data.industries, searchQuery]);

  const currentSector: IndustryItem =
    data.industries[selectedIndex] || data.industries[0];

  const handleSelectSector = (item: IndustryItem) => {
    const originalIndex = data.industries.findIndex((i) => i.id === item.id);
    if (originalIndex !== -1) {
      setSelectedIndex(originalIndex);
      if (spotlightRef.current) {
        spotlightRef.current.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
        });
      }
    }
  };

  const handlePrev = () => {
    setSelectedIndex((prev) =>
      prev === 0 ? data.industries.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setSelectedIndex((prev) =>
      prev === data.industries.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="space-y-12 sm:space-y-16">
      {/* ================================================================ */}
      {/* INTERACTIVE CONTROLS BAR: SEARCH & STATUS                        */}
      {/* ================================================================ */}
      <div className="flex flex-col items-stretch justify-between gap-4 border-b border-stone-300/80 pb-6 sm:flex-row sm:items-center">
        {/* Left: Active Roster Counter & Telemetry Pill */}
        <div className="flex items-center gap-3">
          <span
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl text-white shadow-sm"
            style={{ backgroundColor: COLOUR_PALETTE.primaryDark }}
          >
            <ShieldCheck className="h-4 w-4" />
          </span>
          <div>
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="text-xs font-bold tracking-wider text-stone-900 uppercase sm:text-sm">
                14 Heavy Process Sectors
              </span>
            </div>
            <span className="text-xs text-stone-500">
              Interactive Industrial Directory • Click any sector to inspect
            </span>
          </div>
        </div>

        {/* Right: Instant Search Filter Input */}
        <div className="relative w-full sm:w-80">
          <Search className="absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-stone-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search sectors (e.g. Refinery, Steel, Power)..."
            className="w-full rounded-full border border-stone-300 bg-white/90 py-2 pr-4 pl-10 text-xs text-stone-900 shadow-sm transition-all placeholder:text-stone-400 focus:border-[#4F5B2A] focus:ring-2 focus:ring-[#4F5B2A]/20 focus:outline-none sm:text-sm"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="absolute top-1/2 right-3.5 -translate-y-1/2 text-xs font-semibold text-stone-400 hover:text-stone-700"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* ================================================================ */}
      {/* FEATURE SPOTLIGHT: INTERACTIVE CINEMATIC COMMAND STAGE           */}
      {/* ================================================================ */}
      <div
        ref={spotlightRef}
        aria-label="Active Sector Spotlight"
        className="relative overflow-hidden rounded-[2.25rem] border border-stone-300/80 bg-stone-950 text-white shadow-2xl transition-all duration-500 sm:rounded-[2.75rem]"
      >
        <div className="relative flex min-h-[420px] w-full flex-col justify-between p-6 sm:min-h-[480px] sm:p-10 lg:min-h-[520px] lg:p-12">
          {/* Background Cinematic Image with Cross-fade Transition */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <Image
              key={currentSector.id}
              src={currentSector.image}
              alt={currentSector.name}
              fill
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="scale-102 object-cover object-center transition-all duration-700 hover:scale-105"
              priority
            />
            {/* Luminous Architectural Vignette (Keeps image crisp and bright while guaranteeing text legibility) */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/25 to-transparent" />
          </div>

          {/* Top Bar: Live Beacon & Sector Scrubber Arrows */}
          <div className="relative z-10 flex items-center justify-between gap-4">
            {/* Top-Left Telemetry Tag */}
            <div className="flex items-center gap-2 rounded-full border border-white/20 bg-black/60 px-4 py-1.5 text-white shadow-lg backdrop-blur-md">
              <span
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: COLOUR_PALETTE.accent }}
              />
              <span className="text-xs font-semibold tracking-wide sm:text-sm">
                Sector Spotlight • {currentSector.number} of 14
              </span>
            </div>

            {/* Top-Right Scrubber Buttons */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous sector"
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/25 bg-black/50 text-white backdrop-blur-md transition-all duration-200 hover:bg-white hover:text-stone-900 active:scale-95"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next sector"
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/25 bg-black/50 text-white backdrop-blur-md transition-all duration-200 hover:bg-white hover:text-stone-900 active:scale-95"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Bottom Area: Large Editorial Title & Direct Action Hub */}
          <div className="relative z-10 max-w-3xl space-y-5 pt-16">
            <div className="space-y-2">
              <span
                className="inline-block text-xs font-bold tracking-[0.2em] uppercase sm:text-sm"
                style={{ color: COLOUR_PALETTE.secondary }}
              >
                Industrial Chemistry Program • {data.companyName}
              </span>
              <h2 className="text-3xl leading-tight font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
                {currentSector.name}
              </h2>
            </div>

            <p className="max-w-2xl text-sm leading-relaxed font-normal text-stone-200 sm:text-base">
              Specialized water management and high-performance chemical
              formulations engineered to maintain maximum process uptime,
              protect capital metallurgy, and ensure environmental compliance.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={data.contact.phoneHref}
                className="group inline-flex items-center gap-3 rounded-full bg-white px-5 py-2.5 text-xs font-bold text-stone-900 shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-95 sm:text-sm"
              >
                <span
                  className="flex h-6 w-6 items-center justify-center rounded-full text-white"
                  style={{ backgroundColor: COLOUR_PALETTE.primaryDark }}
                >
                  <Phone className="h-3 w-3" />
                </span>
                <span>{data.contact.phone}</span>
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-black/50 px-5 py-2.5 text-xs font-semibold text-white backdrop-blur-md transition-all duration-200 hover:bg-white/20 active:scale-95 sm:text-sm"
              >
                <span>Request Sector Audit</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ================================================================ */}
      {/* 14 IMMERSIVE FULL-BLEED ARCHITECTURAL TILES                      */}
      {/* ================================================================ */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-extrabold tracking-tight text-[#1A2010] sm:text-2xl">
            Complete Process Sector Roster
          </h3>
          <span className="text-xs font-medium text-stone-500 sm:text-sm">
            Showing {filteredIndustries.length} of {data.industries.length}{" "}
            sectors
          </span>
        </div>

        {filteredIndustries.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-stone-300 bg-white/50 p-12 text-center">
            <p className="text-sm text-stone-600">
              No industries found matching &ldquo;{searchQuery}&rdquo;.
            </p>
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="mt-3 cursor-pointer text-xs font-bold text-[#4F5B2A] underline underline-offset-4"
            >
              Reset Search Filter
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
            {filteredIndustries.map((item) => {
              const isSelected = item.id === currentSector.id;
              return (
                <div
                  key={item.id}
                  onClick={() => handleSelectSector(item)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      handleSelectSector(item);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  className={`group relative flex h-[320px] cursor-pointer flex-col justify-between overflow-hidden rounded-[1.75rem] text-left transition-all duration-300 select-none sm:h-[340px] ${
                    isSelected
                      ? "scale-[1.02] shadow-2xl ring-3 ring-[#4F5B2A]"
                      : "border border-stone-300/80 shadow-md hover:-translate-y-1.5 hover:border-stone-400 hover:shadow-xl"
                  }`}
                >
                  {/* Full-Bleed Background Photography with Zoom Micro-Motion */}
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-112"
                  />

                  {/* High-Clarity Photographic Veil */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent transition-opacity duration-300 group-hover:from-black/75" />

                  {/* Top Bar: Sector Number Badge & Active Beacon */}
                  <div className="relative z-10 flex items-center justify-between p-4">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/60 px-3 py-1 text-white shadow-sm backdrop-blur-md">
                      <span
                        className="h-1.5 w-1.5 rounded-full"
                        style={{
                          backgroundColor: isSelected
                            ? "#10B981"
                            : COLOUR_PALETTE.accent,
                        }}
                      />
                      <span className="text-[11px] font-bold tracking-wider">
                        Sector {item.number}
                      </span>
                    </span>

                    {isSelected && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-[#4F5B2A] px-2.5 py-1 text-[10px] font-bold text-white shadow-md">
                        <Check className="h-3 w-3" />
                        <span>Focused</span>
                      </span>
                    )}
                  </div>

                  {/* Bottom Content: Title & Interactive Trigger */}
                  <div className="relative z-10 space-y-3 p-5">
                    <h4 className="text-lg leading-snug font-bold text-white transition-colors group-hover:text-amber-200 sm:text-xl">
                      {item.name}
                    </h4>

                    {/* Interactive Action Pill on Card */}
                    <div className="flex items-center justify-between border-t border-white/15 pt-1">
                      <span className="text-[11px] font-medium text-stone-300 transition-colors group-hover:text-white">
                        Click to Focus
                      </span>

                      <span
                        className={`flex h-7 w-7 items-center justify-center rounded-full transition-all duration-300 ${
                          isSelected
                            ? "scale-110 bg-[#4F5B2A] text-white"
                            : "bg-white/20 text-white group-hover:scale-105 group-hover:bg-white group-hover:text-stone-900"
                        }`}
                      >
                        <Maximize2 className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
