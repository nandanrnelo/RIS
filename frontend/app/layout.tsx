import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://rischem.com"
  ),
  title: "Reflex Industrial Solutions - Water Management & Chemical Solutions",
  description:
    "Reflex Industrial Solutions (RIS) is an elite water management agency catering to water-related solutions and chemical treatments across the entire gamut of industries.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/logo/logo.png", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title:
      "Reflex Industrial Solutions - Water Management & Chemical Solutions",
    description:
      "Reflex Industrial Solutions (RIS) is an elite water management agency catering to water-related solutions and chemical treatments across the entire gamut of industries.",
    url: "https://ris-wheat.vercel.app",
    siteName: "Reflex Industrial Solutions",
    images: [
      {
        url: "/logo/logo.png",
        width: 1076,
        height: 1076,
        alt: "Reflex Industrial Solutions Emblem",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Reflex Industrial Solutions",
    description:
      "Elite water management agency and industrial chemical solutions across process industries.",
    images: ["/logo/logo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} h-full font-sans antialiased`}
      style={{ backgroundColor: "#F5EFE3" }}
    >
      <body
        className="flex min-h-full flex-col overflow-x-clip font-sans"
        style={{ backgroundColor: "#F5EFE3" }}
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
