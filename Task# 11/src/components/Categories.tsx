import { 
  Palette, 
  Code, 
  PenTool, 
  GraduationCap, 
  Camera, 
  Music, 
  Calculator, 
  Globe 
} from "lucide-react";

const categories = [
  { icon: Palette, name: "Design", count: 342, color: "bg-rose-500/10 text-rose-600" },
  { icon: Code, name: "Development", count: 256, color: "bg-blue-500/10 text-blue-600" },
  { icon: PenTool, name: "Writing", count: 189, color: "bg-emerald-500/10 text-emerald-600" },
  { icon: GraduationCap, name: "Tutoring", count: 421, color: "bg-amber-500/10 text-amber-600" },
  { icon: Camera, name: "Photography", count: 98, color: "bg-purple-500/10 text-purple-600" },
  { icon: Music, name: "Music & Audio", count: 76, color: "bg-pink-500/10 text-pink-600" },
  { icon: Calculator, name: "Data & Math", count: 134, color: "bg-cyan-500/10 text-cyan-600" },
  { icon: Globe, name: "Languages", count: 167, color: "bg-orange-500/10 text-orange-600" },
];

const Categories = () => {
  return (
    <section id="categories" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Explore Categories
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From creative work to academic support, find the perfect category for your skills
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {categories.map((category, index) => (
            <button
              key={category.name}
              className="group p-5 lg:p-6 rounded-2xl bg-card card-shadow border border-border/50 hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1 text-left animate-fade-in-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className={`w-12 h-12 rounded-xl ${category.color} flex items-center justify-center mb-4 transition-transform group-hover:scale-110`}>
                <category.icon size={24} />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                {category.name}
              </h3>
              <p className="text-sm text-muted-foreground">
                {category.count} gigs available
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
