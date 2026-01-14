import { ResourceType, ResourceStatus } from '@/types/resource';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ResourceFiltersProps {
  selectedType: ResourceType | 'all';
  selectedStatus: ResourceStatus | 'all';
  onTypeChange: (type: ResourceType | 'all') => void;
  onStatusChange: (status: ResourceStatus | 'all') => void;
}

const typeFilters: { value: ResourceType | 'all'; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'lab', label: 'Labs' },
  { value: 'hall', label: 'Halls' },
  { value: 'equipment', label: 'Equipment' },
  { value: 'room', label: 'Rooms' },
];

const statusFilters: { value: ResourceStatus | 'all'; label: string }[] = [
  { value: 'all', label: 'Any Status' },
  { value: 'available', label: 'Available' },
  { value: 'occupied', label: 'Occupied' },
  { value: 'maintenance', label: 'Maintenance' },
];

export function ResourceFilters({
  selectedType,
  selectedStatus,
  onTypeChange,
  onStatusChange,
}: ResourceFiltersProps) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-wrap gap-2">
        {typeFilters.map((filter) => (
          <Button
            key={filter.value}
            variant="ghost"
            size="sm"
            onClick={() => onTypeChange(filter.value)}
            className={cn(
              'rounded-full px-4 transition-all',
              selectedType === filter.value
                ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
            )}
          >
            {filter.label}
          </Button>
        ))}
      </div>

      <div className="flex gap-2">
        {statusFilters.map((filter) => (
          <Button
            key={filter.value}
            variant="ghost"
            size="sm"
            onClick={() => onStatusChange(filter.value)}
            className={cn(
              'rounded-full px-3 text-xs transition-all',
              selectedStatus === filter.value
                ? 'bg-muted text-foreground'
                : 'text-muted-foreground hover:text-foreground'
            )}
          >
            {filter.label}
          </Button>
        ))}
      </div>
    </div>
  );
}
