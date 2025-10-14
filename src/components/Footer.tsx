import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, Heart } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-background-alt to-background border-t border-border/50 relative overflow-hidden">
      {/* Modern background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(217,91%,60%,0.1),transparent_50%)]" />
      </div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 overflow-hidden relative">
                <img 
                  src={logo} 
                  alt="BHSK Health Services Logo" 
                  className="w-full h-full object-contain p-2 hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              Professional home nursing and elderly care services in Qatar. Delivering compassionate, 
              expert healthcare solutions right to your doorstep.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="p-3 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl hover:from-primary/20 hover:to-secondary/20 hover:shadow-glow transition-all duration-300 group">
                <Facebook className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a href="#" className="p-3 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl hover:from-primary/20 hover:to-secondary/20 hover:shadow-glow transition-all duration-300 group">
                <Instagram className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a href="#" className="p-3 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl hover:from-primary/20 hover:to-secondary/20 hover:shadow-glow transition-all duration-300 group">
                <Linkedin className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-6 text-foreground flex items-center">
              <Heart className="w-4 h-4 mr-2 text-primary" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold mb-6 text-foreground flex items-center">
              <Heart className="w-4 h-4 mr-2 text-secondary" />
              Our Services
            </h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="hover:text-primary transition-colors duration-300 cursor-pointer">Home Nursing</li>
              <li className="hover:text-primary transition-colors duration-300 cursor-pointer">Elder Care</li>
              <li className="hover:text-primary transition-colors duration-300 cursor-pointer">Neonatal Care</li>
              <li className="hover:text-primary transition-colors duration-300 cursor-pointer">Palliative Care</li>
              <li className="hover:text-primary transition-colors duration-300 cursor-pointer">Pregnancy Care</li>
              <li className="hover:text-primary transition-colors duration-300 cursor-pointer">School Nurse</li>
              <li className="hover:text-primary transition-colors duration-300 cursor-pointer">Industrial Nurse</li>
              <li className="hover:text-primary transition-colors duration-300 cursor-pointer">Travel Care</li>
              <li className="hover:text-primary transition-colors duration-300 cursor-pointer">Post-Operative Care</li>
              <li className="hover:text-primary transition-colors duration-300 cursor-pointer">Physiotherapy</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold mb-6 text-foreground flex items-center">
              <Heart className="w-4 h-4 mr-2 text-accent" />
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start group">
                <div className="w-8 h-8 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center mr-3 group-hover:from-primary/20 group-hover:to-secondary/20 transition-all duration-300">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">0097431599965</p>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">0097431331146</p>
                </div>
              </li>
              <li className="flex items-start group">
                <div className="w-8 h-8 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center mr-3 group-hover:from-primary/20 group-hover:to-secondary/20 transition-all duration-300">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <a href="mailto:bhsknursingservices@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors group-hover:text-foreground">
                  bhsknursingservices@gmail.com
                </a>
              </li>
              <li className="flex items-start group">
                <div className="w-8 h-8 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center mr-3 group-hover:from-primary/20 group-hover:to-secondary/20 transition-all duration-300">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  Doha, Qatar
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50 text-center">
          <div className="flex items-center justify-center mb-4">
            <Heart className="w-4 h-4 text-primary mr-2 animate-pulse" />
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} BHSK Health Services. All rights reserved.
            </p>
            <Heart className="w-4 h-4 text-primary ml-2 animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>
          <p className="text-xs text-muted-foreground">
            Licensed Healthcare Provider | Ministry of Public Health Qatar
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
