import { useState, useMemo } from 'react';
import { Header } from '@/components/Header';
import { ResourceFilters } from '@/components/ResourceFilters';
import { ResourceCard } from '@/components/ResourceCard';
import { BookingModal } from '@/components/BookingModal';
import { StatsOverview } from '@/components/StatsOverview';
import { mockResources } from '@/data/mockResources';
import { Resource, ResourceType, ResourceStatus } from '@/types/resource';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<ResourceType | 'all'>('all');
  const [selectedStatus, setSelectedStatus] = useState<ResourceStatus | 'all'>('all');
  const [selectedResource, setSelectedResource] = useState<Resource | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const filteredResources = useMemo(() => {
    return mockResources.filter((resource) => {
      const matchesSearch =
        resource.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesType = selectedType === 'all' || resource.type === selectedType;
      const matchesStatus = selectedStatus === 'all' || resource.status === selectedStatus;

      return matchesSearch && matchesType && matchesStatus;
    });
  }, [searchQuery, selectedType, selectedStatus]);

  const handleBookResource = (resource: Resource) => {
    setSelectedResource(resource);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onSearch={setSearchQuery} searchQuery={searchQuery} />

      <main className="container py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Overview</h2>
          <p className="text-muted-foreground">Manage campus resources efficiently</p>
        </div>

        <div className="mb-8">
          <StatsOverview />
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-4">Browse Resources</h3>
          <ResourceFilters
            selectedType={selectedType}
            selectedStatus={selectedStatus}
            onTypeChange={setSelectedType}
            onStatusChange={setSelectedStatus}
          />
        </div>

        {filteredResources.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-muted-foreground">No resources found matching your criteria.</p>
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredResources.map((resource) => (
              <ResourceCard
                key={resource.id}
                resource={resource}
                onBook={handleBookResource}
              />
            ))}
          </div>
        )}
      </main>

      <BookingModal
        resource={selectedResource}
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </div>
  );
};

export default Index;
