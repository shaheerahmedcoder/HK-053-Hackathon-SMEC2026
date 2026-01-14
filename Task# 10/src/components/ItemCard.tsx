import { Star, MapPin } from "lucide-react";

interface ItemCardProps {
  title: string;
  category: string;
  image: string;
  owner: string;
  ownerAvatar: string;
  rating: number;
  reviews: number;
  location: string;
  swapType: "barter" | "rental" | "both";
  price?: string;
}

const ItemCard = ({
  title,
  category,
  image,
  owner,
  ownerAvatar,
  rating,
  reviews,
  location,
  swapType,
  price,
}: ItemCardProps) => {
  return (
    <article className="card-item group cursor-pointer">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3">
          <span className="badge-category">{category}</span>
        </div>
        <div className="absolute top-3 right-3">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
            swapType === "barter" 
              ? "bg-forest text-primary-foreground" 
              : swapType === "rental" 
              ? "bg-terracotta text-primary-foreground"
              : "bg-charcoal text-primary-foreground"
          }`}>
            {swapType === "both" ? "Swap or Rent" : swapType === "barter" ? "Swap" : "Rent"}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-serif text-lg font-medium text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-1">
          {title}
        </h3>

        {/* Location */}
        <div className="flex items-center gap-1 text-muted-foreground text-sm mb-3">
          <MapPin className="w-3.5 h-3.5" />
          <span>{location}</span>
        </div>

        {/* Price/Swap info */}
        {price && (
          <p className="text-sm font-medium text-accent mb-3">{price}</p>
        )}

        {/* Owner info */}
        <div className="flex items-center justify-between pt-3 border-t border-border">
          <div className="flex items-center gap-2">
            <img
              src={ownerAvatar}
              alt={owner}
              className="w-7 h-7 rounded-full object-cover"
            />
            <span className="text-sm text-muted-foreground">{owner}</span>
          </div>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-terracotta fill-terracotta" />
            <span className="text-sm font-medium text-foreground">{rating}</span>
            <span className="text-sm text-muted-foreground">({reviews})</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ItemCard;
