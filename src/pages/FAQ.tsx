import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const FAQ = () => {
  const { t, isRTL } = useLanguage();
  const faqs = [
    {
      question: t('faq.question1'),
      answer: t('faq.answer1')
    },
    {
      question: t('faq.question2'),
      answer: t('faq.answer2')
    },
    {
      question: t('faq.question3'),
      answer: t('faq.answer3')
    },
    {
      question: t('faq.question4'),
      answer: t('faq.answer4')
    },
    {
      question: t('faq.question5'),
      answer: t('faq.answer5')
    },
  ];

  return (
    <div className={`flex flex-col ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl text-primary-foreground animate-fade-in">
            <h1 className="mb-6">{t('faq.hero.title')}</h1>
            <p className="text-xl text-primary-foreground/90">
              {t('faq.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-background-alt border border-border rounded-lg px-6 animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <AccordionTrigger className="text-left hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Still Have Questions Section */}
      <section className="py-20 bg-background-alt">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto animate-fade-in">
            <h2 className="mb-6">{t('faq.still.title')}</h2>
            <p className="text-lg text-muted-foreground mb-8">
              {t('faq.still.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">{t('common.contact_us')}</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="tel:+97431599965">{t('common.call_us')} +97431599965</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-8 text-center">{t('faq.explore.title')}</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Link to="/services" className="p-6 bg-background-alt rounded-xl border border-border hover:shadow-card transition-all text-center">
                <h4 className="font-semibold mb-2">Our Services</h4>
                <p className="text-sm text-muted-foreground">Learn about all our healthcare offerings</p>
              </Link>
              <Link to="/about" className="p-6 bg-background-alt rounded-xl border border-border hover:shadow-card transition-all text-center">
                <h4 className="font-semibold mb-2">About Us</h4>
                <p className="text-sm text-muted-foreground">Discover our story and values</p>
              </Link>
              <Link to="/contact" className="p-6 bg-background-alt rounded-xl border border-border hover:shadow-card transition-all text-center">
                <h4 className="font-semibold mb-2">Get in Touch</h4>
                <p className="text-sm text-muted-foreground">Contact our team today</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
