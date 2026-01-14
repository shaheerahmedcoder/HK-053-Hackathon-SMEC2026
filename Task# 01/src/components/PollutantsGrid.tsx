import { PollutantCard } from './PollutantCard';

interface PollutantsGridProps {
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

export const PollutantsGrid = ({ components }: PollutantsGridProps) => {
  const pollutants = [
    { key: 'pm2_5', name: 'PM₂.₅', value: components.pm2_5, unit: 'μg/m³' },
    { key: 'pm10', name: 'PM₁₀', value: components.pm10, unit: 'μg/m³' },
    { key: 'o3', name: 'O₃', value: components.o3, unit: 'μg/m³' },
    { key: 'no2', name: 'NO₂', value: components.no2, unit: 'μg/m³' },
    { key: 'so2', name: 'SO₂', value: components.so2, unit: 'μg/m³' },
    { key: 'co', name: 'CO', value: components.co, unit: 'μg/m³' },
  ];

  return (
    <div className="w-full">
      <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
        Pollutant Breakdown
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {pollutants.map((pollutant) => (
          <PollutantCard
            key={pollutant.key}
            name={pollutant.name}
            value={pollutant.value}
            unit={pollutant.unit}
            pollutantKey={pollutant.key}
          />
        ))}
      </div>
    </div>
  );
};
