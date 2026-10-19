"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  FileCheck,
  Microscope,
  FlaskConical,
  Phone,
  ArrowRight,
  Sparkles,
  Award,
  Layers,
  Search,
  Filter,
} from "lucide-react";
import { COLOUR_PALETTE } from "@/constants/colour";
import {
  QualityPageData,
  QualityLifecycleStage,
  QualityDirective,
} from "@/data/qualityPageData";

interface QualityInteractiveShowcaseProps {
  data: QualityPageData;
}

export function QualityInteractiveShowcase({
  data,
}: QualityInteractiveShowcaseProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeStageId, setActiveStageId] = useState<string>(
    data.lifecycleStages[0].id
  );

  const categories = [
    { id: "all", label: "All 11 Directives" },
    { id: "raw-material", label: "Inward Raw Materials" },
    { id: "production", label: "Production Manual SOPs" },
    { id: "analysis", label: "Finished Product Analytics" },
    { id: "dispatch", label: "Traceability & Dispatch" },
  ];

  const filteredDirectives = useMemo(() => {
    if (selectedCategory === "all") return data.directives;
    return data.directives.filter((d) => d.category === selectedCategory);
  }, [data.directives, selectedCategory]);

  const activeStage = useMemo(() => {
    return (
      data.lifecycleStages.find((s) => s.id === activeStageId) ||
      data.lifecycleStages[0]
    );
  }, [data.lifecycleStages, activeStageId]);

  return (
    <div className="space-y-16 sm:space-y-20">
      {/* ================================================================ */}
      {/* SECTION A: LABORATORY VISUAL & 4-GATE LIFECYCLE STAGE STAGE      */}
      {/* ================================================================ */}
      <div className="space-y-8">
        <div className="flex flex-col justify-between gap-4 border-b border-stone-300/80 pb-6 sm:flex-row sm:items-end">
          <div className="space-y-1">
            <span
              className="text-xs font-bold tracking-[0.2em] uppercase"
              style={{ color: COLOUR_PALETTE.primaryDark }}
            >
              Systematic Quality Governance
            </span>
            <h2 className="text-2xl font-extrabold tracking-tight text-[#1A2010] sm:text-3xl">
              The 4-Stage Quality Gate Lifecycle
            </h2>
          </div>
          <span className="text-xs font-medium text-stone-500 sm:text-sm">
            Click any gate to inspect standard operating protocols
          </span>
        </div>

        {/* 4 Stage Selector Tabs */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {data.lifecycleStages.map((stage) => {
            const isActive = stage.id === activeStage.id;
            return (
              <button
                key={stage.id}
                type="button"
                onClick={() => setActiveStageId(stage.id)}
                className={`group relative flex cursor-pointer flex-col justify-between rounded-2xl p-4 text-left transition-all duration-300 sm:p-5 ${
                  isActive
                    ? "scale-[1.02] bg-[#4F5B2A] text-white shadow-xl ring-2 ring-[#4F5B2A]/40"
                    : "border border-stone-300/80 bg-white/80 text-stone-900 shadow-sm hover:border-[#4F5B2A]/40 hover:bg-white"
                }`}
              >
                <div className="flex w-full items-center justify-between">
                  <span
                    className={`inline-flex items-center justify-center rounded-lg px-2.5 py-1 text-xs font-extrabold tracking-wider ${
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-stone-100 text-stone-600"
                    }`}
                  >
                    Gate {stage.stepNumber}
                  </span>
                  <span
                    className={`h-2 w-2 rounded-full ${
                      isActive ? "animate-pulse bg-amber-300" : "bg-stone-300"
                    }`}
                  />
                </div>

                <div className="mt-4">
                  <h3
                    className={`text-sm font-bold sm:text-base ${
                      isActive ? "text-white" : "text-stone-900"
                    }`}
                  >
                    {stage.title}
                  </h3>
                  <p
                    className={`mt-1 line-clamp-1 text-xs ${
                      isActive ? "text-stone-200" : "text-stone-500"
                    }`}
                  >
                    {stage.tagline}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Stage Detailed Stage Card */}
        <div className="overflow-hidden rounded-[2.25rem] border border-stone-300/80 bg-white shadow-xl transition-all">
          <div className="grid grid-cols-1 items-stretch lg:grid-cols-12">
            {/* Left 7 Columns: Stage Details & Verified Protocols */}
            <div className="flex flex-col justify-between space-y-6 p-6 sm:p-10 lg:col-span-7 lg:p-12">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-stone-50 px-3.5 py-1 text-xs font-bold text-stone-800">
                  <ShieldCheck className="h-4 w-4 text-[#4F5B2A]" />
                  <span>
                    Gate {activeStage.stepNumber} Operational Protocol
                  </span>
                </div>

                <h3 className="text-2xl font-extrabold tracking-tight text-[#1A2010] sm:text-3xl">
                  {activeStage.title}
                </h3>

                <p className="text-sm leading-relaxed font-normal text-stone-700 sm:text-base">
                  {activeStage.description}
                </p>
              </div>

              {/* Protocols Checklist */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-bold tracking-wider text-stone-500 uppercase">
                  Mandatory Compliance Protocols:
                </span>
                <div className="grid grid-cols-1 gap-2.5">
                  {activeStage.protocols.map((protocol, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 rounded-xl border border-stone-200/80 bg-[#FAF7F2] p-3 text-xs font-medium text-stone-800 sm:text-sm"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#4F5B2A]" />
                      <span className="leading-snug">{protocol}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4 pt-2 text-xs font-semibold text-stone-500">
                <span className="flex items-center gap-1.5">
                  <Award className="h-3.5 w-3.5 text-[#B8892D]" />
                  <span>Zero-Defect Protocol</span>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <FileCheck className="h-3.5 w-3.5 text-[#4F5B2A]" />
                  <span>ISO 9001:2015 Compliant</span>
                </span>
              </div>
            </div>

            {/* Right 5 Columns: Laboratory Inspection Imagery */}
            <div className="relative min-h-[300px] overflow-hidden bg-stone-900 sm:min-h-[380px] lg:col-span-5">
              <Image
                src={data.image.src}
                alt={data.image.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="scale-102 object-cover object-center transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />

              <div className="absolute right-6 bottom-6 left-6 z-10 space-y-2">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/60 px-3 py-1 text-xs text-white shadow-sm backdrop-blur-md">
                  <span className="h-2 w-2 animate-ping rounded-full bg-emerald-400" />
                  <span className="font-semibold">
                    {data.image.telemetryTag}
                  </span>
                </div>
                <p className="text-xs leading-relaxed font-medium text-stone-200 drop-shadow-sm sm:text-sm">
                  {data.image.badge}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================================================================ */}
      {/* SECTION B: COMPLETE 11 QUALITY DIRECTIVES BOARD                   */}
      {/* ================================================================ */}
      <div className="space-y-8">
        <div className="flex flex-col justify-between gap-4 border-b border-stone-300/80 pb-6 sm:flex-row sm:items-end">
          <div className="space-y-1">
            <span
              className="text-xs font-bold tracking-[0.2em] uppercase"
              style={{ color: COLOUR_PALETTE.primaryDark }}
            >
              Standard Operating Directives
            </span>
            <h2 className="text-2xl font-extrabold tracking-tight text-[#1A2010] sm:text-3xl">
              The 11 Master Quality Directives
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`cursor-pointer rounded-full px-3.5 py-1.5 text-xs font-bold transition-all ${
                  selectedCategory === cat.id
                    ? "bg-[#4F5B2A] text-white shadow-sm"
                    : "border border-stone-300 bg-white/80 text-stone-700 hover:bg-stone-100"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* 11 Directives Grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filteredDirectives.map((dir) => (
            <div
              key={dir.id}
              className="group relative flex flex-col justify-between rounded-2xl border border-stone-300/80 bg-white/85 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-stone-400 hover:shadow-md"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span
                    className="inline-flex items-center rounded-lg px-2.5 py-1 text-[11px] font-extrabold tracking-wider text-white uppercase shadow-2xs"
                    style={{ backgroundColor: COLOUR_PALETTE.primaryDark }}
                  >
                    {dir.ruleNumber}
                  </span>
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                  </span>
                </div>

                <h4 className="text-base leading-snug font-bold text-stone-900 transition-colors group-hover:text-[#4F5B2A] sm:text-lg">
                  {dir.title}
                </h4>

                <p className="text-xs leading-relaxed font-normal text-stone-600 sm:text-sm">
                  {dir.description}
                </p>
              </div>

              <div className="mt-4 flex items-center justify-between border-t border-stone-200/80 pt-4 text-[11px] font-semibold tracking-wider text-stone-500 uppercase">
                <span>Reflex Quality Standard</span>
                <span className="text-[#B8892D]">Verified</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================================================================ */}
      {/* SECTION C: CERTIFIED ANALYTICAL TESTING PARAMETERS TABLE         */}
      {/* ================================================================ */}
      <div className="space-y-8">
        <div className="flex flex-col justify-between gap-4 border-b border-stone-300/80 pb-6 sm:flex-row sm:items-end">
          <div className="space-y-1">
            <span
              className="text-xs font-bold tracking-[0.2em] uppercase"
              style={{ color: COLOUR_PALETTE.primaryDark }}
            >
              Laboratory Instrumentation
            </span>
            <h2 className="text-2xl font-extrabold tracking-tight text-[#1A2010] sm:text-3xl">
              Certified Analytical Testing Parameters
            </h2>
          </div>
          <span className="text-xs font-medium text-stone-500 sm:text-sm">
            Conducted on every batch prior to Certificate of Quality issuance
          </span>
        </div>

        <div className="overflow-hidden rounded-2xl border border-stone-300/80 bg-white shadow-md">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="border-b border-stone-200 bg-[#FAF7F2] text-[11px] font-bold tracking-wider text-stone-800 uppercase">
                <tr>
                  <th scope="col" className="px-6 py-4">
                    Analytical Parameter
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Testing Methodology & Standard
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Engineering Purpose & Site Benefit
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200/80 text-stone-700">
                {data.testingParameters.map((item, idx) => (
                  <tr
                    key={idx}
                    className="transition-colors hover:bg-stone-50/80"
                  >
                    <td className="px-6 py-4 font-bold whitespace-nowrap text-stone-900">
                      <div className="flex items-center gap-2">
                        <FlaskConical className="h-4 w-4 shrink-0 text-[#4F5B2A]" />
                        <span>{item.parameter}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 font-medium text-stone-600">
                      {item.method}
                    </td>
                    <td className="px-6 py-4 leading-relaxed text-stone-600">
                      {item.purpose}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* ================================================================ */}
      {/* SECTION D: TRUST GUARANTEE BANNER & AUDIT REQUEST HUB            */}
      {/* ================================================================ */}
      <div className="overflow-hidden rounded-[2.25rem] border border-stone-300/80 bg-gradient-to-br from-white via-[#FAF7F2] to-white p-6 shadow-xl sm:p-10 lg:p-12">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-stone-300/80 bg-white px-3.5 py-1 text-xs font-bold text-stone-800 shadow-2xs">
              <Award className="h-4 w-4 text-[#B8892D]" />
              <span>Customer Verification Guarantee</span>
            </div>
            <h3 className="text-2xl font-extrabold tracking-tight text-[#1A2010] sm:text-3xl">
              Require Batch COA or Facility Water Audit?
            </h3>
            <p className="text-sm leading-relaxed font-normal text-stone-600 sm:text-base">
              Every shipment is accompanied by a batch-specific Certificate of
              Quality. Our laboratory team also provides independent on-site
              water quality surveys, scale analytics, and titration checks.
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
              <span>Schedule Quality Audit</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
