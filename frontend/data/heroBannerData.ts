import { COLOUR_PALETTE } from "@/constants/colour";
import { CONTACT_DETAILS } from "@/data/socialMediaData";

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

// ============================================================================
// HOME ABOUT & CORE CAPABILITIES DATA
// Unified home screen dataset for HomeAboutSection
// ============================================================================

export interface BusinessAreaCard {
  id: string;
  title: string;
  subtitle: string;
  iconType: "pre-treatment" | "boiler" | "fuel" | "cooling";
}

export interface HomeAboutData {
  eyebrowBadge: {
    tag: string;
    label: string;
  };
  companyName: string;
  headlinePrefix: string;
  headlineHighlight: string;
  description: string;
  businessAreaHeading: string;
  businessAreaSubheading: string;
  businessAreas: BusinessAreaCard[];
  ctaText: string;
  ctaHref: string;
  secondaryCtaText: string;
  secondaryCtaHref: string;
  telemetry: {
    liveStatus: string;
    certificationBadge: string;
    hotlineLabel: string;
    phone: string;
    phoneHref: string;
    metricValue: string;
    metricLabel: string;
  };
  images: {
    hero: {
      src: string;
      alt: string;
      caption: string;
    };
    dotPatternTop: string;
    dotPatternCenter: string;
  };
  palette: typeof COLOUR_PALETTE;
}

export const HOME_ABOUT_DATA: HomeAboutData = {
  eyebrowBadge: {
    tag: "Welcome To",
    label: "Reflex Industrial Solutions",
  },
  companyName: "Reflex Industrial Solutions",
  headlinePrefix: "Welcome To",
  headlineHighlight: "Reflex Industrial Solutions",
  description:
    "We are Reflex Industrial Solutions. An elite water management and industrial chemical solutions agency that caters to water-related engineering challenges of all types and diversity. The company offers advanced water management solutions to the entire gamut of industries such as fertilizer, petroleum refining, petrochemicals, power generation, mining, and mineral processing.",
  businessAreaHeading: "Our Core Business Areas for Water",
  businessAreaSubheading:
    "End-to-end industrial chemistry formulations engineered for maximum operational uptime and thermal efficiency.",
  businessAreas: [
    {
      id: "pre-treatment",
      title: "Pre Treatment Chemicals",
      subtitle: "Clarifiers, coagulants & RO membrane protection",
      iconType: "pre-treatment",
    },
    {
      id: "boiler-water",
      title: "Boiler Water Treatment",
      subtitle: "High-pressure corrosion & scale control",
      iconType: "boiler",
    },
    {
      id: "fuel-fire-side",
      title: "Fuel & Fire Side Treatment",
      subtitle: "Combustion efficiency & slag minimization",
      iconType: "fuel",
    },
    {
      id: "cooling-water",
      title: "Cooling Water Treatment",
      subtitle: "Microbiological biocides & heat exchange defense",
      iconType: "cooling",
    },
  ],
  ctaText: "Read More",
  ctaHref: "/about",
  secondaryCtaText: "Explore Products",
  secondaryCtaHref: "/products",
  telemetry: {
    liveStatus: "24/7 Field Operations Active",
    certificationBadge: "ISO 9001:2015 Certified",
    hotlineLabel: "Call Us Now",
    phone: CONTACT_DETAILS.phone,
    phoneHref: `tel:${CONTACT_DETAILS.phone.replace(/\s+/g, "")}`,
    metricValue: "100%",
    metricLabel: "Process Reliability",
  },
  images: {
    hero: {
      src: "/images/about/water-treatment-engineers.jpg",
      alt: "Reflex Industrial Solutions chemical engineers conducting technical water quality analysis and dosing monitoring at an industrial water treatment plant",
      caption: "High-Volume Chemical Dosing & Filtration Operations",
    },
    dotPatternTop: "/images/about/shape-6.png",
    dotPatternCenter: "/images/about/shape-15.png",
  },
  palette: COLOUR_PALETTE,
};

// ============================================================================
// HOME PRODUCTS SECTION DATA
// Unified home screen dataset for HomeProductsSection
// ============================================================================

export interface ProductItem {
  id: string;
  stepNumber: string;
  title: string;
  tagline: string;
  description: string;
  href: string;
  iconType:
    | "boiler-water"
    | "fuel-fireside"
    | "cooling-water"
    | "raw-waste"
    | "ro-membrane"
    | "speciality"
    | "equipment"
    | "boiler-feed";
  popularBadge?: string;
}

