export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterConfig {
  company: {
    name: string;
    isoCertification: string;
    description: string;
    readMoreLink: string;
  };
  quickLinksTitle: string;
  quickLinks: FooterLink[];
  workingHours: {
    title: string;
    schedule: string;
  };
  getInTouch: {
    title: string;
  };
  copyright: string;
}

export const FOOTER_DATA: FooterConfig = {
  company: {
    name: "Reflex Industrial Solutions",
    isoCertification: "AN ISO 9001:2015 CERTIFIED COMPANY",
    description:
      "We are Reflex Industrial Solutions. An elite water management agency that caters to the water related problems of all types and diversity. The company offers water management solutions to entire gamut of industries.",
    readMoreLink: "/about",
  },
  quickLinksTitle: "Quick Links",
  quickLinks: [
    { label: "About Us", href: "/about" },
    { label: "Products", href: "/products" },
    { label: "Industries Served", href: "/services" },
    { label: "Quality", href: "/quality" },
    { label: "Contact Us", href: "/contact" },
  ],
  workingHours: {
    title: "working hours",
    schedule: "Mon – Sat: 10.00am to 6.00pm",
  },
  getInTouch: {
    title: "Get In Touch",
  },
  copyright:
    "Copyright © 2025 by Reflex Industrial Solutions. All Rights Reserved.",
};
