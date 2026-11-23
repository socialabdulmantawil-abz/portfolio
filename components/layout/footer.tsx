import Link from "next/link";
import { Container } from "@/components/shared/container";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <Container className="flex flex-col gap-3 py-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>Portfolio</p>
        <Link
          href="#home"
          className="w-fit rounded-md text-foreground underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-ring"
        >
          Back to top
        </Link>
      </Container>
    </footer>
  );
}
