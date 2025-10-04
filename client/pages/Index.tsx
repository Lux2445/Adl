import { CtaSection } from "@/components/sections/CtaSection";
import { CapabilitiesSection } from "@/components/sections/CapabilitiesSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { MiniCasesSection } from "@/components/sections/MiniCasesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

export default function Index() {
  return (
    <div className="space-y-24 lg:space-y-32">
      <HeroSection />
      <CapabilitiesSection />
      <ProcessSection />
      <MiniCasesSection />
      <TestimonialsSection />
      <CtaSection />
    </div>
  );
}
