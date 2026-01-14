import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', amount: 1200 },
  { month: 'Feb', amount: 980 },
  { month: 'Mar', amount: 1450 },
  { month: 'Apr', amount: 1100 },
  { month: 'May', amount: 1680 },
  { month: 'Jun', amount: 1320 },
  { month: 'Jul', amount: 1540 },
];

export function SpendingChart() {
  return (
    <Card variant="elevated" className="animate-fade-in">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Spending Trend</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
              <defs>
                <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(160, 45%, 40%)" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="hsl(160, 45%, 40%)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(40, 15%, 90%)" vertical={false} />
              <XAxis 
                dataKey="month" 
                axisLine={false}
                tickLine={false}
                tick={{ fill: 'hsl(220, 10%, 50%)', fontSize: 12 }}
              />
              <YAxis 
                axisLine={false}
                tickLine={false}
                tick={{ fill: 'hsl(220, 10%, 50%)', fontSize: 12 }}
                tickFormatter={(value) => `$${value}`}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'hsl(0, 0%, 100%)',
                  border: 'none',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                }}
                labelStyle={{ color: 'hsl(220, 20%, 12%)', fontWeight: 600 }}
                formatter={(value: number) => [`$${value}`, 'Amount']}
              />
              <Area
                type="monotone"
                dataKey="amount"
                stroke="hsl(160, 45%, 40%)"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorAmount)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
