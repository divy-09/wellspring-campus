import { MessageCircleHeart, Shield, Library, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

const FeaturesGrid = () => {
  const features = [
    {
      icon: MessageCircleHeart,
      title: "AI First-Aid Chat",
      description: "24/7 coping strategies and emotional support with multilingual assistance for immediate help when you need it most.",
      bgColor: "bg-wellness-calm",
      iconColor: "text-primary",
    },
    {
      icon: Shield,
      title: "Confidential Booking",
      description: "Secure, private appointments with professional counselors and helpline services. Your privacy is our priority.",
      bgColor: "bg-secondary",
      iconColor: "text-secondary-accent",
    },
    {
      icon: Library,
      title: "Resource Hub",
      description: "Curated videos, relaxation audio, and wellness guides available in multiple regional languages.",
      bgColor: "bg-accent",
      iconColor: "text-accent-medium",
    },
    {
      icon: Users,
      title: "Peer Support Forum",
      description: "Moderated student-to-student connections for shared experiences and mutual support in a safe environment.",
      bgColor: "bg-wellness-growth",
      iconColor: "text-secondary-accent",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Comprehensive Support at Your Fingertips
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Access a complete ecosystem of mental health resources designed specifically for students
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-6 border-0 shadow-card hover:shadow-soft transition-all duration-300 hover:-translate-y-1 bg-gradient-card"
            >
              <div className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-6 shadow-card`}>
                <feature.icon className={`w-8 h-8 ${feature.iconColor}`} />
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;