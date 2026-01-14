import { ExternalLink, TrendingDown } from "lucide-react";

interface PriceSource {
  store: string;
  price: number;
  url: string;
  inStock: boolean;
}

interface ProductCardProps {
  name: string;
  image: string;
  sources: PriceSource[];
}

const ProductCard = ({ name, image, sources }: ProductCardProps) => {
  const sortedSources = [...sources].sort((a, b) => a.price - b.price);
  const bestPrice = sortedSources[0];
  const savings = sortedSources.length > 1 
    ? sortedSources[sortedSources.length - 1].price - bestPrice.price 
    : 0;

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
      <div className="aspect-square bg-secondary/50 p-6 flex items-center justify-center">
        <img 
          src={image} 
          alt={name}
          className="max-w-full max-h-full object-contain"
        />
      </div>
      
      <div className="p-5">
        <h3 className="font-medium text-foreground mb-4 line-clamp-2 leading-snug">
          {name}
        </h3>

        <div className="space-y-2.5">
          {sortedSources.map((source, index) => (
            <a
              key={source.store}
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-between p-3 rounded-md transition-colors group ${
                index === 0 
                  ? "bg-success/10 border border-success/20" 
                  : "bg-secondary/50 hover:bg-secondary"
              }`}
            >
              <div className="flex items-center gap-2">
                {index === 0 && (
                  <TrendingDown className="w-4 h-4 text-success" />
                )}
                <span className={`text-sm ${index === 0 ? "font-medium text-success" : "text-muted-foreground"}`}>
                  {source.store}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className={`font-semibold ${index === 0 ? "text-success" : "text-foreground"}`}>
                  ${source.price.toFixed(2)}
                </span>
                <ExternalLink className="w-3.5 h-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </a>
          ))}
        </div>

        {savings > 0 && (
          <div className="mt-4 pt-4 border-t border-border">
            <p className="text-sm text-muted-foreground">
              Save up to <span className="font-semibold text-accent">${savings.toFixed(2)}</span> by choosing the best deal
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
