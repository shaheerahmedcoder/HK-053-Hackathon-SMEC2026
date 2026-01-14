import { getPollutantLevel } from '@/lib/api';

interface PollutantCardProps {
  name: string;
  value: number;
  unit: string;
  pollutantKey: string;
}

const pollutantNames: Record<string, string> = {
  co: 'Carbon Monoxide',
  no: 'Nitric Oxide',
  no2: 'Nitrogen Dioxide',
  o3: 'Ozone',
  so2: 'Sulphur Dioxide',
  pm2_5: 'PM2.5',
  pm10: 'PM10',
  nh3: 'Ammonia',
};

export const PollutantCard = ({ name, value, unit, pollutantKey }: PollutantCardProps) => {
  const { level, color } = getPollutantLevel(pollutantKey, value);
  const displayName = pollutantNames[pollutantKey] || name;

  return (
    <div className="bg-card border border-border rounded-xl p-4 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-2">
        <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
          {name}
        </span>
        <span 
          className="text-xs font-semibold px-2 py-0.5 rounded-full"
          style={{ color, backgroundColor: `${color}20` }}
        >
          {level}
        </span>
      </div>
      
      <div className="flex items-baseline gap-1">
        <span className="text-2xl font-bold text-foreground">
          {value.toFixed(1)}
        </span>
        <span className="text-sm text-muted-foreground">{unit}</span>
      </div>
      
      <p className="text-xs text-muted-foreground mt-1">{displayName}</p>
    </div>
  );
};
