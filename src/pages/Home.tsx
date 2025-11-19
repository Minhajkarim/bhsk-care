import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import { useLanguage } from "@/contexts/LanguageContext";
import { Heart, Users, Stethoscope, Baby, Activity, Phone, GraduationCap, Building, Plane, Scissors, Award, Target, Shield, Clock } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import nurseImage from "@/assets/nurse-professional.jpg";
import elderlyImage from "@/assets/elderly-care.jpg";
import neonatalImage from "@/assets/neonatal.jpg";
import palliativeCareImage from "@/assets/palliative-care.jpg";
import schoolNurseImage from "@/assets/school-nurse.jpg";
import industrialNursingImage from "@/assets/industrial-nursing.jpg";
import travelCareImage from "@/assets/travel-care.jpeg";
import postOperativeImage from "@/assets/post-operative-care.jpg";

const Home = () => {
  const { t, isRTL } = useLanguage();
  const services = [
    {
      icon: Stethoscope,
      title: t('service.home_nursing.title'),
      description: t('service.home_nursing.description'),
      image: nurseImage,
      imageAlt: "Professional nurse providing home care",
      features: ["Certified nurses", "24/7 availability", "Medication management", "Wound care"],
    },
    {
      icon: Heart,
      title: t('service.elder_care.title'),
      description: t('service.elder_care.description'),
      image: elderlyImage,
      imageAlt: "Elderly care services",
      features: ["Personal care assistance", "Companionship", "Mobility support", "Nutrition monitoring"],
    },
    {
      icon: Baby,
      title: t('service.neonatal_care.title'),
      description: t('service.neonatal_care.description'),
      image: neonatalImage,
      imageAlt: "Neonatal care services",
      features: ["Newborn monitoring", "Feeding support", "Parent education", "Developmental assessments"],
    },
    {
      icon: Users,
      title: t('service.palliative_care.title'),
      description: t('service.palliative_care.description'),
      image: palliativeCareImage,
      imageAlt: "Palliative care services",
      features: ["Pain management", "Emotional support", "Family counseling", "Quality of life"],
    },
    {
      icon: GraduationCap,
      title: t('service.school_nurse.title'),
      description: t('service.school_nurse.description'),
      image: schoolNurseImage,
      imageAlt: "School nursing services",
      features: ["Student health assessments", "Emergency first aid", "Health education", "Immunization"],
    },
    {
      icon: Building,
      title: t('service.industrial_nurse.title'),
      description: t('service.industrial_nurse.description'),
      image: industrialNursingImage,
      imageAlt: "Industrial nursing services",
      features: ["Occupational health", "Injury management", "Safety training", "Wellness programs"],
    },
    {
      icon: Plane,
      title: t('service.travel_care.title'),
      description: t('service.travel_care.description'),
      image: travelCareImage,
      imageAlt: "Travel care services",
      features: ["Pre-travel consultations", "Vaccination services", "Medical escort", "Emergency support"],
    },
    {
      icon: Scissors,
      title: t('service.post_operative_care.title'),
      description: t('service.post_operative_care.description'),
      image: postOperativeImage,
      imageAlt: "Post-operative care services",
      features: ["Wound care", "Pain management", "Mobility assistance", "Follow-up coordination"],
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
    <div className={`flex flex-col ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Hero Section */}
      <section className="relative bg-gradient-hero min-h-[700px] flex items-center overflow-hidden">
        {/* Modern background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/10" />
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-float" style={{ animationDelay: '0s' }} />
        <div className="absolute top-40 right-20 w-16 h-16 bg-white/10 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-white/10 rounded-full animate-float" style={{ animationDelay: '4s' }} />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl text-primary-foreground animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6 animate-scale-in">
              <Heart className="w-4 h-4 mr-2 animate-pulse" />
              <span className="text-sm font-medium">Trusted Healthcare Partner</span>
            </div>
            
            <h1 className="mb-8 font-bold leading-tight text-white">
              {t('home.hero.title')}
            </h1>
            
            <p className="text-xl mb-10 text-primary-foreground/90 leading-relaxed max-w-2xl">
              {t('home.hero.subtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <Button 
                variant="secondary" 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 shadow-glow hover:shadow-glow hover:animate-pulse-glow transition-all duration-300 px-8 py-4 text-lg font-semibold" 
                asChild
              >
                <Link to="/contact">{t('home.hero.cta.primary')}</Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary backdrop-blur-sm px-8 py-4 text-lg font-semibold transition-all duration-300" 
                asChild
              >
                <a href="tel:+97431599965">{t('home.hero.cta.secondary')}</a>
              </Button>
            </div>
            
            {/* Trust indicators */}
            <div className="mt-12 flex flex-wrap items-center gap-8 text-primary-foreground/80">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-white rounded-full mr-3 animate-pulse" />
                <span className="text-sm font-medium">24/7 Availability</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-white rounded-full mr-3 animate-pulse" style={{ animationDelay: '0.5s' }} />
                <span className="text-sm font-medium">Certified Professionals</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-white rounded-full mr-3 animate-pulse" style={{ animationDelay: '1s' }} />
                <span className="text-sm font-medium">Insurance Accepted</span>
              </div>
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
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="mb-6">{t('about.why.title')}</h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              {t('about.why.subtitle')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: t('about.why.qualified.title'),
                description: t('about.why.qualified.desc')
              },
              {
                icon: Heart,
                title: t('about.why.comprehensive.title'),
                description: t('about.why.comprehensive.desc')
              },
              {
                icon: Target,
                title: t('about.why.patient.title'),
                description: t('about.why.patient.desc')
              },
              {
                icon: Shield,
                title: t('about.why.quality.title'),
                description: t('about.why.quality.desc')
              },
              {
                icon: Clock,
                title: t('about.why.flexible.title'),
                description: t('about.why.flexible.desc')
              },
              {
                icon: Users,
                title: t('about.why.trusted.title'),
                description: t('about.why.trusted.desc')
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="text-center p-6 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4 shadow-soft">
                  <item.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
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
                <a href="tel:+97431599965">Call Us Now</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
