"use client";

import React from "react";
import {
  Building2,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Clock,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { COLOUR_PALETTE } from "@/constants/colour";
import { CONTACT_PAGE_DATA } from "@/data/contactPageData";

export function ContactInfoPanel() {
  const data = CONTACT_PAGE_DATA;

  return (
    <div className="space-y-6">
      {/* Corporate Headquarters Card */}
      <div
        className="relative overflow-hidden rounded-3xl border p-6 shadow-sm sm:p-8"
        style={{
          backgroundColor: "#FFFFFF",
          borderColor: `${COLOUR_PALETTE.secondary}70`,
        }}
      >
        {/* Ambient accent top bar */}
        <div
          className="absolute inset-x-0 top-0 h-1.5"
          style={{
            background: `linear-gradient(90deg, ${COLOUR_PALETTE.primaryDark}, ${COLOUR_PALETTE.accent})`,
          }}
        />

        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-stone-500 uppercase">
              <Building2
                className="h-4 w-4"
                style={{ color: COLOUR_PALETTE.accent }}
              />
              <span>Operational Headquarters</span>
            </div>
            <h3
              className="mt-1 text-xl font-bold tracking-tight sm:text-2xl"
              style={{ color: COLOUR_PALETTE.primaryDark }}
            >
              {data.office.title}
            </h3>
          </div>

          {/* Physical Address */}
          <div className="flex items-start gap-3.5 rounded-2xl border border-stone-200/60 bg-stone-50/80 p-4">
            <div
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
              style={{
                backgroundColor: `${COLOUR_PALETTE.primaryDark}15`,
                color: COLOUR_PALETTE.primaryDark,
              }}
            >
              <MapPin className="h-5 w-5" />
            </div>
            <div className="space-y-1 text-xs sm:text-sm">
              <p className="font-bold text-stone-900">{data.office.street}</p>
              <p className="text-stone-700">{data.office.area}</p>
              <p className="font-semibold text-stone-900">
                {data.office.cityStateZip}
              </p>
              <p className="text-[11px] font-medium text-stone-500">
                {data.office.landmark}
              </p>
            </div>
          </div>

          {/* Contact Channels Grid */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {/* Direct Phone */}
            <a
              href={`tel:${data.contactChannels[0].value.replace(/\s+/g, "")}`}
              className="group flex items-center justify-between rounded-2xl border border-stone-200/80 bg-white p-3.5 transition-all duration-200 hover:border-stone-300 hover:shadow-md"
            >
              <div className="flex items-center gap-3">
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors group-hover:bg-amber-100"
                  style={{
                    backgroundColor: `${COLOUR_PALETTE.accent}20`,
                    color: COLOUR_PALETTE.accent,
                  }}
                >
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <span className="block text-[11px] font-semibold text-stone-500 uppercase">
                    Technical Hotline
                  </span>
                  <span className="text-sm font-bold text-stone-900">
                    {data.contactChannels[0].value}
                  </span>
                </div>
              </div>
              <ArrowRight className="h-4 w-4 text-stone-400 transition-transform group-hover:translate-x-1" />
            </a>

            {/* Direct Email */}
            <a
              href={`mailto:${data.contactChannels[1].value}`}
              className="group flex items-center justify-between rounded-2xl border border-stone-200/80 bg-white p-3.5 transition-all duration-200 hover:border-stone-300 hover:shadow-md"
            >
              <div className="flex items-center gap-3">
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors group-hover:bg-emerald-100"
                  style={{
                    backgroundColor: `${COLOUR_PALETTE.primaryDark}20`,
                    color: COLOUR_PALETTE.primaryDark,
                  }}
                >
                  <Mail className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <span className="block text-[11px] font-semibold text-stone-500 uppercase">
                    Official Inquiry Desk
                  </span>
                  <span className="block truncate text-sm font-bold text-stone-900">
                    {data.contactChannels[1].value}
                  </span>
                </div>
              </div>
              <ArrowRight className="h-4 w-4 shrink-0 text-stone-400 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Working Hours Card */}
          <div className="space-y-2 rounded-2xl border border-stone-200/80 bg-stone-50/70 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-bold text-stone-800">
                <Clock
                  className="h-4 w-4"
                  style={{ color: COLOUR_PALETTE.accent }}
                />
                <span>Working Hours</span>
              </div>
              <span
                className="rounded-full px-2 py-0.5 text-[10px] font-semibold"
                style={{
                  backgroundColor: `${COLOUR_PALETTE.primaryDark}15`,
                  color: COLOUR_PALETTE.primaryDark,
                }}
              >
                IST (UTC+5:30)
              </span>
            </div>
            <div className="space-y-1 text-xs text-stone-700">
              <p className="font-semibold text-stone-900">
                {data.office.operatingHours.days}:{" "}
                <span className="font-normal">
                  {data.office.operatingHours.hours}
                </span>
              </p>
              <p className="text-[11px] font-medium text-emerald-800">
                ● {data.office.operatingHours.emergency}
              </p>
            </div>
          </div>

          {/* Google Maps Directions Action Button */}
          <a
            href={data.office.googleMapsDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex w-full items-center justify-center gap-2 rounded-2xl border border-stone-300/80 bg-white px-4 py-3 text-xs font-bold tracking-wider text-stone-800 uppercase shadow-sm transition-all duration-200 hover:bg-stone-50 hover:shadow"
          >
            <MapPin className="h-4 w-4 text-stone-600" />
            <span>Open Google Maps Directions</span>
            <ExternalLink className="h-3.5 w-3.5 text-stone-400" />
          </a>
        </div>
      </div>

      {/* 4 Client Assurance Protocols */}
      <div
        className="space-y-4 rounded-3xl border p-6 shadow-sm"
        style={{
          backgroundColor: "#FFFFFF",
          borderColor: `${COLOUR_PALETTE.secondary}70`,
        }}
      >
        <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-stone-500 uppercase">
          <ShieldCheck
            className="h-4 w-4"
            style={{ color: COLOUR_PALETTE.primaryDark }}
          />
          <span>Client Assurance Protocols</span>
        </div>

        <div className="space-y-3">
          {data.assurancePillars.map((pillar) => (
            <div
              key={pillar.title}
              className="flex items-start gap-3 rounded-xl border border-stone-200/50 bg-stone-50/60 p-3"
            >
              <CheckCircle2
                className="mt-0.5 h-4 w-4 shrink-0"
                style={{ color: COLOUR_PALETTE.primaryDark }}
              />
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <h4 className="text-xs font-bold text-stone-900">
                    {pillar.title}
                  </h4>
                  <span
                    className="py-0.2 rounded px-1.5 text-[9px] font-bold tracking-wider uppercase"
                    style={{
                      backgroundColor: `${COLOUR_PALETTE.accent}15`,
                      color: COLOUR_PALETTE.accent,
                    }}
                  >
                    {pillar.badge}
                  </span>
                </div>
                <p className="text-[11px] leading-relaxed text-stone-600">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
