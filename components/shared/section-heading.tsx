import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  description?: string;
  eyebrow?: string;
  align?: "left" | "center";
  className?: string;
  titleId?: string;
  children?: ReactNode;
}

export function SectionHeading({
  title,
  description,
  eyebrow,
  align = "left",
  className,
  titleId,
  children,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "space-y-3",
        align === "center" && "mx-auto max-w-2xl text-center",
        className
      )}
    >
      {eyebrow && (
        <p className="font-mono text-sm text-secondary-foreground">{eyebrow}</p>
      )}
      <h2
        id={titleId}
        className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl"
      >
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-muted-foreground">{description}</p>
      )}
      {children}
    </div>
  );
}
