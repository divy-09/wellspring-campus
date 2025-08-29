import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Video, MessageSquare, BookOpen, Users2 } from "lucide-react";

const TherapySection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Professional Support & Community
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Connect with licensed professionals and supportive peers in safe, confidential environments
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Therapy Sessions */}
          <Card className="p-8 border-0 shadow-card bg-gradient-card hover:shadow-soft transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mr-4">
                <Video className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-foreground">Therapy Sessions</h3>
                <p className="text-muted-foreground">Professional counseling support</p>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center p-4 bg-wellness-calm rounded-xl">
                <MessageSquare className="w-5 h-5 text-primary mr-3" />
                <div>
                  <h4 className="font-medium text-foreground">Text & Video Sessions</h4>
                  <p className="text-sm text-muted-foreground">Choose your preferred communication method</p>
                </div>
              </div>
              
              <div className="flex items-center p-4 bg-secondary rounded-xl">
                <BookOpen className="w-5 h-5 text-secondary-accent mr-3" />
                <div>
                  <h4 className="font-medium text-foreground">Reflective Journaling</h4>
                  <p className="text-sm text-muted-foreground">Guided writing exercises for self-discovery</p>
                </div>
              </div>
            </div>

            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-soft">
              Book a Session
            </Button>
          </Card>

          {/* Peer Support */}
          <Card className="p-8 border-0 shadow-card bg-gradient-card hover:shadow-soft transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 bg-secondary rounded-2xl flex items-center justify-center mr-4">
                <Users2 className="w-7 h-7 text-secondary-accent" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-foreground">Peer Connections</h3>
                <p className="text-muted-foreground">Student-to-student support</p>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="p-4 bg-accent rounded-xl">
                <h4 className="font-medium text-foreground mb-2">Buddy System</h4>
                <p className="text-sm text-muted-foreground">Matched with compatible peers for ongoing support</p>
                <div className="mt-3 flex items-center">
                  <div className="w-2 h-2 bg-success rounded-full mr-2"></div>
                  <span className="text-xs text-muted-foreground">147 active connections this week</span>
                </div>
              </div>
              
              <div className="p-4 bg-wellness-growth rounded-xl">
                <h4 className="font-medium text-foreground mb-2">Group Discussions</h4>
                <p className="text-sm text-muted-foreground">Topic-based support groups with moderated conversations</p>
                <div className="mt-3 flex items-center">
                  <div className="w-2 h-2 bg-success rounded-full mr-2"></div>
                  <span className="text-xs text-muted-foreground">12 active groups available</span>
                </div>
              </div>
            </div>

            <Button variant="outline" className="w-full border-2 border-secondary-accent text-secondary-accent hover:bg-secondary-accent hover:text-white">
              Join Community
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TherapySection;