import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Alex Martinez",
    role: "Computer Science, Junior",
    content: "UniRide has been a game-changer for my daily commute. I've saved over $200 this semester and made some great friends along the way!",
    rating: 5,
    avatar: "A",
  },
  {
    name: "Jessica Wong",
    role: "Business, Senior",
    content: "As a driver, I love covering my fuel costs while helping fellow students. The app is super easy to use and the community is amazing.",
    rating: 5,
    avatar: "J",
  },
  {
    name: "Marcus Johnson",
    role: "Engineering, Sophomore",
    content: "Finally, a reliable way to get to campus! The drivers are always on time and the prices are way better than ride-share apps.",
    rating: 5,
    avatar: "M",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-primary font-semibold mb-2">Student Stories</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Loved by Students
          </h2>
          <p className="text-muted-foreground text-lg">
            See what your fellow students are saying about their UniRide experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-6 shadow-card border border-border relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/20" />
              
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-500 fill-amber-500" />
                ))}
              </div>

              <p className="text-foreground mb-6 relative z-10">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
