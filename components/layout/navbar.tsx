import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Container } from "@/components/shared/container";
import { MobileNav } from "@/components/layout/mobile-nav";
import { navigationLinks, contactLink } from "@/components/layout/navigation";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link
          href="#home"
          aria-current="page"
          className="shrink-0 rounded-md font-heading text-lg font-semibold text-foreground outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
        >
          Portfolio
        </Link>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-1 lg:flex"
        >
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-2 focus-visible:outline-ring"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <div className="hidden lg:block">
            <Link
              href={contactLink.href}
              className={buttonVariants({ size: "sm" })}
            >
              {contactLink.label}
            </Link>
          </div>
          <ThemeToggle />
          <MobileNav className="lg:hidden" />
        </div>
      </Container>
    </header>
  );
}
