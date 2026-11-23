import { Container } from "@/components/shared/container";
import { ProjectCard } from "@/components/shared/project-card";
import { SectionHeading } from "@/components/shared/section-heading";
import { Section } from "@/components/shared/section";
import { projects } from "@/lib/projects";

export function Projects() {
  return (
    <Section
      id="projects"
      aria-labelledby="projects-title"
      className="bg-background"
    >
      <Container>
        <SectionHeading
          eyebrow="Selected work"
          title="Projects"
          description="A selection of projects across AI, productivity, finance, collaboration, and sustainability."
          titleId="projects-title"
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
