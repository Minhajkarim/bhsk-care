import { LucideIcon } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

const ServiceCard = ({ icon: Icon, title, description, features }: ServiceCardProps) => {
  return (
    <Card className="group h-full bg-gradient-card border-border/50 hover:border-primary/20 hover:shadow-hover transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
      {/* Modern gradient overlay */}
      <div className="absolute inset-0 bg-gradient-service opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Floating icon background */}
      <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 animate-float" />
      
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
        <ul className="space-y-3">
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
      </CardContent>
      
      {/* Modern corner accent */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </Card>
  );
};

export default ServiceCard;
