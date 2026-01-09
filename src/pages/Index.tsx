import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import FeaturedProducts from "@/components/FeaturedProducts";
import LocationSection from "@/components/LocationSection";
import GallerySection from "@/components/GallerySection";
import ValuesSection from "@/components/ValuesSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <FeaturedProducts />
        <ValuesSection />
        <GallerySection />
        <LocationSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
