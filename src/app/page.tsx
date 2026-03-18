import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FlavorsSection from "@/components/FlavorsSection";
import DietarySection from "@/components/DietarySection";
import BeyondGelatoSection from "@/components/BeyondGelatoSection";
import SeasonalSection from "@/components/SeasonalSection";
import ReviewsSection from "@/components/ReviewsSection";
import LocationSection from "@/components/LocationSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <FlavorsSection />
        <DietarySection />
        <BeyondGelatoSection />
        <SeasonalSection />
        <ReviewsSection />
        <LocationSection />
        <FAQSection />
      </main>
      <Footer />
      <MobileCTA />
    </>
  );
}
