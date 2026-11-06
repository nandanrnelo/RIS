"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, ShieldCheck, MapPin, FileText } from "lucide-react";
import { COLOUR_PALETTE } from "@/constants/colour";
import { FOOTER_DATA } from "@/data/footerData";
import { SOCIAL_MEDIA_LINKS, CONTACT_DETAILS } from "@/data/socialMediaData";

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-transparent">
      {/* Top Sweeping Moon-Crescent Curve Transition */}
      <div className="pointer-events-none relative -mb-px w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 110"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="block h-14 w-full sm:h-20 lg:h-28"
          preserveAspectRatio="none"
        >
          {/* Clean Moon-Crescent Boundary Curve joining seamlessly into the footer with no brown border */}
          <path
            d="M 0,0 C 440,95 1020,85 1440,24 L 1440,110 L 0,110 Z"
            fill={COLOUR_PALETTE.primaryDark}
          />
        </svg>
      </div>

      {/* Main Footer Body with Brand Dark Background */}
      <div
        className="relative w-full transition-colors"
        style={{
          backgroundColor: COLOUR_PALETTE.primaryDark,
          color: COLOUR_PALETTE.cream,
        }}
      >
        <div className="relative mx-auto max-w-7xl px-5 pt-4 pb-12 sm:px-8 lg:px-10">
          {/* Subtle decorative background wave lines in secondary brand color */}
          <div className="pointer-events-none absolute inset-0 -z-10 opacity-15">
            <svg
              className="h-full w-full"
              viewBox="0 0 1000 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M-100,200 C200,100 600,350 1100,180"
                stroke={COLOUR_PALETTE.secondary}
                strokeWidth="1.5"
              />
              <path
                d="M-100,260 C250,140 650,390 1100,240"
                stroke={COLOUR_PALETTE.accent}
                strokeWidth="1"
              />
            </svg>
          </div>

          {/* 4 Column Grid */}
          <div className="grid grid-cols-1 items-start gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
            {/* Column 1: Company Profile with Integrated Brand Identity */}
            <div className="space-y-4 lg:col-span-4">
              {/* Brand Header: Emblem Tile + Typography */}
              <Link
                href="/"
                className="group inline-flex items-center gap-3.5 transition-transform duration-200 hover:opacity-95"
                aria-label="Reflex Industrial Solutions Homepage"
              >
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl shadow-md transition-transform duration-300 group-hover:scale-105"
                  style={{
                    backgroundColor: COLOUR_PALETTE.cream,
                    border: `1.5px solid ${COLOUR_PALETTE.accent}`,
                  }}
                >
                  <Image
                    src="/logo/logo.png"
                    alt="Reflex Industrial Solutions Emblem"
                    width={44}
                    height={44}
                    className="h-9 w-9 object-contain"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <span
                    className="text-lg leading-tight font-black tracking-tight sm:text-xl"
                    style={{ color: COLOUR_PALETTE.cream }}
                  >
                    Reflex Industrial Solutions
                  </span>
                  <span
                    className="text-[11px] font-semibold tracking-wider"
                    style={{ color: COLOUR_PALETTE.accent }}
                  >
                    Engineering & Services
                  </span>
                </div>
              </Link>

              {/* Dedicated ISO 9001:2015 & GST Registration Capsules */}
              <div className="flex flex-wrap items-center gap-2 pt-0.5">
                <div
                  className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-medium tracking-wide shadow-xs backdrop-blur-md"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.08)",
                    border: "1px solid rgba(255, 255, 255, 0.15)",
                    color: COLOUR_PALETTE.secondary,
                  }}
                >
                  <ShieldCheck className="h-3.5 w-3.5 text-[#B8892D]" />
                  <span>{FOOTER_DATA.company.isoCertification}</span>
                </div>

                <div
                  className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-medium tracking-wide shadow-xs backdrop-blur-md"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.08)",
                    border: "1px solid rgba(255, 255, 255, 0.15)",
                    color: COLOUR_PALETTE.secondary,
                  }}
                >
                  <FileText className="h-3.5 w-3.5 text-[#B8892D]" />
                  <span>GSTIN: {CONTACT_DETAILS.gstin}</span>
                </div>
              </div>

              {/* Description Text */}
              <p
                className="max-w-sm text-sm leading-relaxed opacity-90"
                style={{ color: COLOUR_PALETTE.cream }}
              >
                {FOOTER_DATA.company.description.slice(0, 115)}...
                <Link
                  href={FOOTER_DATA.company.readMoreLink}
                  className="ml-1 font-bold transition-colors hover:underline"
                  style={{ color: COLOUR_PALETTE.accent }}
                >
                  Read More
                </Link>
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div className="space-y-4 sm:col-span-1 lg:col-span-2">
              <h3
                className="text-lg font-bold tracking-wide"
                style={{ color: COLOUR_PALETTE.cream }}
              >
                {FOOTER_DATA.quickLinksTitle}
              </h3>
              <ul className="space-y-2.5 text-sm">
                {FOOTER_DATA.quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="inline-block transition-all duration-200 hover:translate-x-1"
                      style={{
                        color: COLOUR_PALETTE.cream,
                        opacity: 0.85,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = COLOUR_PALETTE.accent;
                        e.currentTarget.style.opacity = "1";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = COLOUR_PALETTE.cream;
                        e.currentTarget.style.opacity = "0.85";
                      }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Working Hours */}
            <div className="space-y-4 sm:col-span-1 lg:col-span-3">
              <h3
                className="text-lg font-bold tracking-wide"
                style={{ color: COLOUR_PALETTE.cream }}
              >
                {FOOTER_DATA.workingHours.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: COLOUR_PALETTE.cream, opacity: 0.85 }}
              >
                {FOOTER_DATA.workingHours.schedule}
              </p>
            </div>

            {/* Column 4: Get In Touch */}
            <div className="space-y-4 sm:col-span-2 lg:col-span-3">
              <h3
                className="text-lg font-bold tracking-wide"
                style={{ color: COLOUR_PALETTE.cream }}
              >
                {FOOTER_DATA.getInTouch.title}
              </h3>

              {/* Email & Phone attached from data/socialMediaData.ts */}
              <div className="space-y-2.5 text-sm">
                <a
                  href={`mailto:${CONTACT_DETAILS.email}`}
                  className="flex items-center gap-2.5 transition-colors duration-200"
                  style={{ color: COLOUR_PALETTE.cream, opacity: 0.85 }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = COLOUR_PALETTE.accent;
                    e.currentTarget.style.opacity = "1";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = COLOUR_PALETTE.cream;
                    e.currentTarget.style.opacity = "0.85";
                  }}
                >
                  <Mail
                    className="h-4 w-4 shrink-0"
                    style={{ color: COLOUR_PALETTE.accent }}
                  />
                  <span className="truncate">{CONTACT_DETAILS.email}</span>
                </a>

                <a
                  href={`tel:${CONTACT_DETAILS.phone.replace(/\s+/g, "")}`}
                  className="flex items-center gap-2.5 transition-colors duration-200"
                  style={{ color: COLOUR_PALETTE.cream, opacity: 0.85 }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = COLOUR_PALETTE.accent;
                    e.currentTarget.style.opacity = "1";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = COLOUR_PALETTE.cream;
                    e.currentTarget.style.opacity = "0.85";
                  }}
                >
                  <Phone
                    className="h-4 w-4 shrink-0"
                    style={{ color: COLOUR_PALETTE.accent }}
                  />
                  <span>{CONTACT_DETAILS.phone}</span>
                </a>

                {/* Physical Address */}
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Visrhuthi+Nivasa+7th+Cross+MSR+Layout+Avalahalli+Bengaluru+560064"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 transition-colors duration-200"
                  style={{ color: COLOUR_PALETTE.cream, opacity: 0.85 }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = COLOUR_PALETTE.accent;
                    e.currentTarget.style.opacity = "1";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = COLOUR_PALETTE.cream;
                    e.currentTarget.style.opacity = "0.85";
                  }}
                >
                  <MapPin
                    className="mt-0.5 h-4 w-4 shrink-0"
                    style={{ color: COLOUR_PALETTE.accent }}
                  />
                  <span className="text-xs leading-relaxed">
                    {CONTACT_DETAILS.address.buildingNo},{" "}
                    {CONTACT_DETAILS.address.buildingName},{" "}
                    {CONTACT_DETAILS.address.street},{" "}
                    {CONTACT_DETAILS.address.locality},{" "}
                    {CONTACT_DETAILS.address.city} –{" "}
                    {CONTACT_DETAILS.address.pinCode}
                  </span>
                </a>

                {/* Official GST Registration Number */}
                <div
                  className="flex items-center gap-2.5 pt-0.5 text-xs"
                  style={{ color: COLOUR_PALETTE.cream, opacity: 0.85 }}
                >
                  <FileText
                    className="h-4 w-4 shrink-0"
                    style={{ color: COLOUR_PALETTE.accent }}
                  />
                  <span>
                    GSTIN:{" "}
                    <span
                      className="font-semibold"
                      style={{ color: COLOUR_PALETTE.cream }}
                    >
                      {CONTACT_DETAILS.gstin}
                    </span>
                  </span>
                </div>
              </div>

              {/* Circular Social Media Buttons dynamically loaded from data/socialMediaData.ts */}
              <div className="flex items-center gap-3 pt-2">
                {SOCIAL_MEDIA_LINKS.map((social) => (
                  <a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.ariaLabel}
                    className="flex h-9 w-9 items-center justify-center rounded-full shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
                    style={{
                      backgroundColor: COLOUR_PALETTE.cream,
                      color: COLOUR_PALETTE.primaryDark,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor =
                        COLOUR_PALETTE.accent;
                      e.currentTarget.style.color = COLOUR_PALETTE.cream;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor =
                        COLOUR_PALETTE.cream;
                      e.currentTarget.style.color = COLOUR_PALETTE.primaryDark;
                    }}
                  >
                    {social.platform === "facebook" && (
                      <span className="font-serif text-sm font-black">f</span>
                    )}

                    {social.platform === "twitter" && (
                      <svg
                        className="h-3.5 w-3.5 fill-current"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    )}

                    {social.platform === "instagram" && (
                      <svg
                        className="h-4 w-4 fill-none stroke-current"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <rect
                          width="20"
                          height="20"
                          x="2"
                          y="2"
                          rx="5"
                          ry="5"
                        />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                      </svg>
                    )}

                    {social.platform === "linkedin" && (
                      <span className="text-xs font-bold">in</span>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div
          className="border-t px-4 py-4 text-center transition-colors"
          style={{
            borderColor: `${COLOUR_PALETTE.secondary}40`,
            backgroundColor: `${COLOUR_PALETTE.primaryDark}EE`,
          }}
        >
          <p
            className="text-xs font-normal"
            style={{ color: COLOUR_PALETTE.cream, opacity: 0.8 }}
          >
            {FOOTER_DATA.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
