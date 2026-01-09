import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import FeaturedProducts from "@/components/FeaturedProducts";
import LocationSection from "@/components/LocationSection";
import GallerySection from "@/components/GallerySection";
import ValuesSection from "@/components/ValuesSection";
import OffersSection from "@/components/OffersSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <OffersSection />
        <FeaturedProducts />
        <ValuesSection />
        <TestimonialsSection />
        <GallerySection />
        <LocationSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
