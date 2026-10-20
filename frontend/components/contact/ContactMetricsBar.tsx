"use client";

import React from "react";
import { COLOUR_PALETTE } from "@/constants/colour";
import { CONTACT_PAGE_DATA } from "@/data/contactPageData";

export function ContactMetricsBar() {
  const data = CONTACT_PAGE_DATA;

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
      {data.quickMetrics.map((qm) => (
        <div
          key={qm.label}
          className="space-y-1 rounded-2xl border p-5 text-center shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
          style={{
            backgroundColor: "#FFFFFF",
            borderColor: `${COLOUR_PALETTE.secondary}70`,
          }}
        >
          <span
            className="block text-2xl font-black tracking-tight sm:text-3xl"
            style={{ color: COLOUR_PALETTE.primaryDark }}
          >
            {qm.value}
          </span>
          <span className="block text-xs font-bold tracking-wider text-stone-800 uppercase">
            {qm.label}
          </span>
          <span className="block text-[11px] text-stone-500">{qm.detail}</span>
        </div>
      ))}
    </div>
  );
}
