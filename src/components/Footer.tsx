import { Heart } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    Support: [
      { name: "Get Help", href: "#help" },
      { name: "Crisis Resources", href: "#crisis" },
      { name: "Contact Us", href: "#contact" },
      { name: "FAQ", href: "#faq" },
    ],
    Privacy: [
      { name: "Privacy Policy", href: "#privacy" },
      { name: "Terms of Service", href: "#terms" },
      { name: "Data Security", href: "#security" },
      { name: "HIPAA Compliance", href: "#hipaa" },
    ],
    Resources: [
      { name: "Mental Health Guide", href: "#guide" },
      { name: "Self-Care Tips", href: "#selfcare" },
      { name: "Student Resources", href: "#resources" },
      { name: "Wellness Blog", href: "#blog" },
    ],
    Connect: [
      { name: "Institution Portal", href: "#institution" },
      { name: "Counselor Login", href: "#counselor" },
      { name: "Community Guidelines", href: "#guidelines" },
      { name: "Feedback", href: "#feedback" },
    ],
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-hero rounded-lg shadow-soft">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <span className="text-xl font-semibold text-foreground">CalmConnect</span>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Empowering students with confidential, accessible mental health support for a brighter academic journey.
            </p>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-success rounded-full mr-2"></div>
              <span className="text-sm text-muted-foreground">Available 24/7</span>
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-foreground mb-6">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Emergency Section */}
        <div className="mt-16 p-6 bg-gradient-hero rounded-2xl border border-border">
          <div className="text-center">
            <h4 className="font-semibold text-foreground mb-2">Crisis Support</h4>
            <p className="text-muted-foreground mb-4 text-sm">
              If you're in immediate danger or having thoughts of self-harm, please reach out for help right away.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
              <div>
                <span className="font-medium text-foreground">National Crisis Line: </span>
                <span className="text-primary">988</span>
              </div>
              <div>
                <span className="font-medium text-foreground">Campus Security: </span>
                <span className="text-primary">911</span>
              </div>
              <div>
                <span className="font-medium text-foreground">Student Support: </span>
                <span className="text-primary">24/7 Available</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 sm:mb-0">
            © 2025 CalmConnect. All rights reserved. Built with care for student well-being.
          </p>
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <span>🔒 HIPAA Compliant</span>
            <span>🛡️ SOC 2 Certified</span>
            <span>✨ Student-First</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;