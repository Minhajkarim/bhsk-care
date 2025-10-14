import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
    { name: "FAQ", path: "/faq" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <div className="w-16 h-16 group-hover:animate-pulse-glow transition-all duration-500 relative overflow-hidden">
              <img 
                src={logo} 
                alt="BHSK Health Services Logo" 
                className="w-full h-full object-contain p-2 group-hover:scale-110 transition-transform duration-300"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-all duration-300 hover:text-primary relative group ${
                  isActive(link.path) ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full" />
                )}
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </Link>
            ))}
          </div>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:0097431599965" className="flex items-center text-sm text-muted-foreground hover:text-primary transition-all duration-300 group">
              <div className="w-8 h-8 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center mr-2 group-hover:from-primary/20 group-hover:to-secondary/20 transition-all duration-300">
                <Phone className="w-4 h-4" />
              </div>
              <span className="font-medium">0097431599965</span>
            </a>
            <Button variant="default" size="default" className="bg-gradient-to-r from-primary to-secondary hover:from-primary-dark hover:to-secondary-light shadow-glow hover:shadow-glow hover:animate-pulse-glow transition-all duration-300" asChild>
              <Link to="/contact">Book a Nurse</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-3 text-foreground hover:text-primary transition-all duration-300 hover:bg-primary/5 rounded-xl"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-6 animate-slide-up bg-gradient-to-b from-background to-background-alt rounded-2xl mt-2 shadow-card">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-sm font-medium transition-all duration-300 hover:text-primary px-4 py-3 rounded-xl hover:bg-primary/5 ${
                    isActive(link.path) ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-border/50 px-4">
                <a href="tel:0097431599965" className="flex items-center text-sm text-muted-foreground hover:text-primary transition-all duration-300 mb-4 p-3 rounded-xl hover:bg-primary/5">
                  <div className="w-8 h-8 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center mr-3">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span className="font-medium">0097431599965</span>
                </a>
                <Button variant="default" size="default" className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary-dark hover:to-secondary-light shadow-glow hover:shadow-glow transition-all duration-300" asChild>
                  <Link to="/contact" onClick={() => setIsOpen(false)}>Book a Nurse</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
