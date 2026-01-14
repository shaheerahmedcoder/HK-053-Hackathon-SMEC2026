export type ResourceType = 'lab' | 'hall' | 'equipment' | 'room';

export type ResourceStatus = 'available' | 'occupied' | 'maintenance';

export interface Resource {
  id: string;
  name: string;
  type: ResourceType;
  location: string;
  capacity?: number;
  status: ResourceStatus;
  description: string;
  amenities: string[];
  image?: string;
}

export interface TimeSlot {
  id: string;
  startTime: string;
  endTime: string;
  isAvailable: boolean;
}

export interface Booking {
  id: string;
  resourceId: string;
  userId: string;
  date: Date;
  startTime: string;
  endTime: string;
  status: 'pending' | 'approved' | 'declined';
  purpose: string;
  createdAt: Date;
}
