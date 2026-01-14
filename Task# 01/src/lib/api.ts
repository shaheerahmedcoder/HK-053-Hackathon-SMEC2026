const API_KEY = 'fd608ebaf82aa047079e2f5b5261de8f';
const BASE_URL = 'https://api.openweathermap.org';

export interface GeoLocation {
  name: string;
  lat: number;
  lon: number;
  country: string;
  state?: string;
}

export interface AirPollutionData {
  coord: { lon: number; lat: number };
  list: Array<{
    main: { aqi: number };
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
    dt: number;
  }>;
}

export const getGeoLocation = async (city: string): Promise<GeoLocation[]> => {
  const response = await fetch(
    `${BASE_URL}/geo/1.0/direct?q=${encodeURIComponent(city)}&limit=5&appid=${API_KEY}`
  );
  if (!response.ok) throw new Error('Failed to fetch location');
  return response.json();
};

export const getAirPollution = async (lat: number, lon: number): Promise<AirPollutionData> => {
  const response = await fetch(
    `${BASE_URL}/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`
  );
  if (!response.ok) throw new Error('Failed to fetch air pollution data');
  return response.json();
};

export const getAQILabel = (aqi: number): { label: string; color: string; bgColor: string } => {
  switch (aqi) {
    case 1:
      return { label: 'Good', color: 'hsl(142 76% 36%)', bgColor: 'hsl(142 76% 94%)' };
    case 2:
      return { label: 'Fair', color: 'hsl(48 96% 40%)', bgColor: 'hsl(48 96% 93%)' };
    case 3:
      return { label: 'Moderate', color: 'hsl(25 95% 45%)', bgColor: 'hsl(25 95% 93%)' };
    case 4:
      return { label: 'Poor', color: 'hsl(0 72% 51%)', bgColor: 'hsl(0 72% 94%)' };
    case 5:
      return { label: 'Very Poor', color: 'hsl(280 65% 40%)', bgColor: 'hsl(280 65% 94%)' };
    default:
      return { label: 'Unknown', color: 'hsl(215 16% 47%)', bgColor: 'hsl(215 16% 95%)' };
  }
};

export const getPollutantLevel = (pollutant: string, value: number): { level: string; color: string } => {
  const thresholds: Record<string, number[]> = {
    so2: [20, 80, 250, 350],
    no2: [40, 70, 150, 200],
    pm10: [20, 50, 100, 200],
    pm2_5: [10, 25, 50, 75],
    o3: [60, 100, 140, 180],
    co: [4400, 9400, 12400, 15400],
  };

  const levels = thresholds[pollutant];
  if (!levels) return { level: 'N/A', color: 'hsl(215 16% 47%)' };

  if (value <= levels[0]) return { level: 'Good', color: 'hsl(142 76% 36%)' };
  if (value <= levels[1]) return { level: 'Fair', color: 'hsl(48 96% 40%)' };
  if (value <= levels[2]) return { level: 'Moderate', color: 'hsl(25 95% 45%)' };
  if (value <= levels[3]) return { level: 'Poor', color: 'hsl(0 72% 51%)' };
  return { level: 'Very Poor', color: 'hsl(280 65% 40%)' };
};
