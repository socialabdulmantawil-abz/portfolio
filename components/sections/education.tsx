import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Section } from "@/components/shared/section";
import { Timeline } from "@/components/shared/timeline";
import { education } from "@/lib/education";

export function Education() {
  return (
    <Section id="education" aria-labelledby="education-title">
      <Container>
        <SectionHeading
          eyebrow="Education"
          title="Education"
          titleId="education-title"
        />
        <Timeline entries={education} label="Education" />
      </Container>
    </Section>
  );
}
