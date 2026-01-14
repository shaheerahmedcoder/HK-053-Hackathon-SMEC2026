import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-16 lg:py-24 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-primary/5 via-card to-accent/5 rounded-3xl p-8 sm:p-12 lg:p-16 border border-border/50 card-shadow text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <Sparkles size={16} />
              <span className="text-sm font-medium">Start earning today</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Ready to Turn Your Skills Into Income?
            </h2>

            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of students already connecting, collaborating, and earning on GigHub. 
              Your next opportunity is just a click away.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="xl">
                Post Your First Gig
                <ArrowRight size={20} />
              </Button>
              <Button variant="hero-outline" size="xl">
                Browse Opportunities
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-10 pt-8 border-t border-border/50">
              <p className="text-sm text-muted-foreground mb-4">Trusted by students at</p>
              <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-10 opacity-60">
                {["Stanford", "MIT", "UCLA", "Berkeley", "NYU"].map((uni) => (
                  <span key={uni} className="font-display font-semibold text-foreground text-lg">
                    {uni}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
