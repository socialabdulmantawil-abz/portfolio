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
7. Before creating the phase branch, confirm the prior phase is merged, run `git fetch origin`, switch to `main`, and run `git pull --ff-only origin main`.
8. Verify local `main` matches `origin/main` before creating the phase branch from it.
9. Preserve uncommitted user changes; do not discard, reset, or stash them without approval.
10. Explain the implementation plan before significant changes.
11. Work only on the requested phase and its necessary dependencies.
12. Do not skip phases without explicit approval.
13. Do not regenerate previously completed work unnecessarily.
14. Update this tracking file after completing each phase.
15. Commit the verified phase changes on that phase's branch and push the branch to GitHub.
16. After the push succeeds, immediately return to `main` and fast-forward it from `origin/main`.
17. Wait for user approval before beginning another phase.

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

- [x] Initialize shadcn/ui using the official Next.js setup.
- [x] Configure `components.json`.
- [x] Confirm the correct Tailwind CSS integration.
- [x] Configure the component alias.
- [x] Configure the utility alias.
- [x] Install Lucide React if not already available.
- [x] Confirm the generated components work.
- [x] Review the generated component structure.

## 2.2 Implement the Official Color Palette

Implement the exact Midnight Navy — Crisp Edition palette from `AGENT.md` and `DEVELOPMENT_RULES.md`.

### Dark Theme

- [x] Background: #0D1726
- [x] Foreground: #F4F6FA
- [x] Surface: #142136
- [x] Card: #1B2A40
- [x] Elevated: #22334B
- [x] Primary: #70B5AA
- [x] Primary Hover: #83C2B7
- [x] Primary Foreground: #0D1726
- [x] Secondary: #2A3C54
- [x] Secondary Foreground: #A5D0C6
- [x] Muted Foreground: #AAB8C9
- [x] Accent: #315C5B
- [x] Border: #3A4D67
- [x] Input: #22334B
- [x] Ring: #A5D0C6

### Light Theme

- [x] Background: #F5F7FA
- [x] Foreground: #142136
- [x] Surface: #E9EEF4
- [x] Card: #FFFFFF
- [x] Primary: #347D74
- [x] Primary Hover: #28685F
- [x] Primary Foreground: #FFFFFF
- [x] Secondary: #DDEAE7
- [x] Secondary Foreground: #3F766E
- [x] Muted Foreground: #5C6B7D
- [x] Accent: #CFE6DF
- [x] Border: #D4DDE7
- [x] Input: #EDF1F5
- [x] Ring: #347D74

## 2.3 Configure Semantic CSS Variables

- [x] Configure background and foreground.
- [x] Configure card and card foreground.
- [x] Configure popover and popover foreground.
- [x] Configure primary and primary foreground.
- [x] Configure secondary and secondary foreground.
- [x] Configure muted and muted foreground.
- [x] Configure accent and accent foreground.
- [x] Configure destructive colors.
- [x] Configure border, input and ring.
- [x] Configure radius variables.
- [x] Configure sidebar variables.
- [x] Configure chart variables.
- [x] Configure additional semantic status colors.

## 2.4 Configure Theme Provider

- [x] Install and configure `next-themes`.
- [x] Use class-based theme switching.
- [x] Set dark mode as the default.
- [x] Configure hydration handling.
- [x] Prevent theme flashing.
- [x] Implement a reusable theme toggle.
- [x] Verify dark mode.
- [x] Verify light mode.

## 2.5 Build Base shadcn Components

Install only the components needed for the portfolio.

- [x] Button
- [x] Card
- [x] Badge
- [x] Input
- [x] Textarea
- [x] Label
- [x] Separator
- [x] Dialog
- [x] Dropdown Menu
- [x] Sheet
- [x] Tooltip
- [x] Tabs
- [x] Accordion
- [x] Avatar
- [x] Skeleton
- [x] Select
- [x] Alert Dialog

Additional components may be installed when required by later phases.

## 2.6 Create Theme Preview Page

Create a temporary development-only theme preview containing:

- [x] Primary buttons.
- [x] Secondary buttons.
- [x] Outline buttons.
- [x] Ghost buttons.
- [x] Destructive buttons.
- [x] Cards.
- [x] Badges.
- [x] Inputs.
- [x] Textareas.
- [x] Dialogs.
- [x] Dropdowns.
- [x] Tabs.
- [x] Tooltips.
- [x] Focus states.
- [x] Disabled states.
- [x] Hover states.

Verify all components in dark and light themes.

## Acceptance Criteria

- [x] shadcn/ui is configured correctly.
- [x] All theme tokens match the approved palette.
- [x] Components use semantic color tokens.
- [x] No unrelated colors have been introduced.
- [x] Dark/light switching works.
- [x] Component variants are consistent.
- [x] No unnecessary UI libraries are installed.
- [x] Theme preview passes visual inspection.

