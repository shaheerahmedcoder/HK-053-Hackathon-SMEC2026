import { Button } from "@/components/ui/button";

interface ColorScheme {
  id: string;
  name: string;
  colors: string[];
  background: string;
}

const colorSchemes: ColorScheme[] = [
  {
    id: "vintage-warm",
    name: "Autumn Leaves",
    colors: ["#8B4513", "#CD853F", "#D2691E", "#A0522D", "#DEB887"],
    background: "#F5E6D3",
  },
  {
    id: "vintage-cool",
    name: "Ocean Depths",
    colors: ["#2F4F4F", "#5F9EA0", "#708090", "#4682B4", "#6B8E23"],
    background: "#E8EDE4",
  },
  {
    id: "vintage-bold",
    name: "Circus Poster",
    colors: ["#8B0000", "#B8860B", "#2F4F4F", "#800020", "#DAA520"],
    background: "#FFF8DC",
  },
  {
    id: "vintage-muted",
    name: "Faded Photograph",
    colors: ["#696969", "#808080", "#A9A9A9", "#778899", "#B0C4DE"],
    background: "#F0EDE5",
  },
  {
    id: "vintage-nature",
    name: "Forest Floor",
    colors: ["#556B2F", "#6B8E23", "#8B7355", "#9ACD32", "#BDB76B"],
    background: "#EDE8DC",
  },
  {
    id: "vintage-sunset",
    name: "Desert Sunset",
    colors: ["#CD5C5C", "#F4A460", "#D2691E", "#BC8F8F", "#E9967A"],
    background: "#FAF0E6",
  },
];

interface ColorPickerProps {
  selectedScheme: ColorScheme;
  onSchemeChange: (scheme: ColorScheme) => void;
}

const ColorPicker = ({ selectedScheme, onSchemeChange }: ColorPickerProps) => {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <h3 className="font-display text-xl text-vintage-brown mb-4 text-center">
        Choose Your Palette
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {colorSchemes.map((scheme) => (
          <Button
            key={scheme.id}
            variant="outline"
            onClick={() => onSchemeChange(scheme)}
            className={`h-auto p-3 flex flex-col items-center gap-2 border-2 transition-all ${
              selectedScheme.id === scheme.id
                ? "border-vintage-brown bg-vintage-cream shadow-retro"
                : "border-vintage-brown/30 hover:border-vintage-brown/60 bg-vintage-cream/50"
            }`}
          >
            <div className="flex gap-1">
              {scheme.colors.slice(0, 5).map((color, i) => (
                <div
                  key={i}
                  className="w-5 h-5 rounded-full border border-vintage-brown/30"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
            <span className="font-body text-sm text-vintage-brown">{scheme.name}</span>
          </Button>
        ))}
      </div>
    </div>
  );
};

export { ColorPicker, colorSchemes };
export type { ColorScheme };
