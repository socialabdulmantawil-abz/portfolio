# DEVELOPMENT_TASKS.md

# Personal Portfolio — Development Roadmap

**Project:** Modern Full-Stack Developer Portfolio  
**Design System:** Midnight Navy — Crisp Edition  
**UI Foundation:** shadcn/ui  
**Framework:** Next.js App Router  
**Language:** TypeScript  
**Styling:** Tailwind CSS  
**Theme:** Dark and Light  
**Package Manager:** npm

---

# DEVELOPMENT RULES

### Document Roles

- `AGENT.md` — project identity and agent workflow.
- `DEVELOPMENT_RULES.md` — technology, design, architecture, accessibility, and quality constraints.
- `DEVELOPMENT_TASKS.md` — the implementation roadmap, acceptance criteria, and progress tracker.

Before starting any phase:

1. Read `AGENT.md`.
2. Read `DEVELOPMENT_RULES.md`.
3. Read `DEVELOPMENT_TASKS.md`.
4. Inspect the current project structure.
5. Review completed phases.
6. Identify the current phase and its acceptance criteria.
7. Explain the implementation plan before significant changes.
8. Work only on the requested phase and its necessary dependencies.
9. Do not skip phases without explicit approval.
10. Do not regenerate previously completed work unnecessarily.
11. Update this tracking file after completing each phase.

## Progress Status

Use the following status labels:

- [ ] Not Started
- [~] In Progress
- [x] Completed
- [!] Blocked
- [R] Needs Revision

A phase can only be marked completed after its acceptance criteria have been verified.

---

# PHASE 1 — PROJECT FOUNDATION

**Objective:** Establish a clean and functional Next.js development environment.

## Tasks

- [x] Inspect the existing project.
- [x] Verify Node.js and npm versions.
- [x] Verify the Next.js version.
- [x] Verify the React version.
- [x] Verify the TypeScript configuration.
- [x] Verify the Tailwind CSS version.
- [x] Initialize or repair the Next.js App Router setup if necessary.
- [x] Confirm the project uses TypeScript.
- [x] Configure path aliases.
- [x] Install required foundational dependencies.
- [x] Establish the initial modular folder structure.
- [x] Confirm the development server works.

## Required Structure

```text
app/
  globals.css
  layout.tsx
  page.tsx

components/
  ui/
  layout/
  sections/
  shared/

hooks/
lib/
types/
public/
  images/
  icons/
```

## Acceptance Criteria

- [x] Next.js starts successfully.
- [x] TypeScript works.
- [x] Tailwind CSS works.
- [x] npm scripts work.
- [x] App Router works.
- [x] Project folders are organized.
- [x] No unnecessary dependencies are installed.

**Do not proceed until Phase 1 is verified.**

---

# PHASE 2 — DESIGN SYSTEM AND SHADCN/UI

**Objective:** Establish the complete visual identity and reusable component foundation.

This is a critical phase. Every subsequent phase must use this design system.

## 2.1 Install and Configure shadcn/ui

- [ ] Initialize shadcn/ui using the official Next.js setup.
- [ ] Configure `components.json`.
- [ ] Confirm the correct Tailwind CSS integration.
- [ ] Configure the component alias.
- [ ] Configure the utility alias.
- [ ] Install Lucide React if not already available.
- [ ] Confirm the generated components work.
- [ ] Review the generated component structure.

## 2.2 Implement the Official Color Palette

Implement the exact Midnight Navy — Crisp Edition palette from `AGENT.md` and `DEVELOPMENT_RULES.md`.

### Dark Theme

- [ ] Background: #0D1726
- [ ] Foreground: #F4F6FA
- [ ] Surface: #142136
- [ ] Card: #1B2A40
- [ ] Elevated: #22334B
- [ ] Primary: #70B5AA
- [ ] Primary Hover: #83C2B7
- [ ] Primary Foreground: #0D1726
- [ ] Secondary: #2A3C54
- [ ] Secondary Foreground: #A5D0C6
- [ ] Muted Foreground: #AAB8C9
- [ ] Accent: #315C5B
- [ ] Border: #3A4D67
- [ ] Input: #22334B
- [ ] Ring: #A5D0C6

### Light Theme

- [ ] Background: #F5F7FA
- [ ] Foreground: #142136
- [ ] Surface: #E9EEF4
- [ ] Card: #FFFFFF
- [ ] Primary: #347D74
- [ ] Primary Hover: #28685F
- [ ] Primary Foreground: #FFFFFF
- [ ] Secondary: #DDEAE7
- [ ] Secondary Foreground: #3F766E
- [ ] Muted Foreground: #5C6B7D
- [ ] Accent: #CFE6DF
- [ ] Border: #D4DDE7
- [ ] Input: #EDF1F5
- [ ] Ring: #347D74