**Do not proceed until the design system has been approved.**

---

# PHASE 3 — GLOBAL LAYOUT

**Objective:** Build the reusable application layout.

## Tasks

- [x] Create the main navigation.
- [x] Create the portfolio logo or wordmark.
- [x] Create desktop navigation links.
- [x] Create functional mobile navigation.
- [x] Add the theme toggle.
- [x] Add the primary contact button.
- [x] Create the footer.
- [x] Create reusable page containers.
- [x] Create reusable section wrappers.
- [x] Create a consistent spacing system.
- [x] Implement responsive layout behavior.
- [x] Add active navigation states where appropriate.

## Components

```text
components/
  layout/
    navbar.tsx
    mobile-nav.tsx
    footer.tsx
    navigation.ts

  shared/
    container.tsx
    section.tsx
    section-heading.tsx

  theme-provider.tsx
  theme-toggle.tsx
```

## Acceptance Criteria

- [x] Desktop navigation works.
- [x] Mobile navigation works.
- [x] Theme toggle works.
- [x] Navigation anchors match the planned section IDs.
- [x] Footer is responsive.
- [x] Layout follows the official theme.
- [x] No horizontal overflow.

The navigation is wired to `#home`, `#about`, `#skills`, `#projects`, `#experience`, and `#contact`. Actual target scrolling validation is deferred until the corresponding sections are implemented in Phases 5–8, as approved, to preserve the planned phase boundaries.

---

# PHASE 4 — HERO SECTION

**Objective:** Create the portfolio's first impression.

## Tasks

- [x] Add professional introduction.
- [x] Add developer role or title.
- [x] Add short professional description.
- [x] Add primary call-to-action.
- [x] Add secondary call-to-action.
- [x] Add social media links.
- [x] Add profile image or visual element if appropriate.
- [x] Add subtle entrance animation.
- [x] Implement responsive layout.

## Components

```text
components/
  sections/
    hero.tsx

  shared/
    social-links.tsx
```

## Acceptance Criteria

- [x] Clear professional identity.
- [x] Strong visual hierarchy.
- [x] CTA links use their planned destinations.
- [x] Functional social links.
- [x] Responsive on all screen sizes.
- [x] Consistent theme styling.

The calls to action link to `#projects` and `#contact`. Actual target scrolling will be validated after the corresponding sections are implemented in Phases 6 and 8, preserving the approved phase boundaries.

---

# PHASE 5 — ABOUT AND SKILLS

**Objective:** Present professional background and technical capabilities.

## 5.1 About Section

- [x] Create About section.
- [x] Add professional biography.
- [x] Add background and experience summary.
- [x] Add relevant personal information.
- [x] Add optional achievements.
- [x] Add download-resume action if a resume is available.

## 5.2 Skills Section

- [x] Create technical skills layout.
- [x] Group programming languages.
- [x] Group frameworks.
- [x] Group databases.
- [x] Group development tools.
- [x] Use consistent badges or skill cards.
- [x] Avoid exaggerated skill ratings.
- [x] Keep the presentation readable.

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

- [x] Content is modular.
- [x] Skills are organized logically.
- [x] No inconsistent icon styles.
- [x] Responsive grid.
- [x] Theme consistency maintained.

The About section uses the supplied background and bio. No specific employment history or achievements were provided, so none were invented. The supplied resume is available from the About section with explicit approval. Node.js is grouped under “Frameworks & Runtime.”

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
| 2     | Design System and shadcn/ui        | [x]    |
| 3     | Global Layout                      | [x]    |
| 4     | Hero Section                       | [x]    |
| 5     | About and Skills                   | [x]    |
| 6     | Projects Portfolio                 | [ ]    |
| 7     | Experience and Education           | [ ]    |
| 8     | Contact Section                    | [ ]    |
| 9     | Animations and Visual Polish       | [ ]    |
| 10    | SEO, Accessibility and Performance | [ ]    |
| 11    | Final Testing and Deployment       | [ ]    |

## CURRENT DEVELOPMENT STATE

**Current Phase:** Phase 5 — About and Skills — Completed

**Current Task:** Phase 5 verified; About and Skills sections use the supplied profile information and skill list.

**Last Completed Phase:** Phase 5 — About and Skills

**Blocked Tasks:** None

**Next Action:** Wait for Phase 5 to be merged and for user approval before starting Phase 6 — Projects Portfolio.

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
11. After each phase, push its branch and return to `main`; do not merge automatically.
12. Base a new phase branch on `main` only after the previous phase has been merged.

**The objective is to build a complete portfolio through controlled, verified, incremental development.**
