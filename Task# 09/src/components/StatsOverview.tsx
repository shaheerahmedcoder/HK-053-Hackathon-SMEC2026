import { Calendar, CheckCircle, Clock, AlertCircle } from 'lucide-react';

const stats = [
  {
    label: 'Total Resources',
    value: '24',
    icon: Calendar,
    change: '+2 this week',
  },
  {
    label: 'Available Now',
    value: '18',
    icon: CheckCircle,
    change: '75% availability',
  },
  {
    label: 'Pending Requests',
    value: '7',
    icon: Clock,
    change: '3 urgent',
  },
  {
    label: 'Under Maintenance',
    value: '2',
    icon: AlertCircle,
    change: 'Back online soon',
  },
];

export function StatsOverview() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-xl border border-border bg-card p-4 animate-fade-in"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary">
              <stat.icon className="h-4 w-4 text-foreground" />
            </div>
          </div>
          <div className="space-y-1">
            <p className="text-2xl font-semibold">{stat.value}</p>
            <p className="text-sm text-muted-foreground">{stat.label}</p>
            <p className="text-xs text-muted-foreground">{stat.change}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
