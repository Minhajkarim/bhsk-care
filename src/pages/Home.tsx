import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import { Heart, Users, Stethoscope, Baby, Activity, Phone } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Home = () => {
  const services = [
    {
      icon: Stethoscope,
      title: "Home Nursing",
      description: "Professional nursing care in the comfort of your home",
      features: ["Certified nurses", "24/7 availability", "Medication management", "Wound care"],
    },
    {
      icon: Heart,
      title: "Elderly Care",
      description: "Compassionate care for your loved ones",
      features: ["Personal care assistance", "Companionship", "Mobility support", "Nutrition monitoring"],
    },
    {
      icon: Activity,
      title: "Physiotherapy",
      description: "Expert rehabilitation and physical therapy",
      features: ["Post-surgery recovery", "Mobility exercises", "Pain management", "Home equipment"],
    },
    {
      icon: Baby,
      title: "Baby Care",
      description: "Professional care for your little ones",
      features: ["Newborn care", "Feeding assistance", "Sleep training", "Development monitoring"],
    },
  ];

  const testimonials = [
    {
      name: "Ahmed Al-Mansouri",
      role: "Family Member",
      content: "BHSK provided exceptional care for my elderly mother. The nurses are professional, caring, and always on time.",
      rating: 5,
    },
    {
      name: "Sarah Johnson",
      role: "Patient",
      content: "After my surgery, the home nursing service made my recovery so much easier. Highly recommended!",
      rating: 5,
    },
    {
      name: "Fatima Hassan",
      role: "Client",
      content: "The physiotherapy sessions at home were convenient and effective. My mobility has improved significantly.",
      rating: 5,
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero min-h-[600px] flex items-center">
        <div className="absolute inset-0 opacity-20">
          <img src={heroImage} alt="Healthcare professionals" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl text-primary-foreground animate-fade-in">
            <h1 className="mb-6 font-bold">
              Professional Home Nursing & Elderly Care in Qatar
            </h1>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Caring Hands, Healing Hearts. Expert healthcare services delivered with compassion at your doorstep.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="secondary" size="lg" asChild>
                <Link to="/contact">Book a Nurse Now</Link>
              </Button>
              <Button variant="outline" size="lg" className="bg-primary-foreground/10 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <Link to="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-background-alt border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in">
              <p className="text-4xl font-bold text-primary mb-2">500+</p>
              <p className="text-muted-foreground">Happy Clients</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <p className="text-4xl font-bold text-primary mb-2">50+</p>
              <p className="text-muted-foreground">Certified Nurses</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <p className="text-4xl font-bold text-primary mb-2">24/7</p>
              <p className="text-muted-foreground">Available</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <p className="text-4xl font-bold text-primary mb-2">10+</p>
              <p className="text-muted-foreground">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive healthcare services tailored to your needs, delivered by certified professionals.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="default" size="lg" asChild>
              <Link to="/services">Explore All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background-alt">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="mb-4">Why Choose BHSK Health Services?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We are committed to providing the highest quality healthcare services with compassion and professionalism.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 animate-fade-in">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4 shadow-soft">
                <Users className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Certified Professionals</h3>
              <p className="text-muted-foreground">All our nurses and caregivers are certified and extensively trained in their specialties.</p>
            </div>
            <div className="text-center p-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4 shadow-soft">
                <Heart className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Compassionate Care</h3>
              <p className="text-muted-foreground">We treat every patient with dignity, respect, and the utmost care and compassion.</p>
            </div>
            <div className="text-center p-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4 shadow-soft">
                <Phone className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">24/7 Support</h3>
              <p className="text-muted-foreground">Our team is available round the clock to address your healthcare needs and concerns.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="mb-4">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it - hear from families we've had the privilege to serve.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto text-primary-foreground animate-fade-in">
            <h2 className="mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Contact us today to discuss your healthcare needs and schedule a consultation with our team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" asChild>
                <Link to="/contact">Book Appointment</Link>
              </Button>
              <Button variant="outline" size="lg" className="bg-primary-foreground/10 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <a href="tel:+97412345678">Call Us Now</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
