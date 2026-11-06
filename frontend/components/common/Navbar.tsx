"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronRight, ArrowRight, Phone } from "lucide-react";
import { COLOUR_PALETTE } from "@/constants/colour";
import { NAV_ITEMS } from "@/data/navbarData";
import { CONTACT_DETAILS } from "@/data/socialMediaData";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Elevate glass shadow and blur intensity on scroll
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
    <header className="pointer-events-none fixed inset-x-0 top-3 z-50 w-full px-4 transition-all duration-300 sm:top-5 sm:px-6 lg:px-8">
      {/* ================= FLOATING GLASSMORPHIC PILL CONTAINER ================= */}
      <div
        className={`pointer-events-auto relative mx-auto flex h-16 w-full max-w-6xl items-center justify-between rounded-full px-3.5 transition-all duration-300 sm:h-[4.5rem] sm:px-6 2xl:max-w-7xl ${
          isScrolled
            ? "shadow-[0_12px_36px_rgba(79,91,42,0.16),0_2px_12px_rgba(0,0,0,0.06),inset_0_1px_1px_rgba(255,255,255,0.85)] backdrop-blur-2xl"
            : "shadow-[0_8px_28px_rgba(79,91,42,0.1),inset_0_1px_1px_rgba(255,255,255,0.75)] backdrop-blur-xl"
        }`}
        style={{
          backgroundColor: isScrolled
            ? `${COLOUR_PALETTE.cream}FA` // 98% frosted cream
            : `${COLOUR_PALETTE.cream}F0`, // 94% translucent glass cream
          border: `1px solid ${
            isScrolled
              ? `${COLOUR_PALETTE.secondary}90`
              : "rgba(255, 255, 255, 0.75)"
          }`,
        }}
      >
        {/* ================= LEFT: BRAND EMBLEM & LOGO ================= */}
        <Link
          href="/"
          onClick={closeMenu}
          className="group flex items-center transition-opacity duration-200 hover:opacity-95"
          aria-label="Reflex Industrial Solutions Homepage"
        >
          {/* Mobile view (< sm): Standalone Circular Emblem Mark */}
          <div className="relative flex h-10 w-10 shrink-0 items-center justify-center sm:hidden">
            <Image
              src="/logo/logo.png"
              alt="Reflex Industrial Solutions"
              width={40}
              height={40}
              priority
              className="h-9 w-9 object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          {/* Tablet & Desktop (>= sm): Full horizontal lockup (Emblem + Name) */}
          <div className="relative hidden items-center sm:flex">
            <Image
              src="/logo/logo-name.png"
              alt="Reflex Industrial Solutions"
              width={260}
              height={64}
              priority
              className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-102 md:h-11"
            />
          </div>
        </Link>

        {/* ================= CENTER: PILL NAVIGATION LINKS (DESKTOP) ================= */}
        <nav
          className="hidden items-center gap-0.5 rounded-full p-1 lg:flex xl:gap-1"
          style={{
            backgroundColor: `${COLOUR_PALETTE.secondary}25`,
            border: `1px solid ${COLOUR_PALETTE.secondary}40`,
          }}
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
                className={`relative rounded-full px-3 py-1.5 text-xs font-semibold tracking-wide transition-all duration-300 xl:px-4 xl:py-2 xl:text-sm ${
                  isActive
                    ? "text-white shadow-sm"
                    : "text-neutral-700 hover:bg-black/5 hover:text-neutral-900"
                }`}
                style={{
                  backgroundColor: isActive
                    ? COLOUR_PALETTE.primaryDark
                    : "transparent",
                  color: isActive ? "#FFFFFF" : COLOUR_PALETTE.primaryDark,
                }}
              >
                <span>{item.label}</span>
                {isActive && (
                  <span
                    className="absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full"
                    style={{ backgroundColor: COLOUR_PALETTE.accent }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* ================= RIGHT: PILL CTA & MOBILE HAMBURGER ================= */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Contact Us Pill Button */}
          <Link
            href="/contact"
            className={`group hidden items-center gap-2 rounded-full py-2 pr-3 pl-4 text-xs font-bold tracking-wider uppercase shadow-md transition-all duration-300 hover:shadow-lg hover:brightness-105 active:scale-95 sm:inline-flex md:py-2.5 md:pr-3.5 md:pl-5 ${
              pathname === "/contact" || pathname.startsWith("/contact")
                ? "ring-2 ring-[#B8892D] ring-offset-2 ring-offset-[#F5EFE3]"
                : ""
            }`}
            style={{
              backgroundColor: COLOUR_PALETTE.primaryDark,
              color: COLOUR_PALETTE.cream,
            }}
          >
            <span>Contact Us</span>
            <span
              className="flex h-5 w-5 items-center justify-center rounded-full text-white transition-transform duration-300 group-hover:translate-x-0.5 md:h-6 md:w-6"
              style={{ backgroundColor: COLOUR_PALETTE.accent }}
            >
              <ArrowRight className="h-3 w-3 md:h-3.5 md:w-3.5" />
            </span>
          </Link>

          {/* Mobile Hamburger Pill Trigger */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-200 focus:ring-2 focus:ring-[#B8892D] focus:outline-hidden sm:h-11 sm:w-11 lg:hidden"
            style={{
              borderColor: `${COLOUR_PALETTE.secondary}90`,
              color: COLOUR_PALETTE.primaryDark,
              backgroundColor: isOpen
                ? `${COLOUR_PALETTE.secondary}50`
                : "transparent",
            }}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={
              isOpen ? "Close navigation menu" : "Open navigation menu"
            }
          >
            {isOpen ? (
              <X className="h-5 w-5 rotate-90 transition-transform duration-200" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* ================= MOBILE FLOATING GLASS ISLAND DROPDOWN ================= */}
        <div
          id="mobile-menu"
          className={`absolute inset-x-0 top-[calc(100%+0.75rem)] mx-auto w-full max-w-lg rounded-[2rem] border p-4 shadow-[0_20px_60px_rgba(79,91,42,0.18)] backdrop-blur-2xl transition-all duration-300 ease-out sm:p-5 lg:hidden ${
            isOpen
              ? "pointer-events-auto translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-4 opacity-0"
          }`}
          style={{
            backgroundColor: `${COLOUR_PALETTE.cream}FA`, // 98% frosted glass cream
            borderColor: `${COLOUR_PALETTE.secondary}90`,
            maxHeight: "calc(100vh - 6.5rem)",
            overflowY: "auto",
          }}
        >
          <div className="flex flex-col gap-2">
            <div
              className="flex items-center justify-between border-b px-2 pb-2.5"
              style={{ borderColor: `${COLOUR_PALETTE.secondary}60` }}
            >
              <Image
                src="/logo/logo-name.png"
                alt="Reflex Industrial Solutions"
                width={190}
                height={48}
                className="h-8 w-auto object-contain"
              />
              <span
                className="rounded-full px-2.5 py-0.5 text-[9px] font-bold tracking-widest uppercase"
                style={{
                  backgroundColor: `${COLOUR_PALETTE.accent}15`,
                  color: COLOUR_PALETTE.accent,
                }}
              >
                Menu
              </span>
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
                  className={`flex items-center justify-between rounded-2xl p-3 transition-all duration-200 ${
                    isActive ? "shadow-xs" : "hover:bg-black/5"
                  }`}
                  style={{
                    backgroundColor: isActive
                      ? `${COLOUR_PALETTE.secondary}50`
                      : "transparent",
                  }}
                >
                  <div className="flex items-center gap-3">
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
                        className="text-sm font-bold"
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
                          className="text-[11px] opacity-75"
                          style={{ color: COLOUR_PALETTE.primaryDark }}
                        >
                          {item.description}
                        </div>
                      )}
                    </div>
                  </div>
                  <ChevronRight
                    className={`h-4 w-4 transition-transform ${
                      isActive ? "text-[#B8892D]" : "text-[#4F5B2A]/40"
                    }`}
                  />
                </Link>
              );
            })}

            {/* Mobile Contact Button in Island */}
            <div
              className="mt-2 flex flex-col gap-2 border-t pt-3"
              style={{ borderColor: `${COLOUR_PALETTE.secondary}60` }}
            >
              <Link
                href="/contact"
                onClick={closeMenu}
                className={`flex w-full items-center justify-center gap-2 rounded-full py-3 text-xs font-bold tracking-wider uppercase shadow-md transition-all active:scale-98 ${
                  pathname === "/contact" || pathname.startsWith("/contact")
                    ? "ring-2 ring-[#B8892D] ring-offset-2"
                    : ""
                }`}
                style={{
                  backgroundColor: COLOUR_PALETTE.primaryDark,
                  color: COLOUR_PALETTE.cream,
                }}
              >
                <span>Contact Us</span>
                <ArrowRight className="h-3.5 w-3.5 text-[#B8892D]" />
              </Link>

              <a
                href={`tel:${CONTACT_DETAILS.phone.replace(/\s+/g, "")}`}
                className="flex items-center justify-center gap-2 py-1 text-[11px] font-semibold opacity-80 hover:opacity-100"
                style={{ color: COLOUR_PALETTE.primaryDark }}
              >
                <Phone className="h-3 w-3 text-[#B8892D]" />
                <span>Technical Hotline: {CONTACT_DETAILS.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
