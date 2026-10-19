import { CONTACT_DETAILS } from "./socialMediaData";

export interface IndustryItem {
  id: string;
  number: string;
  name: string;
  image: string;
}

export interface ServicesPageData {
  title: string;
  breadcrumbs: { label: string; href: string }[];
  companyName: string;
  subtitle: string;
  industries: IndustryItem[];
  contact: {
    phone: string;
    phoneHref: string;
    email: string;
  };
}

export const SERVICES_PAGE_DATA: ServicesPageData = {
  title: "Industries Served",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Industries Served", href: "/services" },
  ],
  companyName: "Reflex Industrial Solutions",
  subtitle:
    "Total water management and specialty chemical solutions across 14 major process industries — engineered to maximize process efficiency, protect capital metallurgy, and ensure environmental compliance.",
  industries: [
    {
      id: "refinery-gas",
      number: "01",
      name: "Refinery and Gas Processing",
      image: "/images/services/refinery-and-gas-processing.jpg",
    },
    {
      id: "power-desalination",
      number: "02",
      name: "Power and Desalination",
      image: "/images/services/power-and-desalination.jpg",
    },
    {
      id: "petrochemicals-polymers",
      number: "03",
      name: "Petrochemicals and Polymers",
      image: "/images/services/petrochemicals-and-polymers.jpg",
    },
    {
      id: "paints-coatings",
      number: "04",
      name: "Paints and Coatings",
      image: "/images/services/paints-and-coatings.jpg",
    },
    {
      id: "fertilizer-agriculture",
      number: "05",
      name: "Fertilizer and Agriculture",
      image: "/images/services/fertilizer-and-agriculture.jpg",
    },
    {
      id: "construction",
      number: "06",
      name: "Construction",
      image: "/images/services/construction.jpg",
    },
    {
      id: "steel-aluminum",
      number: "07",
      name: "Steel and Aluminum",
      image: "/images/services/steel-and-aluminum.jpg",
    },
    {
      id: "food-beverages",
      number: "08",
      name: "Food & Beverages",
      image: "/images/services/food-and-beverages.jpg",
    },
    {
      id: "dairy-processing",
      number: "09",
      name: "Dairy Processing Industries",
      image: "/images/services/dairy-processing-industries.jpg",
    },
    {
      id: "metal-mining",
      number: "10",
      name: "Metal and Mining Industry",
      image: "/images/services/metal-and-mining-industry.jpg",
    },
    {
      id: "municipal-water",
      number: "11",
      name: "Municipal Water Treatment",
      image: "/images/services/municipal-water-treatment.jpg",
    },
    {
      id: "pharma-lifesciences",
      number: "12",
      name: "Pharma and Life Science",
      image: "/images/services/pharma-and-life-science.jpg",
    },
    {
      id: "power-industries",
      number: "13",
      name: "Power Industries",
      image: "/images/services/power-industries.jpg",
    },
    {
      id: "textile-industries",
      number: "14",
      name: "Textile Industries",
      image: "/images/services/textile-industries.jpg",
    },
  ],
  contact: {
    phone: CONTACT_DETAILS.phone,
    phoneHref: `tel:${CONTACT_DETAILS.phone.replace(/\s+/g, "")}`,
    email: CONTACT_DETAILS.email,
  },
};
