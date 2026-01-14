import { useState } from "react";
import ItemCard from "./ItemCard";

const categories = ["All", "Electronics", "Sports", "Home & Garden", "Events", "Tools"];

const featuredItems = [
  {
    id: 1,
    title: "Canon EOS R5 Camera Kit",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&q=80",
    owner: "Marcus J.",
    ownerAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
    rating: 4.9,
    reviews: 24,
    location: "Brooklyn, NY",
    swapType: "rental" as const,
    price: "$45/day",
  },
  {
    id: 2,
    title: "Kayak - 2 Person Inflatable",
    category: "Sports",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80",
    owner: "Sarah L.",
    ownerAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    rating: 4.8,
    reviews: 18,
    location: "Portland, OR",
    swapType: "both" as const,
    price: "$30/day or swap",
  },
  {
    id: 3,
    title: "Vintage Projector + Screen",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=600&q=80",
    owner: "Alex K.",
    ownerAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    rating: 5.0,
    reviews: 31,
    location: "Austin, TX",
    swapType: "barter" as const,
  },
  {
    id: 4,
    title: "Party Tent & Chairs Set",
    category: "Events",
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&q=80",
    owner: "Emma R.",
    ownerAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
    rating: 4.7,
    reviews: 42,
    location: "Denver, CO",
    swapType: "rental" as const,
    price: "$85/weekend",
  },
  {
    id: 5,
    title: "DeWalt Power Drill Set",
    category: "Tools",
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80",
    owner: "James M.",
    ownerAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
    rating: 4.9,
    reviews: 56,
    location: "Chicago, IL",
    swapType: "barter" as const,
  },
  {
    id: 6,
    title: "Outdoor Grill + Accessories",
    category: "Home & Garden",
    image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=600&q=80",
    owner: "Lisa T.",
    ownerAvatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80",
    rating: 4.6,
    reviews: 19,
    location: "Seattle, WA",
    swapType: "both" as const,
    price: "$25/day or swap",
  },
];

const FeaturedItems = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All" 
    ? featuredItems 
    : featuredItems.filter(item => item.category === activeCategory);

  return (
    <section id="browse" className="section-padding bg-cream">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-3">
              Available near you
            </h2>
            <p className="text-muted-foreground max-w-md">
              Discover items from trusted neighbors ready for swap or rent.
            </p>
          </div>
          <a href="#" className="text-primary font-medium hover:underline underline-offset-4">
            View all items →
          </a>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-muted-foreground hover:bg-muted border border-border"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ItemCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedItems;
