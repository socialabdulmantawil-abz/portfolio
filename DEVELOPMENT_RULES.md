# DEVELOPMENT_RULES.md
# Development Rules
# 2. Required Technology Stack

Use the following technologies as the project's standard stack.

| Technology         | Purpose                                              |
| ------------------ | ---------------------------------------------------- |
| Next.js App Router | Application framework                                |
| React              | UI development                                       |
| TypeScript         | Type safety                                          |
| Tailwind CSS       | Utility-first styling                                |
| shadcn/ui          | Primary UI component foundation                      |
| Base UI / Radix UI | Accessible primitives used by the selected shadcn base |
| Lucide React       | Icons                                                |
| next-themes        | Dark/light theme management                          |
| CSS Variables      | Centralized design tokens                            |
| npm                | Package management                                   |

### Technology Rules

- Use TypeScript (`.tsx` and `.ts`) for application code.
- Use Next.js App Router.
- Use Tailwind CSS for utility styling.
- Use shadcn/ui for reusable interface components.
- Use the accessible component primitives selected by the shadcn setup.
- Use Lucide React for icons.
- Use `next-themes` for theme switching.
- Use npm, not pnpm or yarn.
- Follow the installed package versions.
- Do not mix Tailwind CSS v3 and v4 configuration approaches.
- Do not migrate framework or dependency versions without approval.

### shadcn/ui Is Mandatory

shadcn/ui must be the primary UI component foundation.

Before creating a custom component, check whether shadcn/ui already provides an appropriate component.

Use shadcn/ui components whenever appropriate, including:

- Button
- Card
- Badge
- Input
- Textarea
- Label
- Select
- Checkbox
- Radio Group
- Switch
- Dialog
- Alert Dialog
- Dropdown Menu
- Navigation Menu
- Sheet
- Popover
- Tooltip
- Tabs
- Accordion
- Separator
- Skeleton
- Avatar
- Breadcrumb
- Command
- Calendar
- Table
- Form-related components

You may create custom components when the required functionality or design is not adequately covered by shadcn/ui.

However, custom components must follow the same design system.

Do not install another UI component library simply to replace functionality already available through shadcn/ui.

---

# 3. Mandatory Design System

## Design System Name

**Midnight Navy — Crisp Edition**

This is the official visual identity of the portfolio.

Every page, section, component, and interactive element must follow this design system.

Do not independently invent new color palettes or introduce unrelated visual styles.

## 3.1 Dark Theme — Default

The default appearance must be dark mode.

| Semantic Token       | Hex Color | Purpose                                 |
| -------------------- | --------- | --------------------------------------- |
| Background           | #0D1726   | Main application background             |
| Foreground           | #F4F6FA   | Main text                               |
| Surface              | #142136   | Secondary surface                       |
| Card                 | #1B2A40   | Cards and containers                    |
| Elevated             | #22334B   | Elevated elements and input backgrounds |
| Primary              | #70B5AA   | Primary actions and signature accent    |
| Primary Hover        | #83C2B7   | Primary hover state                     |
| Primary Foreground   | #0D1726   | Text on primary elements                |
| Secondary            | #2A3C54   | Secondary surfaces                      |
| Secondary Foreground | #A5D0C6   | Secondary text and emphasis             |
| Muted                | #22334B   | Muted backgrounds                       |
| Muted Foreground     | #AAB8C9   | Secondary text                          |
| Accent               | #315C5B   | Accent surfaces                         |
| Accent Foreground    | #F4F6FA   | Text on accent surfaces                 |
| Border               | #3A4D67   | Borders and separators                  |
| Input                | #22334B   | Input backgrounds                       |
| Ring                 | #A5D0C6   | Focus indicators                        |
| Selection            | #315C5B   | Text selection                          |

### Dark Theme Status Colors

| Status      | Color   | Usage                          |
| ----------- | ------- | ------------------------------ |
| Success     | #80C5A0 | Successful actions             |
| Warning     | #E4BD78 | Warnings                       |
| Destructive | #E58B8B | Errors and destructive actions |
| Info        | #82B8DC | Informational messages         |

## 3.2 Light Theme

The light theme must preserve the same visual identity.

