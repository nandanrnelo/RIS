"use client";

import React, { useId } from "react";
import { ChevronDown, Send, ShieldCheck, AlertCircle } from "lucide-react";
import { COLOUR_PALETTE } from "@/constants/colour";
import { CONTACT_PAGE_DATA } from "@/data/contactPageData";
import { ContactFileUpload } from "./ContactFileUpload";
import type { FormState, FormErrors } from "./types";

interface ContactFormProps {
  form: FormState;
  errors: FormErrors;
  isSubmitting: boolean;
  onChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
  onBlur: (field: keyof FormState) => void;
  onFileSelect: (file: File | null) => void;
  onFileError: (error?: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export function ContactForm({
  form,
  errors,
  isSubmitting,
  onChange,
  onBlur,
  onFileSelect,
  onFileError,
  onSubmit,
}: ContactFormProps) {
  const data = CONTACT_PAGE_DATA;

  const nameInputId = useId();
  const emailInputId = useId();
  const phoneInputId = useId();
  const companyInputId = useId();
  const industryInputId = useId();
  const inquiryTypeInputId = useId();
  const messageInputId = useId();

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-6">
      {/* Form Masthead Header */}
      <div className="space-y-2 border-b border-stone-200/80 pb-6">
        <div className="flex items-center gap-2">
          <span
            className="h-2 w-2 rounded-full"
            style={{ backgroundColor: COLOUR_PALETTE.accent }}
          />
          <span
            className="text-xs font-bold tracking-widest uppercase"
            style={{ color: COLOUR_PALETTE.primaryDark }}
          >
            Technical Consultation & RFQ
          </span>
        </div>

        <h3
          className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl"
          style={{ color: COLOUR_PALETTE.primaryDark }}
        >
          Submit Technical Inquiry
        </h3>

        <p className="text-xs text-stone-600 sm:text-sm">
          All text and selection fields are{" "}
          <strong className="text-red-600">required (*)</strong>. Water analysis
          reports and document attachments are{" "}
          <strong className="text-stone-800">optional</strong>.
        </p>
      </div>

      {/* General Error Banner */}
      {errors.general && (
        <div className="flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 p-4 text-xs text-red-800">
          <AlertCircle className="h-5 w-5 shrink-0 text-red-600" />
          <p className="font-semibold">{errors.general}</p>
        </div>
      )}

      {/* 2-Column Row 1: Full Name & Work Email */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {/* Full Name (REQUIRED) */}
        <div className="space-y-1.5">
          <label
            htmlFor={nameInputId}
            className="block text-xs font-bold tracking-wide text-stone-700 uppercase"
          >
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id={nameInputId}
            type="text"
            name="fullName"
            value={form.fullName}
            onChange={onChange}
            onBlur={() => onBlur("fullName")}
            placeholder="e.g. Dr. Rajesh Kumar"
            required
            aria-required="true"
            className={`w-full rounded-xl border bg-stone-50/60 px-4 py-3 text-sm text-stone-900 placeholder-stone-400 transition-all duration-200 outline-none focus:bg-white focus:ring-2 ${
              errors.fullName
                ? "border-red-400 ring-red-200"
                : "border-stone-300 focus:border-stone-500 focus:ring-stone-200"
            }`}
          />
          {errors.fullName && (
            <p className="flex items-center gap-1 text-[11px] font-semibold text-red-600">
              <AlertCircle className="h-3.5 w-3.5 shrink-0" />
              <span>{errors.fullName}</span>
            </p>
          )}
        </div>

        {/* Work Email (REQUIRED) */}
        <div className="space-y-1.5">
          <label
            htmlFor={emailInputId}
            className="block text-xs font-bold tracking-wide text-stone-700 uppercase"
          >
            Work / Corporate Email <span className="text-red-500">*</span>
          </label>
          <input
            id={emailInputId}
            type="email"
            name="email"
            value={form.email}
            onChange={onChange}
            onBlur={() => onBlur("email")}
            placeholder="e.g. rajesh.k@refinery.com"
            required
            aria-required="true"
            className={`w-full rounded-xl border bg-stone-50/60 px-4 py-3 text-sm text-stone-900 placeholder-stone-400 transition-all duration-200 outline-none focus:bg-white focus:ring-2 ${
              errors.email
                ? "border-red-400 ring-red-200"
                : "border-stone-300 focus:border-stone-500 focus:ring-stone-200"
            }`}
          />
          {errors.email && (
            <p className="flex items-center gap-1 text-[11px] font-semibold text-red-600">
              <AlertCircle className="h-3.5 w-3.5 shrink-0" />
              <span>{errors.email}</span>
            </p>
          )}
        </div>
      </div>

      {/* 2-Column Row 2: Phone Number & Company Name */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {/* Phone Number (REQUIRED) */}
        <div className="space-y-1.5">
          <label
            htmlFor={phoneInputId}
            className="block text-xs font-bold tracking-wide text-stone-700 uppercase"
          >
            Contact Phone / Mobile <span className="text-red-500">*</span>
          </label>
          <input
            id={phoneInputId}
            type="tel"
            name="phone"
            value={form.phone}
            onChange={onChange}
            onBlur={() => onBlur("phone")}
            placeholder="e.g. 044 42805983 or +91 98401 23456"
            required
            aria-required="true"
            className={`w-full rounded-xl border bg-stone-50/60 px-4 py-3 text-sm text-stone-900 placeholder-stone-400 transition-all duration-200 outline-none focus:bg-white focus:ring-2 ${
              errors.phone
                ? "border-red-400 ring-red-200"
                : "border-stone-300 focus:border-stone-500 focus:ring-stone-200"
            }`}
          />
          {errors.phone && (
            <p className="flex items-center gap-1 text-[11px] font-semibold text-red-600">
              <AlertCircle className="h-3.5 w-3.5 shrink-0" />
              <span>{errors.phone}</span>
            </p>
          )}
        </div>

        {/* Company / Plant Name (REQUIRED) */}
        <div className="space-y-1.5">
          <label
            htmlFor={companyInputId}
            className="block text-xs font-bold tracking-wide text-stone-700 uppercase"
          >
            Company / Plant Facility <span className="text-red-500">*</span>
          </label>
          <input
            id={companyInputId}
            type="text"
            name="company"
            value={form.company}
            onChange={onChange}
            onBlur={() => onBlur("company")}
            placeholder="e.g. Coastal Petrochemical Complex Ltd"
            required
            aria-required="true"
            className={`w-full rounded-xl border bg-stone-50/60 px-4 py-3 text-sm text-stone-900 placeholder-stone-400 transition-all duration-200 outline-none focus:bg-white focus:ring-2 ${
              errors.company
                ? "border-red-400 ring-red-200"
                : "border-stone-300 focus:border-stone-500 focus:ring-stone-200"
            }`}
          />
          {errors.company && (
            <p className="flex items-center gap-1 text-[11px] font-semibold text-red-600">
              <AlertCircle className="h-3.5 w-3.5 shrink-0" />
              <span>{errors.company}</span>
            </p>
          )}
        </div>
      </div>

      {/* 2-Column Row 3: Industry Sector & Inquiry Scope */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {/* Industry Sector Dropdown (REQUIRED) */}
        <div className="space-y-1.5">
          <label
            htmlFor={industryInputId}
            className="block text-xs font-bold tracking-wide text-stone-700 uppercase"
          >
            Industry Sector <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <select
              id={industryInputId}
              name="industry"
              value={form.industry}
              onChange={onChange}
              onBlur={() => onBlur("industry")}
              required
              aria-required="true"
              className={`w-full appearance-none rounded-xl border bg-stone-50/60 px-4 py-3 pr-10 text-sm text-stone-900 transition-all duration-200 outline-none focus:bg-white focus:ring-2 ${
                errors.industry
                  ? "border-red-400 ring-red-200"
                  : "border-stone-300 focus:border-stone-500 focus:ring-stone-200"
              }`}
            >
              <option value="">Select Your Industry Sector...</option>
              {data.industryOptions.map((ind) => (
                <option key={ind.id} value={ind.name}>
                  {ind.name}
                </option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute top-1/2 right-3.5 h-4 w-4 -translate-y-1/2 text-stone-400" />
          </div>
          {errors.industry && (
            <p className="flex items-center gap-1 text-[11px] font-semibold text-red-600">
              <AlertCircle className="h-3.5 w-3.5 shrink-0" />
              <span>{errors.industry}</span>
            </p>
          )}
        </div>

        {/* Primary Nature of Inquiry (REQUIRED) */}
        <div className="space-y-1.5">
          <label
            htmlFor={inquiryTypeInputId}
            className="block text-xs font-bold tracking-wide text-stone-700 uppercase"
          >
            Inquiry Scope <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <select
              id={inquiryTypeInputId}
              name="inquiryType"
              value={form.inquiryType}
              onChange={onChange}
              onBlur={() => onBlur("inquiryType")}
              required
              aria-required="true"
              className={`w-full appearance-none rounded-xl border bg-stone-50/60 px-4 py-3 pr-10 text-sm text-stone-900 transition-all duration-200 outline-none focus:bg-white focus:ring-2 ${
                errors.inquiryType
                  ? "border-red-400 ring-red-200"
                  : "border-stone-300 focus:border-stone-500 focus:ring-stone-200"
              }`}
            >
              <option value="">Select Primary Inquiry Scope...</option>
              {data.inquirySubjects.map((subj) => (
                <option key={subj.id} value={subj.name}>
                  [{subj.category}] {subj.name}
                </option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute top-1/2 right-3.5 h-4 w-4 -translate-y-1/2 text-stone-400" />
          </div>
          {errors.inquiryType && (
            <p className="flex items-center gap-1 text-[11px] font-semibold text-red-600">
              <AlertCircle className="h-3.5 w-3.5 shrink-0" />
              <span>{errors.inquiryType}</span>
            </p>
          )}
        </div>
      </div>

      {/* Message / Technical Specifications (REQUIRED) */}
      <div className="space-y-1.5">
        <div className="flex items-center justify-between">
          <label
            htmlFor={messageInputId}
            className="block text-xs font-bold tracking-wide text-stone-700 uppercase"
          >
            Requirement Details & Operating Parameters{" "}
            <span className="text-red-500">*</span>
          </label>
          <span className="text-[11px] text-stone-400">
            {form.message.length} characters (min 10)
          </span>
        </div>
        <textarea
          id={messageInputId}
          name="message"
          rows={4}
          value={form.message}
          onChange={onChange}
          onBlur={() => onBlur("message")}
          placeholder="Provide details on your system (e.g., boiler capacity in TPH, cooling tower circulation rate in m³/hr, raw water TDS, target parameters, current issues like scaling or corrosion)..."
          required
          aria-required="true"
          className={`w-full rounded-xl border bg-stone-50/60 p-4 text-sm text-stone-900 placeholder-stone-400 transition-all duration-200 outline-none focus:bg-white focus:ring-2 ${
            errors.message
              ? "border-red-400 ring-red-200"
              : "border-stone-300 focus:border-stone-500 focus:ring-stone-200"
          }`}
        />
        {errors.message && (
          <p className="flex items-center gap-1 text-[11px] font-semibold text-red-600">
            <AlertCircle className="h-3.5 w-3.5 shrink-0" />
            <span>{errors.message}</span>
          </p>
        )}
      </div>

      {/* Optional File Upload Dropzone */}
      <ContactFileUpload
        selectedFile={form.file}
        error={errors.file}
        onFileSelect={onFileSelect}
        onError={onFileError}
      />

      {/* Submit Action Button */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="group relative flex w-full items-center justify-center gap-2 rounded-full px-6 py-4 text-sm font-bold tracking-wider text-white uppercase shadow-lg transition-all duration-300 hover:brightness-105 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-75"
          style={{ backgroundColor: COLOUR_PALETTE.primaryDark }}
        >
          {isSubmitting ? (
            <>
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
              <span>Transmitting Inquiry to BangaloreDesk...</span>
            </>
          ) : (
            <>
              <span>Submit Technical Inquiry</span>
              <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </>
          )}
        </button>
      </div>

      {/* Privacy & NDA Footnote */}
      <div className="flex items-center justify-center gap-2 pt-1 text-center text-[11px] text-stone-500">
        <ShieldCheck
          className="h-3.5 w-3.5 shrink-0"
          style={{ color: COLOUR_PALETTE.accent }}
        />
        <span>
          Protected by commercial NDA. Your plant telemetry & data remain 100%
          confidential.
        </span>
      </div>
    </form>
  );
}
