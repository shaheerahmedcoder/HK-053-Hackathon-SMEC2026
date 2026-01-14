import { Search, MessageSquare, CheckCircle, Trophy } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Find or Post",
    description: "Browse available gigs or post your own task. Set your budget and timeline.",
  },
  {
    icon: MessageSquare,
    title: "Connect & Bid",
    description: "Chat with students, receive competitive bids, and choose the best fit for your project.",
  },
  {
    icon: CheckCircle,
    title: "Get It Done",
    description: "Work together through our secure platform. Release payment when you're satisfied.",
  },
  {
    icon: Trophy,
    title: "Build Your Rep",
    description: "Leave reviews, earn badges, and automatically update your portfolio with completed work.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 lg:py-24 bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Whether you're offering services or looking for help, getting started takes just minutes
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Connector line - hidden on mobile */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-full h-0.5 bg-border">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-border" />
                </div>
              )}

              <div className="relative z-10 bg-card rounded-2xl p-6 lg:p-8 card-shadow border border-border/50 h-full transition-all duration-300 hover:card-shadow-hover hover:-translate-y-1">
                {/* Step number */}
                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <step.icon size={28} className="text-primary" />
                </div>

                {/* Content */}
                <h3 className="font-display font-semibold text-xl text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
