import HeroBannerCarousel from "@/components/home/HeroBannerCarousel";
import QuickServicesBar from "@/components/home/QuickServicesBar";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <HeroBannerCarousel />
      <QuickServicesBar />
    </div>
  );
}