| Semantic Token       | Hex Color | Purpose                              |
| -------------------- | --------- | ------------------------------------ |
| Background           | #F5F7FA   | Main application background          |
| Foreground           | #142136   | Main text                            |
| Surface              | #E9EEF4   | Secondary surface                    |
| Card                 | #FFFFFF   | Cards and containers                 |
| Elevated             | #FFFFFF   | Elevated elements                    |
| Primary              | #347D74   | Primary actions and signature accent |
| Primary Hover        | #28685F   | Primary hover state                  |
| Primary Foreground   | #FFFFFF   | Text on primary elements             |
| Secondary            | #DDEAE7   | Secondary surfaces                   |
| Secondary Foreground | #3F766E   | Secondary text and emphasis          |
| Muted                | #EDF1F5   | Muted backgrounds                    |
| Muted Foreground     | #5C6B7D   | Secondary text                       |
| Accent               | #CFE6DF   | Accent surfaces                      |
| Accent Foreground    | #142136   | Text on accent surfaces              |
| Border               | #D4DDE7   | Borders and separators               |
| Input                | #EDF1F5   | Input backgrounds                    |
| Ring                 | #347D74   | Focus indicators                     |
| Selection            | #CFE6DF   | Text selection                       |

### Light Theme Status Colors

| Status      | Color   | Usage                          |
| ----------- | ------- | ------------------------------ |
| Success     | #28734D | Successful actions             |
| Warning     | #8A5D16 | Warnings                       |
| Destructive | #B43D3D | Errors and destructive actions |
| Info        | #326B96 | Informational messages         |

## 3.3 Color Usage Rules

These rules are mandatory.

1. Use the provided colors as the source of truth.
2. Do not introduce unrelated accent colors.
3. Do not use random gradients.
4. Do not use bright neon colors.
5. Do not use excessive glow effects.
6. Do not use pure black as an alternative to the specified dark background.
7. Do not use washed-out gray text.
8. Maintain sufficient contrast between text and backgrounds.
9. Use semantic tokens instead of hardcoded hex colors in component files.
10. Every component must work in both themes.
11. Hover, active, focus, disabled, and selected states must remain consistent with the palette.
12. Status colors may only be used for their intended semantic purpose.
13. Do not use status colors as decorative accents.
14. Do not change the established palette without explicit approval.

---

# 4. shadcn/ui Theming Rules

## 4.1 Centralized Theme Configuration

The application's global design tokens must be maintained in:

`app/globals.css`

This file is the single source of truth for the application's theme.

For the established Tailwind CSS v4 setup, use CSS-first theme configuration and the appropriate `@theme inline` mappings.

Do not create duplicate color definitions in component files.

The theme must include the following shadcn-compatible semantic tokens:

### Required shadcn Tokens

- `--background`
- `--foreground`
- `--card`
- `--card-foreground`
- `--popover`
- `--popover-foreground`
- `--primary`
- `--primary-foreground`
- `--secondary`
- `--secondary-foreground`
- `--muted`
- `--muted-foreground`
- `--accent`
- `--accent-foreground`
- `--destructive`
- `--destructive-foreground`
- `--border`
- `--input`
- `--ring`
- `--radius`

### Additional Required Tokens

- Surface
- Elevated
- Primary hover
- Selection
- Success
- Warning
- Info
- Sidebar colors
- Chart colors when charts are implemented

Use the corresponding palette values from Section 3.

Do not change these token values without approval.

## 4.2 Component Styling

shadcn components must use semantic theme tokens.

Preferred examples:

```tsx
<Button>View Projects</Button>

<Card className="bg-card text-card-foreground">
  <CardContent>
    Portfolio content
  </CardContent>
</Card>

<div className="bg-background text-foreground">
  Main content
</div>

<div className="border border-border">
  Content with a theme-aware border
</div>
```

Avoid:

```tsx
<Button className="bg-[#70B5AA] text-[#0D1726]">View Projects</Button>
```

The second example hardcodes a theme-specific color and should not be used when a semantic token is available.

### Important

