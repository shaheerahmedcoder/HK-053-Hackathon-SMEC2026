import { ShoppingBag, Coffee, Car, Zap, Home, MoreHorizontal } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface ExpenseCardProps {
  category: string;
  merchant: string;
  amount: number;
  date: string;
  status: 'processed' | 'pending';
}

const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  shopping: ShoppingBag,
  food: Coffee,
  transport: Car,
  utilities: Zap,
  housing: Home,
};

export function ExpenseCard({ category, merchant, amount, date, status }: ExpenseCardProps) {
  const Icon = categoryIcons[category.toLowerCase()] || ShoppingBag;

  return (
    <Card variant="stat" className="animate-fade-in">
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="p-2.5 rounded-lg bg-secondary">
              <Icon className="w-5 h-5 text-foreground/70" />
            </div>
            <div>
              <p className="font-medium text-foreground">{merchant}</p>
              <p className="text-sm text-muted-foreground capitalize">{category} • {date}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-right">
              <p className="font-display font-semibold text-foreground">
                ${amount.toFixed(2)}
              </p>
              <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                status === 'processed' 
                  ? 'bg-success/10 text-success' 
                  : 'bg-warning/10 text-warning'
              }`}>
                {status === 'processed' ? 'Processed' : 'Pending'}
              </span>
            </div>
            <button className="p-1 hover:bg-secondary rounded-md transition-colors">
              <MoreHorizontal className="w-4 h-4 text-muted-foreground" />
            </button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
