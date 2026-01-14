import { useState } from "react";
import LyricsInput from "@/components/LyricsInput";
import WordCloud from "@/components/WordCloud";
import DownloadButton from "@/components/DownloadButton";
import { ColorPicker, colorSchemes, type ColorScheme } from "@/components/ColorPicker";
import { Button } from "@/components/ui/button";
import { RotateCcw } from "lucide-react";

const Index = () => {
  const [lyrics, setLyrics] = useState<string>("");
  const [colorScheme, setColorScheme] = useState<ColorScheme>(colorSchemes[0]);
  const [isGenerated, setIsGenerated] = useState(false);

  const handleLyricsSubmit = (newLyrics: string) => {
    setLyrics(newLyrics);
    setIsGenerated(true);
  };

  const handleReset = () => {
    setLyrics("");
    setIsGenerated(false);
  };

  return (
    <div className="min-h-screen bg-vintage-paper">
      {/* Decorative border */}
      <div className="fixed inset-4 border-2 border-vintage-brown/20 pointer-events-none rounded-sm" />
      
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        {/* Header */}
        <header className="text-center mb-12">
          <div className="inline-block mb-4">
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-px bg-vintage-brown" />
              <span className="font-display text-sm tracking-[0.3em] text-vintage-rust uppercase">
                Est. 2024
              </span>
              <div className="w-16 h-px bg-vintage-brown" />
            </div>
          </div>
          
          <h1 className="font-display text-5xl md:text-6xl text-vintage-brown mb-4 leading-tight">
            Lyric Cloud
            <span className="block text-2xl md:text-3xl font-body italic text-vintage-rust mt-2">
              Workshop
            </span>
          </h1>
          
          <p className="font-body text-vintage-brown/70 text-lg max-w-md mx-auto">
            Transform your favorite song lyrics into beautiful, vintage-inspired word art
          </p>
        </header>

        {!isGenerated ? (
          <div className="space-y-10">
            <LyricsInput onLyricsSubmit={handleLyricsSubmit} />
            
            <div className="border-t-2 border-vintage-brown/20 pt-8">
              <ColorPicker 
                selectedScheme={colorScheme} 
                onSchemeChange={setColorScheme} 
              />
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            {/* Word Cloud Display */}
            <div id="word-cloud-container">
              <WordCloud lyrics={lyrics} colorScheme={colorScheme} />
            </div>

            {/* Color Scheme Picker */}
            <div className="border-t-2 border-vintage-brown/20 pt-8">
              <ColorPicker 
                selectedScheme={colorScheme} 
                onSchemeChange={setColorScheme} 
              />
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <DownloadButton 
                targetSelector="#word-cloud-container > div" 
                filename={`lyric-cloud-${Date.now()}`}
              />
              
              <Button
                onClick={handleReset}
                variant="outline"
                className="bg-vintage-cream hover:bg-vintage-cream/80 text-vintage-brown font-display text-lg py-6 px-8 border-2 border-vintage-brown shadow-retro"
              >
                <RotateCcw className="w-5 h-5 mr-2" />
                Start Over
              </Button>
            </div>
          </div>
        )}

        {/* Footer */}
        <footer className="mt-16 text-center">
          <div className="inline-flex items-center gap-4">
            <div className="w-12 h-px bg-vintage-brown/30" />
            <span className="font-body text-sm text-vintage-brown/50 italic">
              Crafted with care
            </span>
            <div className="w-12 h-px bg-vintage-brown/30" />
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
