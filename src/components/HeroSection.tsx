import { Button } from "@/components/ui/button";
import { MessageCircle, BookOpen } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-20 h-20 bg-secondary-accent rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-accent-medium rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-wellness-calm rounded-full blur-xl"></div>
        <div className="absolute bottom-40 right-10 w-16 h-16 bg-wellness-growth rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Your Mental{" "}
            <span className="text-primary">Wellness</span>,<br />
            Our Priority.
          </h1>
          
          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Confidential, stigma-free, and always accessible mental health support 
            designed specifically for students in higher education.
          </p>

          {/* Illustration placeholder - replace with actual illustration */}
          <div className="relative mb-12">
            <div className="w-full max-w-lg mx-auto h-64 bg-gradient-card rounded-3xl shadow-soft flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <div className="w-6 h-6 bg-primary rounded-full"></div>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm">Students connecting & thriving</p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-floating px-8 py-6 text-lg font-semibold rounded-xl"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Start Chat with AI
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-primary/20 bg-card/50 backdrop-blur-sm hover:bg-primary/5 px-8 py-6 text-lg font-semibold rounded-xl"
            >
              <BookOpen className="w-5 h-5 mr-2" />
              Explore Resources
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-success rounded-full mr-2"></div>
              Available 24/7
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-success rounded-full mr-2"></div>
              100% Confidential
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-success rounded-full mr-2"></div>
              Student-Focused
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;