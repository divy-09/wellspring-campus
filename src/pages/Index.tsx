import HomeLayout from "@/layouts/HomeLayout";
import HeroSection from "@/components/HeroSection";
import FeaturesGrid from "@/components/FeaturesGrid";
import SelfAssessment from "@/components/SelfAssessment";
import TherapySection from "@/components/TherapySection";
import WellnessReminders from "@/components/WellnessReminders";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";

const Index = () => {
  return (
    <HomeLayout>
      <HeroSection />
      <FeaturesGrid />
      <SelfAssessment />
      <TherapySection />
      <WellnessReminders />
      <Testimonials />
      <CallToAction />
    </HomeLayout>
  );
};

export default Index;
