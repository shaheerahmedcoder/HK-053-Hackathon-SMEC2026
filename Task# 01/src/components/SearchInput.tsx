import { useState } from 'react';
import { Search, MapPin, Loader2 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { getGeoLocation, GeoLocation } from '@/lib/api';

interface SearchInputProps {
  onLocationSelect: (location: GeoLocation) => void;
  isLoading: boolean;
}

export const SearchInput = ({ onLocationSelect, isLoading }: SearchInputProps) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<GeoLocation[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchLoading, setSearchLoading] = useState(false);

  const handleSearch = async () => {
    if (!query.trim()) return;
    setSearchLoading(true);
    try {
      const results = await getGeoLocation(query);
      if (results.length === 1) {
        onLocationSelect(results[0]);
        setSuggestions([]);
        setShowSuggestions(false);
      } else if (results.length > 1) {
        setSuggestions(results);
        setShowSuggestions(true);
      }
    } catch (error) {
      console.error('Search failed:', error);
    } finally {
      setSearchLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSearch();
  };

  const selectLocation = (location: GeoLocation) => {
    onLocationSelect(location);
    setQuery(`${location.name}, ${location.country}`);
    setSuggestions([]);
    setShowSuggestions(false);
  };

  return (
    <div className="relative w-full max-w-md">
      <div className="flex gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Enter city name..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            className="pl-10 h-12 text-base bg-card border-border"
          />
        </div>
        <Button 
          onClick={handleSearch} 
          disabled={isLoading || searchLoading}
          className="h-12 px-6"
        >
          {searchLoading ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            'Search'
          )}
        </Button>
      </div>

      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-card border border-border rounded-lg shadow-lg overflow-hidden z-50">
          {suggestions.map((location, index) => (
            <button
              key={`${location.lat}-${location.lon}-${index}`}
              onClick={() => selectLocation(location)}
              className="w-full px-4 py-3 text-left hover:bg-muted transition-colors flex items-center gap-3 border-b border-border last:border-0"
            >
              <MapPin className="h-4 w-4 text-muted-foreground flex-shrink-0" />
              <span className="text-foreground">
                {location.name}
                {location.state && `, ${location.state}`}
                {`, ${location.country}`}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
