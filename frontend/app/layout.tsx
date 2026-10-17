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
  title: "Reflex Industrial Solutions - Water Management & Chemical Solutions",
  description:
    "Reflex Industrial Solutions (RIS) is an elite water management agency catering to water-related solutions and chemical treatments across the entire gamut of industries.",
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
        className="flex min-h-full flex-col font-sans"
        style={{ backgroundColor: "#F5EFE3" }}
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
