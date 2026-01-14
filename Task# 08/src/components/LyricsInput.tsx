import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, FileText } from "lucide-react";

interface LyricsInputProps {
  onLyricsSubmit: (lyrics: string) => void;
  isLoading?: boolean;
}

const LyricsInput = ({ onLyricsSubmit, isLoading }: LyricsInputProps) => {
  const [pastedLyrics, setPastedLyrics] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<string>("");

  const handlePasteSubmit = () => {
    if (pastedLyrics.trim()) {
      onLyricsSubmit(pastedLyrics);
    }
  };

  const handleSearch = async () => {
    if (!searchQuery.trim()) return;
    
    // For demo purposes, we'll show a message about the search
    // In a real app, you'd integrate with a lyrics API
    setSearchResults(`Searching for "${searchQuery}"...\n\nNote: For full functionality, paste lyrics directly or integrate with a lyrics API like Genius or Musixmatch.`);
  };

  const handleSearchSubmit = () => {
    if (searchResults.trim() && !searchResults.includes("Searching for")) {
      onLyricsSubmit(searchResults);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <Tabs defaultValue="paste" className="w-full">
        <TabsList className="grid w-full grid-cols-2 bg-vintage-cream border-2 border-vintage-brown">
          <TabsTrigger 
            value="paste" 
            className="data-[state=active]:bg-vintage-brown data-[state=active]:text-vintage-cream font-display text-lg"
          >
            <FileText className="w-4 h-4 mr-2" />
            Paste Lyrics
          </TabsTrigger>
          <TabsTrigger 
            value="search"
            className="data-[state=active]:bg-vintage-brown data-[state=active]:text-vintage-cream font-display text-lg"
          >
            <Search className="w-4 h-4 mr-2" />
            Search Song
          </TabsTrigger>
        </TabsList>

        <TabsContent value="paste" className="mt-6">
          <div className="space-y-4">
            <Textarea
              placeholder="Paste your song lyrics here..."
              value={pastedLyrics}
              onChange={(e) => setPastedLyrics(e.target.value)}
              className="min-h-[200px] bg-vintage-cream border-2 border-vintage-brown text-vintage-brown placeholder:text-vintage-brown/50 font-body text-base resize-none"
            />
            <Button 
              onClick={handlePasteSubmit}
              disabled={!pastedLyrics.trim() || isLoading}
              className="w-full bg-vintage-rust hover:bg-vintage-rust/90 text-vintage-cream font-display text-lg py-6 border-2 border-vintage-brown shadow-retro"
            >
              {isLoading ? "Generating..." : "Create Word Cloud"}
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="search" className="mt-6">
          <div className="space-y-4">
            <div className="flex gap-3">
              <Input
                placeholder="Enter song title or artist..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                className="bg-vintage-cream border-2 border-vintage-brown text-vintage-brown placeholder:text-vintage-brown/50 font-body"
              />
              <Button 
                onClick={handleSearch}
                className="bg-vintage-olive hover:bg-vintage-olive/90 text-vintage-cream font-display border-2 border-vintage-brown shadow-retro px-6"
              >
                Search
              </Button>
            </div>
            
            {searchResults && (
              <Textarea
                value={searchResults}
                onChange={(e) => setSearchResults(e.target.value)}
                className="min-h-[200px] bg-vintage-cream border-2 border-vintage-brown text-vintage-brown font-body text-base resize-none"
                placeholder="Search results will appear here..."
              />
            )}
            
            <Button 
              onClick={handleSearchSubmit}
              disabled={!searchResults.trim() || searchResults.includes("Searching for") || isLoading}
              className="w-full bg-vintage-rust hover:bg-vintage-rust/90 text-vintage-cream font-display text-lg py-6 border-2 border-vintage-brown shadow-retro"
            >
              {isLoading ? "Generating..." : "Create Word Cloud"}
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default LyricsInput;
