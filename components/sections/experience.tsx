import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Section } from "@/components/shared/section";
import { Timeline } from "@/components/shared/timeline";
import { experience } from "@/lib/experience";

export function Experience() {
  return (
    <Section
      id="experience"
      aria-labelledby="experience-title"
      className="bg-surface"
    >
      <Container>
        <SectionHeading
          eyebrow="Professional experience"
          title="Experience"
          titleId="experience-title"
        />
        <Timeline entries={experience} label="Professional experience" />
      </Container>
    </Section>
  );
}
