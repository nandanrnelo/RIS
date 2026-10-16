import type React from "react";
import { Home, Users, Package, ShieldCheck, Wrench } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  description?: string;
}

export const NAV_ITEMS: NavItem[] = [
  {
    label: "Home",
    href: "/",
    icon: Home,
    description: "Welcome & overview",
  },
  {
    label: "About Us",
    href: "/about",
    icon: Users,
    description: "Our mission & background",
  },
  {
    label: "Products",
    href: "/products",
    icon: Package,
    description: "Machinery & equipment",
  },
  {
    label: "Quality",
    href: "/quality",
    icon: ShieldCheck,
    description: "ISO standards & testing",
  },
  {
    label: "Industrial Services",
    href: "/services",
    icon: Wrench,
    description: "Engineering & maintenance",
  },
];
