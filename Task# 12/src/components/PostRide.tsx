import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Car, DollarSign, Users, Shield, ArrowRight } from "lucide-react";

const benefits = [
  {
    icon: DollarSign,
    title: "Earn Money",
    description: "Cover your fuel costs by sharing empty seats",
  },
  {
    icon: Users,
    title: "Meet People",
    description: "Connect with fellow students from your university",
  },
  {
    icon: Shield,
    title: "Verified Users",
    description: "All riders are verified students with ratings",
  },
];

const PostRide = () => {
  return (
    <section id="post" className="py-20 md:py-28 bg-primary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-primary-foreground/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-primary-foreground/80 font-semibold mb-2">
              For Drivers
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Got Empty Seats? <br />
              Start Earning Today
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-lg">
              Turn your daily commute into an opportunity. Share your ride, split costs, 
              and help reduce traffic while earning extra cash.
            </p>

            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center shrink-0">
                    <benefit.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-foreground">
                      {benefit.title}
                    </h4>
                    <p className="text-primary-foreground/70 text-sm">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Button
              size="xl"
              className="bg-card text-primary hover:bg-card/90 shadow-lg gap-2"
            >
              <Car className="w-5 h-5" />
              Post Your Ride
              <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Stats cards */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/20"
              >
                <p className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
                  $180
                </p>
                <p className="text-primary-foreground/70">
                  Avg. monthly earnings
                </p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/20"
              >
                <p className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
                  4.8★
                </p>
                <p className="text-primary-foreground/70">
                  Driver satisfaction
                </p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/20"
              >
                <p className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
                  2.5K
                </p>
                <p className="text-primary-foreground/70">
                  Active drivers
                </p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/20"
              >
                <p className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
                  95%
                </p>
                <p className="text-primary-foreground/70">
                  Booking success
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PostRide;
