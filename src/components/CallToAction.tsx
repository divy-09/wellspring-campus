import { Button } from "@/components/ui/button";
import { MessageCircle, Calendar } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-wellness relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-secondary-accent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-accent-medium rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Take Your First Step Toward{" "}
            <span className="text-primary">Wellness Today</span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Your mental health journey starts with a single step. We're here to support you every step of the way with compassion, expertise, and understanding.
          </p>

          {/* Illustration placeholder */}
          <div className="mb-12">
            <div className="w-full max-w-md mx-auto h-48 bg-gradient-card rounded-3xl shadow-soft flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🌱</div>
                <p className="text-muted-foreground">Your wellness journey begins here</p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-floating px-10 py-6 text-lg font-semibold rounded-xl group"
            >
              <Calendar className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-200" />
              Book a Session
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-primary bg-card/50 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground px-10 py-6 text-lg font-semibold rounded-xl group"
            >
              <MessageCircle className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-200" />
              Start AI Chat
            </Button>
          </div>

          {/* Support text */}
          <div className="mt-12 p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 max-w-2xl mx-auto">
            <p className="text-foreground font-medium mb-2">
              🔒 Your privacy and confidentiality are completely protected
            </p>
            <p className="text-muted-foreground text-sm">
              All conversations and sessions are encrypted and never shared. You're in control of your information.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;