import { COLOUR_PALETTE } from "@/constants/colour";

export interface HeroSlide {
  id: number;
  tagline: string;
  title: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  badge: string;
  image: string;
  alt: string;
  stat: {
    value: string;
    label: string;
  };
}

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    tagline: "Solutions You Can Trust",
    title: "Empowering Industries with\nReliable Chemical\nSolutions",
    description:
      "We are Reflex Industrial Solutions. An elite water management agency that caters to the water related problems of all types and diversity. The company offers water management solutions to entire gamut of industries.",
    ctaText: "Read More",
    ctaHref: "/about",
    secondaryCtaText: "Our Services",
    secondaryCtaHref: "/services",
    badge: "Reliable Water Solutions",
    image: "/images/hero/banner-1.jpg",
    alt: "Pristine mountain and crystal water mirror reflection representing reliable industrial water management and chemical solutions",
    stat: {
      value: "100%",
      label: "Water Process Reliability",
    },
  },
  {
    id: 2,
    tagline: "Innovation You Can Rely On",
    title: "Delivering Tailored Chemical Solutions",
    description:
      "We are Reflex Industrial Solutions. An elite water management agency that caters to the water related problems of all types and diversity. The company offers water management solutions to entire gamut of industries.",
    ctaText: "Read More",
    ctaHref: "/products",
    secondaryCtaText: "Explore Formulations",
    secondaryCtaHref: "/products",
    badge: "Custom R&D Chemistry",
    image: "/images/hero/banner-2.jpg",
    alt: "Aquatic botanical biosphere with swimming fish representing tailored chemical filtration and biological purification",
    stat: {
      value: "500+",
      label: "Tailored Industrial Formulations",
    },
  },
  {
    id: 3,
    tagline: "Driving Sustainability Forward",
    title: "Eco-Friendly Practices for a Better Tomorrow",
    description:
      "Committed to protecting the environment, we deliver sustainable chemical solutions that align with your goals and ensure a greener, healthier future for generations to come.",
    ctaText: "Read More",
    ctaHref: "/quality",
    secondaryCtaText: "Green Standards",
    secondaryCtaHref: "/quality",
    badge: "Sustainable Future",
    image: "/images/hero/cta-bg.jpg",
    alt: "Planet Earth enclosed within a crystal-clear water droplet representing environmental protection and sustainable water management",
    stat: {
      value: "99.8%",
      label: "Eco-Compliance & Zero Harm",
    },
  },
];

// ============================================================================
// CORE INDUSTRIAL SERVICES DATA (Embedded in banner data)
// ============================================================================

export interface QuickServiceItem {
  id: string;
  stepNumber: string;
  categoryTag: string;
  title: string;
  description: string;
  href: string;
  iconType:
    "water-energy" | "pretreatment" | "support-maintenance" | "chemical-waste";
  accentColor: string;
  primaryColor: string;
}

export const QUICK_SERVICES_DATA: QuickServiceItem[] = [
  {
    id: "water-energy-audits",
    stepNumber: "01",
    categoryTag: "System Diagnostics",
    title: "Water and\nEnergy Audits",
    description: "Surveys, analysis, and system reviews for efficiency.",
    href: "/services#audits",
    iconType: "water-energy",
    accentColor: COLOUR_PALETTE.accent,
    primaryColor: COLOUR_PALETTE.primaryDark,
  },
  {
    id: "pretreatment-systems",
    stepNumber: "02",
    categoryTag: "Purification Systems",
    title: "Pretreatment\nSystems",
    description: "Supply, setup, and upkeep of filters, RO, and softeners.",
    href: "/services#pretreatment",
    iconType: "pretreatment",
    accentColor: COLOUR_PALETTE.accent,
    primaryColor: COLOUR_PALETTE.primaryDark,
  },
  {
    id: "support-maintenance",
    stepNumber: "03",
    categoryTag: "Lifecycle Operations",
    title: "Support and\nMaintenance",
    description: "AMCs, operator training, and technical services.",
    href: "/services#maintenance",
    iconType: "support-maintenance",
    accentColor: COLOUR_PALETTE.accent,
    primaryColor: COLOUR_PALETTE.primaryDark,
  },
  {
    id: "chemical-waste-management",
    stepNumber: "04",
    categoryTag: "Ecology & Zero Discharge",
    title: "Chemical and\nWaste Management",
    description: "Metal treatment and sludge management solutions.",
    href: "/services#chemical-waste",
    iconType: "chemical-waste",
    accentColor: COLOUR_PALETTE.accent,
    primaryColor: COLOUR_PALETTE.primaryDark,
  },
];
