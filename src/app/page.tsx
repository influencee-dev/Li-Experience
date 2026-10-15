import { ClosingSection } from "@/components/home/ClosingSection";
import { FounderSection } from "@/components/home/FounderSection";
import { Hero } from "@/components/home/Hero";
import { MissionSection } from "@/components/home/MissionSection";
import { NetworkSection } from "@/components/home/NetworkSection";
import { ProjectIntroduction } from "@/components/home/ProjectIntroduction";
import { ValuesSection } from "@/components/home/ValuesSection";
import { VisionSection } from "@/components/home/VisionSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProjectIntroduction />
      <FounderSection />
      <NetworkSection />
      <MissionSection />
      <VisionSection />
      <ValuesSection />
      <ClosingSection />
    </>
  );
}
