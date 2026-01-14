import { Search, MessageCircle, Repeat, Star } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Find what you need",
    description: "Browse items in your neighborhood or search for something specific. Filter by category, availability, and swap type.",
  },
  {
    icon: MessageCircle,
    title: "Connect with owners",
    description: "Message item owners to arrange a swap, discuss rental terms, or ask questions. Our chat keeps everything organized.",
  },
  {
    icon: Repeat,
    title: "Meet & exchange",
    description: "Coordinate a meetup at a safe, public location. Complete your swap or rental and confirm in the app.",
  },
  {
    icon: Star,
    title: "Rate your experience",
    description: "Leave honest feedback to build trust in the community. Your reviews help others make informed decisions.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section-padding">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-4">
            How SwapSpace works
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Sharing with your community is simple. Here's how to get started in four easy steps.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Connector line (hidden on mobile and last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-[2px] bg-border" />
              )}

              <div className="flex flex-col items-center text-center">
                {/* Icon */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 rounded-2xl bg-secondary flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold">
                    {index + 1}
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-serif text-xl font-medium text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="btn-primary">
            Get Started Free
          </button>
          <p className="text-sm text-muted-foreground mt-4">
            No credit card required. Join 12,000+ members today.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
