export interface SocialMediaLink {
  id: string;
  platform: "facebook" | "twitter" | "instagram" | "linkedin" | "youtube";
  name: string;
  url: string;
  ariaLabel: string;
}

export interface ContactDetails {
  email: string;
  phone: string;
}

export const CONTACT_DETAILS: ContactDetails = {
  email: "info@ris-industries.com",
  phone: "044 42805983",
};

export const SOCIAL_MEDIA_LINKS: SocialMediaLink[] = [
  {
    id: "facebook",
    platform: "facebook",
    name: "Facebook",
    url: "https://facebook.com",
    ariaLabel: "Follow RIS Industries on Facebook",
  },
  {
    id: "twitter",
    platform: "twitter",
    name: "Twitter / X",
    url: "https://twitter.com",
    ariaLabel: "Follow RIS Industries on Twitter",
  },
  {
    id: "instagram",
    platform: "instagram",
    name: "Instagram",
    url: "https://instagram.com",
    ariaLabel: "Follow RIS Industries on Instagram",
  },
  {
    id: "linkedin",
    platform: "linkedin",
    name: "LinkedIn",
    url: "https://linkedin.com",
    ariaLabel: "Connect with RIS Industries on LinkedIn",
  },
];
