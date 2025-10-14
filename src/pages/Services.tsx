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
  Smile,
  GraduationCap,
  Building,
  Plane,
  Scissors
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import elderlyImage from "@/assets/elderly-care.jpg";
import physioImage from "@/assets/physiotherapy.jpg";
import nurseImage from "@/assets/nurse-professional.jpg";
import heroImage from "@/assets/hero-image.jpg";
import babyCareImage from "@/assets/baby-care-babysitting.jpg";
import chronicDiseaseImage from "@/assets/chronic-disease-management.png";
import industrialNursingImage from "@/assets/industrial-nursing.jpg";
import neonatalImage from "@/assets/neonatal.jpg";
import palliativeCareImage from "@/assets/palliative-care.jpg";
import postOperativeImage from "@/assets/post-operative-care.jpg";
import pregnancyImage from "@/assets/pregnancy.jpg";
import schoolNurseImage from "@/assets/school-nurse.jpg";
import travelCareImage from "@/assets/travel-care.jpeg";

const Services = () => {
  const mainServices = [
    {
      icon: Stethoscope,
      title: "Home Nursing",
      description: "Professional nursing care delivered at your home",
      image: nurseImage,
      imageAlt: "Professional nurse providing home care",
      features: [
        "Medication administration and management",
        "Vital signs monitoring",
        "Wound care and dressing changes",
        "Injection and IV therapy",
        "Health assessment and monitoring"
      ],
    },
    {
      icon: Heart,
      title: "Elder Care",
      description: "Comprehensive care for senior citizens",
      image: elderlyImage,
      imageAlt: "Elderly care services",
      features: [
        "Personal hygiene assistance",
        "Mobility and transfer support",
        "Companionship and emotional support",
        "Meal preparation and feeding",
        "Medication reminders and management"
      ],
    },
    {
      icon: Baby,
      title: "Neonatal Care",
      description: "Specialized care for newborns and infants",
      image: neonatalImage,
      imageAlt: "Neonatal care services",
      features: [
        "Newborn health monitoring",
        "Feeding support and guidance",
        "Developmental assessments",
        "Parent education and support",
        "Premature baby care"
      ],
    },
    {
      icon: Users,
      title: "Palliative Care",
      description: "Comfort and support for serious illnesses",
      image: palliativeCareImage,
      imageAlt: "Palliative care services",
      features: [
        "Pain and symptom management",
        "Emotional and spiritual support",
        "Family counseling and guidance",
        "Quality of life enhancement",
        "End-of-life care coordination"
      ],
    },
    {
      icon: Heart,
      title: "Pregnancy Care",
      description: "Comprehensive maternal health support",
      image: pregnancyImage,
      imageAlt: "Pregnancy care services",
      features: [
        "Prenatal health monitoring",
        "Postpartum care and recovery",
        "Breastfeeding support",
        "Maternal mental health support",
        "Newborn care education"
      ],
    },
    {
      icon: GraduationCap,
      title: "School Nurse",
      description: "Healthcare services for educational institutions",
      image: schoolNurseImage,
      imageAlt: "School nursing services",
      features: [
        "Student health assessments",
        "Emergency first aid",
        "Health education programs",
        "Chronic condition management",
        "Immunization coordination"
      ],
    },
    {
      icon: Building,
      title: "Industrial Nurse",
      description: "Workplace health and safety services",
      image: industrialNursingImage,
      imageAlt: "Industrial nursing services",
      features: [
        "Occupational health assessments",
        "Workplace injury management",
        "Health and safety training",
        "Emergency response coordination",
        "Employee wellness programs"
      ],
    },
    {
      icon: Plane,
      title: "Travel Care",
      description: "Healthcare support for travelers",
      image: travelCareImage,
      imageAlt: "Travel care services",
      features: [
        "Pre-travel health consultations",
        "Travel vaccination services",
        "Medical escort services",
        "Travel health insurance coordination",
        "Emergency medical support abroad"
      ],
    },
    {
      icon: Scissors,
      title: "Post-Operative Care",
      description: "Comprehensive recovery support after surgery",
      image: postOperativeImage,
      imageAlt: "Post-operative care services",
      features: [
        "Wound care and monitoring",
        "Pain management",
        "Medication administration",
        "Mobility assistance",
        "Follow-up coordination"
      ],
    },
    {
      icon: Activity,
      title: "Physiotherapy",
      description: "Expert rehabilitation and physical therapy",
      image: physioImage,
      imageAlt: "Physiotherapy services",
      features: [
        "Post-surgery rehabilitation",
        "Stroke recovery programs",
        "Sports injury treatment",
        "Chronic pain management",
        "Mobility improvement exercises"
      ],
    },
    {
      icon: Pill,
      title: "Chronic Disease Management",
      description: "Ongoing care for chronic conditions",
      image: chronicDiseaseImage,
      imageAlt: "Chronic disease management",
      features: [
        "Diabetes care and monitoring",
        "Hypertension management",
        "Heart disease care",
        "COPD support",
        "Regular health assessments"
      ],
    },
    {
      icon: Baby,
      title: "Baby Care & Babysitting",
      description: "Professional care for infants and children",
      image: babyCareImage,
      imageAlt: "Baby care and babysitting services",
      features: [
        "Infant care and support",
        "Feeding and nutrition guidance",
        "Sleep training assistance",
        "Development monitoring",
        "Safe and engaging activities"
      ],
    },
  ];

  const additionalServices = [
    { icon: Thermometer, title: "Health Monitoring", description: "Regular vital signs and health checks" },
    { icon: Clock, title: "24/7 Availability", description: "Round-the-clock nursing services" },
    { icon: Shield, title: "Emergency Care", description: "Immediate response to health emergencies" },
    { icon: Home, title: "Home Modifications", description: "Safety and accessibility improvements" },
    { icon: Smile, title: "Mental Health Support", description: "Emotional and psychological care" },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero min-h-[600px] flex items-center overflow-hidden">
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
              <Stethoscope className="w-4 h-4 mr-2 animate-pulse" />
              <span className="text-sm font-medium">Comprehensive Healthcare Solutions</span>
            </div>
            
            <h1 className="mb-8 font-bold leading-tight text-white">
              Comprehensive Healthcare Services
            </h1>
            
            <p className="text-xl mb-10 text-primary-foreground/90 leading-relaxed max-w-2xl">
              Comprehensive home healthcare solutions tailored to meet your unique needs and delivered by certified professionals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <Button 
                variant="secondary" 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 shadow-glow hover:shadow-glow hover:animate-pulse-glow transition-all duration-300 px-8 py-4 text-lg font-semibold" 
                asChild
              >
                <Link to="/contact">Book Consultation</Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary backdrop-blur-sm px-8 py-4 text-lg font-semibold transition-all duration-300" 
                asChild
              >
                <a href="tel:0097431599965">Call Us: 0097431599965</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="mb-4">Our Healthcare Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive healthcare services designed to support your health and wellbeing across all life stages and situations.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
                <a href="tel:0097431599965">Call Us: 0097431599965</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
