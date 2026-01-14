import { Receipt, Bell, Settings, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-card/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary">
            <Receipt className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-display font-bold text-xl text-foreground">ExpenseFlow</span>
        </div>

        <div className="hidden md:flex items-center gap-1 bg-secondary rounded-lg px-3 py-1.5 flex-1 max-w-md mx-8">
          <Search className="w-4 h-4 text-muted-foreground" />
          <input 
            type="text"
            placeholder="Search expenses..."
            className="bg-transparent border-none outline-none text-sm flex-1 placeholder:text-muted-foreground"
          />
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-accent rounded-full" />
          </Button>
          <Button variant="ghost" size="icon">
            <Settings className="w-5 h-5" />
          </Button>
          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center ml-2">
            <span className="text-sm font-semibold text-primary">JD</span>
          </div>
        </div>
      </div>
    </header>
  );
}
