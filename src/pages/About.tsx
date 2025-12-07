import { Heart, Target, Eye, Award, Shield, Clock, Users, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import { useLanguage } from "@/contexts/LanguageContext";
import nurseImage from "@/assets/nurse-professional.jpg";

const About = () => {
  const { t, isRTL } = useLanguage();
  
  const baseUrl = 'https://www.bhskforhealthservices.com';
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "MedicalBusiness",
      "name": "BHSK Health Services",
      "foundingDate": "2014",
      "description": "Delivering excellence in healthcare services across Qatar since 2014. Professional healthcare services that improve the quality of life for our clients.",
      "url": baseUrl,
      "telephone": "+97431599965",
      "email": "bhsknursingservices@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Building No 164, Zone 81, Street 29",
        "addressLocality": "Industrial Area, Ar-Rayyan",
        "addressRegion": "Qatar",
        "addressCountry": "QA"
      }
    }
  };
  
  return (
    <>
      <SEO
        title="About BHSK Health Services - Trusted Healthcare Provider in Qatar Since 2014"
        description="Learn about BHSK Health Services, Qatar's trusted healthcare provider since 2014. We deliver professional, compassionate healthcare services including home nursing, elderly care, and specialized medical care across Qatar."
        keywords="BHSK Health Services, healthcare provider Qatar, medical services Qatar, nursing services Qatar, about BHSK, healthcare company Qatar, medical care Qatar, trusted healthcare Qatar"
        image="/nurse-professional.jpg"
        url={`${baseUrl}/about`}
        canonical={`${baseUrl}/about`}
        alternateLang={[
          { lang: "en", url: `${baseUrl}/about` },
          { lang: "ar", url: `${baseUrl}/ar/about` }
        ]}
        structuredData={structuredData}
      />
      <div className={`flex flex-col ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl text-primary-foreground animate-fade-in">
            <h1 className="mb-6">{t('about.hero.title')}</h1>
            <p className="text-xl text-primary-foreground/90">
              {t('about.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="mb-6">{t('about.story.title')}</h2>
              <p className="text-muted-foreground mb-4">
                {t('about.story.content1')}
              </p>
              <p className="text-muted-foreground mb-4">
                {t('about.story.content2')}
              </p>
              <p className="text-muted-foreground">
                {t('about.story.content3')}
              </p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <img 
                src={nurseImage} 
                alt="Professional nurse" 
                className="rounded-2xl shadow-card w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background-alt">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-background p-8 rounded-2xl shadow-soft hover:shadow-card transition-all animate-fade-in">
              <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-6 shadow-soft">
                <Target className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">{t('about.mission.title')}</h3>
              <p className="text-muted-foreground">
                {t('about.mission.content')}
              </p>
            </div>
            <div className="bg-background p-8 rounded-2xl shadow-soft hover:shadow-card transition-all animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-6 shadow-soft">
                <Eye className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">{t('about.vision.title')}</h3>
              <p className="text-muted-foreground">
                {t('about.vision.content')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="mb-4">{t('about.values.title')}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('about.values.subtitle')}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Heart,
                title: t('about.values.compassion.title'),
                description: t('about.values.compassion.desc')
              },
              {
                icon: Award,
                title: t('about.values.excellence.title'),
                description: t('about.values.excellence.desc')
              },
              {
                icon: Target,
                title: t('about.values.integrity.title'),
                description: t('about.values.integrity.desc')
              },
              {
                icon: Eye,
                title: t('about.values.innovation.title'),
                description: t('about.values.innovation.desc')
              }
            ].map((value, index) => (
              <div 
                key={index} 
                className="bg-background-alt p-6 rounded-xl hover:shadow-card transition-all animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-4 shadow-soft">
                  <value.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background-alt">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="mb-4">{t('about.team.title')}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('about.team.subtitle')}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                stat: "50+",
                label: "Certified Nurses",
                description: "Experienced and compassionate nursing professionals"
              },
              {
                stat: "20+",
                label: "Specialists",
                description: "Including physiotherapists and specialized caregivers"
              },
              {
                stat: "100%",
                label: "Licensed",
                description: "All staff are fully licensed and background checked"
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="text-center p-8 bg-background rounded-2xl shadow-soft hover:shadow-card transition-all animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <p className="text-5xl font-bold text-primary mb-3">{item.stat}</p>
                <h3 className="text-xl font-semibold mb-2">{item.label}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose BHSK Section */}
      <section className="py-20 bg-background">
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
                className="bg-background-alt p-8 rounded-2xl shadow-soft hover:shadow-card transition-all animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-6 shadow-soft">
                  <item.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience the BHSK Difference */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto text-primary-foreground animate-fade-in">
            <h2 className="mb-6">{t('about.difference.title')}</h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              {t('about.difference.subtitle')}
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <Phone className="w-8 h-8 mx-auto mb-3 text-white" />
                <p className="font-semibold mb-2">{t('common.phone')}</p>
                <p className="text-sm">+97431599965</p>
                <p className="text-sm">+97431331146</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <Mail className="w-8 h-8 mx-auto mb-3 text-white" />
                <p className="font-semibold mb-2">{t('common.email')}</p>
                <p className="text-sm">bhsknursingservices@gmail.com</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <MapPin className="w-8 h-8 mx-auto mb-3 text-white" />
                <p className="font-semibold mb-2">{t('common.address')}</p>
                <p className="text-sm">Industrial Area, Ar-Rayyan, Qatar</p>
                <p className="text-sm">Building No 164, Zone 81, Street 29</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" asChild>
                <a href="tel:+97431599965">Call Us Now</a>
              </Button>
              <Button variant="outline" size="lg" className="bg-primary-foreground/10 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <a href="mailto:bhsknursingservices@gmail.com">Send Email</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default About;
