import { LucideIcon, ChevronDown, ChevronUp, Clock, FileText, DollarSign, Calendar } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  image?: string;
  imageAlt?: string;
  serviceKey?: string; // Key for accessing detailed information
}

const ServiceCard = ({ icon: Icon, title, description, features, image, imageAlt, serviceKey }: ServiceCardProps) => {
  const { t } = useLanguage();
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Card className="group h-full bg-gradient-card border-border/50 hover:border-primary/20 hover:shadow-hover transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
      {/* Modern gradient overlay */}
      <div className="absolute inset-0 bg-gradient-service opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Floating icon background */}
      <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 animate-float" />
      
      {/* Service Image */}
      {image && (
        <div className="relative h-48 overflow-hidden">
          <img 
            src={image} 
            alt={imageAlt || title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      )}
      
      <CardHeader className="relative z-10 pb-4">
        <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-6 shadow-glow group-hover:shadow-glow group-hover:animate-pulse-glow transition-all duration-500">
          <Icon className="w-8 h-8 text-primary-foreground group-hover:scale-110 transition-transform duration-300" />
        </div>
        <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
          {title}
        </CardTitle>
        <CardDescription className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300 leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="relative z-10 pt-0">
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start text-sm group-hover:text-foreground/90 transition-colors duration-300">
              <div className="w-5 h-5 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white text-xs font-bold">✓</span>
              </div>
              <span className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300 leading-relaxed">
                {feature}
              </span>
            </li>
          ))}
        </ul>

        {/* Expandable Details Section */}
        {serviceKey && (
          <div className="border-t border-border/50 pt-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleExpanded}
              className="w-full justify-between text-primary hover:text-primary-foreground hover:bg-primary/10 transition-all duration-300"
            >
              <span>{t('service.learn_more')}</span>
              {isExpanded ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </Button>

            {isExpanded && (
              <div className="mt-4 space-y-4 animate-fade-in">
                {/* Detailed Description */}
                <div className="bg-background-alt/50 rounded-lg p-4">
                  <h4 className="font-semibold text-sm mb-2 flex items-center">
                    <FileText className="w-4 h-4 mr-2 text-primary" />
                    {t('service.details')}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t(`${serviceKey}.details`)}
                  </p>
                </div>

                {/* Service Information Grid */}
                <div className="grid grid-cols-1 gap-3">
                  {/* Duration */}
                  <div className="flex items-start space-x-3 p-3 bg-background-alt/30 rounded-lg">
                    <Clock className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-medium text-sm">{t('service.duration')}</p>
                      <p className="text-xs text-muted-foreground">{t(`${serviceKey}.duration`)}</p>
                    </div>
                  </div>

                  {/* Requirements */}
                  <div className="flex items-start space-x-3 p-3 bg-background-alt/30 rounded-lg">
                    <FileText className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-medium text-sm">{t('service.requirements')}</p>
                      <p className="text-xs text-muted-foreground">{t(`${serviceKey}.requirements`)}</p>
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="flex items-start space-x-3 p-3 bg-background-alt/30 rounded-lg">
                    <DollarSign className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-medium text-sm">{t('service.pricing')}</p>
                      <p className="text-xs text-muted-foreground">{t(`${serviceKey}.pricing`)}</p>
                    </div>
                  </div>
                </div>

                {/* Book Now Button */}
                <Button 
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground font-semibold transition-all duration-300"
                  size="sm"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  {t('service.book_now')}
                </Button>
              </div>
            )}
          </div>
        )}
      </CardContent>
      
      {/* Modern corner accent */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </Card>
  );
};

export default ServiceCard;
