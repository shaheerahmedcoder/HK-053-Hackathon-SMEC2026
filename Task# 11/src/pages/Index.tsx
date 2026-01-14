import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturedGigs from "@/components/FeaturedGigs";
import HowItWorks from "@/components/HowItWorks";
import Categories from "@/components/Categories";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturedGigs />
        <HowItWorks />
        <Categories />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
