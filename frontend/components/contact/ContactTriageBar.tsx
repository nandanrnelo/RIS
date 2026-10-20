"use client";

import React from "react";
import { Clock, Phone } from "lucide-react";
import { COLOUR_PALETTE } from "@/constants/colour";
import { CONTACT_PAGE_DATA } from "@/data/contactPageData";

export function ContactTriageBar() {
  const data = CONTACT_PAGE_DATA;

  return (
    <div
      className="flex flex-col items-start justify-between gap-4 rounded-2xl border p-4 shadow-sm sm:flex-row sm:items-center sm:px-6 sm:py-4"
      style={{
        backgroundColor: "#FFFFFF",
        borderColor: `${COLOUR_PALETTE.secondary}60`,
      }}
    >
      <div className="flex items-center gap-3">
        <span className="relative flex h-3 w-3">
          <span
            className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
            style={{ backgroundColor: COLOUR_PALETTE.primaryDark }}
          />
          <span
            className="relative inline-flex h-3 w-3 rounded-full"
            style={{ backgroundColor: COLOUR_PALETTE.primaryDark }}
          />
        </span>
        <div>
          <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-stone-800 uppercase">
            <span>BangaloreCentral Triage Active</span>
            <span
              className="hidden rounded-full px-2 py-0.5 text-[10px] font-bold text-white sm:inline-block"
              style={{ backgroundColor: COLOUR_PALETTE.primaryDark }}
            >
              LIVE
            </span>
          </div>
          <p className="text-xs text-stone-500">
            Technical engineers standing by for water diagnostics & chemical
            RFQs
          </p>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-4 text-xs font-semibold sm:gap-6">
        <div className="flex items-center gap-1.5 text-stone-700">
          <Clock
            className="h-4 w-4 shrink-0"
            style={{ color: COLOUR_PALETTE.accent }}
          />
          <span>Turnaround: &lt; 2 Hours</span>
        </div>
        <a
          href={data.contactChannels[0].href}
          className="flex items-center gap-1.5 transition-colors hover:text-stone-900"
          style={{ color: COLOUR_PALETTE.primaryDark }}
        >
          <Phone className="h-4 w-4 shrink-0" />
          <span className="font-bold">{data.contactChannels[0].value}</span>
        </a>
      </div>
    </div>
  );
}