## 2.3 Configure Semantic CSS Variables

- [ ] Configure background and foreground.
- [ ] Configure card and card foreground.
- [ ] Configure popover and popover foreground.
- [ ] Configure primary and primary foreground.
- [ ] Configure secondary and secondary foreground.
- [ ] Configure muted and muted foreground.
- [ ] Configure accent and accent foreground.
- [ ] Configure destructive colors.
- [ ] Configure border, input and ring.
- [ ] Configure radius variables.
- [ ] Configure sidebar variables.
- [ ] Configure chart variables.
- [ ] Configure additional semantic status colors.

## 2.4 Configure Theme Provider

- [ ] Install and configure `next-themes`.
- [ ] Use class-based theme switching.
- [ ] Set dark mode as the default.
- [ ] Configure hydration handling.
- [ ] Prevent theme flashing.
- [ ] Implement a reusable theme toggle.
- [ ] Verify dark mode.
- [ ] Verify light mode.

## 2.5 Build Base shadcn Components

Install only the components needed for the portfolio.

- [ ] Button
- [ ] Card
- [ ] Badge
- [ ] Input
- [ ] Textarea
- [ ] Label
- [ ] Separator
- [ ] Dialog
- [ ] Dropdown Menu
- [ ] Sheet
- [ ] Tooltip
- [ ] Tabs
- [ ] Accordion
- [ ] Avatar
- [ ] Skeleton
- [ ] Select
- [ ] Alert Dialog

Additional components may be installed when required by later phases.

## 2.6 Create Theme Preview Page

Create a temporary development-only theme preview containing:

- [ ] Primary buttons.
- [ ] Secondary buttons.
- [ ] Outline buttons.
- [ ] Ghost buttons.
- [ ] Destructive buttons.
- [ ] Cards.
- [ ] Badges.
- [ ] Inputs.
- [ ] Textareas.
- [ ] Dialogs.
- [ ] Dropdowns.
- [ ] Tabs.
- [ ] Tooltips.
- [ ] Focus states.
- [ ] Disabled states.
- [ ] Hover states.

Verify all components in dark and light themes.

## Acceptance Criteria

- [ ] shadcn/ui is configured correctly.
- [ ] All theme tokens match the approved palette.
- [ ] Components use semantic color tokens.
- [ ] No unrelated colors have been introduced.
- [ ] Dark/light switching works.
- [ ] Component variants are consistent.
- [ ] No unnecessary UI libraries are installed.
- [ ] Theme preview passes visual inspection.

**Do not proceed until the design system has been approved.**

---

# PHASE 3 — GLOBAL LAYOUT

**Objective:** Build the reusable application layout.

## Tasks

- [ ] Create the main navigation.
- [ ] Create the portfolio logo or wordmark.
- [ ] Create desktop navigation links.
- [ ] Create functional mobile navigation.
- [ ] Add the theme toggle.
- [ ] Add the primary contact button.
- [ ] Create the footer.
- [ ] Create reusable page containers.
- [ ] Create reusable section wrappers.
- [ ] Create a consistent spacing system.
- [ ] Implement responsive layout behavior.
- [ ] Add active navigation states where appropriate.

## Components

```text
components/
  layout/
    navbar.tsx
    mobile-nav.tsx
    footer.tsx
    theme-toggle.tsx
    theme-provider.tsx

  shared/
    container.tsx
    section-heading.tsx
```

## Acceptance Criteria

- [ ] Desktop navigation works.
- [ ] Mobile navigation works.
- [ ] Theme toggle works.
- [ ] Navigation links reach the correct sections.
- [ ] Footer is responsive.
- [ ] Layout follows the official theme.
- [ ] No horizontal overflow.

---

# PHASE 4 — HERO SECTION

**Objective:** Create the portfolio's first impression.

## Tasks

- [ ] Add professional introduction.
- [ ] Add developer role or title.
- [ ] Add short professional description.
- [ ] Add primary call-to-action.
- [ ] Add secondary call-to-action.
- [ ] Add social media links.
- [ ] Add profile image or visual element if appropriate.
- [ ] Add subtle entrance animation.
- [ ] Implement responsive layout.

## Components

```text
components/
  sections/
    hero.tsx

  shared/
    social-links.tsx
```

## Acceptance Criteria

- [ ] Clear professional identity.
- [ ] Strong visual hierarchy.
- [ ] Functional buttons.
- [ ] Functional social links.
- [ ] Responsive on all screen sizes.
- [ ] Consistent theme styling.

---

# PHASE 5 — ABOUT AND SKILLS

**Objective:** Present professional background and technical capabilities.

## 5.1 About Section

