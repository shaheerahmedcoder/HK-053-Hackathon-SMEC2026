import { ArrowRight, Leaf, Users, RefreshCw } from "lucide-react";

const Hero = () => {
  return (
    <section className="section-padding pt-32 md:pt-40 pb-20">
      <div className="container-narrow">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-sage/50 rounded-full text-sm text-forest mb-6 animate-fade-in">
            <Leaf className="w-4 h-4" />
            <span>Sustainable sharing for everyone</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-foreground leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Share more,{" "}
            <span className="text-gradient">own less</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Connect with your neighbors to borrow, swap, or rent items you need. 
            Save money, reduce waste, and build community — one item at a time.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <button className="btn-primary flex items-center gap-2">
              Start Exploring
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="btn-outline">List Your First Item</button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 md:gap-12 pt-8 border-t border-border animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                <Users className="w-5 h-5 text-forest" />
              </div>
              <div>
                <p className="font-semibold text-foreground">12,000+</p>
                <p className="text-sm text-muted-foreground">Active members</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                <RefreshCw className="w-5 h-5 text-forest" />
              </div>
              <div>
                <p className="font-semibold text-foreground">45,000+</p>
                <p className="text-sm text-muted-foreground">Successful swaps</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                <Leaf className="w-5 h-5 text-forest" />
              </div>
              <div>
                <p className="font-semibold text-foreground">8 tons</p>
                <p className="text-sm text-muted-foreground">Waste prevented</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
