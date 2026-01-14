import GigCard from "./GigCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const gigs = [
  {
    title: "Professional Logo Design for Your Startup or Club",
    description: "I'll create a modern, memorable logo with unlimited revisions until you're satisfied.",
    price: "$25",
    duration: "2 days",
    rating: 4.9,
    reviews: 127,
    seller: "Alex M.",
    category: "Design",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=300&fit=crop",
    bids: 5,
  },
  {
    title: "Math & Physics Tutoring - All Levels Welcome",
    description: "Get personalized tutoring sessions from a 4.0 GPA engineering student.",
    price: "$20/hr",
    duration: "Flexible",
    rating: 5.0,
    reviews: 89,
    seller: "Sarah K.",
    category: "Tutoring",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop",
    bids: 12,
  },
  {
    title: "Custom React Website Development",
    description: "Full-stack developer ready to build your portfolio, landing page, or web app.",
    price: "$150",
    duration: "5 days",
    rating: 4.8,
    reviews: 54,
    seller: "Mike T.",
    category: "Development",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
    bids: 8,
  },
  {
    title: "Essay Proofreading & Academic Editing",
    description: "English major offering thorough proofreading with detailed feedback.",
    price: "$15",
    duration: "24 hrs",
    rating: 4.9,
    reviews: 203,
    seller: "Emma R.",
    category: "Writing",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=300&fit=crop",
    bids: 3,
  },
  {
    title: "Social Media Content Creation Package",
    description: "Get 10 custom posts with captions, hashtags, and scheduling strategy.",
    price: "$40",
    duration: "3 days",
    rating: 4.7,
    reviews: 76,
    seller: "Jordan L.",
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=400&h=300&fit=crop",
  },
  {
    title: "Video Editing for YouTube & TikTok",
    description: "Professional editing with transitions, effects, and color grading.",
    price: "$35",
    duration: "2 days",
    rating: 4.8,
    reviews: 112,
    seller: "Chris P.",
    category: "Video",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=300&fit=crop",
    bids: 6,
  },
];

const FeaturedGigs = () => {
  return (
    <section id="gigs" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-2">
              Featured Gigs
            </h2>
            <p className="text-muted-foreground text-lg">
              Discover opportunities posted by students just like you
            </p>
          </div>
          <Button variant="outline" className="self-start sm:self-auto">
            View All
            <ArrowRight size={16} />
          </Button>
        </div>

        {/* Gig Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {gigs.map((gig, index) => (
            <div
              key={gig.title}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <GigCard {...gig} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedGigs;
