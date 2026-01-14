import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Users, Star, ArrowRight } from "lucide-react";

interface RideCardProps {
  id: string;
  driver: {
    name: string;
    avatar: string;
    rating: number;
    trips: number;
  };
  from: string;
  to: string;
  date: string;
  time: string;
  seats: number;
  price: number;
  index?: number;
}

const RideCard = ({
  driver,
  from,
  to,
  date,
  time,
  seats,
  price,
  index = 0,
}: RideCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      className="bg-card rounded-2xl p-5 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border"
    >
      {/* Driver Info */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-lg font-semibold text-primary overflow-hidden">
            {driver.avatar ? (
              <img src={driver.avatar} alt={driver.name} className="w-full h-full object-cover" />
            ) : (
              driver.name.charAt(0)
            )}
          </div>
          <div>
            <p className="font-semibold text-foreground">{driver.name}</p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                <span>{driver.rating}</span>
              </div>
              <span>•</span>
              <span>{driver.trips} trips</span>
            </div>
          </div>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold text-primary">${price}</p>
          <p className="text-xs text-muted-foreground">per seat</p>
        </div>
      </div>

      {/* Route */}
      <div className="relative pl-6 space-y-4 mb-4">
        <div className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-primary to-accent" />
        <div className="relative">
          <div className="absolute -left-6 top-1 w-3 h-3 rounded-full bg-primary border-2 border-card" />
          <p className="font-medium text-foreground">{from}</p>
          <p className="text-sm text-muted-foreground">{date}</p>
        </div>
        <div className="relative">
          <div className="absolute -left-6 top-1 w-3 h-3 rounded-full bg-accent border-2 border-card" />
          <p className="font-medium text-foreground">{to}</p>
          <p className="text-sm text-muted-foreground">Est. arrival</p>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-border">
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{time}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>{seats} seats left</span>
          </div>
        </div>
        <Button size="sm" className="gap-1">
          Book
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </motion.div>
  );
};

export default RideCard;