- Do not override shadcn default styles with arbitrary colors.
- Do not create unnecessary duplicate button variants.
- Preserve shadcn component accessibility.
- Customize the component source only when necessary.
- Keep component variants consistent across the application.
- Make theme-aware customization reusable.

## 4.3 shadcn Component Variants

Use consistent variants.

### Buttons

- Default: Primary teal.
- Secondary: Secondary surface.
- Outline: Transparent background with theme border.
- Ghost: Transparent with subtle hover surface.
- Destructive: Destructive semantic color.
- Link: Primary text color.

### Cards

- Default: Card background.
- Border: Theme border.
- Hover: Subtle border or surface transition.
- Interactive: Clear hover and focus states.

### Inputs

- Background: Input token.
- Text: Foreground token.
- Placeholder: Muted foreground.
- Border: Border token.
- Focus: Ring token.
- Error: Destructive token.

### Badges

- Default: Primary or secondary semantic styling.
- Success: Success token.
- Warning: Warning token.
- Destructive: Destructive token.
- Information: Info token.

Do not assign unrelated colors to badges.

---

# 5. Visual Design Rules

## 5.1 Overall Appearance

The visual direction must be:

- Modern
- Professional
- Minimal
- Premium
- Clean
- Crisp
- Readable
- Consistent

Avoid excessive decoration.

The interface should look professionally designed, not like a collection of unrelated UI components.

## 5.2 Forbidden Visual Effects

Do not use:

- Glassmorphism
- Backdrop blur
- Frosted glass cards
- Excessive shadows
- Excessive glow
- Neon colors
- Unnecessary gradients
- Overly rounded interface elements
- Blurry backgrounds
- Excessive animated elements
- Random decorative shapes
- Excessive borders

Prefer solid surfaces and clearly defined visual hierarchy.

## 5.3 Borders and Radius

Use consistent border radii.

Recommended values:

| Element          | Radius |
| ---------------- | ------ |
| Small controls   | 6px    |
| Buttons          | 8px    |
| Inputs           | 8px    |
| Cards            | 12px   |
| Dialogs          | 12px   |
| Large containers | 16px   |

Use the shadcn radius system rather than independently assigning inconsistent radius values.

## 5.4 Shadows

Use shadows sparingly.

- Cards should primarily rely on surface contrast and borders.
- Dialogs may use a subtle shadow.
- Dropdowns and popovers may use a subtle shadow.
- Do not apply large shadows to every component.
- Do not use colored glow shadows.

## 5.5 Typography

Use:

- Inter for primary interface typography.
- Geist Mono for code, technical labels, and appropriate monospace content.

Typography must have:

- Clear hierarchy.
- Consistent font weights.
- Readable line heights.
- Appropriate mobile sizing.
- Strong heading and body-text distinction.

Do not use too many font families.

---

# 6. Animation Guidelines

Use subtle professional animations.

Allowed:

- Small hover transitions.
- Gentle button transitions.
- Subtle card hover movement.
- Smooth navigation interactions.
- Gentle section entrance animations.
- Small icon transitions.
- Subtle accordion and dialog transitions.

Avoid:

- Excessive bouncing.
- Continuous spinning.
- Flashing effects.
- Large movements.
- Unnecessary parallax.
- Distracting animated backgrounds.
- Excessive scroll-triggered animations.

### Animation Requirements

1. Keep animations short and purposeful.
2. Avoid animating every element.
3. Maintain performance.
4. Use CSS transitions when possible.
5. Respect `prefers-reduced-motion`.
6. Never make an animation necessary to understand or operate the interface.

---

# 7. Responsive Design

The portfolio must support:

- Mobile phones.
- Tablets.
- Small laptops.
- Large laptops.
- Desktop monitors.

### Requirements

- Use mobile-first development.
- Avoid horizontal overflow.
- Maintain readable typography.
- Make navigation usable on small screens.
- Use responsive layouts and grids.
- Ensure buttons and interactive controls have usable touch targets.
- Make cards adapt to available screen width.
- Do not simply shrink desktop layouts to fit mobile.

Every newly developed section must be tested at multiple screen sizes.

---

# 8. Accessibility Requirements

Accessibility is mandatory.