- [ ] Create About section.
- [ ] Add professional biography.
- [ ] Add background and experience summary.
- [ ] Add relevant personal information.
- [ ] Add optional achievements.
- [ ] Add download-resume action if a resume is available.

## 5.2 Skills Section

- [ ] Create technical skills layout.
- [ ] Group programming languages.
- [ ] Group frameworks.
- [ ] Group databases.
- [ ] Group development tools.
- [ ] Use consistent badges or skill cards.
- [ ] Avoid exaggerated skill ratings.
- [ ] Keep the presentation readable.

## Components

```text
components/
  sections/
    about.tsx
    skills.tsx

  shared/
    skill-card.tsx
```

## Acceptance Criteria

- [ ] Content is modular.
- [ ] Skills are organized logically.
- [ ] No inconsistent icon styles.
- [ ] Responsive grid.
- [ ] Theme consistency maintained.

---

# PHASE 6 — PROJECTS PORTFOLIO

**Objective:** Showcase completed and relevant development projects.

## Tasks

- [ ] Create projects section.
- [ ] Define reusable project data types.
- [ ] Create project data structure.
- [ ] Create reusable project cards.
- [ ] Display project name.
- [ ] Display project description.
- [ ] Display technologies used.
- [ ] Add project screenshots.
- [ ] Add live demo links when available.
- [ ] Add GitHub repository links when available.
- [ ] Add featured project styling.
- [ ] Add project details dialog or dedicated pages if needed.
- [ ] Add responsive project grid.

## Components

```text
components/
  sections/
    projects.tsx

  shared/
    project-card.tsx
    project-details.tsx

types/
  project.ts

lib/
  projects.ts
```

## Acceptance Criteria

- [ ] Project cards are reusable.
- [ ] Project data is separated from presentation.
- [ ] Links work correctly.
- [ ] Screenshots display correctly.
- [ ] Project layout is responsive.
- [ ] All cards follow the design system.

---

# PHASE 7 — EXPERIENCE AND EDUCATION

**Objective:** Present professional experience and educational background.

## Tasks

- [ ] Create experience section.
- [ ] Create reusable timeline component.
- [ ] Add employment history.
- [ ] Add role descriptions.
- [ ] Add achievements where supported by facts.
- [ ] Add education section.
- [ ] Add certifications if available.
- [ ] Add relevant dates.
- [ ] Implement responsive timeline.

## Components

```text
components/
  sections/
    experience.tsx
    education.tsx

  shared/
    timeline.tsx
    timeline-item.tsx
```

## Acceptance Criteria

- [ ] Experience is clearly organized.
- [ ] Timeline is readable.
- [ ] Dates are consistent.
- [ ] Responsive layout works.
- [ ] No fabricated qualifications or achievements.

---

# PHASE 8 — CONTACT SECTION

**Objective:** Allow visitors to contact the portfolio owner.

## Tasks

- [ ] Create contact section.
- [ ] Create contact form.
- [ ] Add name field.
- [ ] Add email field.
- [ ] Add subject field if needed.
- [ ] Add message field.
- [ ] Add client-side validation.
- [ ] Add server-side validation when a backend is implemented.
- [ ] Implement a real submission method.
- [ ] Add loading state.
- [ ] Add success state.
- [ ] Add error state.
- [ ] Add accessible validation messages.
- [ ] Add alternative contact links.

## Components

```text
components/
  sections/
    contact.tsx

  shared/
    contact-form.tsx
```

## Acceptance Criteria

- [ ] Form validation works.
- [ ] Form submission is functional.
- [ ] Loading state works.
- [ ] Success and error states work.
- [ ] No fake submission behavior.
- [ ] Form is accessible.
- [ ] Responsive layout works.

---

# PHASE 9 — ANIMATIONS AND VISUAL POLISH

**Objective:** Improve the overall user experience without sacrificing clarity or performance.

## Tasks

- [ ] Review all section transitions.
- [ ] Add subtle hover effects.
- [ ] Add subtle card transitions.
- [ ] Add appropriate entrance animations.
- [ ] Review button interactions.
- [ ] Review navigation transitions.
- [ ] Review dialog and dropdown animations.
- [ ] Review focus indicators.
- [ ] Verify reduced-motion behavior.
- [ ] Remove unnecessary visual effects.
- [ ] Verify visual consistency between all sections.

## Design Restrictions

- No glassmorphism.
- No excessive backdrop blur.
- No excessive glow.
- No neon colors.
- No unnecessary animated backgrounds.
- No distracting animations.
- No excessive shadows.

## Acceptance Criteria

- [ ] Animations are subtle.
- [ ] Reduced-motion preference is respected.
- [ ] UI remains responsive.
- [ ] No distracting effects.
- [ ] Consistent visual appearance.

