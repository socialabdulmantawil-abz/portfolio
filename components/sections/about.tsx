import { Download } from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Section } from "@/components/shared/section";
import { buttonVariants } from "@/components/ui/button";

export function About() {
  return (
    <Section id="about" aria-labelledby="about-title">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:gap-16">
          <SectionHeading
            eyebrow="Background"
            title="About me"
            titleId="about-title"
          />
          <div className="space-y-4 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            <p>
              I&apos;m a computer science graduate and programmer with a strong
              foundation in software development, problem-solving, and computer
              systems.
            </p>
            <p>
              I&apos;m eager to apply my skills to build reliable, user-focused
              solutions and continue growing as a developer.
            </p>
            <a
              href="/resume-abdul-mantawil.pdf"
              download
              className={buttonVariants({
                variant: "outline",
                size: "lg",
                className: "mt-2 gap-2",
              })}
            >
              Download Resume
              <Download aria-hidden="true" />
            </a>
          </div>
        </div>
      </Container>
    </Section>
  );
}
