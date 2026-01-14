import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">G</span>
            </div>
            <span className="font-display font-bold text-xl text-foreground">GigHub</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <a href="#gigs" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              Browse Gigs
            </a>
            <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              How It Works
            </a>
            <a href="#categories" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              Categories
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="ghost" size="default">
              Sign In
            </Button>
            <Button variant="default" size="default">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col gap-4">
              <a href="#gigs" className="text-muted-foreground hover:text-foreground transition-colors font-medium py-2">
                Browse Gigs
              </a>
              <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors font-medium py-2">
                How It Works
              </a>
              <a href="#categories" className="text-muted-foreground hover:text-foreground transition-colors font-medium py-2">
                Categories
              </a>
              <div className="flex flex-col gap-2 pt-4">
                <Button variant="ghost" size="lg" className="w-full justify-center">
                  Sign In
                </Button>
                <Button variant="default" size="lg" className="w-full justify-center">
                  Get Started
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
