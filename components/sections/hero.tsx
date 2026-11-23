import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { SocialLinks } from "@/components/shared/social-links";

export function Hero() {
  return (
    <Section
      id="home"
      className="flex flex-1 items-center py-16 sm:py-20 lg:py-24"
    >
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.25fr)_minmax(18rem,0.75fr)] lg:gap-16">
          <div className="space-y-7 motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-3 motion-safe:duration-700">
            <div className="space-y-5">
              <p className="font-mono text-sm font-medium uppercase tracking-[0.16em] text-secondary-foreground">
                Full-Stack Developer
              </p>
              <h1 className="font-heading text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
                <span className="block text-muted-foreground">
                  Hello, I&apos;m
                </span>
                <span className="mt-2 block text-foreground">
                  ABDUL E. MANTAWIL
                </span>
              </h1>
              <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                Computer science graduate and programmer with a strong
                foundation in software development, problem-solving, and
                computer systems. Eager to apply my skills to build reliable,
                user-focused solutions and continue growing as a developer.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="#projects"
                className={buttonVariants({
                  size: "lg",
                  className: "gap-2",
                })}
              >
                View Projects
                <ArrowUpRight aria-hidden="true" />
              </Link>
              <Link
                href="#contact"
                className={buttonVariants({
                  variant: "outline",
                  size: "lg",
                  className: "gap-2",
                })}
              >
                Contact Me
                <ArrowRight aria-hidden="true" />
              </Link>
            </div>

            <SocialLinks />
          </div>

          <div
            aria-hidden="true"
            className="relative mx-auto flex aspect-square w-full max-w-xs items-center justify-center motion-safe:animate-in motion-safe:fade-in motion-safe:zoom-in-95 motion-safe:duration-700 motion-safe:delay-150 sm:max-w-sm lg:max-w-md"
          >
            <div className="absolute inset-4 rounded-full border border-dashed border-border" />
            <div className="absolute inset-10 rounded-full border border-border bg-surface" />
            <div className="relative z-10 flex size-48 items-center justify-center rounded-full border border-border bg-card shadow-sm sm:size-56">
              <span className="font-mono text-6xl font-semibold tracking-[-0.08em] text-primary sm:text-7xl">
                AM
              </span>
            </div>
            <span className="absolute left-0 top-[22%] rounded-lg border border-border bg-card px-3 py-2 font-mono text-xs text-muted-foreground shadow-sm">
              &lt;FullStack /&gt;
            </span>
            <span className="absolute bottom-[20%] right-0 rounded-lg border border-border bg-card px-3 py-2 font-mono text-xs text-muted-foreground shadow-sm">
              CS GRADUATE
            </span>
          </div>
        </div>
      </Container>
    </Section>
  );
}
