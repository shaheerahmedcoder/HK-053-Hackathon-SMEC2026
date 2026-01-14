import { useState } from 'react';
import { Wind, Loader2 } from 'lucide-react';
import { SearchInput } from '@/components/SearchInput';
import { AQIDisplay } from '@/components/AQIDisplay';
import { PollutantsGrid } from '@/components/PollutantsGrid';
import { AQITable } from '@/components/AQITable';
import { GeoLocation } from '@/lib/api';
import { generateDummyData } from '@/lib/dummyData';

interface PollutionResult {
  aqi: number;
  components: {
    co: number;
    no: number;
    no2: number;
    o3: number;
    so2: number;
    pm2_5: number;
    pm10: number;
    nh3: number;
  };
}

const Index = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [pollutionData, setPollutionData] = useState<PollutionResult | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<GeoLocation | null>(null);

  const handleLocationSelect = async (location: GeoLocation) => {
    setIsLoading(true);
    setSelectedLocation(location);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Generate dummy data based on city name
    const dummyData = generateDummyData(location.name);
    setPollutionData(dummyData);
    setIsLoading(false);
  };

  const locationName = selectedLocation 
    ? `${selectedLocation.name}${selectedLocation.state ? `, ${selectedLocation.state}` : ''}, ${selectedLocation.country}`
    : '';

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-8 md:py-12">
        {/* Header */}
        <header className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 mb-4">
            <Wind className="h-7 w-7 text-primary" />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            SMEC Air Quality Monitor
          </h1>
          <p className="text-muted-foreground">
            Check real-time air pollution levels for any city
          </p>
        </header>

        {/* Search */}
        <div className="flex justify-center mb-8">
          <SearchInput 
            onLocationSelect={handleLocationSelect}
            isLoading={isLoading}
          />
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="flex flex-col items-center justify-center py-16">
            <Loader2 className="h-8 w-8 animate-spin text-primary mb-4" />
            <p className="text-muted-foreground">Fetching air quality data...</p>
          </div>
        )}

        {/* Results */}
        {pollutionData && !isLoading && (
          <div className="space-y-8">
            <AQIDisplay 
              aqi={pollutionData.aqi}
              locationName={locationName}
            />
            
            <PollutantsGrid components={pollutionData.components} />
            
            <AQITable />
            
            <p className="text-center text-xs text-muted-foreground">
              Data for demonstration purposes • {new Date().toLocaleString()}
            </p>
          </div>
        )}

        {/* Empty State */}
        {!pollutionData && !isLoading && (
          <div className="space-y-8">
            <div className="text-center py-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
                <Wind className="h-8 w-8 text-muted-foreground" />
              </div>
              <p className="text-muted-foreground">
                Enter a city name to check air quality
              </p>
            </div>
            
            <AQITable />
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