---

# PHASE 10 — SEO, ACCESSIBILITY AND PERFORMANCE

**Objective:** Prepare the portfolio for production quality.

## SEO

- [ ] Configure page title.
- [ ] Configure page description.
- [ ] Configure metadata.
- [ ] Configure Open Graph metadata.
- [ ] Configure social sharing image.
- [ ] Configure favicon.
- [ ] Add sitemap if appropriate.
- [ ] Add robots.txt.
- [ ] Use semantic headings.
- [ ] Review image alternative text.

## Accessibility

- [ ] Verify keyboard navigation.
- [ ] Verify focus indicators.
- [ ] Verify accessible names.
- [ ] Verify form labels.
- [ ] Verify color contrast.
- [ ] Verify dialog accessibility.
- [ ] Verify reduced motion.
- [ ] Verify mobile touch targets.

## Performance

- [ ] Optimize images.
- [ ] Use Next.js image optimization where appropriate.
- [ ] Avoid unnecessary client components.
- [ ] Reduce unnecessary dependencies.
- [ ] Review JavaScript bundle size.
- [ ] Avoid unnecessary re-renders.
- [ ] Review loading behavior.
- [ ] Verify production build.

## Acceptance Criteria

- [ ] SEO metadata is configured.
- [ ] Accessibility issues are addressed.
- [ ] Images are optimized.
- [ ] Production build succeeds.
- [ ] No significant console errors.
- [ ] No TypeScript errors.

---

# PHASE 11 — FINAL TESTING AND DEPLOYMENT

**Objective:** Verify the complete portfolio and prepare it for deployment.

## Testing

- [ ] Test all navigation links.
- [ ] Test all buttons.
- [ ] Test all external links.
- [ ] Test theme switching.
- [ ] Test all forms.
- [ ] Test dialogs and dropdowns.
- [ ] Test all project cards.
- [ ] Test mobile navigation.
- [ ] Test responsive breakpoints.
- [ ] Test dark theme.
- [ ] Test light theme.
- [ ] Test browser console.
- [ ] Test production build.

## Final Commands

Use the project's existing npm scripts.

```bash
npm run lint
npx tsc --noEmit
npm run build
```

If a script does not exist, inspect `package.json` before deciding how to validate the project.

## Deployment

- [ ] Choose deployment platform.
- [ ] Configure environment variables if needed.
- [ ] Verify production build.
- [ ] Deploy application.
- [ ] Verify deployed website.
- [ ] Test production navigation.
- [ ] Test production theme switching.
- [ ] Test production contact form.
- [ ] Verify metadata and social sharing.

## Final Acceptance Criteria

- [ ] All required sections are implemented.
- [ ] All required interactions work.
- [ ] Dark and light themes work.
- [ ] Design system is consistent.
- [ ] Mobile and desktop layouts work.
- [ ] No critical errors.
- [ ] Production build succeeds.
- [ ] Website is ready for public use.

---

# DEVELOPMENT PROGRESS TRACKER

Update this section after every completed phase.

| Phase | Description                        | Status |
| ----- | ---------------------------------- | ------ |
| 1     | Project Foundation                 | [x]    |
| 2     | Design System and shadcn/ui        | [ ]    |
| 3     | Global Layout                      | [ ]    |
| 4     | Hero Section                       | [ ]    |
| 5     | About and Skills                   | [ ]    |
| 6     | Projects Portfolio                 | [ ]    |
| 7     | Experience and Education           | [ ]    |
| 8     | Contact Section                    | [ ]    |
| 9     | Animations and Visual Polish       | [ ]    |
| 10    | SEO, Accessibility and Performance | [ ]    |
| 11    | Final Testing and Deployment       | [ ]    |

## CURRENT DEVELOPMENT STATE

**Current Phase:** Phase 1 — Project Foundation — Completed

**Current Task:** Phase 1 verified; awaiting approval before Phase 2.

**Last Completed Phase:** Phase 1 — Project Foundation

**Blocked Tasks:** None

**Next Action:** Wait for approval before starting Phase 2 — Design System and shadcn/ui.

---

# STRICT DEVELOPMENT INSTRUCTIONS

1. Work on one phase at a time.
2. Do not automatically start the next phase.
3. Wait for the user's approval before proceeding to another phase.
4. Do not mark a phase completed unless its acceptance criteria pass.
5. Update the progress tracker after completing a phase.
6. Preserve previously completed work.
7. Do not rewrite existing files unnecessarily.
8. Do not generate the entire application in one response.
9. Do not introduce a new design system.
10. Follow `AGENT.md` and `DEVELOPMENT_RULES.md` at all times.

**The objective is to build a complete portfolio through controlled, verified, incremental development.**
