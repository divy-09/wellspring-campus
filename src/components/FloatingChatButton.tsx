import { MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const FloatingChatButton = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Expanded chat preview */}
      {isExpanded && (
        <div className="mb-4 w-80 bg-card rounded-2xl shadow-floating border border-border overflow-hidden animate-fade-in">
          <div className="p-4 bg-gradient-hero border-b border-border">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm">AI Support</h4>
                  <p className="text-xs text-muted-foreground">Online • Responds instantly</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsExpanded(false)}
                className="w-6 h-6 p-0"
              >
                <X className="w-3 h-3" />
              </Button>
            </div>
          </div>
          
          <div className="p-4">
            <div className="space-y-3">
              <div className="bg-primary/10 rounded-lg p-3">
                <p className="text-sm text-foreground">
                  Hi! I'm here to provide immediate support and coping strategies. How are you feeling today?
                </p>
              </div>
              
              <div className="space-y-2">
                <button className="w-full text-left p-2 text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-colors duration-200">
                  "I'm feeling stressed about exams"
                </button>
                <button className="w-full text-left p-2 text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-colors duration-200">
                  "I need someone to talk to"
                </button>
                <button className="w-full text-left p-2 text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-colors duration-200">
                  "Help me with anxiety"
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main chat button */}
      <Button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-14 h-14 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-floating hover:shadow-soft transition-all duration-300 hover:scale-105"
      >
        {isExpanded ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </Button>

      {/* Pulsing indicator when not expanded */}
      {!isExpanded && (
        <div className="absolute -inset-1 bg-primary/20 rounded-full animate-ping"></div>
      )}
    </div>
  );
};

export default FloatingChatButton;