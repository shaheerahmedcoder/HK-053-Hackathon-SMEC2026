import { getAQILabel } from '@/lib/api';

interface AQIDisplayProps {
  aqi: number;
  locationName: string;
}

export const AQIDisplay = ({ aqi, locationName }: AQIDisplayProps) => {
  const { label, color, bgColor } = getAQILabel(aqi);

  return (
    <div className="text-center space-y-4">
      <h2 className="text-lg font-medium text-muted-foreground">{locationName}</h2>
      
      <div 
        className="inline-flex flex-col items-center justify-center w-40 h-40 rounded-full"
        style={{ backgroundColor: bgColor }}
      >
        <span 
          className="text-5xl font-bold"
          style={{ color }}
        >
          {aqi}
        </span>
        <span 
          className="text-lg font-semibold mt-1"
          style={{ color }}
        >
          {label}
        </span>
      </div>

      <p className="text-sm text-muted-foreground max-w-xs mx-auto">
        Air Quality Index based on European standards
      </p>
    </div>
  );
};
