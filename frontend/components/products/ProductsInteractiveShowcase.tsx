"use client";

import { useState, useMemo, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Flame,
  Droplets,
  Layers,
  Snowflake,
  Fuel,
  Recycle,
  Wrench,
  Search,
  CheckCircle2,
  Phone,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { COLOUR_PALETTE } from "@/constants/colour";
import {
  ProductsPageData,
  ProductCategory,
  ProductItem,
} from "@/data/productsPageData";

interface ProductsInteractiveShowcaseProps {
  data: ProductsPageData;
}

export function ProductsInteractiveShowcase({
  data,
}: ProductsInteractiveShowcaseProps) {
  const [activeCategoryId, setActiveCategoryId] = useState<string>(
    data.categories[0].id
  );
  const [searchQuery, setSearchQuery] = useState<string>("");
  const spotlightRef = useRef<HTMLDivElement>(null);

  // Icon mapping for the 7 product sectors
  const iconMap: Record<string, typeof Flame> = {
    "boiler-water": Flame,
    "cooling-water": Droplets,
    "reverse-osmosis": Layers,
    "chilled-water": Snowflake,
    "fuel-fireside": Fuel,
    "raw-wastewater": Recycle,
    "special-services": Wrench,
  };

  const activeCategory: ProductCategory = useMemo(() => {
    return (
      data.categories.find((c) => c.id === activeCategoryId) ||
      data.categories[0]
    );
  }, [data.categories, activeCategoryId]);

  // Handle global search across all products or within current category
  const isSearching = searchQuery.trim().length > 0;

  const searchResults = useMemo(() => {
    if (!isSearching) return [];
    const q = searchQuery.toLowerCase();
    const results: { category: ProductCategory; product: ProductItem }[] = [];
    data.categories.forEach((cat) => {
      cat.products.forEach((prod) => {
        if (
          prod.name.toLowerCase().includes(q) ||
          prod.type.toLowerCase().includes(q) ||
          prod.description.toLowerCase().includes(q) ||
          prod.categoryTag.toLowerCase().includes(q) ||
          prod.features.some((f) => f.toLowerCase().includes(q))
        ) {
          results.push({ category: cat, product: prod });
        }
      });
    });
    return results;
  }, [data.categories, searchQuery, isSearching]);

  const handleSelectCategory = (id: string) => {
    setActiveCategoryId(id);
    setSearchQuery("");
    if (spotlightRef.current) {
      spotlightRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  };

  return (
    <div className="space-y-12 sm:space-y-16">
      {/* ================================================================ */}
      {/* 1. SECTOR CONTROL STRIP & GLOBAL SEARCH BAR                      */}
      {/* ================================================================ */}
      <div className="space-y-4">
        {/* Top: Status & Search Row */}
        <div className="flex flex-col items-stretch justify-between gap-4 border-b border-stone-300/80 pb-5 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <span
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl text-white shadow-sm"
              style={{ backgroundColor: COLOUR_PALETTE.primaryDark }}
            >
              <ShieldCheck className="h-4 w-4" />
            </span>
            <div>
              <span className="block text-xs font-bold tracking-wider text-stone-900 uppercase sm:text-sm">
                7 Core Chemical Disciplines
              </span>
              <span className="block text-xs text-stone-500">
                Select a discipline or search all formulations in real-time
              </span>
            </div>
          </div>

          {/* Real-Time Search Bar */}
          <div className="relative w-full sm:w-80">
            <Search className="absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-stone-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search formulations (e.g. polyamine, antiscalant)..."
              className="w-full rounded-full border border-stone-300 bg-white/90 py-2 pr-4 pl-10 text-xs text-stone-900 shadow-sm transition-all placeholder:text-stone-400 focus:border-[#4F5B2A] focus:ring-2 focus:ring-[#4F5B2A]/20 focus:outline-none sm:text-sm"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute top-1/2 right-3.5 -translate-y-1/2 cursor-pointer text-xs font-semibold text-stone-400 hover:text-stone-700"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* 7 Discipline Category Pills Bar */}
        <div className="flex scrollbar-none items-center gap-2 overflow-x-auto pb-2">
          {data.categories.map((cat) => {
            const Icon = iconMap[cat.id] || Flame;
            const isActive = !isSearching && cat.id === activeCategory.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => handleSelectCategory(cat.id)}
                className={`group inline-flex cursor-pointer items-center gap-2.5 rounded-full px-4 py-2 text-xs font-bold whitespace-nowrap transition-all duration-200 sm:text-sm ${
                  isActive
                    ? "scale-[1.02] bg-[#4F5B2A] text-white shadow-md"
                    : "border border-stone-300/80 bg-white/80 text-stone-700 hover:bg-stone-100 hover:text-stone-900"
                }`}
              >
                <Icon
                  className={`h-4 w-4 transition-colors ${
                    isActive
                      ? "text-amber-300"
                      : "text-stone-500 group-hover:text-stone-800"
                  }`}
                />
                <span>{cat.name}</span>
                <span
                  className={`rounded-full px-1.5 py-0.5 text-[10px] font-extrabold ${
                    isActive
                      ? "bg-white/20 text-white"
                      : "bg-stone-200 text-stone-600"
                  }`}
                >
                  {cat.products.length}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ================================================================ */}
      {/* 2. SEARCH MODE DISPLAY (IF QUERY ACTIVE)                         */}
      {/* ================================================================ */}
      {isSearching ? (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-extrabold text-[#1A2010] sm:text-2xl">
              Search Results ({searchResults.length})
            </h3>
            <span className="text-xs font-medium text-stone-500">
              Matching &ldquo;{searchQuery}&rdquo; across all disciplines
            </span>
          </div>

          {searchResults.length === 0 ? (
            <div className="space-y-3 rounded-[2rem] border border-dashed border-stone-300 bg-white/60 p-12 text-center">
              <p className="text-sm font-medium text-stone-600">
                No formulations found matching &ldquo;{searchQuery}&rdquo;.
              </p>
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="cursor-pointer text-xs font-bold text-[#4F5B2A] underline underline-offset-4"
              >
                Reset Search and View All Categories
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {searchResults.map(({ category, product }) => (
                <div
                  key={product.id}
                  className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-stone-300/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-stone-400 hover:shadow-lg"
                >
                  {/* Card Header Product Image */}
                  {product.image && (
                    <div className="relative h-44 w-full overflow-hidden border-b border-stone-200/80 bg-stone-100">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                      <span className="absolute top-3 left-3 rounded-md bg-white/95 px-2.5 py-1 text-[10px] font-bold tracking-wider text-[#4F5B2A] uppercase shadow-xs backdrop-blur-xs">
                        {category.name}
                      </span>
                      <span className="absolute right-3 bottom-2.5 text-[11px] font-semibold text-white/90 drop-shadow-sm">
                        {product.categoryTag}
                      </span>
                    </div>
                  )}

                  <div className="flex flex-1 flex-col justify-between space-y-3.5 p-5 sm:p-6">
                    <div className="space-y-2.5">
                      <h4 className="text-base leading-snug font-bold text-stone-900 transition-colors group-hover:text-[#4F5B2A] sm:text-lg">
                        {product.name}
                      </h4>

                      <p className="text-xs font-medium text-stone-500 italic">
                        {product.type}
                      </p>

                      <p className="text-xs leading-relaxed font-normal text-stone-600">
                        {product.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between border-t border-stone-200 pt-4">
                      <span className="text-[11px] font-semibold tracking-wider text-stone-500 uppercase">
                        Industrial Grade
                      </span>
                      <Link
                        href="/contact"
                        className="group/btn inline-flex items-center gap-1.5 text-xs font-bold text-[#4F5B2A] hover:underline"
                      >
                        <span>Request Specs</span>
                        <ArrowRight className="h-3 w-3 transition-transform group-hover/btn:translate-x-0.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        /* ================================================================ */
        /* 3. DISCIPLINE HERO ARCHITECTURAL STAGE & FORMULATIONS BOARD      */
        /* ================================================================ */
        <div ref={spotlightRef} className="space-y-10 sm:space-y-12">
          {/* Active Sector Cinematic Spotlight Stage */}
          <div className="overflow-hidden rounded-[2.25rem] border border-stone-300/80 bg-white shadow-xl sm:rounded-[2.75rem]">
            <div className="grid grid-cols-1 items-stretch lg:grid-cols-12">
              {/* Left 7 Columns: Editorial Discipline Overview */}
              <div className="flex flex-col justify-between space-y-6 p-6 sm:p-10 lg:col-span-7 lg:p-12">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <span
                      className="inline-flex items-center rounded-lg px-2.5 py-1 text-xs font-extrabold tracking-wider text-white shadow-2xs"
                      style={{ backgroundColor: COLOUR_PALETTE.primaryDark }}
                    >
                      Discipline {activeCategory.number} of 07
                    </span>
                    <span className="text-xs font-bold tracking-wider text-stone-500 uppercase">
                      {activeCategory.tagline}
                    </span>
                  </div>

                  <h3 className="text-2xl font-extrabold tracking-tight text-[#1A2010] sm:text-3xl lg:text-4xl">
                    {activeCategory.name}
                  </h3>

                  <p className="text-sm leading-relaxed font-normal text-stone-700 sm:text-base">
                    {activeCategory.overview}
                  </p>
                </div>

                {/* Operating Telemetry Badges */}
                <div className="grid grid-cols-3 gap-3 pt-2">
                  {activeCategory.metrics.map((m, idx) => (
                    <div
                      key={idx}
                      className="rounded-xl border border-stone-200/90 bg-[#FAF7F2] p-3 text-left"
                    >
                      <span className="block text-[10px] font-bold tracking-wider text-stone-500 uppercase sm:text-[11px]">
                        {m.label}
                      </span>
                      <span className="mt-0.5 block text-xs font-extrabold text-stone-900 sm:text-sm">
                        {m.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Direct Action Row */}
                <div className="flex flex-wrap items-center gap-3 border-t border-stone-200 pt-2">
                  <a
                    href={data.contact.phoneHref}
                    className="inline-flex items-center gap-2.5 rounded-full border border-stone-300 bg-white px-4 py-2 text-xs font-bold text-stone-900 shadow-xs transition-colors hover:border-stone-400 active:scale-95 sm:text-sm"
                  >
                    <Phone className="h-3.5 w-3.5 text-[#4F5B2A]" />
                    <span>{data.contact.phone}</span>
                  </a>

                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-2 rounded-full px-5 py-2 text-xs font-bold text-white shadow-md transition-all duration-300 hover:shadow-lg active:scale-95 sm:text-sm"
                    style={{ backgroundColor: COLOUR_PALETTE.primaryDark }}
                  >
                    <span>Request Dosage Calculation</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>

              {/* Right 5 Columns: Cinematic Utility Asset Photography */}
              <div className="relative min-h-[300px] overflow-hidden bg-stone-900 sm:min-h-[380px] lg:col-span-5">
                <Image
                  key={activeCategory.id}
                  src={activeCategory.image}
                  alt={activeCategory.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="scale-102 object-cover object-center transition-all duration-700 hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />

                <div className="absolute right-6 bottom-6 left-6 z-10 space-y-2">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/60 px-3 py-1 text-xs text-white shadow-sm backdrop-blur-md">
                    <span className="h-2 w-2 animate-ping rounded-full bg-emerald-400" />
                    <span className="font-semibold">
                      Engineered Formulation Protocol
                    </span>
                  </div>
                  <p className="text-xs leading-relaxed font-medium text-stone-200 drop-shadow-sm sm:text-sm">
                    Reflex Industrial Solutions • Utility Chemistry Mastery
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulations Spectrum Grid for Active Category */}
          <div className="space-y-6">
            <div className="flex flex-col justify-between gap-2 border-b border-stone-300/80 pb-4 sm:flex-row sm:items-center">
              <div>
                <h4 className="text-xl font-extrabold text-[#1A2010] sm:text-2xl">
                  Formulation Spectrum ({activeCategory.products.length}{" "}
                  Products)
                </h4>
                <p className="text-xs text-stone-500 sm:text-sm">
                  Custom-compounded chemistries for {activeCategory.name}
                </p>
              </div>

              <span className="text-xs font-semibold text-stone-500">
                100% Certificate of Quality (COA) Guaranteed
              </span>
            </div>

            <div className="grid grid-cols-1 items-stretch gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
              {activeCategory.products.map((product) => (
                <div
                  key={product.id}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-stone-300/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-stone-400 hover:shadow-xl"
                >
                  {/* Top Image Container */}
                  {product.image && (
                    <div className="relative h-44 w-full overflow-hidden border-b border-stone-200/80 bg-stone-100 sm:h-48">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

                      {/* Category Tag pill over image */}
                      <div className="absolute top-3 left-3 flex items-center gap-1.5">
                        <span className="inline-flex items-center rounded-lg border border-white/40 bg-white/95 px-2.5 py-1 text-[11px] font-bold tracking-wider text-stone-800 uppercase shadow-xs backdrop-blur-xs">
                          {product.categoryTag}
                        </span>
                      </div>

                      {/* Verified Icon on image top right */}
                      <span className="absolute top-3 right-3 flex h-7 w-7 items-center justify-center rounded-full bg-white/90 text-emerald-700 shadow-xs backdrop-blur-xs">
                        <CheckCircle2 className="h-4 w-4" />
                      </span>

                      {/* Chemical Type badge on bottom left of image */}
                      <span className="absolute bottom-2.5 left-3 text-[11px] font-semibold text-white/95 drop-shadow-md">
                        {product.type}
                      </span>
                    </div>
                  )}

                  {/* Card Body */}
                  <div className="flex flex-1 flex-col justify-between space-y-4 p-5 sm:p-6">
                    <div className="space-y-3">
                      {/* Product Name */}
                      <h5 className="text-base leading-snug font-bold text-stone-900 transition-colors group-hover:text-[#4F5B2A] sm:text-lg">
                        {product.name}
                      </h5>

                      {/* Engineering Description */}
                      <p className="text-xs leading-relaxed font-normal text-stone-600 sm:text-sm">
                        {product.description}
                      </p>

                      {/* Feature Bullet Points */}
                      <div className="space-y-1.5 border-t border-stone-100 pt-2">
                        {product.features.map((feature, fIdx) => (
                          <div
                            key={fIdx}
                            className="flex items-start gap-2 text-xs text-stone-700"
                          >
                            <span
                              className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                              style={{
                                backgroundColor: COLOUR_PALETTE.primaryDark,
                              }}
                            />
                            <span className="leading-snug">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Link Footer */}
                    <div className="flex items-center justify-between border-t border-stone-200/80 pt-4">
                      <span className="text-[11px] font-semibold tracking-wider text-stone-500 uppercase">
                        Industrial Grade
                      </span>
                      <Link
                        href="/contact"
                        className="group/btn inline-flex items-center gap-1.5 text-xs font-bold text-[#4F5B2A] hover:underline"
                      >
                        <span>Request Specs</span>
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ================================================================ */}
      {/* 4. PACKAGING & CERTIFIED COMPLIANCE RIBBON                       */}
      {/* ================================================================ */}
      <div className="overflow-hidden rounded-[2.25rem] border border-stone-300/80 bg-gradient-to-br from-white via-[#FAF7F2] to-white p-6 shadow-xl sm:p-10 lg:p-12">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-stone-300/80 bg-white px-3.5 py-1 text-xs font-bold text-stone-800 shadow-2xs">
              <ShieldCheck className="h-4 w-4 text-[#4F5B2A]" />
              <span>Standard Industrial Packaging & Delivery</span>
            </div>
            <h3 className="text-2xl font-extrabold tracking-tight text-[#1A2010] sm:text-3xl">
              Ready for Bulk Industrial Dispatch
            </h3>
            <p className="text-sm leading-relaxed font-normal text-stone-600 sm:text-base">
              All chemical products are supplied in tamper-evident UN-certified
              containers: 25 kg carboys, 200 kg HDPE barrels, 1,000 kg IBC
              totes, and bulk dedicated road tankers. Accompanied by mandatory
              Certificate of Quality (COA) and GHS-compliant Safety Data Sheets.
            </p>
          </div>

          <div className="flex shrink-0 flex-wrap items-center gap-3">
            <a
              href={data.contact.phoneHref}
              className="inline-flex items-center gap-2.5 rounded-full border border-stone-300 bg-white px-5 py-3 text-xs font-bold text-stone-900 shadow-sm transition-all hover:border-stone-400 active:scale-95 sm:text-sm"
            >
              <Phone className="h-4 w-4 text-[#4F5B2A]" />
              <span>{data.contact.phone}</span>
            </a>

            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full px-6 py-3 text-xs font-bold text-white shadow-md transition-all duration-300 hover:shadow-lg active:scale-95 sm:text-sm"
              style={{ backgroundColor: COLOUR_PALETTE.primaryDark }}
            >
              <span>Request Chemical Catalog</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
