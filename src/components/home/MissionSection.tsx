import { images } from "@/data/assets";
import { anchors, mission } from "@/data/content";
import { StatementSection } from "./StatementSection";

export function MissionSection() {
  return (
    <StatementSection
      id={anchors.mission}
      eyebrow={mission.eyebrow}
      title={mission.title}
      paragraphs={mission.paragraphs}
      image={images.mission}
      imageSide="left"
      tone="ivory"
    />
  );
}
