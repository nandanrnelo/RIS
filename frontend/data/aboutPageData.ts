import { CONTACT_DETAILS } from "./socialMediaData";

export interface AboutChapter {
  id: string;
  chapterNumber: string;
  tagline: string;
  title: string;
  paragraphs: string[];
  quote?: string;
}

export interface AboutPageData {
  title: string;
  breadcrumbs: { label: string; href: string }[];
  subtitle: string;
  companyName: string;
  headlineLine1: string;
  headlineLine2: string;
  leadParagraph: string;
  topParagraphs: string[];
  bottomParagraphsPart1: string[];
  offeringsTitle: string;
  bottomParagraphsPart2: string[];
  closingStatement: string;
  chapters: AboutChapter[];
  image: {
    src: string;
    alt: string;
    phoneLabel: string;
    phone: string;
    phoneHref: string;
    insetVideoSrc: string;
  };
}

export const ABOUT_PAGE_DATA: AboutPageData = {
  title: "About Us",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
  ],
  subtitle: "Corporate Profile",
  companyName: "Reflex Industrial Solutions",
  headlineLine1: "Engineered Chemistry.",
  headlineLine2: "Over a Century of Mastery.",
  leadParagraph:
    "We are Reflex Industrial Solutions. An elite industrial water management agency that caters to process water and wastewater challenges of all types and diversity. The company offers total water management solutions across the entire gamut of process industries such as fertilizer, petroleum refining, petrochemicals, power generation, mining, mineral processing, and core chemical manufacturing.",
  topParagraphs: [
    "Reflex Industrial Solutions is promoted and managed by a team of water treatment professionals with a combined experience of over 100 years in industrial water management. Their association with the industry spans over two decades.",
    "This collective expertise enables Reflex Industrial Solutions to provide extremely customized and industry-specific solutions tailored directly to the metallurgy and operational dynamics of each client facility.",
    "Reflex Industrial Solutions is a leader in the chemical manufacturing, sales, and services domain with a penchant for excellence that is championed by proven domain knowledge and authoritative thought leadership.",
  ],
  bottomParagraphsPart1: [
    "We have an impeccable track record for excellence that goes far beyond producing and supplying chemical formulations, establishing ourselves as one of the premier chemical and utility service providers in India. We are deeply committed to your success and bring unsurpassed insights and a stellar track record that propels your company to greater operational authority in your industry.",
    "A brainchild of distinguished and enterprising engineers, Reflex Industrial Solutions began its journey in Karnataka, India. It has since grown from strength to strength with an influential presence across the breadth of Indian industries with a strategic foothold nationwide.",
    "Reflex Industrial Solutions maintains a distinct footprint in chemical manufacturing and provides turnkey solutions for sales, distribution, and allied engineering services. Our strategically located assets—including automated manufacturing facilities, bulk chemical storage terminals, specialized warehouses, and technical service offices—give you a decisive competitive edge. Faster access to the services you need ensures rapid turnaround times, enhanced plant uptime, and substantial operating cost savings.",
  ],
  offeringsTitle: "The Offerings",
  bottomParagraphsPart2: [
    "The diverse product range offered by Reflex Industrial Solutions encompasses all core areas of industrial water treatment, including Cooling Water, Chilled Water, Boiler Feed Water, Raw Water, Wastewater, Fuel and Fireside Additives, Reverse Osmosis Membrane Treatment, and specialized process additives. High-quality technical support is an indispensable dimension of our total water management approach.",
    "Being a responsible corporate citizen and sharing our clients' concerns on environmental preservation, Reflex Industrial Solutions ensures that all products are manufactured, formulated, and applied in strict conformity to prevailing statutory environmental protection mandates.",
  ],
  closingStatement:
    "In short, Reflex Industrial Solutions has arrived, ensuring total customer satisfaction, now and forever.",
  chapters: [
    {
      id: "scope-leadership",
      chapterNumber: "01",
      tagline: "Corporate Scope & Leadership",
      title: "We Are Reflex Industrial Solutions",
      paragraphs: [
        "We are Reflex Industrial Solutions. An elite industrial water management agency that caters to process water and wastewater challenges of all types and diversity. The company offers total water management solutions across the entire gamut of process industries such as fertilizer, petroleum refining, petrochemicals, power generation, mining, mineral processing, and core chemical manufacturing.",
        "Reflex Industrial Solutions is promoted and managed by a team of water treatment professionals with a combined experience of over 100 years in industrial water management. Their association with the industry spans over two decades.",
        "This collective expertise enables Reflex Industrial Solutions to provide extremely customized and industry-specific solutions tailored directly to the metallurgy and operational dynamics of each client facility.",
        "Reflex Industrial Solutions is a leader in the chemical manufacturing, sales, and services domain with a penchant for excellence that is championed by proven domain knowledge and authoritative thought leadership.",
      ],
    },
    {
      id: "heritage-infrastructure",
      chapterNumber: "02",
      tagline: "Heritage & Strategic Infrastructure",
      title: "From Karnataka Origins to a Strategic Pan-India Footprint",
      paragraphs: [
        "We have an impeccable track record for excellence that goes far beyond producing and supplying chemical formulations, establishing ourselves as one of the premier chemical and utility service providers in India. We are deeply committed to your success and bring unsurpassed insights and a stellar track record that propels your company to greater operational authority in your industry.",
        "A brainchild of distinguished and enterprising engineers, Reflex Industrial Solutions began its journey in Karnataka, India. It has since grown from strength to strength with an influential presence across the breadth of Indian industries with a strategic foothold nationwide.",
        "Reflex Industrial Solutions maintains a distinct footprint in chemical manufacturing and provides turnkey solutions for sales, distribution, and allied engineering services. Our strategically located assets—including automated manufacturing facilities, bulk chemical storage terminals, specialized warehouses, and technical service offices—give you a decisive competitive edge. Faster access to the services you need ensures rapid turnaround times, enhanced plant uptime, and substantial operating cost savings.",
      ],
      quote:
        "Faster access to specialized water chemistry programs ensures rapid turnaround times, maximum plant uptime, and substantial operating cost savings.",
    },
    {
      id: "offerings-stewardship",
      chapterNumber: "03",
      tagline: "Product Spectrum & Mandate",
      title: "The Offerings & Environmental Responsibility",
      paragraphs: [
        "The diverse product range offered by Reflex Industrial Solutions encompasses all core areas of industrial water treatment, including Cooling Water, Chilled Water, Boiler Feed Water, Raw Water, Wastewater, Fuel and Fireside Additives, Reverse Osmosis Membrane Treatment, and specialized process additives. High-quality technical support is an indispensable dimension of our total water management approach.",
        "Being a responsible corporate citizen and sharing our clients' concerns on environmental preservation, Reflex Industrial Solutions ensures that all products are manufactured, formulated, and applied in strict conformity to prevailing statutory environmental protection mandates.",
      ],
    },
  ],
  image: {
    src: "/images/about/water-treatment-engineers.jpg",
    alt: "Reflex Industrial Solutions certified chemical engineers conducting industrial water quality inspection and chemical dosing monitoring",
    phoneLabel: "Call Us Now",
    phone: CONTACT_DETAILS.phone,
    phoneHref: `tel:${CONTACT_DETAILS.phone.replace(/\s+/g, "")}`,
    insetVideoSrc: "/images/about/video-1.jpg",
  },
};
