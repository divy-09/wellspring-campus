import { Card } from "@/components/ui/card";
import { Coffee, Droplets, Headphones, Sunrise, Heart, Moon } from "lucide-react";

const WellnessReminders = () => {
  const reminders = [
    {
      icon: Coffee,
      title: "Take a Break",
      description: "5-minute relaxation pause",
      color: "bg-wellness-energy",
      iconColor: "text-warning-foreground",
    },
    {
      icon: Droplets,
      title: "Stay Hydrated",
      description: "Drink a glass of water",
      color: "bg-wellness-calm",
      iconColor: "text-primary",
    },
    {
      icon: Headphones,
      title: "Listen to Music",
      description: "Calming playlist ready",
      color: "bg-accent",
      iconColor: "text-accent-medium",
    },
    {
      icon: Sunrise,
      title: "Practice Yoga",
      description: "10-minute morning flow",
      color: "bg-wellness-growth",
      iconColor: "text-secondary-accent",
    },
    {
      icon: Heart,
      title: "Breathing Exercise",
      description: "Deep breathing session",
      color: "bg-primary-soft",
      iconColor: "text-primary",
    },
    {
      icon: Moon,
      title: "Wind Down",
      description: "Evening relaxation time",
      color: "bg-secondary",
      iconColor: "text-secondary-accent",
    },
  ];

  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Gentle Wellness Reminders
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Small moments of self-care throughout your day can make a big difference in your overall well-being
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reminders.map((reminder, index) => (
            <Card 
              key={index}
              className="p-6 border-0 shadow-card hover:shadow-soft transition-all duration-300 hover:-translate-y-1 bg-card cursor-pointer group"
            >
              <div className="flex items-center space-x-4">
                <div className={`w-12 h-12 ${reminder.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <reminder.icon className={`w-6 h-6 ${reminder.iconColor}`} />
                </div>
                
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {reminder.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {reminder.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Floating reminder note */}
        <div className="mt-16 text-center">
          <Card className="inline-block p-6 border-0 shadow-soft bg-card/80 backdrop-blur-sm">
            <p className="text-foreground font-medium mb-2">
              💡 Remember: Self-care isn't selfish
            </p>
            <p className="text-muted-foreground text-sm">
              Taking care of your mental health is just as important as your physical health
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WellnessReminders;