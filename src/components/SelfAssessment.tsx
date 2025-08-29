import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, TrendingUp, Moon, Heart } from "lucide-react";

const SelfAssessment = () => {
  return (
    <section className="py-20 bg-gradient-wellness">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Track Your Wellness Journey
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Self-assessment tools and progress tracking to help you understand and improve your mental well-being
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Mood Check-In Card */}
          <Card className="p-8 border-0 shadow-card bg-card hover:shadow-soft transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-wellness-calm rounded-xl flex items-center justify-center mr-4">
                <Brain className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground">Daily Mood Check-In</h3>
                <p className="text-muted-foreground">Quick emotional wellness assessment</p>
              </div>
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="bg-muted rounded-lg p-4">
                <p className="text-foreground font-medium mb-2">How are you feeling today?</p>
                <div className="flex space-x-2">
                  {['😊', '😐', '😔', '😰', '😴'].map((emoji, index) => (
                    <button
                      key={index}
                      className="w-10 h-10 text-2xl hover:scale-110 transition-transform duration-200 rounded-lg hover:bg-primary/10"
                    >
                      {emoji}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
              Start Assessment
            </Button>
          </Card>

          {/* Progress Dashboard */}
          <div className="space-y-6">
            {/* Weekly Progress */}
            <Card className="p-6 border-0 shadow-card bg-card">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center mr-3">
                    <TrendingUp className="w-5 h-5 text-secondary-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Weekly Progress</h4>
                    <p className="text-sm text-muted-foreground">Stress levels trending down</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-success">↓15%</div>
                  <div className="text-xs text-muted-foreground">vs last week</div>
                </div>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-success h-2 rounded-full w-3/4"></div>
              </div>
            </Card>

            {/* Sleep Tracker */}
            <Card className="p-6 border-0 shadow-card bg-card">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center mr-3">
                    <Moon className="w-5 h-5 text-accent-medium" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Sleep Quality</h4>
                    <p className="text-sm text-muted-foreground">Last night: 7.2 hours</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-primary">Good</div>
                  <div className="text-xs text-muted-foreground">Recommended: 7-9h</div>
                </div>
              </div>
            </Card>

            {/* Wellness Goals */}
            <Card className="p-6 border-0 shadow-card bg-card">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-wellness-energy rounded-lg flex items-center justify-center mr-3">
                    <Heart className="w-5 h-5 text-warning-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Weekly Goals</h4>
                    <p className="text-sm text-muted-foreground">3 of 5 completed</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-primary">60%</div>
                  <div className="text-xs text-muted-foreground">Great progress!</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelfAssessment;