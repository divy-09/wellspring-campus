import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesGrid from "@/components/FeaturesGrid";
import SelfAssessment from "@/components/SelfAssessment";
import TherapySection from "@/components/TherapySection";
import WellnessReminders from "@/components/WellnessReminders";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import FloatingChatButton from "@/components/FloatingChatButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturesGrid />
        <SelfAssessment />
        <TherapySection />
        <WellnessReminders />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
      <FloatingChatButton />
    </div>
  );
};

export default Index;
