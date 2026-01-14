import { Bell, Search, Home, User, PlusSquare } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { currentUser } from "@/data/mockData";

interface HeaderProps {
  onNewPost: () => void;
}

export function Header({ onNewPost }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-sm">
      <div className="container flex h-14 items-center justify-between">
        <div className="flex items-center gap-6">
          <h1 className="text-xl font-semibold tracking-tight text-foreground">
            <span className="text-primary">SMEC</span> connect
          </h1>
        </div>

        <nav className="flex items-center gap-1">
          <Button variant="ghost" size="icon" className="text-foreground">
            <Home className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
            <Search className="h-5 w-5" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-muted-foreground hover:text-foreground"
            onClick={onNewPost}
          >
            <PlusSquare className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
            <Bell className="h-5 w-5" />
          </Button>
        </nav>

        <Avatar className="h-8 w-8 cursor-pointer ring-2 ring-transparent transition-all hover:ring-primary/20">
          <AvatarImage src={currentUser.avatar} alt={currentUser.displayName} />
          <AvatarFallback>{currentUser.displayName[0]}</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
