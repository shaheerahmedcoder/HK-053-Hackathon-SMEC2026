import { motion } from "framer-motion";
import { Search, Calendar, Car, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Search Rides",
    description: "Enter your pickup location, destination, and travel date to find available rides.",
  },
  {
    icon: Calendar,
    title: "Book Your Seat",
    description: "Choose from verified drivers heading your way and reserve your seat instantly.",
  },
  {
    icon: Car,
    title: "Meet & Travel",
    description: "Meet your driver at the pickup point and enjoy a comfortable, eco-friendly commute.",
  },
  {
    icon: CheckCircle,
    title: "Rate & Review",
    description: "Share your experience to help build a trusted community of riders.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-primary font-semibold mb-2">Simple Process</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How UniRide Works
          </h2>
          <p className="text-muted-foreground text-lg">
            Getting started is easy. Join thousands of students who are already saving money 
            and reducing their carbon footprint.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative text-center"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
              )}

              <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10 mb-6">
                <step.icon className="w-8 h-8 text-primary" />
                <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
                  {index + 1}
                </div>
              </div>

              <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
