import { motion } from "framer-motion";
import RideCard from "./RideCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, Filter } from "lucide-react";

const rides = [
  {
    id: "1",
    driver: {
      name: "Michael Chen",
      avatar: "",
      rating: 4.9,
      trips: 156,
    },
    from: "Downtown Station",
    to: "State University - Main Campus",
    date: "Today, Jan 14",
    time: "8:30 AM",
    seats: 3,
    price: 5,
  },
  {
    id: "2",
    driver: {
      name: "Sarah Johnson",
      avatar: "",
      rating: 4.8,
      trips: 89,
    },
    from: "Westside Mall",
    to: "State University - Engineering",
    date: "Today, Jan 14",
    time: "9:00 AM",
    seats: 2,
    price: 6,
  },
  {
    id: "3",
    driver: {
      name: "David Park",
      avatar: "",
      rating: 5.0,
      trips: 234,
    },
    from: "North Heights",
    to: "State University - Library",
    date: "Today, Jan 14",
    time: "10:15 AM",
    seats: 4,
    price: 4,
  },
  {
    id: "4",
    driver: {
      name: "Emily Rodriguez",
      avatar: "",
      rating: 4.7,
      trips: 67,
    },
    from: "Riverside Apartments",
    to: "State University - Science Building",
    date: "Tomorrow, Jan 15",
    time: "7:45 AM",
    seats: 1,
    price: 7,
  },
  {
    id: "5",
    driver: {
      name: "James Wilson",
      avatar: "",
      rating: 4.9,
      trips: 178,
    },
    from: "East Village",
    to: "State University - Arts Center",
    date: "Tomorrow, Jan 15",
    time: "8:00 AM",
    seats: 2,
    price: 5,
  },
  {
    id: "6",
    driver: {
      name: "Lisa Thompson",
      avatar: "",
      rating: 4.8,
      trips: 112,
    },
    from: "Sunset Plaza",
    to: "State University - Sports Complex",
    date: "Tomorrow, Jan 15",
    time: "9:30 AM",
    seats: 3,
    price: 6,
  },
];

const AvailableRides = () => {
  return (
    <section id="rides" className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12"
        >
          <div>
            <p className="text-primary font-semibold mb-2">Available Now</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Rides to Campus
            </h2>
            <p className="text-muted-foreground mt-2 max-w-xl">
              Find your perfect ride from verified students heading to the same destination.
            </p>
          </div>
          <Button variant="outline" className="gap-2 w-fit">
            <Filter className="w-4 h-4" />
            Filters
          </Button>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rides.map((ride, index) => (
            <RideCard key={ride.id} {...ride} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12"
        >
          <Button variant="outline" size="lg" className="gap-2">
            View All Rides
            <ArrowRight className="w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default AvailableRides;
