import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const categories = [
  { name: 'Food & Dining', amount: 485.20, percentage: 32, color: 'bg-primary' },
  { name: 'Shopping', amount: 312.50, percentage: 21, color: 'bg-accent' },
  { name: 'Transport', amount: 245.00, percentage: 16, color: 'bg-success' },
  { name: 'Utilities', amount: 189.30, percentage: 13, color: 'bg-warning' },
  { name: 'Others', amount: 267.00, percentage: 18, color: 'bg-muted-foreground' },
];

export function CategoryBreakdown() {
  return (
    <Card variant="elevated" className="animate-fade-in">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg">Categories</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {categories.map((category) => (
          <div key={category.name} className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium text-foreground">{category.name}</span>
              <span className="text-muted-foreground">${category.amount.toFixed(2)}</span>
            </div>
            <div className="h-2 rounded-full bg-secondary overflow-hidden">
              <div 
                className={`h-full rounded-full ${category.color} transition-all duration-500`}
                style={{ width: `${category.percentage}%` }}
              />
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
