"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { contactLink, navigationLinks } from "@/components/layout/navigation";

interface MobileNavProps {
  className?: string;
}

export function MobileNav({ className }: MobileNavProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className={className}>
      <Sheet open={open} onOpenChange={(isOpen) => setOpen(isOpen)}>
        <SheetTrigger
          aria-label="Open navigation menu"
          className={buttonVariants({ variant: "ghost", size: "icon" })}
        >
          <Menu aria-hidden="true" />
        </SheetTrigger>
        <SheetContent side="right" className="gap-0 p-0">
          <SheetHeader className="border-b border-border">
            <SheetTitle>Navigation</SheetTitle>
            <SheetDescription>
              Navigate to a portfolio section.
            </SheetDescription>
          </SheetHeader>
          <nav
            aria-label="Mobile navigation"
            className="flex flex-col gap-1 p-4"
          >
            <Link
              href="#home"
              aria-current="page"
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-2 text-sm text-foreground hover:bg-muted focus-visible:outline-2 focus-visible:outline-ring"
            >
              Home
            </Link>
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm text-foreground hover:bg-muted focus-visible:outline-2 focus-visible:outline-ring"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={contactLink.href}
              onClick={() => setOpen(false)}
              className={buttonVariants({
                className: "mt-2 w-full",
              })}
            >
              {contactLink.label}
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
