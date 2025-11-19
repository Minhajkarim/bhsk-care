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
import { useLanguage } from "@/contexts/LanguageContext";
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
  const { t, isRTL } = useLanguage();
  const mainServices = [
    {
      icon: Stethoscope,
      title: t('service.home_nursing.title'),
      description: t('service.home_nursing.description'),
      image: nurseImage,
      imageAlt: "Professional nurse providing home care",
      serviceKey: 'service.home_nursing',
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
      title: t('service.elder_care.title'),
      description: t('service.elder_care.description'),
      image: elderlyImage,
      imageAlt: "Elderly care services",
      serviceKey: 'service.elder_care',
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
      title: t('service.neonatal_care.title'),
      description: t('service.neonatal_care.description'),
      image: neonatalImage,
      imageAlt: "Neonatal care services",
      serviceKey: 'service.neonatal_care',
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
      title: t('service.palliative_care.title'),
      description: t('service.palliative_care.description'),
      image: palliativeCareImage,
      imageAlt: "Palliative care services",
      serviceKey: 'service.palliative_care',
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
      title: t('service.pregnancy_care.title'),
      description: t('service.pregnancy_care.description'),
      image: pregnancyImage,
      imageAlt: "Pregnancy care services",
      serviceKey: 'service.pregnancy_care',
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
      title: t('service.school_nurse.title'),
      description: t('service.school_nurse.description'),
      image: schoolNurseImage,
      imageAlt: "School nursing services",
      serviceKey: 'service.school_nurse',
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
      title: t('service.industrial_nurse.title'),
      description: t('service.industrial_nurse.description'),
      image: industrialNursingImage,
      imageAlt: "Industrial nursing services",
      serviceKey: 'service.industrial_nurse',
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
      title: t('service.travel_care.title'),
      description: t('service.travel_care.description'),
      image: travelCareImage,
      imageAlt: "Travel care services",
      serviceKey: 'service.travel_care',
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
      title: t('service.post_operative_care.title'),
      description: t('service.post_operative_care.description'),
      image: postOperativeImage,
      imageAlt: "Post-operative care services",
      serviceKey: 'service.post_operative_care',
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
      title: t('service.physiotherapy.title'),
      description: t('service.physiotherapy.description'),
      image: physioImage,
      imageAlt: "Physiotherapy services",
      serviceKey: 'service.physiotherapy',
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
      title: t('service.chronic_disease_management.title'),
      description: t('service.chronic_disease_management.description'),
      image: chronicDiseaseImage,
      imageAlt: "Chronic disease management",
      serviceKey: 'service.chronic_disease_management',
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
      title: t('service.baby_care.title'),
      description: t('service.baby_care.description'),
      image: babyCareImage,
      imageAlt: "Baby care and babysitting services",
      serviceKey: 'service.baby_care',
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
    { icon: Thermometer, title: t('additional.health_monitoring.title'), description: t('additional.health_monitoring.description') },
    { icon: Clock, title: t('additional.availability.title'), description: t('additional.availability.description') },
    { icon: Shield, title: t('additional.emergency_care.title'), description: t('additional.emergency_care.description') },
    { icon: Home, title: t('additional.home_modifications.title'), description: t('additional.home_modifications.description') },
    { icon: Smile, title: t('additional.mental_health.title'), description: t('additional.mental_health.description') },
  ];

  return (
    <div className={`flex flex-col ${isRTL ? 'rtl' : 'ltr'}`}>
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
              {t('services.hero.title')}
            </h1>
            
            <p className="text-xl mb-10 text-primary-foreground/90 leading-relaxed max-w-2xl">
              {t('services.hero.subtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <Button 
                variant="secondary" 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 shadow-glow hover:shadow-glow hover:animate-pulse-glow transition-all duration-300 px-8 py-4 text-lg font-semibold" 
                asChild
              >
                <Link to="/contact">{t('services.hero.cta.primary')}</Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary backdrop-blur-sm px-8 py-4 text-lg font-semibold transition-all duration-300" 
                asChild
              >
                <a href="tel:+97431599965">{t('services.hero.cta.secondary')}</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="mb-4">{t('services.main.title')}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('services.main.subtitle')}
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
              <h2 className="mb-6">{t('services.highlights.elderly.title')}</h2>
              <p className="text-muted-foreground mb-4">
                {t('services.highlights.elderly.content1')}
              </p>
              <p className="text-muted-foreground mb-6">
                {t('services.highlights.elderly.content2')}
              </p>
              <Button variant="default" asChild>
                <Link to="/contact">{t('common.learn_more')}</Link>
              </Button>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="mb-6">{t('services.highlights.physio.title')}</h2>
              <p className="text-muted-foreground mb-4">
                {t('services.highlights.physio.content1')}
              </p>
              <p className="text-muted-foreground mb-6">
                {t('services.highlights.physio.content2')}
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
            <h2 className="mb-4">{t('services.additional.title')}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('services.additional.subtitle')}
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
            <h2 className="mb-6">{t('services.cta.title')}</h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              {t('services.cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" asChild>
                <Link to="/contact">Book Consultation</Link>
              </Button>
              <Button variant="outline" size="lg" className="bg-primary-foreground/10 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <a href="tel:+97431599965">Call Us: +97431599965</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
