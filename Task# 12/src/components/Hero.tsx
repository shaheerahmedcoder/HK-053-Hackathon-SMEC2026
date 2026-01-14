import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Calendar, Users, ArrowRight, Leaf } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-20 md:pt-24 pb-16 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-120px)]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm">
              <Leaf className="w-4 h-4" />
              <span>Eco-friendly campus commuting</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight">
              Share Rides,{" "}
              <span className="gradient-text">Save Money,</span>{" "}
              <br className="hidden md:block" />
              Reduce Emissions
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              Connect with fellow students for affordable, sustainable rides to and from campus. 
              Cut costs, beat traffic, and make new friends along the way.
            </p>

            {/* Search Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-card rounded-2xl p-6 shadow-card border border-border"
            >
              <div className="grid md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">From</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      placeholder="Departure location"
                      className="pl-10 h-12 bg-secondary/50 border-0"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">To</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-primary" />
                    <Input
                      placeholder="University campus"
                      className="pl-10 h-12 bg-secondary/50 border-0"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">When</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      type="date"
                      className="pl-10 h-12 bg-secondary/50 border-0"
                    />
                  </div>
                </div>
              </div>
              <Button className="w-full mt-4 h-12" size="lg">
                Search Rides
                <ArrowRight className="w-5 h-5" />
              </Button>
            </motion.div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-4">
              <div>
                <p className="text-3xl font-bold text-foreground">12K+</p>
                <p className="text-sm text-muted-foreground">Active Students</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">45K+</p>
                <p className="text-sm text-muted-foreground">Rides Shared</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">28T</p>
                <p className="text-sm text-muted-foreground">CO₂ Saved</p>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Map visualization placeholder */}
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-secondary to-muted overflow-hidden relative">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBtLTI4IDBhMjggMjggMCAxIDAgNTYgMGEyOCAyOCAwIDEgMCAtNTYgMCIgc3Ryb2tlPSIjMjA4MDYwIiBzdHJva2Utd2lkdGg9IjAuNSIgb3BhY2l0eT0iMC4xIi8+PC9nPjwvc3ZnPg==')] opacity-30" />
                
                {/* Floating cards */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-12 left-8 bg-card rounded-xl p-4 shadow-card border border-border"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <Users className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">3 seats left</p>
                      <p className="text-xs text-muted-foreground">Downtown → Campus</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute bottom-20 right-8 bg-card rounded-xl p-4 shadow-card border border-border"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">Arriving in 5 min</p>
                      <p className="text-xs text-muted-foreground">Sarah's ride</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary rounded-full p-3 shadow-button"
                >
                  <MapPin className="w-6 h-6 text-primary-foreground" />
                </motion.div>

                {/* Route lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                  <motion.path
                    d="M100,300 Q200,200 300,250 T350,100"
                    fill="none"
                    stroke="hsl(158 64% 32%)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeDasharray="8 8"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: "loop", ease: "linear" }}
                  />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
