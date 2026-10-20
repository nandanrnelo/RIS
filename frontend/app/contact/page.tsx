import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Home, Phone, ArrowRight, Mail } from "lucide-react";
import { COLOUR_PALETTE } from "@/constants/colour";
import { CONTACT_PAGE_DATA } from "@/data/contactPageData";
import { ContactInteractiveShowcase } from "@/components/contact/ContactInteractiveShowcase";

export const metadata: Metadata = {
  title:
    "Contact Us | Reflex Industrial Solutions - Water Management & Chemical Solutions",
  description:
    "Engage directly with certified water treatment specialists and chemical engineers at Reflex Industrial Solutions. Request technical water audits, specialty chemical RFQs, or lab water testing in Bangalore, India.",
  openGraph: {
    title: "Contact Us | Reflex Industrial Solutions - Direct Technical Desk",
    description:
      "Connect with certified water treatment professionals and chemical engineers for industrial water management.",
    type: "website",
    url: "/contact",
  },
};

export default function ContactPage() {
  const data = CONTACT_PAGE_DATA;

  return (
    <div
      className="relative min-h-screen pt-28 pb-24 sm:pt-32 sm:pb-28 lg:pt-36 lg:pb-32"
      style={{ backgroundColor: COLOUR_PALETTE.cream }}
    >
      {/* Ambient background glows */}
      <div
        className="pointer-events-none absolute top-20 right-10 h-[500px] w-[500px] rounded-full opacity-25 blur-[120px]"
        style={{ backgroundColor: COLOUR_PALETTE.secondary }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/2 left-0 h-[450px] w-[450px] rounded-full opacity-20 blur-[100px]"
        style={{ backgroundColor: COLOUR_PALETTE.accent }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-6xl space-y-12 px-4 sm:space-y-16 sm:px-6 lg:px-8">
        {/* ================================================================ */}
        {/* SECTION 1: EDITORIAL MASTHEAD                                    */}
        {/* ================================================================ */}
        <section aria-label="Contact Header" className="space-y-6">
          {/* Breadcrumb Navigation */}
          <nav
            aria-label="Breadcrumb"
            className="inline-flex items-center gap-2 text-xs font-medium text-stone-600 sm:text-sm"
          >
            <Link
              href="/"
              className="flex items-center gap-1.5 transition-colors hover:text-stone-900"
            >
              <Home className="h-3.5 w-3.5" />
              <span>Home</span>
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-stone-400" />
            <span
              className="font-semibold"
              style={{ color: COLOUR_PALETTE.primaryDark }}
            >
              Contact Us
            </span>
          </nav>

          {/* Symmetrical Flanked Eyebrow */}
          <div className="flex items-center gap-3">
            <span
              className="h-[2px] w-10 rounded-full"
              style={{ backgroundColor: COLOUR_PALETTE.accent }}
              aria-hidden="true"
            />
            <span
              className="text-xs font-bold tracking-[0.25em] uppercase sm:text-sm"
              style={{ color: COLOUR_PALETTE.primaryDark }}
            >
              {data.companyName} • Direct Technical Desk
            </span>
            <span
              className="h-[2px] w-10 rounded-full"
              style={{ backgroundColor: COLOUR_PALETTE.accent }}
              aria-hidden="true"
            />
          </div>

          {/* Unified Stately Headline */}
          <h1 className="text-left text-4xl leading-[1.1] font-extrabold tracking-tight text-[#1A2010] sm:text-5xl lg:text-6xl">
            <span>{data.headlineLine1}</span>
            <span
              className="mt-1 block sm:mt-2"
              style={{ color: COLOUR_PALETTE.primaryDark }}
            >
              {data.headlineLine2}
            </span>
          </h1>

          {/* Fluid Lead Narrative */}
          <p className="max-w-4xl text-base leading-relaxed text-stone-700 sm:text-lg sm:leading-relaxed">
            {data.leadParagraph}
          </p>

          {/* Direct Connection Quick Strip */}
          <div className="flex flex-wrap items-center gap-3 pt-2 sm:gap-4">
            <a
              href={`tel:${data.contactChannels[0].value.replace(/\s+/g, "")}`}
              className="group inline-flex items-center gap-2.5 rounded-full px-6 py-3 text-xs font-bold tracking-wider text-white uppercase shadow-md transition-all duration-300 hover:brightness-105 active:scale-95"
              style={{ backgroundColor: COLOUR_PALETTE.primaryDark }}
            >
              <Phone className="h-4 w-4" />
              <span>Call Triage Desk ({data.contactChannels[0].value})</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href={`mailto:${data.contactChannels[1].value}`}
              className="inline-flex items-center gap-2.5 rounded-full border border-stone-300 bg-white/80 px-6 py-3 text-xs font-bold tracking-wider text-stone-800 uppercase shadow-sm backdrop-blur-sm transition-all duration-300 hover:bg-white hover:shadow active:scale-95"
            >
              <Mail className="h-4 w-4 text-stone-600" />
              <span>Email: {data.contactChannels[1].value}</span>
            </a>
          </div>
        </section>

        {/* ================================================================ */}
        {/* SECTION 2: INTERACTIVE CONTACT & UPLOAD SHOWCASE                 */}
        {/* ================================================================ */}
        <section aria-label="Interactive Contact Console">
          <ContactInteractiveShowcase />
        </section>
      </div>
    </div>
  );
}
