"use client";

import { Sun } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const buttonVariants = [
  "default",
  "secondary",
  "outline",
  "ghost",
  "destructive",
  "link",
] as const;

export function ThemePreview() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-10 sm:px-6 lg:px-8">
        <header className="flex items-center justify-between gap-4">
          <div>
            <p className="font-mono text-sm text-muted-foreground">
              Midnight Navy — Crisp Edition
            </p>
            <h1 className="mt-2 text-3xl font-semibold">Theme preview</h1>
            <p className="mt-2 text-muted-foreground">
              Review components and interaction states in both themes.
            </p>
          </div>
          <ThemeToggle />
        </header>

        <section aria-labelledby="buttons-heading" className="space-y-4">
          <h2 id="buttons-heading" className="text-xl font-semibold">
            Buttons
          </h2>
          <div className="flex flex-wrap items-center gap-3">
            {buttonVariants.map((variant) => (
              <Button key={variant} variant={variant}>
                {variant[0].toUpperCase() + variant.slice(1)}
              </Button>
            ))}
            <Button disabled>Disabled</Button>
            <Button variant="outline" size="icon" aria-label="Theme preview icon button">
              <Sun aria-hidden="true" />
            </Button>
          </div>
        </section>

        <section aria-labelledby="surfaces-heading" className="space-y-4">
          <h2 id="surfaces-heading" className="text-xl font-semibold">
            Surfaces and badges
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Theme-aware card</CardTitle>
                <CardDescription>
                  Surfaces use semantic tokens rather than fixed theme colors.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                <Badge>Primary</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="outline">Outline</Badge>
                <Badge variant="destructive">Destructive</Badge>
                <span className="rounded-md bg-success/10 px-2 py-1 text-xs text-success">
                  Success
                </span>
                <span className="rounded-md bg-warning/10 px-2 py-1 text-xs text-warning">
                  Warning
                </span>
                <span className="rounded-md bg-info/10 px-2 py-1 text-xs text-info">
                  Information
                </span>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Other UI states</CardTitle>
                <CardDescription>
                  Avatar, skeleton, and elevated semantic surfaces.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex items-center gap-4">
                <Avatar>
                  <AvatarFallback>AB</AvatarFallback>
                </Avatar>
                <Skeleton className="h-8 w-32" />
                <div className="rounded-lg bg-elevated px-3 py-2 text-sm">
                  Elevated
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section aria-labelledby="forms-heading" className="space-y-4">
          <h2 id="forms-heading" className="text-xl font-semibold">
            Form controls
          </h2>
          <Card>
            <CardContent className="grid gap-5 pt-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="preview-name">Name</Label>
                <Input id="preview-name" placeholder="Enter a name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="preview-disabled">Disabled input</Label>
                <Input id="preview-disabled" disabled value="Not editable" readOnly />
              </div>
              <div className="space-y-2">
                <Label htmlFor="preview-message">Message</Label>
                <Textarea id="preview-message" placeholder="Write a short message" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="preview-specialty">Specialty</Label>
                <Select defaultValue="frontend">
                  <SelectTrigger id="preview-specialty" className="w-full">
                    <SelectValue placeholder="Choose a specialty" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="frontend">Frontend development</SelectItem>
                    <SelectItem value="fullstack">Full-stack development</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
          <Accordion defaultValue={["palette"]}>
            <AccordionItem value="palette">
              <AccordionTrigger>Palette guidance</AccordionTrigger>
              <AccordionContent>
                Use the approved palette and semantic tokens across both themes.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        <section aria-labelledby="interactions-heading" className="space-y-4">
          <h2 id="interactions-heading" className="text-xl font-semibold">
            Interactive components
          </h2>
          <div className="flex flex-wrap items-center gap-3">
            <Dialog>
              <DialogTrigger render={<Button variant="outline" />}>
                Open dialog
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Theme-aware dialog</DialogTitle>
                  <DialogDescription>
                    Dialog surfaces, borders, and text follow the active theme.
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>

            <AlertDialog>
              <AlertDialogTrigger render={<Button variant="outline" />}>
                Open alert dialog
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Confirm this sample action?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This preview does not perform any changes.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Close</AlertDialogCancel>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>

            <DropdownMenu>
              <DropdownMenuTrigger render={<Button variant="outline" />}>
                Open menu
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>First menu item</DropdownMenuItem>
                <DropdownMenuItem>Second menu item</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Tooltip>
              <TooltipTrigger render={<Button variant="secondary" />}>
                Hover or focus for tooltip
              </TooltipTrigger>
              <TooltipContent>Tooltip surface and contrast preview</TooltipContent>
            </Tooltip>
          </div>

          <Tabs defaultValue="dark">
            <TabsList>
              <TabsTrigger value="dark">Dark palette</TabsTrigger>
              <TabsTrigger value="light">Light palette</TabsTrigger>
            </TabsList>
            <TabsContent value="dark">
              The dark palette is the default theme.
            </TabsContent>
            <TabsContent value="light">
              Switch themes above to inspect the light palette.
            </TabsContent>
          </Tabs>
        </section>
      </div>
    </main>
  );
}
