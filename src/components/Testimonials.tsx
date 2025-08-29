import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah M.",
      year: "3rd Year Psychology",
      quote: "This platform helped me talk without fear of judgment. The AI chat was there when I needed it most at 2 AM during finals week.",
      rating: 5,
      avatar: "🌸",
    },
    {
      name: "Alex K.",
      year: "2nd Year Engineering",
      quote: "The peer support forum connected me with students facing similar challenges. Knowing I'm not alone made all the difference.",
      rating: 5,
      avatar: "🌟",
    },
    {
      name: "Maya P.",
      year: "4th Year Medicine",
      quote: "The confidential booking system made it easy to get professional help. The therapists really understand student life pressures.",
      rating: 5,
      avatar: "🌺",
    },
    {
      name: "Jordan L.",
      year: "1st Year Business",
      quote: "The wellness reminders and mood tracking helped me develop better self-care habits. It's like having a caring friend checking in.",
      rating: 5,
      avatar: "🌿",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Students Are Saying
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real experiences from students who found support and healing through our platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="p-8 border-0 shadow-card hover:shadow-soft transition-all duration-300 bg-gradient-card"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center text-2xl mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.year}</p>
                </div>
              </div>

              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-warning fill-current" />
                ))}
              </div>

              <blockquote className="text-foreground leading-relaxed italic">
                "{testimonial.quote}"
              </blockquote>
            </Card>
          ))}
        </div>

        {/* Statistics */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">10K+</div>
            <div className="text-muted-foreground">Students Supported</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">24/7</div>
            <div className="text-muted-foreground">AI Support Available</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">98%</div>
            <div className="text-muted-foreground">Student Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;