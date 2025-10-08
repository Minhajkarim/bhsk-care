import { Heart, Target, Eye, Award } from "lucide-react";
import nurseImage from "@/assets/nurse-professional.jpg";

const About = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl text-primary-foreground animate-fade-in">
            <h1 className="mb-6">About BHSK Health Services</h1>
            <p className="text-xl text-primary-foreground/90">
              Delivering excellence in home healthcare services across Qatar since 2014.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                BHSK Health Services was founded with a simple yet powerful mission: to bring professional healthcare services directly to families in Qatar. We recognized the growing need for quality home-based care and set out to create a service that combines medical expertise with genuine compassion.
              </p>
              <p className="text-muted-foreground mb-4">
                Over the years, we've grown from a small team to become one of Qatar's most trusted home healthcare providers. Our success is built on the trust our clients place in us and the dedication of our healthcare professionals.
              </p>
              <p className="text-muted-foreground">
                Today, we serve hundreds of families across Qatar, providing comprehensive nursing, elderly care, physiotherapy, and specialized healthcare services. Every member of our team shares our commitment to excellence and our belief that everyone deserves access to quality healthcare in the comfort of their own home.
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
              <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To provide exceptional home healthcare services that improve the quality of life for our clients. We strive to deliver professional, compassionate care that meets the unique needs of each individual and family we serve, while maintaining the highest standards of medical excellence and ethical practice.
              </p>
            </div>
            <div className="bg-background p-8 rounded-2xl shadow-soft hover:shadow-card transition-all animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-6 shadow-soft">
                <Eye className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                To be the leading provider of home healthcare services in Qatar, recognized for our commitment to quality, innovation, and patient satisfaction. We envision a future where every person has access to professional healthcare services in the comfort and dignity of their own home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do and every decision we make.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Heart,
                title: "Compassion",
                description: "We care deeply about every patient and treat them with dignity and respect."
              },
              {
                icon: Award,
                title: "Excellence",
                description: "We maintain the highest standards in all aspects of our healthcare services."
              },
              {
                icon: Target,
                title: "Integrity",
                description: "We uphold ethical practices and transparency in all our interactions."
              },
              {
                icon: Eye,
                title: "Innovation",
                description: "We continuously improve our services through modern healthcare practices."
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
            <h2 className="mb-4">Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our team consists of highly qualified healthcare professionals dedicated to providing exceptional care.
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
    </div>
  );
};

export default About;
