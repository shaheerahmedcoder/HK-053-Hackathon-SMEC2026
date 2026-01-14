import { Resource, TimeSlot } from '@/types/resource';

export const mockResources: Resource[] = [
  {
    id: '1',
    name: 'Computer Science Lab A',
    type: 'lab',
    location: 'Engineering Building, Room 101',
    capacity: 40,
    status: 'available',
    description: 'Modern computer lab equipped with high-performance workstations for programming and software development courses.',
    amenities: ['40 Workstations', 'Projector', 'Whiteboard', 'AC'],
  },
  {
    id: '2',
    name: 'Main Auditorium',
    type: 'hall',
    location: 'Central Campus, Block A',
    capacity: 500,
    status: 'occupied',
    description: 'Large auditorium suitable for conferences, seminars, and cultural events.',
    amenities: ['500 Seats', 'Stage', 'Sound System', 'AC', 'Projector'],
  },
  {
    id: '3',
    name: 'Physics Laboratory',
    type: 'lab',
    location: 'Science Block, Room 203',
    capacity: 30,
    status: 'available',
    description: 'Fully equipped physics laboratory for conducting experiments and practical sessions.',
    amenities: ['Lab Equipment', 'Safety Gear', 'Projector', 'Storage'],
  },
  {
    id: '4',
    name: '3D Printer Station',
    type: 'equipment',
    location: 'Innovation Hub',
    status: 'available',
    description: 'Industrial-grade 3D printing equipment for prototyping and design projects.',
    amenities: ['FDM Printer', 'SLA Printer', 'Materials'],
  },
  {
    id: '5',
    name: 'Seminar Hall B',
    type: 'hall',
    location: 'Management Building, 2nd Floor',
    capacity: 100,
    status: 'maintenance',
    description: 'Medium-sized seminar hall for workshops, presentations, and guest lectures.',
    amenities: ['100 Seats', 'Projector', 'Video Conferencing', 'AC'],
  },
  {
    id: '6',
    name: 'Chemistry Research Lab',
    type: 'lab',
    location: 'Science Block, Room 105',
    capacity: 25,
    status: 'available',
    description: 'Advanced chemistry lab with specialized equipment for research activities.',
    amenities: ['Fume Hoods', 'Spectrometer', 'Safety Equipment'],
  },
];

export const generateTimeSlots = (date: Date): TimeSlot[] => {
  const slots: TimeSlot[] = [];
  const hours = ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'];
  
  hours.forEach((hour, index) => {
    const nextHour = hours[index + 1] || '18:00';
    slots.push({
      id: `${date.toISOString()}-${hour}`,
      startTime: hour,
      endTime: nextHour,
      isAvailable: Math.random() > 0.3,
    });
  });
  
  return slots;
};
