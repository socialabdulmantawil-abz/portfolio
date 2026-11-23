import type { TimelineEntry } from "@/types/timeline";
import { TimelineItem } from "@/components/shared/timeline-item";

interface TimelineProps {
  entries: readonly TimelineEntry[];
  label: string;
}

export function Timeline({ entries, label }: TimelineProps) {
  return (
    <ol
      aria-label={label}
      className="mt-8 space-y-8 border-l border-border pl-6"
    >
      {entries.map((entry) => (
        <TimelineItem
          key={`${entry.title}-${entry.organization}`}
          entry={entry}
        />
      ))}
    </ol>
  );
}
