import { Clock, DollarSign, Star, User } from "lucide-react";
import { Button } from "@/components/ui/button";

interface GigCardProps {
  title: string;
  description: string;
  price: string;
  duration: string;
  rating: number;
  reviews: number;
  seller: string;
  category: string;
  image: string;
  bids?: number;
}

const GigCard = ({
  title,
  description,
  price,
  duration,
  rating,
  reviews,
  seller,
  category,
  image,
  bids,
}: GigCardProps) => {
  return (
    <div className="group bg-card rounded-2xl overflow-hidden card-shadow border border-border/50 hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 rounded-full bg-background/90 backdrop-blur-sm text-xs font-medium text-foreground">
            {category}
          </span>
        </div>
        {bids !== undefined && (
          <div className="absolute top-3 right-3">
            <span className="px-3 py-1 rounded-full bg-primary/90 backdrop-blur-sm text-xs font-medium text-primary-foreground">
              {bids} bids
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Seller info */}
        <div className="flex items-center gap-2 mb-3">
          <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
            <User size={14} className="text-muted-foreground" />
          </div>
          <span className="text-sm font-medium text-foreground">{seller}</span>
          <div className="flex items-center gap-1 ml-auto">
            <Star size={14} className="text-amber-500 fill-amber-500" />
            <span className="text-sm font-medium text-foreground">{rating}</span>
            <span className="text-xs text-muted-foreground">({reviews})</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="font-display font-semibold text-lg text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {description}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 text-muted-foreground">
              <DollarSign size={14} />
              <span className="text-sm font-semibold text-foreground">{price}</span>
            </div>
            <div className="flex items-center gap-1 text-muted-foreground">
              <Clock size={14} />
              <span className="text-sm">{duration}</span>
            </div>
          </div>
          <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
            View
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GigCard;
