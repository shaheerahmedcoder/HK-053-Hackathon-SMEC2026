import { AlertTriangle, Info, CheckCircle, X } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface Alert {
  id: string;
  type: 'warning' | 'info' | 'success';
  message: string;
  time: string;
}

const alerts: Alert[] = [
  { id: '1', type: 'warning', message: 'You\'ve spent 85% of your monthly food budget', time: '2h ago' },
  { id: '2', type: 'info', message: 'New receipt processed: Walmart - $45.32', time: '4h ago' },
  { id: '3', type: 'success', message: 'Monthly report ready for download', time: '1d ago' },
];

const alertStyles = {
  warning: {
    icon: AlertTriangle,
    bg: 'bg-warning/10',
    iconColor: 'text-warning',
    border: 'border-warning/20',
  },
  info: {
    icon: Info,
    bg: 'bg-primary/10',
    iconColor: 'text-primary',
    border: 'border-primary/20',
  },
  success: {
    icon: CheckCircle,
    bg: 'bg-success/10',
    iconColor: 'text-success',
    border: 'border-success/20',
  },
};

export function AlertsPanel() {
  return (
    <Card variant="elevated" className="animate-fade-in">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">Alerts</CardTitle>
          <span className="text-xs font-medium text-muted-foreground bg-secondary px-2 py-1 rounded-full">
            {alerts.length} new
          </span>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        {alerts.map((alert) => {
          const style = alertStyles[alert.type];
          const Icon = style.icon;
          
          return (
            <div 
              key={alert.id}
              className={`flex items-start gap-3 p-3 rounded-lg ${style.bg} border ${style.border}`}
            >
              <Icon className={`w-4 h-4 mt-0.5 ${style.iconColor}`} />
              <div className="flex-1 min-w-0">
                <p className="text-sm text-foreground">{alert.message}</p>
                <p className="text-xs text-muted-foreground mt-1">{alert.time}</p>
              </div>
              <Button variant="ghost" size="icon" className="h-6 w-6 shrink-0">
                <X className="w-3 h-3" />
              </Button>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
