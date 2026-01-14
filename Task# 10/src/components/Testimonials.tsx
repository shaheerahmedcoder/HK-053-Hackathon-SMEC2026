import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rachel M.",
    role: "Member since 2023",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&q=80",
    rating: 5,
    text: "I borrowed a pressure washer for my deck and saved over $200. The owner was so friendly and even showed me how to use it. This community is amazing.",
  },
  {
    name: "David C.",
    role: "Super Swapper",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcabd36?w=100&q=80",
    rating: 5,
    text: "As someone who travels a lot, I love renting out my camping gear when I'm not using it. Extra income and knowing my gear gets used — win-win!",
  },
  {
    name: "Nina K.",
    role: "Member since 2022",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80",
    rating: 5,
    text: "The rating system made me feel safe about my first swap. Everyone I've met has been reliable and respectful. Highly recommend joining.",
  },
];

const Testimonials = () => {
  return (
    <section id="community" className="section-padding bg-forest text-primary-foreground">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
            Loved by our community
          </h2>
          <p className="text-primary-foreground/70 max-w-xl mx-auto">
            Real stories from members who've embraced a new way of sharing.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-primary-foreground/30 mb-4" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-terracotta fill-terracotta" />
                ))}
              </div>

              {/* Text */}
              <p className="text-primary-foreground/90 leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium text-primary-foreground">{testimonial.name}</p>
                  <p className="text-sm text-primary-foreground/60">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
