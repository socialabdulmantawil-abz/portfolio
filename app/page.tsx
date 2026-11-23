import { ThemeToggle } from "@/components/theme-toggle";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";

export default function Home() {
  return (
    <main className="flex flex-1 items-center justify-center bg-background px-4 py-16 text-foreground">
      <div className="w-full max-w-3xl">
        <header className="flex items-center justify-between gap-4">
          <p className="font-mono text-sm text-muted-foreground">Portfolio</p>
          <ThemeToggle />
        </header>
        <Card className="mt-8">
          <CardHeader>
            <h1 className="font-heading text-2xl font-semibold">
              Portfolio foundation
            </h1>
            <CardDescription>
              The design system is ready. Portfolio sections will be added in
              the upcoming development phases.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              This page is a simple theme-aware placeholder while the component
              system is being established.
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
