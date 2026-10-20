import { CONTACT_DETAILS } from "./socialMediaData";

export interface ContactChannel {
  id: string;
  title: string;
  value: string;
  href: string;
  description: string;
  badge?: string;
}

export interface AssurancePillar {
  title: string;
  description: string;
  badge: string;
}

export interface QuickMetric {
  value: string;
  label: string;
  detail: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ContactPageData {
  title: string;
  companyName: string;
  headlineLine1: string;
  headlineLine2: string;
  leadParagraph: string;
  breadcrumbs: Array<{ label: string; href: string }>;
  office: {
    title: string;
    street: string;
    area: string;
    cityStateZip: string;
    country: string;
    fullAddress: string;
    landmark: string;
    googleMapsEmbedQuery: string;
    googleMapsDirectionsUrl: string;
    operatingHours: {
      days: string;
      hours: string;
      emergency: string;
    };
  };
  contactChannels: ContactChannel[];
  quickMetrics: QuickMetric[];
  assurancePillars: AssurancePillar[];
  industryOptions: Array<{ id: string; name: string }>;
  inquirySubjects: Array<{ id: string; name: string; category: string }>;
  uploadConstraints: {
    maxSizeBytes: number;
    maxSizeDisplay: string;
    allowedExtensions: string[];
    allowedMimeTypes: string[];
    description: string;
  };
  faqs: FaqItem[];
}

export const CONTACT_PAGE_DATA: ContactPageData = {
  title: "Contact Us",
  companyName: "Reflex Industrial Solutions",
  headlineLine1: "Direct Technical Desk",
  headlineLine2: "& Engineering Consultation",
  leadParagraph:
    "Engage directly with our certified water treatment specialists and chemical engineers. Whether you need a comprehensive plant water audit, specialty chemical supply quotes, analytical water sample testing, or urgent troubleshooting, our technical team is at your service.",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Contact Us", href: "/contact" },
  ],
  office: {
    title: "Corporate Headquarters & Technical Service Bureau",
    street: "No. 8, Kamala Nagar",
    area: "Porur",
    cityStateZip: "Bangalore– 600116, Karnataka",
    country: "India",
    fullAddress:
      "No. 8, Kamala Nagar, Porur, Bangalore– 600116, Karnataka, India",
    landmark: "Near Porur Junction, Greater BangaloreIndustrial Corridor",
    googleMapsEmbedQuery: "Kamala+Nagar+Porur+Bangalore+600116",
    googleMapsDirectionsUrl:
      "https://www.google.com/maps/search/?api=1&query=Kamala+Nagar+Porur+Bangalore+600116",
    operatingHours: {
      days: "Monday – Saturday",
      hours: "10:00 AM – 6:00 PM IST",
      emergency: "24/7 Field Engineering Emergency Response Active",
    },
  },
  contactChannels: [
    {
      id: "phone",
      title: "Direct Technical Hotline",
      value: CONTACT_DETAILS.phone,
      href: `tel:${CONTACT_DETAILS.phone.replace(/\s+/g, "")}`,
      description: "Immediate triage with senior water treatment specialists",
      badge: "Fastest Response",
    },
    {
      id: "email",
      title: "Official Engineering Desk",
      value: CONTACT_DETAILS.email,
      href: `mailto:${CONTACT_DETAILS.email}`,
      description: "Direct routing for RFQs, tenders, and technical drawings",
      badge: "Official Inquiries",
    },
    {
      id: "headquarters",
      title: "Corporate Headquarters",
      value: "Porur, Bangalore– 600116",
      href: "https://www.google.com/maps/search/?api=1&query=Kamala+Nagar+Porur+Bangalore+600116",
      description: "No. 8, Kamala Nagar, Porur, Bangalore, Karnataka, India",
      badge: "ISO 9001:2015 Center",
    },
  ],
  quickMetrics: [
    {
      value: "< 2 Hours",
      label: "Engineering SLA",
      detail: "Average turnaround for critical plant inquiries",
    },
    {
      value: "Bangalore, KA",
      label: "Operational HQ",
      detail: "Strategic hub with nationwide logistical reach",
    },
    {
      value: "100+ Years",
      label: "Combined Expertise",
      detail: "Senior chemical leaders overseeing diagnostics",
    },
    {
      value: "14 Sectors",
      label: "Process Industries",
      detail: "Proven water chemistry across heavy manufacturing",
    },
  ],
  assurancePillars: [
    {
      title: "Rapid Technical Triage",
      description:
        "Every inquiry is reviewed by an experienced industrial chemist within 2 hours of receipt.",
      badge: "SLA Guaranteed",
    },
    {
      title: "Complimentary Initial Water Audit",
      description:
        "Qualifying industrial facilities receive a no-obligation preliminary review of their water chemistry parameters.",
      badge: "Zero Obligation",
    },
    {
      title: "Strict Commercial NDA & Data Privacy",
      description:
        "All uploaded water reports, P&ID schematics, and plant telemetry remain strictly confidential.",
      badge: "100% Confidential",
    },
    {
      title: "Pan-India Field Engineers",
      description:
        "Mobile field service engineers available for on-site plant surveys, sampling, and commissioning nationwide.",
      badge: "Nationwide Reach",
    },
  ],
  industryOptions: [
    { id: "refinery-gas", name: "Refinery and Gas Processing" },
    { id: "power-desalination", name: "Power and Desalination" },
    { id: "petrochemicals-polymers", name: "Petrochemicals and Polymers" },
    { id: "paints-coatings", name: "Paints and Coatings" },
    { id: "fertilizer-agriculture", name: "Fertilizer and Agriculture" },
    { id: "construction", name: "Construction" },
    { id: "steel-aluminum", name: "Steel and Aluminum" },
    { id: "food-beverages", name: "Food & Beverages" },
    { id: "dairy-processing", name: "Dairy Processing Industries" },
    { id: "metal-mining", name: "Metal and Mining Industry" },
    { id: "municipal-water", name: "Municipal Water Treatment" },
    { id: "pharma-lifesciences", name: "Pharma and Life Science" },
    { id: "power-industries", name: "Power Industries" },
    { id: "textile-industries", name: "Textile Industries" },
    { id: "other-industrial", name: "Other Heavy Industrial Process" },
  ],
  inquirySubjects: [
    {
      id: "water-energy-audit",
      name: "Water & Energy Audit / System Survey",
      category: "Field Engineering",
    },
    {
      id: "specialty-chemicals-rfq",
      name: "Specialty Chemical Supply & Commercial RFQ",
      category: "Formulations & Supply",
    },
    {
      id: "boiler-cooling-water",
      name: "Boiler & Cooling Water Treatment Program",
      category: "Process Chemistry",
    },
    {
      id: "ro-membrane-pretreatment",
      name: "RO Membrane Antiscalant & Pretreatment Skids",
      category: "Membrane Solutions",
    },
    {
      id: "wastewater-zld",
      name: "Effluent / Wastewater Treatment & ZLD Compliance",
      category: "Environmental",
    },
    {
      id: "analytical-lab-testing",
      name: "Analytical Water & Scale Sample Laboratory Testing",
      category: "Lab Services",
    },
    {
      id: "amc-field-maintenance",
      name: "Annual Maintenance Contract (AMC) & Field Support",
      category: "Operations & Support",
    },
    {
      id: "general-consultation",
      name: "General Technical Consultation & Partnership",
      category: "General",
    },
  ],
  uploadConstraints: {
    maxSizeBytes: 15 * 1024 * 1024, // 15 MB
    maxSizeDisplay: "15 MB",
    allowedExtensions: [
      ".pdf",
      ".doc",
      ".docx",
      ".xls",
      ".xlsx",
      ".csv",
      ".jpg",
      ".jpeg",
      ".png",
    ],
    allowedMimeTypes: [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "application/vnd.ms-excel",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "text/csv",
      "image/jpeg",
      "image/png",
    ],
    description:
      "Upload water analysis reports, plant flow diagrams (P&ID), equipment datasheets, or RFQ tenders. Formats: PDF, Word, Excel, CSV, JPG, PNG (Max 15 MB). Optional attachment.",
  },
  faqs: [
    {
      question:
        "How quickly will an engineer respond to our technical inquiry?",
      answer:
        "Our engineering triage team in Bangalorereviews every submitted request within 2 business hours. For urgent plant shutdowns or critical dosing emergencies, call our technical hotline at 044 42805983 for immediate escalation.",
    },
    {
      question: "What types of documents can I attach to the inquiry?",
      answer:
        "You can optionally upload water chemistry test reports, system flow diagrams (P&ID), feedwater analytical data, or equipment specifications in PDF, Excel, Word, or image formats (up to 15 MB). Document upload is optional.",
    },
    {
      question: "Do you offer on-site surveys and water sampling across India?",
      answer:
        "Yes. Reflex Industrial Solutions maintains a nationwide network of certified field service engineers and technical offices capable of conducting on-site chemical surveys, deposit scale analysis, and water audits across India.",
    },
    {
      question:
        "Is our plant operating telemetry and formulation data kept confidential?",
      answer:
        "Strictly confidential. We operate under strict commercial non-disclosure protocols. All uploaded analytical test sheets, flow rates, and operating parameters are protected and accessible solely by the assigned technical team.",
    },
  ],
};
