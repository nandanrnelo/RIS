"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  CheckCircle2,
  Copy,
  Check,
  FileCheck,
  Headphones,
  RotateCcw,
  FileSpreadsheet,
  ArrowRight,
} from "lucide-react";
import { COLOUR_PALETTE } from "@/constants/colour";
import type { SubmissionSuccessData } from "./types";
import Link from "next/link";

interface ContactSuccessCardProps {
  data: SubmissionSuccessData;
  onReset: () => void;
}

export function ContactSuccessCard({ data, onReset }: ContactSuccessCardProps) {
  const [copiedTicket, setCopiedTicket] = useState(false);

  const copyTicketId = () => {
    if (data.ticketId) {
      navigator.clipboard.writeText(data.ticketId);
      setCopiedTicket(true);
      setTimeout(() => setCopiedTicket(false), 2500);
    }
  };

  return (
    <div className="animate-in fade-in zoom-in-95 space-y-6 py-4 duration-300">
      {/* Header Brand & Checkmark */}
      <div className="space-y-3 text-center">
        <div className="flex justify-center pb-1">
          <Image
            src="/logo/logo-name.png"
            alt="Reflex Industrial Solutions"
            width={200}
            height={52}
            className="h-9 w-auto object-contain"
          />
        </div>

        <div
          className="mx-auto flex h-14 w-14 items-center justify-center rounded-full shadow-inner"
          style={{
            backgroundColor: `${COLOUR_PALETTE.primaryDark}15`,
            color: COLOUR_PALETTE.primaryDark,
          }}
        >
          <CheckCircle2 className="h-8 w-8" />
        </div>

        <span
          className="inline-block rounded-full px-3 py-1 text-xs font-bold tracking-wider uppercase"
          style={{
            backgroundColor: `${COLOUR_PALETTE.primaryDark}15`,
            color: COLOUR_PALETTE.primaryDark,
          }}
        >
          Inquiry Transmitted Successfully
        </span>

        <h3
          className="text-2xl font-black tracking-tight text-stone-900 sm:text-3xl"
          style={{ color: COLOUR_PALETTE.primaryDark }}
        >
          Thank You, {data.fullName}
        </h3>

        <p className="mx-auto max-w-lg text-sm text-stone-600">
          Your technical consultation request has been officially logged and
          routed to our senior industrial water treatment engineers in
          Bangalore.
        </p>
      </div>

      {/* Ticket ID Capsule */}
      <div className="flex flex-col items-center justify-between gap-3 rounded-2xl border border-stone-200 bg-stone-50 p-4 sm:flex-row">
        <div>
          <span className="block text-[11px] font-bold tracking-wider text-stone-500 uppercase">
            Inquiry Reference ID
          </span>
          <span className="font-mono text-base font-extrabold text-stone-900">
            {data.ticketId}
          </span>
        </div>

        <button
          type="button"
          onClick={copyTicketId}
          className="inline-flex items-center gap-1.5 rounded-xl border border-stone-300 bg-white px-3.5 py-2 text-xs font-bold text-stone-700 shadow-sm transition hover:bg-stone-100"
        >
          {copiedTicket ? (
            <>
              <Check className="h-4 w-4 text-emerald-600" />
              <span className="text-emerald-700">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="h-4 w-4 text-stone-500" />
              <span>Copy Reference ID</span>
            </>
          )}
        </button>
      </div>

      {/* Google Spreadsheet Sync Confirmation Capsule */}
      <div
        className={`flex items-start gap-3 rounded-2xl border p-4 text-xs sm:text-sm ${
          data.sheetStatus === "live"
            ? "border-emerald-200 bg-emerald-50/80 text-emerald-950"
            : "border-amber-200 bg-amber-50/80 text-amber-950"
        }`}
      >
        <div
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl ${
            data.sheetStatus === "live"
              ? "bg-emerald-600 text-white"
              : "bg-amber-600 text-white"
          }`}
        >
          <FileSpreadsheet className="h-4 w-4" />
        </div>
        <div className="space-y-0.5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-bold text-stone-900">
              {data.sheetStatus === "live"
                ? "Logged to Google Spreadsheet (Row 2 • Top of Sheet)"
                : "Verified in Demo Queue"}
            </span>
            <span
              className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase ${
                data.sheetStatus === "live"
                  ? "bg-emerald-200/80 text-emerald-900"
                  : "bg-amber-200/80 text-amber-900"
              }`}
            >
              {data.sheetStatus === "live" ? "Live Synced" : "Demo Mode"}
            </span>
          </div>
          <p className="text-xs text-stone-600">
            {data.sheetStatus === "live"
              ? "New row successfully inserted at Row 2 directly beneath headers. Prior inquiries shifted downward."
              : "Inquiry verified locally. To stream submissions live into your Google Spreadsheet at Row 2, connect your Google Apps Script Webhook URL."}
          </p>
        </div>
      </div>

      {/* Submitted Recap Grid */}
      <div className="space-y-3 rounded-2xl border border-stone-200/80 bg-white p-5 text-xs sm:text-sm">
        <h4 className="text-[11px] font-bold tracking-wider text-stone-500 uppercase">
          Submission Summary
        </h4>

        <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
          <div>
            <span className="block text-xs text-stone-500">
              Company / Facility:
            </span>
            <span className="font-semibold text-stone-900">{data.company}</span>
          </div>

          <div>
            <span className="block text-xs text-stone-500">Work Email:</span>
            <span className="font-semibold text-stone-900">{data.email}</span>
          </div>

          <div>
            <span className="block text-xs text-stone-500">
              Industry Vertical:
            </span>
            <span className="font-semibold text-stone-900">
              {data.industry}
            </span>
          </div>

          <div>
            <span className="block text-xs text-stone-500">Inquiry Scope:</span>
            <span className="font-semibold text-stone-900">
              {data.inquiryType}
            </span>
          </div>

          <div className="border-t border-stone-100 pt-1 sm:col-span-2">
            <span className="block text-xs text-stone-500">
              Document Attachment:
            </span>
            {data.hasAttachment ? (
              <div className="mt-0.5 flex items-center gap-1.5 font-semibold text-emerald-700">
                <FileCheck className="h-4 w-4 shrink-0" />
                <span>{data.attachmentName} (Received & Queued)</span>
              </div>
            ) : (
              <span className="text-stone-500 italic">
                No document attached (Standard Inquiry)
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Immediate Escalation Reminder */}
      <div className="space-y-1 rounded-2xl border border-amber-200/80 bg-amber-50/70 p-4 text-xs text-amber-900">
        <p className="flex items-center gap-1.5 font-bold">
          <Headphones className="h-4 w-4 text-amber-700" />
          <span>Need Immediate Escalation for Plant Emergency?</span>
        </p>
        <p className="text-stone-700">
          If this inquiry involves an active plant shutdown, acute boiler scale,
          or cooling tower microbial upset, call our direct triage desk at{" "}
          <a
            href="tel:04442805983"
            className="font-bold text-amber-950 underline"
          >
            044 42805983
          </a>{" "}
          referencing Ticket <strong>{data.ticketId}</strong>.
        </p>
      </div>

      {/* Reset Action */}
      <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
        <button
          type="button"
          onClick={onReset}
          className="inline-flex items-center justify-center gap-2 rounded-full border border-stone-300 bg-white px-6 py-3 text-xs font-bold tracking-wider text-stone-800 uppercase shadow-sm transition hover:bg-stone-50"
        >
          <RotateCcw className="h-4 w-4" />
          <span>Submit Another Inquiry</span>
        </button>

        <Link
          href="/products"
          className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-xs font-bold tracking-wider text-white uppercase shadow-md transition hover:brightness-105"
          style={{ backgroundColor: COLOUR_PALETTE.primaryDark }}
        >
          <span>Browse Formulations</span>
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
