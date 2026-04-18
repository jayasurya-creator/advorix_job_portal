import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Briefcase } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 font-bold text-2xl text-foreground hover:opacity-80 transition-smooth">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Briefcase className="w-5 h-5 text-white" />
            </div>
            <span>Advorix</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
              How It Works
            </a>
            <a href="#roles" className="text-muted-foreground hover:text-foreground transition-colors">
              For Everyone
            </a>
          </div>

          {/* Auth Buttons - Desktop */}
          <div className="hidden md:flex items-center gap-3">
            <Link to="/auth/admin-login">
              <Button variant="ghost">Admin Login</Button>
            </Link>
            <Link to="/auth/login">
              <Button variant="outline">Sign In</Button>
            </Link>
            <Link to="/auth/candidate-signup">
              <Button>Get Started</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <a href="#features" className="block px-4 py-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="block px-4 py-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors">
              How It Works
            </a>
            <a href="#roles" className="block px-4 py-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors">
              For Everyone
            </a>
            <div className="pt-2 space-y-2 border-t border-border">
              <Link to="/auth/admin-login" className="block">
                <Button variant="ghost" className="w-full justify-start">
                  Admin Login
                </Button>
              </Link>
              <Link to="/auth/login" className="block">
                <Button variant="outline" className="w-full justify-start">
                  Sign In
                </Button>
              </Link>
              <Link to="/auth/candidate-signup" className="block">
                <Button className="w-full justify-start">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
