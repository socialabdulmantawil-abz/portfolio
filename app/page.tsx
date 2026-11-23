import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col bg-background text-foreground">
      <Section
        id="home"
        className="flex flex-1 items-center"
      >
        <Container>
          <Card className="mx-auto w-full max-w-3xl">
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
                This page is a simple theme-aware placeholder while the
                component system is being established.
              </p>
            </CardContent>
          </Card>
        </Container>
      </Section>
    </main>
  );
}
