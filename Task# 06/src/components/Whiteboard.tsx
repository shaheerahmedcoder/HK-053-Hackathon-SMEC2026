import { PenTool, Square, Circle, Type, Eraser, Undo, Redo, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const tools = [
  { icon: PenTool, label: "Draw", active: true },
  { icon: Square, label: "Rectangle", active: false },
  { icon: Circle, label: "Circle", active: false },
  { icon: Type, label: "Text", active: false },
  { icon: Eraser, label: "Eraser", active: false },
];

const Whiteboard = () => {
  return (
    <section className="py-24 relative bg-card/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Collaborative whiteboard
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Brainstorm together in real-time. Draw, write, and visualize ideas as if you're in the same room.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="rounded-2xl overflow-hidden glass">
            {/* Toolbar */}
            <div className="flex items-center justify-between p-3 border-b border-border">
              <div className="flex items-center gap-1">
                {tools.map((tool, index) => (
                  <Button 
                    key={index}
                    variant={tool.active ? "controlActive" : "ghost"} 
                    size="iconSm"
                    className="rounded-lg"
                  >
                    <tool.icon className="w-4 h-4" />
                  </Button>
                ))}
                <div className="w-px h-6 bg-border mx-2" />
                <Button variant="ghost" size="iconSm" className="rounded-lg">
                  <Undo className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="iconSm" className="rounded-lg">
                  <Redo className="w-4 h-4" />
                </Button>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5">
                  {["#22d3ee", "#f97316", "#22c55e", "#eab308", "#000000"].map((color, index) => (
                    <button
                      key={index}
                      className={`w-5 h-5 rounded-full border-2 ${index === 0 ? 'border-foreground' : 'border-transparent'} transition-all hover:scale-110`}
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
                <div className="w-px h-6 bg-border mx-2" />
                <Button variant="ghost" size="iconSm" className="rounded-lg">
                  <Download className="w-4 h-4" />
                </Button>
              </div>
            </div>
            
            {/* Canvas area */}
            <div className="relative h-[400px] bg-background/50">
              {/* Sample drawings */}
              <svg className="absolute inset-0 w-full h-full">
                {/* Flow chart elements */}
                <rect x="80" y="60" width="120" height="50" rx="8" fill="hsl(174 62% 50% / 0.15)" stroke="hsl(174 62% 50%)" strokeWidth="2"/>
                <text x="140" y="90" textAnchor="middle" fill="currentColor" className="text-sm font-medium">Start</text>
                
                <rect x="280" y="60" width="140" height="50" rx="8" fill="hsl(38 92% 50% / 0.15)" stroke="hsl(38 92% 50%)" strokeWidth="2"/>
                <text x="350" y="90" textAnchor="middle" fill="currentColor" className="text-sm font-medium">Process</text>
                
                <rect x="500" y="60" width="120" height="50" rx="8" fill="hsl(142 76% 36% / 0.15)" stroke="hsl(142 76% 36%)" strokeWidth="2"/>
                <text x="560" y="90" textAnchor="middle" fill="currentColor" className="text-sm font-medium">End</text>
                
                {/* Arrows */}
                <path d="M200 85 L280 85" stroke="currentColor" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)"/>
                <path d="M420 85 L500 85" stroke="currentColor" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)"/>
                
                {/* Arrow marker */}
                <defs>
                  <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="currentColor"/>
                  </marker>
                </defs>
                
                {/* Freehand line */}
                <path d="M100 200 Q150 180 200 200 T300 200 T400 180" stroke="hsl(174 62% 50%)" strokeWidth="3" fill="none" strokeLinecap="round"/>
                
                {/* Sticky note */}
                <rect x="450" y="160" width="150" height="100" fill="hsl(38 92% 50% / 0.3)" rx="4"/>
                <text x="465" y="185" fill="currentColor" className="text-xs">Remember to:</text>
                <text x="465" y="205" fill="currentColor" className="text-xs">- Review specs</text>
                <text x="465" y="225" fill="currentColor" className="text-xs">- Update docs</text>
                
                {/* Circle */}
                <circle cx="180" cy="320" r="40" fill="hsl(142 76% 36% / 0.15)" stroke="hsl(142 76% 36%)" strokeWidth="2"/>
                <text x="180" y="325" textAnchor="middle" fill="currentColor" className="text-xs">Ideas</text>
              </svg>
              
              {/* Cursor indicators */}
              <div className="absolute top-[180px] left-[280px] flex items-center gap-1">
                <div className="w-4 h-4 rotate-45 border-l-2 border-t-2 border-primary" />
                <span className="text-xs bg-primary text-primary-foreground px-1.5 py-0.5 rounded">Sarah</span>
              </div>
              
              <div className="absolute top-[300px] left-[420px] flex items-center gap-1">
                <div className="w-4 h-4 rotate-45 border-l-2 border-t-2 border-warning" />
                <span className="text-xs bg-warning text-primary-foreground px-1.5 py-0.5 rounded">Mike</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Whiteboard;
