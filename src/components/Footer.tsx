import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background-alt border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <span className="text-lg font-bold text-primary-foreground">BH</span>
              </div>
              <h3 className="text-lg font-bold">BHSK Health Services</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Caring Hands, Healing Hearts. Professional home nursing and elderly care services in Qatar.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="p-2 bg-background rounded-lg hover:bg-primary hover:text-primary-foreground transition-all">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-background rounded-lg hover:bg-primary hover:text-primary-foreground transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-background rounded-lg hover:bg-primary hover:text-primary-foreground transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Home Nursing</li>
              <li>Elderly Care</li>
              <li>Post-Surgery Care</li>
              <li>Baby Care & Babysitting</li>
              <li>Physiotherapy</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="w-4 h-4 mr-2 mt-1 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">+974 1234 5678</p>
                  <p className="text-sm text-muted-foreground">+974 0000 0000</p>
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="w-4 h-4 mr-2 mt-1 text-primary" />
                <a href="mailto:info@bhskhealth.qa" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  info@bhskhealth.qa
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 mt-1 text-primary" />
                <p className="text-sm text-muted-foreground">
                  Doha, Qatar
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} BHSK Health Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
