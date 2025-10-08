import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to a backend
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+974 1234 5678", "+974 9876 5432"],
      action: "tel:+97412345678",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@bhskhealth.qa", "support@bhskhealth.qa"],
      action: "mailto:info@bhskhealth.qa",
    },
    {
      icon: MapPin,
      title: "Location",
      details: ["Doha, Qatar"],
      action: null,
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["24/7 Service Available", "Office: 8 AM - 6 PM"],
      action: null,
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl text-primary-foreground animate-fade-in">
            <h1 className="mb-6">Contact Us</h1>
            <p className="text-xl text-primary-foreground/90">
              Get in touch with our team. We're here to answer your questions and discuss your healthcare needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-background-alt">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card 
                key={index}
                className="hover:shadow-card transition-all animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mx-auto mb-4 shadow-soft">
                    <info.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold mb-3">{info.title}</h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-sm text-muted-foreground mb-1">
                      {info.action ? (
                        <a href={info.action} className="hover:text-primary transition-colors">
                          {detail}
                        </a>
                      ) : (
                        detail
                      )}
                    </p>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-fade-in">
              <h2 className="mb-6">Send Us a Message</h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and our team will respond to your inquiry as soon as possible.
              </p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+974 XXXX XXXX"
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="service">Service Interested In</Label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange as any}
                    className="w-full mt-2 h-11 px-3 rounded-md border border-input bg-background text-foreground"
                  >
                    <option value="">Select a service</option>
                    <option value="home-nursing">Home Nursing</option>
                    <option value="elderly-care">Elderly Care</option>
                    <option value="physiotherapy">Physiotherapy</option>
                    <option value="baby-care">Baby Care</option>
                    <option value="post-surgery">Post-Surgery Care</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your needs..."
                    className="mt-2 min-h-[120px]"
                  />
                </div>
                <Button type="submit" variant="hero" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Quick Contact Options */}
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h2 className="mb-6">Quick Contact Options</h2>
              <p className="text-muted-foreground mb-8">
                Prefer a more direct approach? Choose one of our instant contact methods below.
              </p>

              <div className="space-y-4 mb-8">
                <a
                  href="https://wa.me/97412345678?text=Hello!%20I%20would%20like%20to%20inquire%20about%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-6 bg-[#25D366] text-white rounded-xl hover:shadow-card transition-all"
                >
                  <MessageCircle className="w-8 h-8 mr-4" />
                  <div>
                    <h3 className="font-semibold text-lg">WhatsApp</h3>
                    <p className="text-sm opacity-90">Chat with us instantly</p>
                  </div>
                </a>

                <a
                  href="tel:+97412345678"
                  className="flex items-center p-6 bg-primary text-primary-foreground rounded-xl hover:shadow-card transition-all"
                >
                  <Phone className="w-8 h-8 mr-4" />
                  <div>
                    <h3 className="font-semibold text-lg">Call Us</h3>
                    <p className="text-sm opacity-90">+974 1234 5678</p>
                  </div>
                </a>

                <a
                  href="mailto:info@bhskhealth.qa"
                  className="flex items-center p-6 bg-secondary text-secondary-foreground rounded-xl hover:shadow-card transition-all"
                >
                  <Mail className="w-8 h-8 mr-4" />
                  <div>
                    <h3 className="font-semibold text-lg">Email Us</h3>
                    <p className="text-sm opacity-90">info@bhskhealth.qa</p>
                  </div>
                </a>
              </div>

              {/* Map Placeholder */}
              <div className="bg-muted rounded-xl overflow-hidden shadow-soft h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115406.15745433!2d51.440314!3d25.286106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45c534ffdce87f%3A0x1cfa88cf812b4032!2sDoha%2C%20Qatar!5e0!3m2!1sen!2s!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="BHSK Health Services Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact Banner */}
      <section className="py-12 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto text-primary-foreground animate-fade-in">
            <h3 className="text-2xl font-bold mb-4">Need Immediate Assistance?</h3>
            <p className="mb-6 text-primary-foreground/90">
              For urgent healthcare needs, call our 24/7 emergency hotline
            </p>
            <Button variant="secondary" size="lg" asChild>
              <a href="tel:+97412345678">Call Emergency Line</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
