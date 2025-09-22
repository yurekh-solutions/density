import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Stethoscope, 
  Shield, 
  Sparkles, 
  Heart, 
  Smile,
  Zap,
  CheckCircle
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Stethoscope,
      title: "General Dentistry",
      items: [
        "Diagnosis & X-Ray",
        "Emergency Dentistry", 
        "Cleaning and Polishing",
        "Tooth Extractions",
        "Wisdom Tooth Removal"
      ],
      color: "text-blue-600"
    },
    {
      icon: Heart,
      title: "Restorative Treatments",
      items: [
        "Root Canal",
        "Cosmetic Fillings",
        "Crowns & Bridges", 
        "Implants",
        "Partial & Full Dentures",
        "Full Mouth Rehabilitation"
      ],
      color: "text-red-500"
    },
    {
      icon: Sparkles,
      title: "Cosmetic Dentistry",
      items: [
        "Laminates",
        "Veneers",
        "Teeth Whitening",
        "Smile Designing/Smile Makeover"
      ],
      color: "text-purple-600"
    },
    {
      icon: Shield,
      title: "Preventive Care",
      items: [
        "Gum Disease Treatments",
        "Kids Dentistry"
      ],
      color: "text-green-600"
    },
    {
      icon: Smile,
      title: "Orthodontics",
      items: [
        "Orthodontic braces",
        "Aligners",
        "Mouth Guards"
      ],
      color: "text-orange-500"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-sky">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Our Services
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Your Path to a Healthier Smile Starts Here
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From Preventive Care to Advanced Treatments – We Offer Everything You Need
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={service.title} 
                className={`glass-card hover-glow group transition-all duration-300 ${
                  index === 2 ? 'lg:col-span-1 lg:mx-auto lg:max-w-sm' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-primary/10 ${service.color} group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                  </div>
                  
                  <div className="space-y-2">
                    {service.items.map((item, itemIndex) => (
                      <div key={item} className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold mb-8">Why Choose Blue Sky Dental Care?</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Zap,
                title: "Advanced Technology",
                description: "State-of-the-art equipment and latest dental techniques"
              },
              {
                icon: Heart,
                title: "Gentle Care",
                description: "Painless treatments with patient comfort as our priority"
              },
              {
                icon: Shield,
                title: "Safety First",
                description: "Strict sterilization protocols and hygiene standards"
              }
            ].map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={feature.title} className="glass-card p-6 rounded-lg hover-glow">
                  <IconComponent className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;