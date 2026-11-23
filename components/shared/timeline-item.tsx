import type { TimelineEntry } from "@/types/timeline";

interface TimelineItemProps {
  entry: TimelineEntry;
}

export function TimelineItem({ entry }: TimelineItemProps) {
  return (
    <li className="relative">
      <span
        aria-hidden="true"
        className="absolute -left-[1.875rem] top-1.5 size-3 rounded-full border-2 border-background bg-primary"
      />
      <div className="space-y-2">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
          <h3 className="font-heading text-lg font-semibold leading-snug">
            {entry.title}
          </h3>
          <p className="shrink-0 text-sm text-muted-foreground">
            {entry.period}
          </p>
        </div>
        <p className="font-medium text-foreground">{entry.organization}</p>
        {entry.details && (
          <ul className="list-disc space-y-1 pl-5 text-sm leading-6 text-muted-foreground">
            {entry.details.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
        )}
      </div>
    </li>
  );
}