- Use semantic HTML.
- Use accessible shadcn components.
- Provide labels for form controls.
- Provide accessible names for icon-only buttons.
- Maintain keyboard navigation.
- Display visible focus indicators.
- Ensure sufficient text contrast.
- Use appropriate heading hierarchy.
- Use meaningful alternative text for images.
- Respect reduced-motion preferences.
- Do not communicate status through color alone.
- Ensure dialogs and menus can be operated with a keyboard.

Aim for WCAG 2.2 AA accessibility.

---

# 9. Project Architecture

Maintain a modular and component-based architecture.

Recommended structure:

```text
project-root/
│
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   │
│   └── favicon.ico
│
├── components/
│   │
│   ├── ui/
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── badge.tsx
│   │   ├── input.tsx
│   │   ├── textarea.tsx
│   │   ├── dialog.tsx
│   │   └── ...
│   │
│   ├── layout/
│   │   ├── navbar.tsx
│   │   ├── mobile-nav.tsx
│   │   ├── footer.tsx
│   │   ├── theme-provider.tsx
│   │   └── theme-toggle.tsx
│   │
│   ├── sections/
│   │   ├── hero.tsx
│   │   ├── about.tsx
│   │   ├── skills.tsx
│   │   ├── projects.tsx
│   │   ├── experience.tsx
│   │   ├── education.tsx
│   │   └── contact.tsx
│   │
│   └── shared/
│       ├── section-heading.tsx
│       ├── social-links.tsx
│       └── project-card.tsx
│
├── hooks/
│   └── use-mobile.ts
│
├── lib/
│   ├── utils.ts
│   └── constants.ts
│
├── types/
│   └── index.ts
│
├── public/
│   ├── images/
│   └── icons/
│
├── components.json
├── package.json
├── tsconfig.json
├── AGENT.md
├── DEVELOPMENT_RULES.md
└── DEVELOPMENT_TASKS.md
```

This is the recommended structure, not a reason to create empty folders or files prematurely.

Create files when they are needed.

### Architecture Rules

1. Keep each major component in its own file.
2. Do not place the entire portfolio inside `page.tsx`.
3. Do not put all sections in one large component.
4. Separate layout, UI, sections, hooks, utilities, and types.
5. Use reusable components where appropriate.
6. Keep components focused on one responsibility.
7. Avoid unnecessary abstraction.
8. Avoid duplicating code.
9. Use clear and consistent naming.
10. Do not create overly large files when they can reasonably be separated.

---

# 10. TypeScript Requirements

TypeScript is mandatory.

- Use explicit types for component props.
- Define interfaces for structured data when appropriate.
- Avoid `any`.
- Use proper event types.
- Use type-safe utility functions.
- Keep reusable types in the `types/` directory when appropriate.
- Use server and client components correctly.
- Do not add `"use client"` unnecessarily.
- Keep data structures predictable and maintainable.

Example:

```tsx
import type { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
}

export function Section({ children, className }: SectionProps) {
  return <section className={className}>{children}</section>;
}
```

---

# 11. Component Development Rules

Before creating a new component:

1. Check whether shadcn/ui already provides the component.
2. Check whether an existing project component can be reused.
3. Check whether the functionality can be composed from existing components.
4. Create a custom component only when justified.

### When Customizing shadcn

- Preserve existing functionality.
- Preserve keyboard interactions.
- Preserve accessibility.
- Maintain semantic theme tokens.
- Avoid breaking existing component variants.
- Keep changes reusable.
- Do not unnecessarily replace the component's underlying implementation.

### When Adding a New shadcn Component

1. Check `components.json`.
2. Check the installed shadcn and Tailwind versions.
3. Use the appropriate official CLI command.
4. Review the generated component.
5. Confirm that its styling uses the project's semantic tokens.
6. Test it in dark and light themes.
7. Confirm responsive behavior.
8. Verify accessibility.

Do not blindly overwrite customized components when updating or reinstalling them.

---

# 12. Theme Switching Requirements

The application must support dark and light themes.

### Default Theme

Dark mode.

### Theme Management

Use `next-themes`.

Requirements:

