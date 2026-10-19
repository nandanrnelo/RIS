"use client";

import { useEffect, useState, useRef, useSyncExternalStore } from "react";
import { COLOUR_PALETTE } from "@/constants/colour";
import { QUICK_SERVICES_DATA, QuickServiceItem } from "@/data/heroBannerData";

// ============================================================================
// BRAND-PALETTE VECTOR ICONS
// Sculpted strictly with COLOUR_PALETTE (primaryDark, accent, secondary, cream)
// ============================================================================

function WaterEnergyBrandIcon() {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-16 w-16 transition-transform duration-500 ease-out group-hover:-translate-y-1 group-hover:scale-110 sm:h-[4.5rem] sm:w-[4.5rem]"
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id="brandDropGrad2"
          x1="24"
          y1="10"
          x2="58"
          y2="70"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#66773B" />
          <stop offset="50%" stopColor={COLOUR_PALETTE.primaryDark} />
          <stop offset="100%" stopColor="#353E1B" />
        </linearGradient>
        <linearGradient
          id="brandBoltGrad2"
          x1="36"
          y1="22"
          x2="46"
          y2="60"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#E2AE48" />
          <stop offset="50%" stopColor={COLOUR_PALETTE.accent} />
          <stop offset="100%" stopColor="#8C661D" />
        </linearGradient>
        <radialGradient
          id="brandHaloGrad2"
          cx="40"
          cy="44"
          r="30"
          gradientUnits="userSpaceOnUse"
        >
          <stop
            offset="0%"
            stopColor={COLOUR_PALETTE.secondary}
            stopOpacity="0.45"
          />
          <stop
            offset="100%"
            stopColor={COLOUR_PALETTE.cream}
            stopOpacity="0"
          />
        </radialGradient>
      </defs>
      <circle cx="40" cy="44" r="30" fill="url(#brandHaloGrad2)" />
      <path
        d="M40 10C40 10 18 34 18 48C18 60.1503 27.8497 70 40 70C52.1503 70 62 60.1503 62 48C62 34 40 10 40 10Z"
        fill="url(#brandDropGrad2)"
      />
      <path
        d="M26 44C26 35 32 23 40 17C37 25 31 36 29 43C28 46 27 48 26 44Z"
        fill={COLOUR_PALETTE.cream}
        fillOpacity="0.35"
      />
      <path
        d="M42 20L28 40H39L35 60L54 36H42L47 20H42Z"
        fill="url(#brandBoltGrad2)"
        stroke={COLOUR_PALETTE.cream}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PretreatmentBrandIcon() {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-16 w-16 transition-transform duration-500 ease-out group-hover:-translate-y-1 group-hover:scale-110 sm:h-[4.5rem] sm:w-[4.5rem]"
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id="drumOliveGrad2"
          x1="24"
          y1="26"
          x2="56"
          y2="58"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#66773B" />
          <stop offset="100%" stopColor={COLOUR_PALETTE.primaryDark} />
        </linearGradient>
      </defs>
      <circle
        cx="40"
        cy="42"
        r="30"
        fill={COLOUR_PALETTE.secondary}
        fillOpacity="0.25"
      />
      <circle
        cx="28"
        cy="18"
        r="3"
        fill={COLOUR_PALETTE.accent}
        fillOpacity="0.8"
      />
      <circle cx="37" cy="14" r="4" fill={COLOUR_PALETTE.secondary} />
      <circle
        cx="48"
        cy="17"
        r="3.5"
        fill={COLOUR_PALETTE.accent}
        fillOpacity="0.7"
      />
      <rect
        x="18"
        y="27"
        width="44"
        height="28"
        rx="6"
        fill={COLOUR_PALETTE.cream}
        stroke={COLOUR_PALETTE.primaryDark}
        strokeWidth="2.5"
      />
      <circle
        cx="40"
        cy="41"
        r="14"
        fill="url(#drumOliveGrad2)"
        stroke={COLOUR_PALETTE.accent}
        strokeWidth="2"
      />
      <line
        x1="40"
        y1="27"
        x2="40"
        y2="55"
        stroke={COLOUR_PALETTE.accent}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="26"
        y1="41"
        x2="54"
        y2="41"
        stroke={COLOUR_PALETTE.accent}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="40" cy="41" r="4" fill={COLOUR_PALETTE.accent} />
      <circle cx="40" cy="41" r="1.5" fill={COLOUR_PALETTE.cream} />
      <path
        d="M15 60H65"
        stroke={COLOUR_PALETTE.primaryDark}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M18 66C24 64.5 30 67.5 36 66C42 64.5 48 67.5 54 66C58 64.5 61 66 63 66"
        stroke={COLOUR_PALETTE.primaryDark}
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M22 71C28 69.5 34 72 40 71C46 69.5 52 72 58 71"
        stroke={COLOUR_PALETTE.accent}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SupportMaintenanceBrandIcon() {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-16 w-16 transition-transform duration-500 ease-out group-hover:-translate-y-1 group-hover:scale-110 sm:h-[4.5rem] sm:w-[4.5rem]"
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id="brandGearGrad2"
          x1="20"
          y1="16"
          x2="62"
          y2="60"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#DFAD46" />
          <stop offset="50%" stopColor={COLOUR_PALETTE.accent} />
          <stop offset="100%" stopColor="#8C661D" />
        </linearGradient>
        <linearGradient
          id="brandWrenchGrad2"
          x1="22"
          y1="62"
          x2="56"
          y2="22"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#353E1B" />
          <stop offset="60%" stopColor={COLOUR_PALETTE.primaryDark} />
          <stop offset="100%" stopColor="#66773B" />
        </linearGradient>
      </defs>
      <circle
        cx="40"
        cy="42"
        r="30"
        fill={COLOUR_PALETTE.secondary}
        fillOpacity="0.25"
      />
      <path
        d="M40 15L43 20H48.5L50 25.5L55 27.5L54.5 33L59 36.5L56.5 42L59.5 46.5L55.5 50.5L56.5 56L51.5 58L50 63.5L44.5 63.5L42 68.5H38L35.5 63.5L30 63.5L28.5 58L23.5 56L24.5 50.5L20.5 46.5L23.5 42L21 36.5L25.5 33L25 27.5L30 25.5L31.5 20H37L40 15Z"
        fill="url(#brandGearGrad2)"
        stroke={COLOUR_PALETTE.cream}
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <circle cx="40" cy="42" r="16" fill={COLOUR_PALETTE.cream} />
      <path
        d="M24 60C22 58 22 55.5 24 53.5L44 33.5L49.5 39L29.5 59C27.5 61 25.5 61 24 60Z"
        fill="url(#brandWrenchGrad2)"
        stroke={COLOUR_PALETTE.cream}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M43 32L49 26C49.5 23 53 21 56 21.5C57.5 22 58 24 57.5 25.5L54.5 28.5L57.5 31.5L60.5 28.5C62 28 63.5 28.5 64 30C64.5 33 62.5 36.5 59.5 37L54 43L46 35L43 32Z"
        fill="url(#brandWrenchGrad2)"
        stroke={COLOUR_PALETTE.cream}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle
        cx="56"
        cy="55"
        r="9"
        fill={COLOUR_PALETTE.primaryDark}
        stroke={COLOUR_PALETTE.cream}
        strokeWidth="2"
      />
      <path
        d="M52 55L55 58L60 52"
        stroke={COLOUR_PALETTE.accent}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChemicalWasteBrandIcon() {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-16 w-16 transition-transform duration-500 ease-out group-hover:-translate-y-1 group-hover:scale-110 sm:h-[4.5rem] sm:w-[4.5rem]"
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id="drumBodyGrad2"
          x1="28"
          y1="28"
          x2="52"
          y2="64"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#66773B" />
          <stop offset="60%" stopColor={COLOUR_PALETTE.primaryDark} />
          <stop offset="100%" stopColor="#353E1B" />
        </linearGradient>
      </defs>
      <circle
        cx="40"
        cy="42"
        r="30"
        fill={COLOUR_PALETTE.secondary}
        fillOpacity="0.25"
      />
      <path
        d="M54 20C62 25 66 34 66 44C66 48 64.5 53 62 56"
        stroke={COLOUR_PALETTE.accent}
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path
        d="M52 14L57 21L49 23"
        fill={COLOUR_PALETTE.accent}
        stroke={COLOUR_PALETTE.accent}
        strokeWidth="1"
        strokeLinejoin="round"
      />
      <path
        d="M56 63C49 68.5 40 70 32 66.5C26 64 21 60 18 54"
        stroke={COLOUR_PALETTE.primaryDark}
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path
        d="M21 61L16 53L24 52"
        fill={COLOUR_PALETTE.primaryDark}
        stroke={COLOUR_PALETTE.primaryDark}
        strokeWidth="1"
        strokeLinejoin="round"
      />
      <path
        d="M16 43C16 33 22 24 31 19"
        stroke={COLOUR_PALETTE.accent}
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path
        d="M29 14L36 20L29 24"
        fill={COLOUR_PALETTE.accent}
        stroke={COLOUR_PALETTE.accent}
        strokeWidth="1"
        strokeLinejoin="round"
      />
      <rect
        x="29"
        y="30"
        width="22"
        height="30"
        rx="4"
        fill="url(#drumBodyGrad2)"
        stroke={COLOUR_PALETTE.cream}
        strokeWidth="2"
      />
      <path
        d="M27 30C27 28 33 27 40 27C47 27 53 28 53 30C53 32 47 33 40 33C33 33 27 32 27 30Z"
        fill={COLOUR_PALETTE.accent}
        stroke={COLOUR_PALETTE.cream}
        strokeWidth="1.5"
      />
      <line
        x1="29"
        y1="39"
        x2="51"
        y2="39"
        stroke={COLOUR_PALETTE.accent}
        strokeWidth="2"
      />
      <line
        x1="29"
        y1="50"
        x2="51"
        y2="50"
        stroke={COLOUR_PALETTE.accent}
        strokeWidth="2"
      />
      <circle
        cx="59"
        cy="24"
        r="5.5"
        fill={COLOUR_PALETTE.accent}
        stroke={COLOUR_PALETTE.cream}
        strokeWidth="1.5"
      />
      <circle cx="59" cy="24" r="2" fill={COLOUR_PALETTE.primaryDark} />
    </svg>
  );
}

function renderServiceIcon(type: QuickServiceItem["iconType"]) {
  switch (type) {
    case "water-energy":
      return <WaterEnergyBrandIcon />;
    case "pretreatment":
      return <PretreatmentBrandIcon />;
    case "support-maintenance":
      return <SupportMaintenanceBrandIcon />;
    case "chemical-waste":
      return <ChemicalWasteBrandIcon />;
    default:
      return null;
  }
}

// ============================================================================
// MAIN COMPONENT: DYNAMIC CURVED SERPENTINE STREAM WITH SCROLL ANIMATION
// ============================================================================
const emptySubscribe = () => () => {};

export default function QuickServicesBar() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const isMounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
  const sectionRef = useRef<HTMLElement>(null);

  // Scroll listener for parallax & wave distortion
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer: Trigger staggered entrance when entering viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.15 }
    );

    const currentElem = sectionRef.current;
    if (currentElem) observer.observe(currentElem);

    return () => {
      if (currentElem) observer.unobserve(currentElem);
    };
  }, []);

  // Calculate dynamic parallax offset per card for flowing serpentine wave effect
  const getParallaxOffset = (index: number) => {
    if (!isMounted) return 0;
    // Alternating subtle motion factor
    const factors = [0.035, -0.045, 0.04, -0.03];
    return Math.sin(scrollY / 400 + index) * 12 * (factors[index] ? 1 : 0.8);
  };

  return (
    <section
      ref={sectionRef}
      id="capabilities-stream"
      aria-label="Core Industrial Capabilities Stream"
      className="relative w-full overflow-hidden pt-2 pb-8 transition-colors sm:pt-4 sm:pb-6 lg:pb-8"
      style={{ backgroundColor: COLOUR_PALETTE.cream }}
    >
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* 
          ========================================================================
          SECTION HEADER: FLUID CURVED TYPOGRAPHY
          ========================================================================
        */}
        <div className="mb-8 flex flex-col items-center text-center sm:mb-10 lg:mb-14">
          {/* Section Main Title */}
          <h2
            className="max-w-3xl text-2xl leading-tight font-extrabold tracking-tight sm:text-3xl md:text-4xl lg:text-[2.65rem]"
            style={{ color: COLOUR_PALETTE.primaryDark }}
          >
            Engineered Water &amp; Chemical
            <span
              className="block font-semibold sm:ml-2.5 sm:inline"
              style={{ color: COLOUR_PALETTE.accent }}
            >
              Operational Capabilities
            </span>
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-relaxed font-normal text-neutral-600 sm:text-base">
            Surveys, analysis, and system reviews for efficiency, pretreatment
            systems, ongoing support, and waste management.
          </p>
        </div>

        {/* 
          ========================================================================
          CONNECTING SERPENTINE HYDRO-WAVE SPLINE (DESKTOP)
          Flowing SVG S-Curve behind all 4 blocks (Not a rectangle!)
          ========================================================================
        */}
        <div className="pointer-events-none absolute top-[44%] left-0 -z-5 hidden w-full lg:block">
          <svg
            viewBox="0 0 1440 220"
            fill="none"
            preserveAspectRatio="none"
            className="h-44 w-full opacity-40"
          >
            {/* Base Continuous Conduit Spline */}
            <path
              d="M -40,110 C 260,20 480,200 720,110 C 960,20 1180,200 1480,110"
              stroke={COLOUR_PALETTE.secondary}
              strokeWidth="2.5"
              strokeDasharray="6 6"
            />
            {/* Glowing Flowing Energy Pulse on Scroll */}
            <path
              d="M -40,110 C 260,20 480,200 720,110 C 960,20 1180,200 1480,110"
              stroke={COLOUR_PALETTE.accent}
              strokeWidth="3"
              strokeDasharray="24 160"
              strokeDashoffset={-scrollY * 0.4}
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* 
          ========================================================================
          THE 4 CURVED ORGANIC SERVICE PODS (NO RECTANGLE!)
          Staggered undulating elevation with individual curved crowns
          ========================================================================
        */}
        <div className="grid grid-cols-1 items-start gap-7 sm:gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {QUICK_SERVICES_DATA.map((item, idx) => {
            // Alternating natural wave rhythm (staggered vertical placement)
            const staggerClasses = [
              "lg:translate-y-0",
              "lg:translate-y-10",
              "lg:-translate-y-3",
              "lg:translate-y-8",
            ][idx];

            const parallaxY = getParallaxOffset(idx);

            return (
              <div
                key={item.id}
                className={`relative transition-all duration-700 ease-out ${staggerClasses} ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{
                  transitionDelay: `${idx * 140}ms`,
                  transform: `translateY(${parallaxY}px)`,
                }}
              >
                {/* 
                  CURVED ORGANIC POD CONTAINER
                  Asymmetric rounded edges + individual wave cap + glass depth
                */}
                <div
                  className="group relative flex flex-col justify-between overflow-hidden rounded-[2.25rem] border bg-white/95 p-6 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_28px_60px_-15px_rgba(79,91,42,0.22)] sm:rounded-[2.6rem] sm:p-8"
                  style={{
                    borderColor: `${COLOUR_PALETTE.secondary}90`,
                    boxShadow:
                      "0 18px 45px -12px rgba(79, 91, 42, 0.12), 0 0 0 1px rgba(216, 201, 168, 0.3)",
                  }}
                >
                  {/* Top Individual Organic Wave Cap */}
                  <div className="pointer-events-none absolute top-0 right-0 left-0 h-3 overflow-hidden">
                    <svg
                      viewBox="0 0 400 20"
                      preserveAspectRatio="none"
                      className="h-full w-full fill-current transition-colors duration-300"
                      style={{ color: `${COLOUR_PALETTE.accent}30` }}
                    >
                      <path d="M 0,0 Q 200,20 400,0 L 400,20 L 0,20 Z" />
                    </svg>
                  </div>

                  {/* Header: Step Number Pill & Category Badge */}
                  <div className="flex items-center justify-between gap-2 pt-1 pb-4">
                    <span
                      className="flex h-7 w-7 items-center justify-center rounded-full font-mono text-xs font-bold shadow-xs transition-colors group-hover:scale-105"
                      style={{
                        backgroundColor: COLOUR_PALETTE.primaryDark,
                        color: COLOUR_PALETTE.cream,
                      }}
                    >
                      {item.stepNumber}
                    </span>

                    {/* Category Tag Badge */}
                    <span
                      className="inline-flex items-center rounded-full px-2.5 py-0.5 font-mono text-[10px] font-bold tracking-wider uppercase transition-colors"
                      style={{
                        backgroundColor: `${COLOUR_PALETTE.primaryDark}0F`,
                        color: COLOUR_PALETTE.primaryDark,
                      }}
                    >
                      {item.categoryTag}
                    </span>
                  </div>

                  {/* Center: Brand-Sculpted Vector Icon on Organic Hydro-Well */}
                  <div className="relative my-4 flex items-center justify-center">
                    <div
                      className="flex h-24 w-24 items-center justify-center rounded-3xl shadow-inner transition-transform duration-500 ease-out group-hover:rotate-3 sm:h-28 sm:w-28"
                      style={{
                        backgroundColor: `${COLOUR_PALETTE.cream}90`,
                        border: `1.5px solid ${COLOUR_PALETTE.secondary}70`,
                      }}
                    >
                      {renderServiceIcon(item.iconType)}
                    </div>
                  </div>

                  {/* Title: 2-Line Balanced Heading */}
                  <h3
                    className="mt-3 min-h-[3rem] text-center text-lg leading-snug font-bold tracking-tight whitespace-pre-line transition-colors duration-300 group-hover:text-black sm:text-[1.18rem]"
                    style={{ color: COLOUR_PALETTE.primaryDark }}
                  >
                    {item.title}
                  </h3>

                  {/* Description: Clean Warm Paragraph */}
                  <p className="mt-2.5 mb-3 text-center text-xs leading-relaxed font-normal text-neutral-600 sm:text-[0.875rem]">
                    {item.description}
                  </p>

                  {/* Bottom Hover Glow Accent */}
                  <span
                    className="absolute bottom-0 left-1/2 h-1 w-0 -translate-x-1/2 rounded-full transition-all duration-500 group-hover:w-24"
                    style={{ backgroundColor: COLOUR_PALETTE.accent }}
                    aria-hidden="true"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
