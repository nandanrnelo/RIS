"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Pause,
  Play,
} from "lucide-react";
import { COLOUR_PALETTE } from "@/constants/colour";
import { HERO_SLIDES } from "@/data/heroBannerData";

const AUTO_PLAY_INTERVAL = 4000; // 6 seconds per slide

export default function HeroBannerCarousel() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [typedTitle, setTypedTitle] = useState(HERO_SLIDES[0].title);
  const [isTyping, setIsTyping] = useState(false);

  const animTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const typingTimerRef = useRef<NodeJS.Timeout | null>(null);

  const totalSlides = HERO_SLIDES.length;
  const currentSlide = HERO_SLIDES[currentIdx];

  const goToSlide = useCallback((index: number) => {
    setIsAnimating(true);
    setCurrentIdx(index);
    setProgress(0);
    if (animTimeoutRef.current) clearTimeout(animTimeoutRef.current);
    animTimeoutRef.current = setTimeout(() => {
      setIsAnimating(false);
    }, 400);
  }, []);

  const nextSlide = useCallback(() => {
    goToSlide((currentIdx + 1) % totalSlides);
  }, [currentIdx, totalSlides, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((currentIdx - 1 + totalSlides) % totalSlides);
  }, [currentIdx, totalSlides, goToSlide]);

  // Typewriter effect triggered on slide change
  useEffect(() => {
    const fullText = HERO_SLIDES[currentIdx].title;

    if (typingTimerRef.current) clearTimeout(typingTimerRef.current);

    let charIdx = 0;
    const speed = 24; // 24ms per character for snappy typing

    const typeNextChar = () => {
      if (charIdx < fullText.length) {
        charIdx++;
        setTypedTitle(fullText.slice(0, charIdx));
        typingTimerRef.current = setTimeout(typeNextChar, speed);
      } else {
        setIsTyping(false);
      }
    };

    // Move initial reset inside async timer callback to prevent cascading renders
    typingTimerRef.current = setTimeout(() => {
      setTypedTitle("");
      setIsTyping(true);
      typeNextChar();
    }, 100);

    return () => {
      if (typingTimerRef.current) clearTimeout(typingTimerRef.current);
    };
  }, [currentIdx]);

  // Auto-play progress loop
  useEffect(() => {
    if (isPaused) return;

    const stepMs = 50;
    const increment = (stepMs / AUTO_PLAY_INTERVAL) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextSlide();
          return 0;
        }
        return prev + increment;
      });
    }, stepMs);

    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  // Clean up animation & typing timeouts
  useEffect(() => {
    return () => {
      if (animTimeoutRef.current) clearTimeout(animTimeoutRef.current);
      if (typingTimerRef.current) clearTimeout(typingTimerRef.current);
    };
  }, []);

  return (
    <section
      id="home"
      aria-label="Reflex Industrial Solutions Hero Carousel"
      className="relative overflow-hidden pt-24 pb-4 sm:pt-28 sm:pb-6 lg:pt-32"
      style={{
        backgroundColor: COLOUR_PALETTE.cream,
      }}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 2xl:max-w-[1380px]">
        {/* Main Split Grid: Left Content / Right Banners */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-14">
          {/* ================= LEFT SIDE: CONTENT ================= */}
          <div className="flex flex-col justify-center lg:col-span-7 xl:col-span-7">
            {/* Slide Tagline Eyebrow Pill */}
            <div className="mb-4 flex items-center gap-3">
              <div
                key={`tag-${currentSlide.id}`}
                className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-xs font-semibold tracking-wider uppercase transition-all duration-500 ease-out ${
                  isAnimating
                    ? "-translate-y-2 scale-95 opacity-0"
                    : "translate-y-0 scale-100 opacity-100"
                }`}
                style={{
                  backgroundColor: `${COLOUR_PALETTE.primaryDark}15`,
                  color: COLOUR_PALETTE.primaryDark,
                }}
              >
                <span
                  className="h-2 w-2 animate-pulse rounded-full"
                  style={{ backgroundColor: COLOUR_PALETTE.accent }}
                />
                <span className="font-medium tracking-wide">
                  {currentSlide.tagline}
                </span>
              </div>
            </div>

            {/* Headline Title with Fixed Minimum Height & Typewriter Effect */}
            <div className="flex min-h-[7.5rem] items-start sm:min-h-[8.5rem] md:min-h-[9.5rem] lg:min-h-[11rem] xl:min-h-[11.5rem]">
              <h1
                key={`title-${currentSlide.id}`}
                aria-label={currentSlide.title.replace(/\n/g, " ")}
                className={`text-3xl leading-[1.14] font-extrabold tracking-tight whitespace-pre-line transition-all duration-500 ease-out sm:text-4xl md:text-5xl lg:text-[2.65rem] xl:text-[3.1rem] ${
                  isAnimating
                    ? "translate-y-2 opacity-40"
                    : "translate-y-0 opacity-100"
                }`}
                style={{ color: "#1A2010" }}
              >
                <span>{typedTitle}</span>
                <span
                  className={`ml-1.5 inline-block h-[0.85em] w-[3px] rounded-full align-baseline transition-opacity duration-150 ${
                    isTyping ? "animate-pulse opacity-100" : "opacity-0"
                  }`}
                  style={{ backgroundColor: COLOUR_PALETTE.accent }}
                  aria-hidden="true"
                />
              </h1>
            </div>

            {/* Description Paragraph with Fixed Minimum Height & Fluid Glide */}
            <div className="mt-3.5 flex min-h-[5rem] items-start sm:mt-4 sm:min-h-[4.75rem]">
              <p
                key={`desc-${currentSlide.id}`}
                className={`text-sm leading-relaxed font-normal text-neutral-700 transition-all delay-100 duration-700 ease-out sm:text-base lg:text-lg ${
                  isAnimating
                    ? "translate-y-4 opacity-0"
                    : "translate-y-0 opacity-100"
                }`}
              >
                {currentSlide.description}
              </p>
            </div>

            {/* CTA Action Buttons with Smooth Entrance */}
            <div
              key={`cta-${currentSlide.id}`}
              className={`mt-7 flex flex-row items-center gap-2.5 transition-all delay-150 duration-700 ease-out sm:mt-8 sm:gap-4 ${
                isAnimating
                  ? "translate-y-2 opacity-80"
                  : "translate-y-0 opacity-100"
              }`}
            >
              {/* Primary "Read More" Button */}
              <Link
                href={currentSlide.ctaHref}
                className="group relative inline-flex flex-1 items-center justify-center gap-2 rounded-full py-2.5 pr-3 pl-4.5 text-xs font-semibold text-white shadow-md transition-all duration-300 hover:shadow-lg active:scale-[0.98] sm:flex-initial sm:gap-3 sm:py-3.5 sm:pr-4 sm:pl-6 sm:text-sm md:text-base"
                style={{
                  backgroundColor: COLOUR_PALETTE.primaryDark,
                }}
              >
                <span className="truncate">{currentSlide.ctaText}</span>
                <span
                  className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-white transition-transform duration-300 group-hover:translate-x-0.5 sm:h-8 sm:w-8"
                  style={{
                    backgroundColor: COLOUR_PALETTE.accent,
                  }}
                >
                  <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
                </span>
              </Link>

              {/* Secondary CTA Button */}
              {currentSlide.secondaryCtaText && (
                <Link
                  href={currentSlide.secondaryCtaHref || "#solutions"}
                  className="inline-flex flex-1 items-center justify-center rounded-full border px-3.5 py-2.5 text-xs font-medium transition-all duration-300 hover:bg-black/5 active:scale-[0.98] sm:flex-initial sm:px-5 sm:py-3.5 sm:text-sm md:text-base"
                  style={{
                    borderColor: `${COLOUR_PALETTE.primaryDark}40`,
                    color: COLOUR_PALETTE.primaryDark,
                  }}
                >
                  <span className="truncate">
                    {currentSlide.secondaryCtaText}
                  </span>
                </Link>
              )}
            </div>

            {/* Slider Controls, Progress Bar & Slide Thumbnails */}
            <div className="mt-8 flex items-center justify-between gap-3 border-t border-stone-300/60 pt-5 sm:mt-10 sm:pt-6">
              {/* Left: Previous / Next Arrow Controls & Pause Toggle */}
              <div className="flex items-center gap-1.5 sm:gap-2">
                <button
                  onClick={prevSlide}
                  aria-label="Previous banner slide"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-stone-300 bg-white/80 text-neutral-700 shadow-xs transition-all duration-200 hover:border-neutral-400 hover:bg-white active:scale-95 sm:h-10 sm:w-10"
                >
                  <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
                </button>
                <button
                  onClick={nextSlide}
                  aria-label="Next banner slide"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-stone-300 bg-white/80 text-neutral-700 shadow-xs transition-all duration-200 hover:border-neutral-400 hover:bg-white active:scale-95 sm:h-10 sm:w-10"
                >
                  <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
                </button>

                <button
                  onClick={() => setIsPaused(!isPaused)}
                  aria-label={isPaused ? "Play carousel" : "Pause carousel"}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-stone-200 bg-white/60 text-neutral-500 transition-all duration-200 hover:bg-white hover:text-neutral-800 sm:h-9 sm:w-9"
                  title={isPaused ? "Resume auto-play" : "Pause auto-play"}
                >
                  {isPaused ? (
                    <Play className="h-3 w-3 fill-current sm:h-3.5 sm:w-3.5" />
                  ) : (
                    <Pause className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                  )}
                </button>
              </div>

              {/* Right: Slide Interactive Badges & Progress Indicator */}
              <div className="flex items-center gap-1.5 sm:gap-2">
                {HERO_SLIDES.map((slide, idx) => {
                  const isActive = idx === currentIdx;
                  return (
                    <button
                      key={slide.id}
                      onClick={() => goToSlide(idx)}
                      className={`group relative flex h-8 items-center overflow-hidden rounded-full px-2.5 text-xs font-medium transition-all duration-300 sm:px-3 ${
                        isActive
                          ? "text-white shadow-sm"
                          : "border border-stone-200 bg-white/70 text-neutral-600 hover:bg-white"
                      }`}
                      style={{
                        backgroundColor: isActive
                          ? COLOUR_PALETTE.primaryDark
                          : undefined,
                      }}
                    >
                      <span className="font-mono">0{slide.id}</span>
                      <span className="hidden font-sans sm:ml-1 sm:inline">
                        {slide.tagline.split(" ")[0]}
                      </span>

                      {/* Micro Progress Bar on Active Item */}
                      {isActive && (
                        <span
                          className="absolute inset-x-0 bottom-0 h-[2.5px] rounded-full transition-all duration-75"
                          style={{
                            width: `${progress}%`,
                            backgroundColor: COLOUR_PALETTE.accent,
                          }}
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ================= RIGHT SIDE: BANNER VISUALS ================= */}
          <div className="lg:col-span-5 xl:col-span-5">
            {/* Double-Bezel Outer Hardware Shell */}
            <div
              className="relative rounded-[2rem] border p-2.5 shadow-2xl transition-all duration-500 sm:rounded-[2.5rem] sm:p-3"
              style={{
                backgroundColor: `${COLOUR_PALETTE.secondary}30`,
                borderColor: `${COLOUR_PALETTE.secondary}80`,
              }}
            >
              {/* Inner Core Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[1.6rem] bg-stone-900 shadow-inner sm:aspect-[16/11] sm:rounded-[2.1rem] lg:aspect-[4/3]">
                {/* Banner Images Stack with Crossfade */}
                {HERO_SLIDES.map((slide, idx) => {
                  const isCurrent = idx === currentIdx;
                  return (
                    <div
                      key={slide.id}
                      className={`absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                        isCurrent
                          ? "z-10 scale-100 opacity-100"
                          : "pointer-events-none z-0 scale-105 opacity-0"
                      }`}
                    >
                      <Image
                        src={slide.image}
                        alt={slide.alt}
                        fill
                        unoptimized
                        priority={idx === 0}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                        className="object-cover object-center"
                      />
                      {/* Subtle Ambient Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                    </div>
                  );
                })}

                {/* Slide Pill Switcher Indicator */}
                <div className="absolute right-4 bottom-4 z-20 flex items-center gap-1.5 rounded-full border border-white/15 bg-black/55 p-1.5 backdrop-blur-md sm:right-6 sm:bottom-6">
                  {HERO_SLIDES.map((slide, idx) => (
                    <button
                      key={slide.id}
                      onClick={() => goToSlide(idx)}
                      aria-label={`Jump to slide ${slide.id}`}
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        idx === currentIdx
                          ? "w-7"
                          : "w-2.5 bg-white/40 hover:bg-white/70"
                      }`}
                      style={{
                        backgroundColor:
                          idx === currentIdx
                            ? COLOUR_PALETTE.accent
                            : undefined,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Subtext info under the banner */}
            <div className="mt-3.5 flex items-center justify-between px-2 text-xs text-neutral-500">
              <span className="flex items-center gap-1.5">
                <span
                  className="inline-block h-1.5 w-1.5 rounded-full"
                  style={{ backgroundColor: COLOUR_PALETTE.primaryDark }}
                />
                Comprehensive Water Management & Industrial Chemicals
              </span>
              <span className="hidden font-mono sm:inline">
                Gamut of Industries
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
