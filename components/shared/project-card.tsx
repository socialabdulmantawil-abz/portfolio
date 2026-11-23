import { CodeXml, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Project } from "@/types/project";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card
      className={cn(
        "h-full",
        project.featured && "border-l-2 border-l-primary"
      )}
    >
      <CardHeader>
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-heading text-lg font-semibold leading-snug">
            {project.name}
          </h3>
          {project.featured && <Badge>Featured</Badge>}
        </div>
        <CardDescription className="text-sm leading-6">
          {project.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="mt-auto">
        <p className="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
          Technologies
        </p>
        <ul className="flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <li key={technology}>
              <Badge variant="secondary">{technology}</Badge>
            </li>
          ))}
        </ul>
      </CardContent>
      {(project.repositoryUrl || project.demoUrl) && (
        <CardFooter className="flex flex-wrap gap-4">
          {project.repositoryUrl && (
            <a
              href={project.repositoryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-foreground underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-ring"
            >
              <CodeXml aria-hidden="true" className="size-4" />
              Source code
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-foreground underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-ring"
            >
              <ExternalLink aria-hidden="true" className="size-4" />
              Live demo
            </a>
          )}
        </CardFooter>
      )}
    </Card>
  );
}
