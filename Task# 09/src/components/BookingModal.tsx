import { useState } from 'react';
import { Resource, TimeSlot } from '@/types/resource';
import { generateTimeSlots } from '@/data/mockResources';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { CalendarDays, Clock, MapPin, Check } from 'lucide-react';
import { toast } from 'sonner';

interface BookingModalProps {
  resource: Resource | null;
  isOpen: boolean;
  onClose: () => void;
}

export function BookingModal({ resource, isOpen, onClose }: BookingModalProps) {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedSlot, setSelectedSlot] = useState<TimeSlot | null>(null);
  const [purpose, setPurpose] = useState('');
  const [step, setStep] = useState<'date' | 'slot' | 'confirm'>('date');

  const timeSlots = selectedDate ? generateTimeSlots(selectedDate) : [];

  const handleSubmit = () => {
    if (!selectedDate || !selectedSlot || !purpose.trim()) {
      toast.error('Please fill in all fields');
      return;
    }

    toast.success('Booking request submitted!', {
      description: `Your request for ${resource?.name} is pending approval.`,
    });
    
    handleClose();
  };

  const handleClose = () => {
    setSelectedDate(new Date());
    setSelectedSlot(null);
    setPurpose('');
    setStep('date');
    onClose();
  };

  if (!resource) return null;

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-lg p-0 gap-0 overflow-hidden">
        <DialogHeader className="p-6 pb-4 border-b border-border">
          <DialogTitle className="text-lg font-semibold">Book Resource</DialogTitle>
          <p className="text-sm text-muted-foreground mt-1">{resource.name}</p>
        </DialogHeader>

        <div className="p-6">
          {step === 'date' && (
            <div className="space-y-4 animate-fade-in">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <MapPin className="h-4 w-4" />
                {resource.location}
              </div>

              <div>
                <Label className="text-sm font-medium mb-2 block">Select Date</Label>
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  disabled={(date) => date < new Date()}
                  className="rounded-lg border border-border"
                />
              </div>

              <Button
                className="w-full"
                disabled={!selectedDate}
                onClick={() => setStep('slot')}
              >
                Continue
              </Button>
            </div>
          )}

          {step === 'slot' && (
            <div className="space-y-4 animate-fade-in">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CalendarDays className="h-4 w-4" />
                {selectedDate && format(selectedDate, 'EEEE, MMMM d, yyyy')}
              </div>

              <div>
                <Label className="text-sm font-medium mb-3 block">Available Time Slots</Label>
                <div className="grid grid-cols-2 gap-2 max-h-[240px] overflow-y-auto">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot.id}
                      disabled={!slot.isAvailable}
                      onClick={() => setSelectedSlot(slot)}
                      className={cn(
                        'flex items-center justify-center gap-2 rounded-lg border px-3 py-3 text-sm transition-all',
                        slot.isAvailable
                          ? selectedSlot?.id === slot.id
                            ? 'border-primary bg-primary text-primary-foreground'
                            : 'border-border bg-card hover:border-primary/50'
                          : 'border-border bg-muted text-muted-foreground cursor-not-allowed opacity-50'
                      )}
                    >
                      <Clock className="h-3.5 w-3.5" />
                      {slot.startTime} - {slot.endTime}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex gap-2">
                <Button variant="outline" className="flex-1" onClick={() => setStep('date')}>
                  Back
                </Button>
                <Button className="flex-1" disabled={!selectedSlot} onClick={() => setStep('confirm')}>
                  Continue
                </Button>
              </div>
            </div>
          )}

          {step === 'confirm' && (
            <div className="space-y-4 animate-fade-in">
              <div className="rounded-lg bg-secondary p-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Date</span>
                  <span className="font-medium">{selectedDate && format(selectedDate, 'MMM d, yyyy')}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Time</span>
                  <span className="font-medium">{selectedSlot?.startTime} - {selectedSlot?.endTime}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Resource</span>
                  <span className="font-medium">{resource.name}</span>
                </div>
              </div>

              <div>
                <Label htmlFor="purpose" className="text-sm font-medium mb-2 block">
                  Purpose of Booking
                </Label>
                <Textarea
                  id="purpose"
                  placeholder="Describe the purpose of your booking..."
                  value={purpose}
                  onChange={(e) => setPurpose(e.target.value)}
                  className="resize-none"
                  rows={3}
                />
              </div>

              <div className="flex gap-2">
                <Button variant="outline" className="flex-1" onClick={() => setStep('slot')}>
                  Back
                </Button>
                <Button className="flex-1 gap-2" onClick={handleSubmit}>
                  <Check className="h-4 w-4" />
                  Submit Request
                </Button>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
