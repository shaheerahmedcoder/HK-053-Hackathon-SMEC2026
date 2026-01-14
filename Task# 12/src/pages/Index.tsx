import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AvailableRides from "@/components/AvailableRides";
import HowItWorks from "@/components/HowItWorks";
import PostRide from "@/components/PostRide";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <AvailableRides />
        <HowItWorks />
        <PostRide />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