export interface HomeProductsSectionData {
  eyebrow: string;
  titleLine1: string;
  titleLine2: string;
  eyebrowBadge?: {
    tag: string;
    label: string;
  };
  titlePrefix?: string;
  titleHighlight?: string;
  titleSuffix?: string;
  description: string;
  image: {
    src: string;
    alt: string;
    tag: string;
    caption: string;
  };
  products: ProductItem[];
  ctaText: string;
  ctaHref: string;
  secondaryCtaText: string;
  secondaryCtaHref: string;
}

export const HOME_PRODUCTS_DATA: HomeProductsSectionData = {
  eyebrow: "Our Products",
  titleLine1: "High-Performance Chemical Formulations",
  titleLine2: "& Industrial Treatment Systems",
  eyebrowBadge: {
    tag: "Our Products",
    label: "Reflex Industrial Solutions",
  },
  titlePrefix: "High-Performance",
  titleHighlight: "Chemical Formulations",
  titleSuffix: "& Treatment Systems",
  description:
    "Engineered specifically for heavy industrial utilities, our high-purity chemical blends and automated monitoring technologies protect vital assets, maximize thermal efficiency, and guarantee environmental compliance.",
  image: {
    src: "/images/products/products-hero.jpg",
    alt: "State-of-the-art industrial reverse osmosis membrane arrays and automated chemical dosing skids in a modern chemical engineering facility",
    tag: "Active Industrial Installation",
    caption: "Automated Multi-Stage Membrane & Dosing Systems",
  },
  products: [
    {
      id: "boiler-water-treatment",
      stepNumber: "01",
      title: "Boiler Water Treatment",
      tagline: "Corrosion & Scale Inhibition",
      description:
        "High-performance oxygen scavengers, polymer conditioners, and alkalinity builders formulated for low to ultra-high pressure steam boilers.",
      href: "/products#boiler-water",
      iconType: "boiler-water",
      popularBadge: "Core Line",
    },
    {
      id: "fuel-fireside-treatment",
      stepNumber: "02",
      title: "Fuel & Fireside Treatment",
      tagline: "Combustion Optimization",
      description:
        "Solid fuel additives and furnace oil conditioning catalysts that elevate thermal heat transfer while mitigating slagging and acid dew point corrosion.",
      href: "/products#fuel-treatment",
      iconType: "fuel-fireside",
    },
    {
      id: "cooling-water-treatment",
      stepNumber: "03",
      title: "Cooling Water Treatment",
      tagline: "Heat Exchanger Defense",
      description:
        "Broad-spectrum oxidizing & non-oxidizing biocides, biodispersants, and organic corrosion inhibitors for open recirculating and closed loops.",
      href: "/products#cooling-water",
      iconType: "cooling-water",
      popularBadge: "Eco-Safe",
    },
    {
      id: "raw-waste-water-treatment",
      stepNumber: "04",
      title: "Raw & Wastewater Treatment",
      tagline: "Zero Discharge Clarification",
      description:
        "Specialized coagulants, polyamines, heavy metal precipitants, and high-molecular flocculants engineered for zero liquid discharge (ZLD).",
      href: "/products#wastewater",
      iconType: "raw-waste",
    },
    {
      id: "ro-membrane-treatment",
      stepNumber: "05",
      title: "Reverse Osmosis / UF / Nano",
      tagline: "Membrane Life Extension",
      description:
        "NSF-certified membrane antiscalants, precision silica dispersants, and CIP chemical cleaners that restore flux and extend membrane longevity.",
      href: "/products#membrane-treatment",
      iconType: "ro-membrane",
      popularBadge: "High Demand",
    },
    {
      id: "speciality-products",
      stepNumber: "06",
      title: "Speciality Products",
      tagline: "Tailored Process Chemistries",
      description:
        "Custom specialty formulations for sugar processing, refineries, paint booths, metal finishing, and customized industrial descaling.",
      href: "/products#speciality",
      iconType: "speciality",
    },
    {
      id: "plants-monitoring-equipment",
      stepNumber: "07",
      title: "Plants & Monitoring Equipment",
      tagline: "Telemetry & Automated Skids",
      description:
        "Smart automated chemical dosing skids, inline pH/ORP controllers, conductivity monitors, and digital real-time water quality telemetry.",
      href: "/products#equipment",
      iconType: "equipment",
      popularBadge: "Smart Tech",
    },
    {
      id: "boiler-feed-water",
      stepNumber: "08",
      title: "Boiler Feed Water Treatment",
      tagline: "Demineralization & Polishing",
      description:
        "Ion exchange resin regeneration chemicals, condensate return line neutralizing amines, and feed-water de-aerator protective chemistries.",
      href: "/products#boiler-feed",
      iconType: "boiler-feed",
    },
  ],
  ctaText: "Explore Full Catalog",
  ctaHref: "/products",
  secondaryCtaText: "Request Technical TDS / SDS",
  secondaryCtaHref: "/contact",
};
