import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { toast } = useToast();
  const { t, isRTL } = useLanguage();
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
      title: t('common.phone'),
      details: ["+97431599965", "+97431331146"],
      action: "tel:+97431599965",
    },
    {
      icon: Mail,
      title: t('common.email'),
      details: ["bhsknursingservices@gmail.com"],
      action: "mailto:bhsknursingservices@gmail.com",
    },
    {
      icon: MapPin,
      title: t('common.location'),
      details: ["Industrial Area, Ar-Rayyan, Qatar", "Building No 164, Zone 81, Street 29"],
      action: "https://www.google.com/maps/place/BHSK+Health+Services/@25.1664364,51.405356,17z/data=!3m1!4b1!4m6!3m5!1s0x3e45d74cb6279af3:0x6aaf4effdcae0c20!8m2!3d25.1664364!4d51.405356!16s%2Fg%2F11y83jdh5p?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D",
    },
    {
      icon: Clock,
      title: t('common.hours'),
      details: ["24/7 Service Available", "Office: 8 AM - 6 PM"],
      action: null,
    },
  ];

  return (
    <div className={`flex flex-col ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl text-primary-foreground animate-fade-in">
            <h1 className="mb-6">{t('contact.hero.title')}</h1>
            <p className="text-xl text-primary-foreground/90">
              {t('contact.hero.subtitle')}
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
              <h2 className="mb-6">{t('contact.form.title')}</h2>
              <p className="text-muted-foreground mb-8">
                {t('contact.form.subtitle')}
              </p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">{t('contact.form.name')} *</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t('form.name_placeholder')}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="email">{t('contact.form.email')} *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t('form.email_placeholder')}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">{t('contact.form.phone')} *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={t('form.phone_placeholder')}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="service">{t('contact.form.service')}</Label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange as any}
                    className="w-full mt-2 h-11 px-3 rounded-md border border-input bg-background text-foreground"
                  >
                    <option value="">{t('form.select_service')}</option>
                    <option value="home-nursing">{t('form.home_nursing')}</option>
                    <option value="elderly-care">{t('form.elderly_care')}</option>
                    <option value="physiotherapy">{t('form.physiotherapy')}</option>
                    <option value="baby-care">{t('form.baby_care')}</option>
                    <option value="post-surgery">{t('form.post_surgery')}</option>
                    <option value="other">{t('form.other')}</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="message">{t('contact.form.message')} *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t('form.message_placeholder')}
                    className="mt-2 min-h-[120px]"
                  />
                </div>
                <Button type="submit" variant="hero" size="lg" className="w-full">
                  {t('contact.form.submit')}
                </Button>
              </form>
            </div>

            {/* Quick Contact Options */}
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h2 className="mb-6">{t('contact.quick.title')}</h2>
              <p className="text-muted-foreground mb-8">
                {t('contact.quick.subtitle')}
              </p>

              <div className="space-y-4 mb-8">
                <a
                  href="https://wa.me/97431599965?text=Hello!%20I%20would%20like%20to%20inquire%20about%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-6 bg-[#25D366] text-white rounded-xl hover:shadow-card transition-all"
                >
                  <MessageCircle className="w-8 h-8 mr-4" />
                  <div>
                    <h3 className="font-semibold text-lg">{t('contact.whatsapp.title')}</h3>
                    <p className="text-sm opacity-90">{t('contact.whatsapp.subtitle')}</p>
                  </div>
                </a>

                <a
                  href="tel:+97431599965"
                  className="flex items-center p-6 bg-primary text-primary-foreground rounded-xl hover:shadow-card transition-all"
                >
                  <Phone className="w-8 h-8 mr-4" />
                  <div>
                    <h3 className="font-semibold text-lg">{t('contact.call.title')}</h3>
                    <p className="text-sm opacity-90">+97431599965</p>
                  </div>
                </a>

                <a
                  href="mailto:bhsknursingservices@gmail.com"
                  className="flex items-center p-6 bg-secondary text-secondary-foreground rounded-xl hover:shadow-card transition-all"
                >
                  <Mail className="w-8 h-8 mr-4" />
                  <div>
                    <h3 className="font-semibold text-lg">{t('contact.email.title')}</h3>
                    <p className="text-sm opacity-90">bhsknursingservices@gmail.com</p>
                  </div>
                </a>
              </div>

              {/* Map */}
              <div className="bg-muted rounded-xl overflow-hidden shadow-soft h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.661910347418!2d51.405356!3d25.1664364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45d74cb6279af3%3A0x6aaf4effdcae0c20!2sBHSK%20Health%20Services!5e0!3m2!1sen!2sqa!4v1737247390000!5m2!1sen!2sqa
"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="BHSK Health Services Location - Industrial Area, Ar-Rayyan, Qatar"
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
            <h3 className="text-2xl font-bold mb-4">{t('contact.emergency.title')}</h3>
            <p className="mb-6 text-primary-foreground/90">
              {t('contact.emergency.subtitle')}
            </p>
            <Button variant="secondary" size="lg" asChild>
              <a href="tel:+97431599965">{t('contact.emergency_button')}</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
