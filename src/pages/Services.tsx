import ServiceCard from "@/components/ServiceCard";
import { 
  Stethoscope, 
  Heart, 
  Activity, 
  Baby, 
  Syringe, 
  Pill,
  Thermometer,
  Clock,
  Shield,
  Users,
  Home,
  Smile
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import elderlyImage from "@/assets/elderly-care.jpg";
import physioImage from "@/assets/physiotherapy.jpg";

const Services = () => {
  const mainServices = [
    {
      icon: Stethoscope,
      title: "Home Nursing",
      description: "Professional nursing care delivered at your home",
      features: [
        "Medication administration and management",
        "Vital signs monitoring",
        "Wound care and dressing changes",
        "Injection and IV therapy",
        "Post-operative care"
      ],
    },
    {
      icon: Heart,
      title: "Elderly Care",
      description: "Compassionate support for senior citizens",
      features: [
        "Personal hygiene assistance",
        "Mobility and transfer support",
        "Companionship and emotional support",
        "Meal preparation and feeding",
        "Medication reminders"
      ],
    },
    {
      icon: Activity,
      title: "Physiotherapy",
      description: "Expert rehabilitation and physical therapy",
      features: [
        "Post-surgery rehabilitation",
        "Stroke recovery programs",
        "Sports injury treatment",
        "Chronic pain management",
        "Mobility improvement exercises"
      ],
    },
    {
      icon: Baby,
      title: "Baby Care & Babysitting",
      description: "Professional care for infants and children",
      features: [
        "Newborn care and support",
        "Feeding and nutrition guidance",
        "Sleep training assistance",
        "Development monitoring",
        "Safe and engaging activities"
      ],
    },
    {
      icon: Syringe,
      title: "Post-Surgery Care",
      description: "Comprehensive recovery support after surgery",
      features: [
        "Wound care and monitoring",
        "Pain management",
        "Medication administration",
        "Mobility assistance",
        "Follow-up coordination"
      ],
    },
    {
      icon: Pill,
      title: "Chronic Disease Management",
      description: "Ongoing care for chronic conditions",
      features: [
        "Diabetes care and monitoring",
        "Hypertension management",
        "Heart disease care",
        "COPD support",
        "Regular health assessments"
      ],
    },
  ];

  const additionalServices = [
    { icon: Thermometer, title: "Health Monitoring", description: "Regular vital signs and health checks" },
    { icon: Clock, title: "24/7 Availability", description: "Round-the-clock nursing services" },
    { icon: Shield, title: "Emergency Care", description: "Immediate response to health emergencies" },
    { icon: Users, title: "Palliative Care", description: "Comfort care for serious illnesses" },
    { icon: Home, title: "Home Modifications", description: "Safety and accessibility improvements" },
    { icon: Smile, title: "Mental Health Support", description: "Emotional and psychological care" },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl text-primary-foreground animate-fade-in">
            <h1 className="mb-6">Our Healthcare Services</h1>
            <p className="text-xl text-primary-foreground/90">
              Comprehensive home healthcare solutions tailored to meet your unique needs and delivered by certified professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="mb-4">Core Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our primary healthcare services designed to support your health and wellbeing at home.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mainServices.map((service, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Highlights */}
      <section className="py-20 bg-background-alt">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 lg:order-1 animate-fade-in">
              <img 
                src={elderlyImage} 
                alt="Elderly care" 
                className="rounded-2xl shadow-card w-full h-auto"
              />
            </div>
            <div className="order-1 lg:order-2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h2 className="mb-6">Specialized Elderly Care</h2>
              <p className="text-muted-foreground mb-4">
                Our elderly care services are designed to help seniors maintain their independence and quality of life while receiving the support they need. Our compassionate caregivers provide assistance with daily activities, companionship, and specialized medical care.
              </p>
              <p className="text-muted-foreground mb-6">
                We understand that every senior has unique needs, which is why we create personalized care plans that address physical, emotional, and social wellbeing.
              </p>
              <Button variant="default" asChild>
                <Link to="/contact">Learn More</Link>
              </Button>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="mb-6">Professional Physiotherapy</h2>
              <p className="text-muted-foreground mb-4">
                Our physiotherapy services bring expert rehabilitation care directly to your home. Whether you're recovering from surgery, an injury, or managing a chronic condition, our licensed physiotherapists develop customized treatment plans to help you regain strength and mobility.
              </p>
              <p className="text-muted-foreground mb-6">
                We use evidence-based techniques and modern equipment to ensure effective treatment and faster recovery times.
              </p>
              <Button variant="default" asChild>
                <Link to="/contact">Schedule Session</Link>
              </Button>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <img 
                src={physioImage} 
                alt="Physiotherapy" 
                className="rounded-2xl shadow-card w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="mb-4">Additional Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Complementary services to support your overall health and wellness.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <div 
                key={index}
                className="bg-background-alt p-6 rounded-xl border border-border hover:shadow-card transition-all animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-4 shadow-soft">
                  <service.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto text-primary-foreground animate-fade-in">
            <h2 className="mb-6">Ready to Experience Quality Healthcare at Home?</h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Contact us today to discuss your specific needs and schedule a consultation with our healthcare team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" asChild>
                <Link to="/contact">Book Consultation</Link>
              </Button>
              <Button variant="outline" size="lg" className="bg-primary-foreground/10 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <a href="tel:+97412345678">Call Us: +974 1234 5678</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
