import { Video, Monitor, Upload, PenTool, Shield, Zap } from "lucide-react";

const features = [
  {
    icon: Video,
    title: "HD Video Calling",
    description: "Crystal-clear video with support for up to 100 participants. Adaptive quality ensures smooth calls on any connection.",
  },
  {
    icon: Monitor,
    title: "Screen Sharing",
    description: "Share your entire screen or specific windows. Annotate in real-time to highlight important details.",
  },
  {
    icon: Upload,
    title: "File Sharing",
    description: "Drop files directly into the call. Share documents, images, and more with instant preview.",
  },
  {
    icon: PenTool,
    title: "Whiteboard",
    description: "Collaborative canvas for brainstorming. Draw, write, and add sticky notes together in real-time.",
  },
  {
    icon: Shield,
    title: "End-to-End Encryption",
    description: "Your conversations stay private. Enterprise-grade security for all your meetings and shared files.",
  },
  {
    icon: Zap,
    title: "Instant Meetings",
    description: "Start or join a meeting in seconds. No downloads required—works right in your browser.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Everything you need to collaborate
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            All the tools your team needs, built into one seamless experience.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-medium text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
