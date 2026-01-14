import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-6 py-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-foreground mb-6 leading-tight">
            Video calls that feel
            <br />
            <span className="text-primary">like being there</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Crystal-clear video, real-time collaboration, and tools that help your team work together—no matter where they are.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl">
              Get started
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="xl">
              <Play className="w-5 h-5" />
              See how it works
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground mt-6">
            Free for small teams
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
