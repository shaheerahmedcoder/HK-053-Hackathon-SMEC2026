import { Button } from "@/components/ui/button";
import { Search, ArrowRight, Sparkles, Users, Clock } from "lucide-react";
import { useState } from "react";

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const stats = [
    { icon: Users, value: "5,000+", label: "Active Students" },
    { icon: Sparkles, value: "12,000+", label: "Gigs Completed" },
    { icon: Clock, value: "< 2 hrs", label: "Avg Response" },
  ];

  return (
    <section className="relative pt-24 lg:pt-32 pb-16 lg:pb-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6 animate-fade-in">
            <Sparkles size={16} />
            <span className="text-sm font-medium">The marketplace built for students</span>
          </div>

          {/* Heading */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Turn Your Skills Into
            <span className="text-gradient"> Real Opportunities</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Connect with fellow students for quick gigs. Post tasks, bid on projects, and build your portfolio while earning on campus.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <div className="relative flex items-center bg-card rounded-2xl p-2 card-shadow border border-border/50">
              <Search className="absolute left-5 text-muted-foreground" size={20} />
              <input
                type="text"
                placeholder="Search for gigs... (e.g., logo design, tutoring, coding)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 pl-12 pr-4 py-3 bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none text-base"
              />
              <Button variant="hero" size="lg" className="hidden sm:flex">
                Search
                <ArrowRight size={18} />
              </Button>
            </div>
            <Button variant="hero" size="lg" className="sm:hidden w-full mt-3">
              Search Gigs
              <ArrowRight size={18} />
            </Button>
          </div>

          {/* Popular searches */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <span className="text-sm text-muted-foreground">Popular:</span>
            {["Graphic Design", "Tutoring", "Web Development", "Essay Review"].map((tag) => (
              <button
                key={tag}
                className="px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium hover:bg-secondary/80 transition-colors"
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <stat.icon size={18} className="text-primary" />
                  <span className="font-display font-bold text-xl sm:text-2xl text-foreground">{stat.value}</span>
                </div>
                <span className="text-xs sm:text-sm text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
