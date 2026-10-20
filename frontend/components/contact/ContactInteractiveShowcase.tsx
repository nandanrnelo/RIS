"use client";

import React, { useState } from "react";
import { COLOUR_PALETTE } from "@/constants/colour";
import { ContactTriageBar } from "./ContactTriageBar";
import { ContactInfoPanel } from "./ContactInfoPanel";
import { ContactForm } from "./ContactForm";
import { ContactSuccessCard } from "./ContactSuccessCard";
import { ContactMetricsBar } from "./ContactMetricsBar";
import { ContactFaqAccordion } from "./ContactFaqAccordion";
import type { FormState, FormErrors, SubmissionSuccessData } from "./types";

export function ContactInteractiveShowcase() {
  const [form, setForm] = useState<FormState>({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    industry: "",
    inquiryType: "",
    message: "",
    file: null,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] =
    useState<SubmissionSuccessData | null>(null);

  // Field validator helper
  const validateField = (
    field: keyof FormState,
    value: string | File | null
  ): string | undefined => {
    switch (field) {
      case "fullName":
        if (!value || typeof value !== "string" || value.trim().length < 2) {
          return "Full name is required (minimum 2 characters).";
        }
        return undefined;
      case "email": {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (
          !value ||
          typeof value !== "string" ||
          !emailRegex.test(value.trim())
        ) {
          return "A valid corporate or work email address is required.";
        }
        return undefined;
      }
      case "phone": {
        const clean =
          typeof value === "string" ? value.replace(/[\s\-()+]/g, "") : "";
        if (!clean || clean.length < 7) {
          return "A valid phone / mobile number is required (min 7 digits).";
        }
        return undefined;
      }
      case "company":
        if (!value || typeof value !== "string" || value.trim().length < 2) {
          return "Company / Facility name is required.";
        }
        return undefined;
      case "industry":
        if (!value || typeof value !== "string" || !value.trim()) {
          return "Please select your industry sector.";
        }
        return undefined;
      case "inquiryType":
        if (!value || typeof value !== "string" || !value.trim()) {
          return "Please select the primary nature of your inquiry.";
        }
        return undefined;
      case "message":
        if (!value || typeof value !== "string" || value.trim().length < 10) {
          return "Message is required (minimum 10 characters describing your requirement).";
        }
        return undefined;
      default:
        return undefined;
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));

    if (touched[name]) {
      const error = validateField(name as keyof FormState, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (field: keyof FormState) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const error = validateField(field, form[field]);
    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  const handleFileSelect = (file: File | null) => {
    setForm((prev) => ({ ...prev, file }));
  };

  const handleFileError = (error?: string) => {
    setErrors((prev) => ({ ...prev, file: error }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const allTouched: Record<string, boolean> = {
      fullName: true,
      email: true,
      phone: true,
      company: true,
      industry: true,
      inquiryType: true,
      message: true,
      file: true,
    };
    setTouched(allTouched);

    const newErrors: FormErrors = {};
    const fieldsToValidate: Array<keyof FormState> = [
      "fullName",
      "email",
      "phone",
      "company",
      "industry",
      "inquiryType",
      "message",
    ];

    fieldsToValidate.forEach((field) => {
      const err = validateField(field, form[field]);
      if (err) newErrors[field] = err;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Pure client-side submission animation and confirmation state
    setIsSubmitting(true);
    setErrors({});

    try {
      await new Promise((resolve) => setTimeout(resolve, 600));

      const randomHex = Math.random()
        .toString(36)
        .substring(2, 8)
        .toUpperCase();
      const dateSegment = new Date()
        .toISOString()
        .slice(0, 10)
        .replace(/-/g, "");
      const generatedTicketId = `RIS-REQ-${dateSegment}-${randomHex}`;

      setSubmissionSuccess({
        ticketId: generatedTicketId,
        fullName: form.fullName,
        email: form.email,
        company: form.company,
        industry: form.industry,
        inquiryType: form.inquiryType,
        hasAttachment: !!form.file,
        attachmentName: form.file?.name || null,
        submittedAt: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      });

      setIsSubmitting(false);
    } catch (err) {
      console.error("Submission failed:", err);
      setErrors({
        general:
          "Unable to complete inquiry. Please call our technical hotline at 044 42805983.",
      });
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setForm({
      fullName: "",
      email: "",
      phone: "",
      company: "",
      industry: "",
      inquiryType: "",
      message: "",
      file: null,
    });
    setErrors({});
    setTouched({});
    setSubmissionSuccess(null);
  };

  return (
    <div className="space-y-16">
      {/* 1. Quick Status Bar & Dispatch Desk SLA */}
      <ContactTriageBar />

      {/* 2. Main Two-Column Split Layout */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
        {/* Left Column (5 cols): Headquarters & Assurance */}
        <div className="lg:col-span-5">
          <ContactInfoPanel />
        </div>

        {/* Right Column (7 cols): Consultation Form OR Success Card */}
        <div className="lg:col-span-7">
          <div
            className="relative rounded-3xl border p-6 shadow-md sm:p-8 lg:p-10"
            style={{
              backgroundColor: "#FFFFFF",
              borderColor: `${COLOUR_PALETTE.secondary}80`,
            }}
          >
            {submissionSuccess ? (
              <ContactSuccessCard
                data={submissionSuccess}
                onReset={handleReset}
              />
            ) : (
              <ContactForm
                form={form}
                errors={errors}
                isSubmitting={isSubmitting}
                onChange={handleChange}
                onBlur={handleBlur}
                onFileSelect={handleFileSelect}
                onFileError={handleFileError}
                onSubmit={handleSubmit}
              />
            )}
          </div>
        </div>
      </div>

      {/* 3. 4-Metric Quick Stats Telemetry Strip */}
      <ContactMetricsBar />

      {/* 4. Frequently Asked Questions Accordion */}
      <ContactFaqAccordion />
    </div>
  );
}
