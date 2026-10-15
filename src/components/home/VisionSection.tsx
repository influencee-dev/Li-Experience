import { images } from "@/data/assets";
import { anchors, vision } from "@/data/content";
import { StatementSection } from "./StatementSection";

export function VisionSection() {
  return (
    <StatementSection
      id={anchors.vision}
      eyebrow={vision.eyebrow}
      title={vision.title}
      paragraphs={vision.paragraphs}
      image={images.vision}
      imageSide="right"
      tone="mist"
    />
  );
}
