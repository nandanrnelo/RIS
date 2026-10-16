"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronRight,
  ArrowRight,
  Phone,
} from "lucide-react";
import { COLOUR_PALETTE } from "@/constants/colour";
import { NAV_ITEMS } from "@/data/navbarData";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Dynamic elevation and frosted background intensity on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change or ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "border-b shadow-[0_4px_24px_rgba(79,91,42,0.08)] backdrop-blur-xl"
          : "border-b backdrop-blur-md"
      }`}
      style={{
        backgroundColor: isScrolled
          ? `${COLOUR_PALETTE.cream}F2` // 95% opacity
          : `${COLOUR_PALETTE.cream}E6`, // 90% opacity
        borderColor: isScrolled
          ? `${COLOUR_PALETTE.secondary}99`
          : `${COLOUR_PALETTE.secondary}50`,
      }}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Top-Left Logo */}
        <Link
          href="/"
          onClick={closeMenu}
          className="group flex items-center gap-3 transition-opacity duration-200 hover:opacity-95"
          aria-label="RIS Industries Homepage"
        >
          {/* Modern Geometric Industrial Emblem */}
          <div
            className="flex h-11 w-11 items-center justify-center rounded-xl shadow-xs transition-transform duration-300 group-hover:scale-105"
            style={{
              backgroundColor: COLOUR_PALETTE.primaryDark,
              border: `1.5px solid ${COLOUR_PALETTE.accent}`,
            }}
          >
            <svg
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 transition-transform duration-500 group-hover:rotate-45"
            >
              <polygon
                points="16,3 28,10 28,22 16,29 4,22 4,10"
                stroke={COLOUR_PALETTE.secondary}
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle
                cx="16"
                cy="16"
                r="3"
                fill={COLOUR_PALETTE.accent}
              />
              <path
                d="M16 7V11M16 21V25M8 12L11.5 14M20.5 18L24 20M8 20L11.5 18M20.5 14L24 12"
                stroke={COLOUR_PALETTE.cream}
                strokeWidth="1.2"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Brand Typography */}
          <div className="flex flex-col">
            <span
              className="text-2xl font-black tracking-tight leading-none"
              style={{ color: COLOUR_PALETTE.primaryDark }}
            >
              RIS
              <span
                className="ml-1.5 text-xs font-bold tracking-widest uppercase"
                style={{ color: COLOUR_PALETTE.accent }}
              >
                Industries
              </span>
            </span>
            <span
              className="text-[10px] font-semibold tracking-widest uppercase opacity-75 mt-0.5"
              style={{ color: COLOUR_PALETTE.primaryDark }}
            >
              Precision Engineering & Services
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden items-center gap-1 xl:gap-2 lg:flex"
          aria-label="Desktop Navigation"
        >
          {NAV_ITEMS.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`relative px-4 py-2 text-sm font-semibold tracking-wide transition-all duration-200 rounded-lg group ${
                  isActive
                    ? "font-bold"
                    : "opacity-85 hover:opacity-100 hover:bg-[#4F5B2A]/8"
                }`}
                style={{
                  color: isActive
                    ? COLOUR_PALETTE.primaryDark
                    : COLOUR_PALETTE.primaryDark,
                }}
              >
                <span>{item.label}</span>

                {/* Modern active indicator bar */}
                <span
                  className={`absolute bottom-0 left-4 right-4 h-0.5 rounded-full transition-all duration-300 ${
                    isActive
                      ? "opacity-100 scale-x-100"
                      : "opacity-0 scale-x-0 group-hover:opacity-60 group-hover:scale-x-75"
                  }`}
                  style={{ backgroundColor: COLOUR_PALETTE.accent }}
                />
              </Link>
            );
          })}
        </nav>

        {/* Right CTA Button & Mobile Trigger */}
        <div className="flex items-center gap-3">
          {/* Modern Contact Us Button (Desktop) */}
          <Link
            href="/contact"
            className="group hidden items-center gap-2 rounded-xl px-5 py-2.5 text-xs font-bold uppercase tracking-wider shadow-sm transition-all duration-200 hover:shadow-md hover:brightness-105 active:scale-95 sm:inline-flex"
            style={{
              backgroundColor: COLOUR_PALETTE.primaryDark,
              color: COLOUR_PALETTE.cream,
            }}
          >
            <span>Contact Us</span>
            <ArrowRight className="h-3.5 w-3.5 text-[#B8892D] transition-transform duration-200 group-hover:translate-x-1" />
          </Link>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border transition-all duration-200 lg:hidden focus:outline-hidden focus:ring-2 focus:ring-[#B8892D]"
            style={{
              borderColor: `${COLOUR_PALETTE.secondary}90`,
              color: COLOUR_PALETTE.primaryDark,
              backgroundColor: isOpen
                ? `${COLOUR_PALETTE.secondary}40`
                : "transparent",
            }}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {isOpen ? (
              <X className="h-5 w-5 transition-transform duration-200 rotate-90" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Sliding Navigation Overlay */}
      <div
        id="mobile-menu"
        className={`fixed inset-x-0 top-20 bottom-0 z-40 transition-all duration-300 ease-in-out lg:hidden ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none -translate-y-4"
        }`}
        style={{
          backgroundColor: `${COLOUR_PALETTE.cream}FC`, // 99% solid frosted
        }}
      >
        <div className="flex h-full flex-col justify-between overflow-y-auto px-4 py-6 sm:px-6">
          {/* Navigation Links List */}
          <div className="space-y-2">
            <div className="px-2 pb-2 text-[11px] font-bold uppercase tracking-widest text-[#B8892D]">
              Navigation Menu
            </div>
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={closeMenu}
                  className={`flex items-center justify-between rounded-xl p-3.5 transition-all duration-200 ${
                    isActive
                      ? "shadow-xs"
                      : "hover:bg-[#4F5B2A]/5"
                  }`}
                  style={{
                    backgroundColor: isActive
                      ? `${COLOUR_PALETTE.secondary}50`
                      : "transparent",
                  }}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-xl border transition-colors"
                      style={{
                        backgroundColor: isActive
                          ? COLOUR_PALETTE.primaryDark
                          : `${COLOUR_PALETTE.secondary}30`,
                        borderColor: isActive
                          ? COLOUR_PALETTE.primaryDark
                          : `${COLOUR_PALETTE.secondary}80`,
                        color: isActive
                          ? COLOUR_PALETTE.cream
                          : COLOUR_PALETTE.primaryDark,
                      }}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div
                        className="text-base font-bold leading-tight"
                        style={{
                          color: isActive
                            ? COLOUR_PALETTE.accent
                            : COLOUR_PALETTE.primaryDark,
                        }}
                      >
                        {item.label}
                      </div>
                      {item.description && (
                        <div
                          className="text-xs opacity-75 mt-0.5"
                          style={{ color: COLOUR_PALETTE.primaryDark }}
                        >
                          {item.description}
                        </div>
                      )}
                    </div>
                  </div>
                  <ChevronRight
                    className={`h-5 w-5 transition-transform ${
                      isActive ? "text-[#B8892D]" : "text-[#4F5B2A]/40"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* Mobile Bottom Contact Actions */}
          <div
            className="border-t pt-5 pb-8 space-y-3"
            style={{ borderColor: `${COLOUR_PALETTE.secondary}70` }}
          >
            <Link
              href="/contact"
              onClick={closeMenu}
              className="flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-xs font-bold uppercase tracking-wider shadow-sm transition-all active:scale-98"
              style={{
                backgroundColor: COLOUR_PALETTE.primaryDark,
                color: COLOUR_PALETTE.cream,
              }}
            >
              <span>Contact Us</span>
              <ArrowRight className="h-4 w-4 text-[#B8892D]" />
            </Link>

            <a
              href="tel:+18005550199"
              className="flex items-center justify-center gap-2 py-2 text-xs font-semibold opacity-85 transition-opacity hover:opacity-100"
              style={{ color: COLOUR_PALETTE.primaryDark }}
            >
              <Phone className="h-3.5 w-3.5 text-[#B8892D]" />
              <span>Direct Support: +1 (800) 555-0199</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
