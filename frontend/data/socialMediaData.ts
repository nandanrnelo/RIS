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
  gstin: string;
  address: {
    buildingNo: string;
    buildingName: string;
    street: string;
    landmark: string;
    locality: string;
    city: string;
    district: string;
    state: string;
    pinCode: string;
    fullAddress: string;
  };
}

export const CONTACT_DETAILS: ContactDetails = {
  email: "info@rischem.com",
  phone: "044 42805983",
  gstin: "29DPWPM9883R1ZZ",
  address: {
    buildingNo: "No. 95/1",
    buildingName: "Visrhuthi Nivasa",
    street: "7th Cross, MSR Layout",
    landmark: "Singanayakanahalli",
    locality: "Avalahalli",
    city: "Bengaluru",
    district: "Bengaluru Urban",
    state: "Karnataka",
    pinCode: "560064",
    fullAddress:
      "No. 95/1, Visrhuthi Nivasa, 7th Cross, MSR Layout, Avalahalli, Near Singanayakanahalli, Bengaluru Urban, Bengaluru, Karnataka – 560064, India",
  },
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
