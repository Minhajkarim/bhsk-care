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
      question: "What services does BHSK Health Services offer?",
      answer: "We offer comprehensive home healthcare services including home nursing, elderly care, post-surgery care, baby care and babysitting, physiotherapy, chronic disease management, and 24/7 emergency care. Each service is delivered by certified healthcare professionals in the comfort of your home."
    },
    {
      question: "Are your nurses and caregivers certified?",
      answer: "Yes, all our nurses and caregivers are fully certified, licensed, and have undergone extensive background checks. They have relevant qualifications and experience in their specialties, and participate in ongoing training to maintain the highest standards of care."
    },
    {
      question: "What areas in Qatar do you serve?",
      answer: "We provide services throughout Doha and surrounding areas in Qatar. Our team is available 24/7 to reach clients across the region. Contact us to confirm service availability in your specific location."
    },
    {
      question: "How quickly can you provide a nurse?",
      answer: "For urgent needs, we can typically arrange for a nurse within 2-4 hours. For scheduled care, we recommend booking at least 24 hours in advance to ensure we match you with the most appropriate healthcare professional for your needs."
    },
    {
      question: "What are your service hours?",
      answer: "Our healthcare services are available 24/7, every day of the year. Our administrative office operates from 8 AM to 6 PM, but you can reach our emergency hotline anytime for urgent care needs or after-hours assistance."
    },
    {
      question: "How much do your services cost?",
      answer: "Our pricing varies depending on the type of service, duration, and specific care requirements. We offer competitive rates and flexible packages including hourly, daily, weekly, and monthly options. Contact us for a personalized quote based on your specific needs."
    },
    {
      question: "Do you accept insurance?",
      answer: "Yes, we work with most major insurance providers in Qatar. We can also provide detailed invoices for insurance reimbursement. Please contact us with your insurance details, and our team will help determine coverage options."
    },
    {
      question: "Can I request a specific nurse or caregiver?",
      answer: "Absolutely! If you develop a good rapport with a particular nurse or caregiver, you can request them for future appointments. We do our best to maintain continuity of care and match you with professionals who best suit your needs and preferences."
    },
    {
      question: "What is included in elderly care services?",
      answer: "Our elderly care services include personal hygiene assistance, mobility support, medication management, meal preparation, companionship, health monitoring, and coordination with healthcare providers. We create personalized care plans based on individual needs and family preferences."
    },
    {
      question: "Do you provide post-surgery care?",
      answer: "Yes, we specialize in post-surgery care including wound care, pain management, medication administration, mobility assistance, and monitoring for complications. Our nurses work closely with your surgical team to ensure proper recovery."
    },
    {
      question: "What qualifications do your physiotherapists have?",
      answer: "Our physiotherapists are licensed healthcare professionals with degrees in physiotherapy and additional specialized training. They have experience treating various conditions including post-surgical recovery, sports injuries, stroke rehabilitation, and chronic pain management."
    },
    {
      question: "Can you help with chronic disease management?",
      answer: "Yes, we provide ongoing support for chronic conditions such as diabetes, hypertension, heart disease, and COPD. Our services include regular monitoring, medication management, lifestyle guidance, and coordination with your primary physician."
    },
    {
      question: "Is someone available 24/7 for emergencies?",
      answer: "Yes, our emergency hotline is staffed 24/7. We can dispatch nurses quickly for urgent situations and provide immediate guidance over the phone until help arrives."
    },
    {
      question: "How do I book your services?",
      answer: "You can book our services by calling us at +974 1234 5678, sending a WhatsApp message, emailing info@bhskhealth.qa, or filling out the contact form on our website. Our team will discuss your needs and arrange appropriate care."
    },
    {
      question: "Do you provide equipment for home care?",
      answer: "Yes, we can provide or help arrange necessary medical equipment such as wheelchairs, hospital beds, oxygen concentrators, and mobility aids. We also advise on home modifications for safety and accessibility."
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
                <a href="tel:+97412345678">Call +974 1234 5678</a>
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
