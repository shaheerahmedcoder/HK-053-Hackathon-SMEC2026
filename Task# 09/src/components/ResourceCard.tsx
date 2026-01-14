import { Resource } from '@/types/resource';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Users, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ResourceCardProps {
  resource: Resource;
  onBook: (resource: Resource) => void;
}

const statusConfig = {
  available: {
    label: 'Available',
    className: 'bg-success/10 text-success border-success/20',
  },
  occupied: {
    label: 'Occupied',
    className: 'bg-destructive/10 text-destructive border-destructive/20',
  },
  maintenance: {
    label: 'Maintenance',
    className: 'bg-warning/10 text-warning border-warning/20',
  },
};

const typeConfig = {
  lab: { icon: '🔬', label: 'Laboratory' },
  hall: { icon: '🏛️', label: 'Hall' },
  equipment: { icon: '⚙️', label: 'Equipment' },
  room: { icon: '🚪', label: 'Room' },
};

export function ResourceCard({ resource, onBook }: ResourceCardProps) {
  const status = statusConfig[resource.status];
  const type = typeConfig[resource.type];

  return (
    <Card className="group overflow-hidden border border-border bg-card transition-all hover:border-primary/20 hover:shadow-sm animate-fade-in">
      <CardContent className="p-0">
        <div className="p-5">
          <div className="flex items-start justify-between gap-3 mb-3">
            <div className="flex items-center gap-2">
              <span className="text-lg">{type.icon}</span>
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                {type.label}
              </span>
            </div>
            <Badge variant="outline" className={cn('text-xs font-medium', status.className)}>
              {status.label}
            </Badge>
          </div>

          <h3 className="font-semibold text-foreground mb-2 line-clamp-1">
            {resource.name}
          </h3>

          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
            {resource.description}
          </p>

          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
            <div className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5" />
              <span className="line-clamp-1">{resource.location}</span>
            </div>
            {resource.capacity && (
              <div className="flex items-center gap-1.5">
                <Users className="h-3.5 w-3.5" />
                <span>{resource.capacity}</span>
              </div>
            )}
          </div>

          <div className="flex flex-wrap gap-1.5 mb-4">
            {resource.amenities.slice(0, 3).map((amenity) => (
              <span
                key={amenity}
                className="inline-flex items-center rounded-md bg-secondary px-2 py-0.5 text-xs text-secondary-foreground"
              >
                {amenity}
              </span>
            ))}
            {resource.amenities.length > 3 && (
              <span className="inline-flex items-center rounded-md bg-secondary px-2 py-0.5 text-xs text-muted-foreground">
                +{resource.amenities.length - 3}
              </span>
            )}
          </div>
        </div>

        <div className="border-t border-border px-5 py-3">
          <Button
            onClick={() => onBook(resource)}
            disabled={resource.status !== 'available'}
            className="w-full gap-2"
            variant={resource.status === 'available' ? 'default' : 'secondary'}
          >
            {resource.status === 'available' ? (
              <>
                Book Now
                <ArrowRight className="h-4 w-4" />
              </>
            ) : (
              'Unavailable'
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
