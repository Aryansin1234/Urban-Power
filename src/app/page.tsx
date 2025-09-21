import Header from "@/components/header";
import HeroSection from "@/components/sections/hero-section";
import AboutSection from "@/components/sections/about-section";
import ProductsSection from "@/components/sections/products-section";
import TestimonialsSection from "@/components/sections/testimonials-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
}
