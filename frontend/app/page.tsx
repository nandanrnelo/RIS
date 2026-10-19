import HeroBannerCarousel from "@/components/home/HeroBannerCarousel";
import QuickServicesBar from "@/components/home/QuickServicesBar";
import HomeAboutSection from "@/components/home/HomeAboutSection";
import HomeProductsSection from "@/components/home/HomeProductsSection";
import HomeServicesSection from "@/components/home/HomeServicesSection";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <HeroBannerCarousel />
      <QuickServicesBar />
      <HomeAboutSection />
      <HomeProductsSection />
      <HomeServicesSection />
    </div>
  );
}
