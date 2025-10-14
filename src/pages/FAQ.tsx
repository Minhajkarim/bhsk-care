import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FAQ = () => {
  const faqs = [
    {
      question: "Are your home care services hourly?",
      answer: "We provide services hourly, 12 hours, 24 hours, weekly, and monthly packages to provide you the best price to match your needs."
    },
    {
      question: "Can you train my helper or myself to take care of my mother and father?",
      answer: "Yes we can provide basic nursing training. We can also provide one on one training."
    },
    {
      question: "Are your nurses licensed?",
      answer: "All our registered nurses are licensed. The nurses go through a selection and training process to be part of our team."
    },
    {
      question: "Can a nurse be available to a patient while in hospital?",
      answer: "Yes. Our dedicated nurses are available to patients in hospital to bring familiarity and extra support to the patient."
    },
    {
      question: "How do you maintain privacy and confidentiality?",
      answer: "The data and medical records are maintained with strict confidentiality. Our internal policies and guidelines give access only to relevant clinical personnel."
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl text-primary-foreground animate-fade-in">
            <h1 className="mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-primary-foreground/90">
              Find answers to common questions about our home healthcare services in Qatar.
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
            <h2 className="mb-6">Still Have Questions?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Can't find the answer you're looking for? Our friendly team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="tel:0097431599965">Call 0097431599965</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-8 text-center">Explore More</h3>
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
