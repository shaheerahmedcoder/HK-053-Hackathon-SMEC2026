import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const aqiData = [
  { level: 'Good', index: 1, so2: '[0; 20]', no2: '[0; 40]', pm10: '[0; 20]', pm25: '[0; 10]', o3: '[0; 60]', co: '[0; 4400]', color: 'hsl(142 76% 36%)' },
  { level: 'Fair', index: 2, so2: '[20; 80]', no2: '[40; 70]', pm10: '[20; 50]', pm25: '[10; 25]', o3: '[60; 100]', co: '[4400; 9400]', color: 'hsl(48 96% 40%)' },
  { level: 'Moderate', index: 3, so2: '[80; 250]', no2: '[70; 150]', pm10: '[50; 100]', pm25: '[25; 50]', o3: '[100; 140]', co: '[9400; 12400]', color: 'hsl(25 95% 45%)' },
  { level: 'Poor', index: 4, so2: '[250; 350]', no2: '[150; 200]', pm10: '[100; 200]', pm25: '[50; 75]', o3: '[140; 180]', co: '[12400; 15400]', color: 'hsl(0 72% 51%)' },
  { level: 'Very Poor', index: 5, so2: '≥350', no2: '≥200', pm10: '≥200', pm25: '≥75', o3: '≥180', co: '≥15400', color: 'hsl(280 65% 40%)' },
];

export const AQITable = () => {
  return (
    <div className="w-full">
      <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
        Air Quality Index Standards
      </h3>
      <div className="border border-border rounded-xl overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50">
              <TableHead className="font-semibold">Quality</TableHead>
              <TableHead className="font-semibold text-center">Index</TableHead>
              <TableHead className="font-semibold text-center">SO₂</TableHead>
              <TableHead className="font-semibold text-center">NO₂</TableHead>
              <TableHead className="font-semibold text-center">PM₁₀</TableHead>
              <TableHead className="font-semibold text-center">PM₂.₅</TableHead>
              <TableHead className="font-semibold text-center">O₃</TableHead>
              <TableHead className="font-semibold text-center">CO</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {aqiData.map((row) => (
              <TableRow key={row.index}>
                <TableCell>
                  <span 
                    className="font-medium px-2 py-1 rounded-md"
                    style={{ color: row.color, backgroundColor: `${row.color}15` }}
                  >
                    {row.level}
                  </span>
                </TableCell>
                <TableCell className="text-center font-medium">{row.index}</TableCell>
                <TableCell className="text-center text-sm text-muted-foreground">{row.so2}</TableCell>
                <TableCell className="text-center text-sm text-muted-foreground">{row.no2}</TableCell>
                <TableCell className="text-center text-sm text-muted-foreground">{row.pm10}</TableCell>
                <TableCell className="text-center text-sm text-muted-foreground">{row.pm25}</TableCell>
                <TableCell className="text-center text-sm text-muted-foreground">{row.o3}</TableCell>
                <TableCell className="text-center text-sm text-muted-foreground">{row.co}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <p className="text-xs text-muted-foreground mt-2 text-center">
        All concentrations in μg/m³
      </p>
    </div>
  );
};
