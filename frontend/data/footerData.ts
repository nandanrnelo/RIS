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
    name: "RIS Industries",
    isoCertification: "AN ISO 9001:2015 CERTIFIED COMPANY",
    description:
      "We are RIS Industries. An elite precision engineering and industrial services agency that caters to high-grade manufacturing, industrial machining, and technical solutions.",
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
  copyright: "Copyright © 2025 by RIS Industries. All Rights Reserved.",
};
