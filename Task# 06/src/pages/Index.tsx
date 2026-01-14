import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MeetingRoom from "@/components/MeetingRoom";
import Features from "@/components/Features";
import Whiteboard from "@/components/Whiteboard";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <MeetingRoom />
      <Features />
      <Whiteboard />
      <Footer />
    </div>
  );
};

export default Index;
