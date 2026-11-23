import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { SkillCard } from "@/components/shared/skill-card";
import { Section } from "@/components/shared/section";

const skillGroups = [
  {
    category: "Languages",
    skills: ["Python", "Java", "JavaScript"],
  },
  {
    category: "Frameworks & Runtime",
    skills: ["React", "Node.js"],
  },
  {
    category: "Databases",
    skills: ["MySQL", "MongoDB"],
  },
  {
    category: "Tools",
    skills: ["Git", "GitHub", "Visual Studio Code"],
  },
] as const;

export function Skills() {
  return (
    <Section id="skills" aria-labelledby="skills-title" className="bg-surface">
      <Container>
        <SectionHeading
          eyebrow="Technical toolkit"
          title="Skills"
          description="Technologies and tools I work with."
          titleId="skills-title"
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <SkillCard
              key={group.category}
              category={group.category}
              skills={group.skills}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
