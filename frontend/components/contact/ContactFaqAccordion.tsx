"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { COLOUR_PALETTE } from "@/constants/colour";
import { CONTACT_PAGE_DATA } from "@/data/contactPageData";

export function ContactFaqAccordion() {
  const data = CONTACT_PAGE_DATA;
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <div
      className="space-y-8 rounded-3xl border p-6 shadow-sm sm:p-10"
      style={{
        backgroundColor: "#FFFFFF",
        borderColor: `${COLOUR_PALETTE.secondary}80`,
      }}
    >
      <div className="space-y-2 text-center">
        <div className="inline-flex items-center gap-2">
          <span
            className="h-2 w-2 rounded-full"
            style={{ backgroundColor: COLOUR_PALETTE.accent }}
          />
          <span
            className="text-xs font-bold tracking-widest uppercase"
            style={{ color: COLOUR_PALETTE.primaryDark }}
          >
            Client Inquiries
          </span>
        </div>
        <h3
          className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl"
          style={{ color: COLOUR_PALETTE.primaryDark }}
        >
          Frequently Asked Questions
        </h3>
        <p className="mx-auto max-w-xl text-xs text-stone-600 sm:text-sm">
          Answers to common questions regarding technical water audits, document
          transmissions, and field engineer visits.
        </p>
      </div>

      <div className="mx-auto max-w-3xl space-y-3">
        {data.faqs.map((faq, idx) => {
          const isOpen = openFaqIndex === idx;
          return (
            <div
              key={faq.question}
              className="overflow-hidden rounded-2xl border border-stone-200 transition-colors"
              style={{
                backgroundColor: isOpen ? "#FAF7F2" : "#FFFFFF",
              }}
            >
              <button
                type="button"
                onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                className="flex w-full items-center justify-between p-4 text-left text-xs font-bold text-stone-900 sm:p-5 sm:text-sm"
              >
                <span className="pr-4">{faq.question}</span>
                <ChevronDown
                  className={`h-4 w-4 shrink-0 text-stone-500 transition-transform duration-200 ${
                    isOpen ? "rotate-180 text-amber-700" : ""
                  }`}
                />
              </button>
              {isOpen && (
                <div className="border-t border-stone-200/60 px-4 pt-1 pb-5 text-xs leading-relaxed text-stone-600 sm:px-5 sm:text-sm sm:leading-relaxed">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