- Use class-based theme switching.
- Use `ThemeProvider`.
- Default to dark.
- Do not force system theme when the project is configured for a dark default.
- Provide an accessible theme toggle.
- Prevent hydration mismatch.
- Avoid flashing the wrong theme during page loading.
- Ensure every component responds to theme changes.
- Do not duplicate theme state in unrelated components.

### Testing

Every new UI component must be checked in:

1. Dark theme.
2. Light theme.

Do not consider a component complete if it only works visually in one theme.

---

# 13. Code Quality and Maintenance

Follow these rules:

- Write readable code.
- Use descriptive names.
- Remove unused imports.
- Remove unused variables.
- Avoid unnecessary dependencies.
- Avoid duplicated components.
- Avoid unnecessary client-side state.
- Avoid deeply nested conditional rendering.
- Keep business logic separate from presentation when appropriate.
- Use reusable utilities.
- Handle errors properly.
- Avoid suppressing TypeScript errors without justification.
- Do not use `@ts-ignore` as a shortcut.
- Do not leave broken or incomplete implementations.
- Do not introduce temporary hardcoded values into production components.

Before finishing a task:

1. Run the relevant lint checks.
2. Run TypeScript checks.
3. Fix errors introduced by your changes.
4. Test the affected page or component.
5. Check dark and light themes.
6. Check responsive behavior.
7. Summarize what changed.

---

# 14. Development Roadmap and Phase Control

`DEVELOPMENT_TASKS.md` is the implementation roadmap and progress authority for the project.

### Phase Workflow

1. Read `AGENT.md`, `DEVELOPMENT_RULES.md`, and `DEVELOPMENT_TASKS.md`.
2. Inspect the current project and review completed work.
3. Identify the current phase, current task, and acceptance criteria.
4. Present the implementation plan before significant changes.
5. Implement only the current phase and dependencies required by that phase.
6. Verify every acceptance criterion for the current phase.
7. Update the phase status and current development state in `DEVELOPMENT_TASKS.md`.
8. Commit the verified phase changes on the phase branch and push that branch to `origin`.
9. After confirming the push succeeded, immediately switch to `main` and fast-forward from `origin/main`.
10. Report completion and wait for approval before starting the next phase.

Do not merge a phase branch automatically. Start a subsequent phase branch only after the preceding phase has been merged into `main`; create it from an up-to-date `main` so it includes the accepted work. If pushing or updating `main` fails, report the failure and do not claim the handoff is complete.

### Status Tracking

Use the progress status labels defined in `DEVELOPMENT_TASKS.md`:

- `[ ]` Not Started
- `[~]` In Progress
- `[x]` Completed
- `[!]` Blocked
- `[R]` Needs Revision

A phase may be marked completed only when its acceptance criteria pass. Verification failures must leave the phase in progress, blocked, or needs revision as appropriate.

### Phase 1 Requirements

Phase 1 is project foundation only. It may establish the Next.js, TypeScript, Tailwind, package-script, path-alias, and folder-structure baseline. It must not implement the design system, shadcn components, portfolio sections, or visual features belonging to later phases.

Do not skip phases or proceed to a later phase without explicit user approval.

---

# 15. Strict Rules — Never Violate

The following requirements are non-negotiable.

1. Never replace the established Midnight Navy — Crisp Edition palette without explicit approval.
2. Never introduce an unrelated color palette.
3. Never use hardcoded theme-specific hex colors in components when semantic tokens are available.
4. Never build a separate UI library to replace shadcn/ui unnecessarily.
5. Never create duplicate components when reusable components already exist.
6. Never put the entire application in one file.
7. Never generate the entire application in one step unless explicitly requested.
8. Never make unrelated changes to existing files.
9. Never remove working functionality without approval.
10. Never introduce glassmorphism, excessive blur, neon, or excessive glow.
11. Never ignore dark and light theme compatibility.
12. Never sacrifice accessibility for appearance.
13. Never use `any` without a compelling technical reason.
14. Never install unnecessary dependencies.
15. Never claim a task is complete without checking the relevant implementation.
16. Never silently change the architecture or technology stack.
17. Never overwrite existing customized shadcn components without reviewing their contents.
18. Never create fake functionality or placeholder interactions that appear operational.

---

