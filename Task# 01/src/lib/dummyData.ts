// Generate consistent dummy data based on city name
export const generateDummyData = (cityName: string) => {
  // Create a simple hash from city name to get consistent results
  let hash = 0;
  for (let i = 0; i < cityName.length; i++) {
    hash = ((hash << 5) - hash) + cityName.charCodeAt(i);
    hash = hash & hash;
  }
  
  // Make hash positive
  hash = Math.abs(hash);
  
  // Determine AQI based on hash (1-5)
  const aqi = (hash % 5) + 1;
  
  // Generate pollutant values based on AQI level
  const ranges = {
    1: { so2: [0, 20], no2: [0, 40], pm10: [0, 20], pm2_5: [0, 10], o3: [0, 60], co: [0, 4400] },
    2: { so2: [20, 80], no2: [40, 70], pm10: [20, 50], pm2_5: [10, 25], o3: [60, 100], co: [4400, 9400] },
    3: { so2: [80, 250], no2: [70, 150], pm10: [50, 100], pm2_5: [25, 50], o3: [100, 140], co: [9400, 12400] },
    4: { so2: [250, 350], no2: [150, 200], pm10: [100, 200], pm2_5: [50, 75], o3: [140, 180], co: [12400, 15400] },
    5: { so2: [350, 500], no2: [200, 300], pm10: [200, 350], pm2_5: [75, 120], o3: [180, 250], co: [15400, 20000] },
  };
  
  const range = ranges[aqi as keyof typeof ranges];
  
  // Use hash to pick values within each range
  const getValue = (min: number, max: number, seed: number) => {
    const ratio = ((hash * seed) % 100) / 100;
    return min + (max - min) * ratio;
  };
  
  return {
    aqi,
    components: {
      so2: getValue(range.so2[0], range.so2[1], 7),
      no2: getValue(range.no2[0], range.no2[1], 11),
      pm10: getValue(range.pm10[0], range.pm10[1], 13),
      pm2_5: getValue(range.pm2_5[0], range.pm2_5[1], 17),
      o3: getValue(range.o3[0], range.o3[1], 19),
      co: getValue(range.co[0], range.co[1], 23),
      no: getValue(0, 10, 29),
      nh3: getValue(0, 15, 31),
    },
  };
};
