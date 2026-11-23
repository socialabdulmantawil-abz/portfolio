# AGENT.md
# Next.js Portfolio - AI Development Instructions
## 1. Project Identity

You are working on a modern, professional, responsive personal portfolio website built with Next.js.

Your responsibility is to develop and maintain a polished, accessible, modular, and consistent portfolio application.

### Project Goals

- Build a professional full-stack developer portfolio.
- Use a modern, clean, premium visual design.
- Support dark mode and light mode.
- Provide subtle, professional animations.
- Maintain excellent responsiveness across mobile, tablet, laptop, and desktop.
- Use reusable components and modular architecture.
- Maintain strict TypeScript type safety.
- Keep the codebase organized, maintainable, and scalable.

### Development Philosophy

Follow these principles:

1. Plan before implementing.
2. Inspect existing files before making changes.
3. Reuse existing components and utilities.
4. Build incrementally instead of generating the entire application at once.
5. Keep components modular and focused.
6. Maintain consistent styling throughout the application.
7. Prioritize functionality, accessibility, and maintainability.
8. Never make unnecessary architectural changes.
9. Do not introduce dependencies without a valid reason.
10. Never sacrifice code quality for implementation speed.

---

# Development Document Responsibilities

Use the development documents in their defined roles:

- `AGENT.md` defines the project identity and the required working process.
- `DEVELOPMENT_RULES.md` defines technology, design, architecture, accessibility, and quality rules.
- `DEVELOPMENT_TASKS.md` is the phase-by-phase implementation roadmap and progress tracker.

When documents appear to conflict:

1. Follow the current phase and acceptance criteria in `DEVELOPMENT_TASKS.md`.
2. Apply the implementation constraints in `DEVELOPMENT_RULES.md`.
3. Apply the project identity and reporting process in `AGENT.md`.
4. Do not resolve a real conflict or broaden a phase by assumption; explain it and request approval.

Before implementation begins, identify the current phase from `DEVELOPMENT_TASKS.md`. Work only within that phase and its necessary dependencies. Do not automatically begin a later phase.

---

# 2. AI Agent Working Procedure

You must follow this workflow for every development task.

## Step 1 — Inspect

Before editing:

- Inspect the existing project structure.
- Read `package.json`.
- Read `AGENT.md`.
- Read `DEVELOPMENT_RULES.md`.
- Read `DEVELOPMENT_TASKS.md`.
- Identify the current development phase and its acceptance criteria.
- Review the progress tracker and completed work.
- Inspect relevant existing components.
- Check the installed framework and package versions.

Never assume that the project is empty or that its architecture matches an example.

## Step 2 — Understand

Determine:

- What needs to be implemented.
- Which existing files are involved.
- Whether existing components can be reused.
- Whether a new dependency is actually necessary.
- Whether the requested change affects the design system.
- Whether the implementation affects other pages or components.

## Step 3 — Plan

Before making significant changes:

- Explain the intended implementation.
- Identify the files that will be created or modified.
- Identify dependencies, if any.
- Explain relevant technical decisions.
- Identify possible side effects.

Do not generate the entire application when only one feature is requested.

## Step 4 — Implement

- Work only on the current requested phase and necessary dependencies.
- Do not skip, merge, or automatically start another phase.
- Keep files modular.
- Use shadcn/ui where appropriate.
- Follow the established palette.
- Use semantic tokens.
- Preserve existing functionality.
- Use TypeScript.
- Avoid unnecessary modifications.

## Step 5 — Verify

Check:

- Build errors.
- TypeScript errors.
- Lint errors.
- Browser rendering.
- Responsive behavior.
- Dark theme.
- Light theme.
- Accessibility.
- Component consistency.
- Every acceptance criterion for the current phase.
- Progress-tracking updates are accurate.

## Step 6 — Report

After completing the task, explain:

- What was implemented.
- Which files were created.
- Which files were modified.
- Which dependencies were installed.
- What tests were performed.
- Whether anything remains incomplete.
- Whether the current phase's acceptance criteria pass.
- Whether the next phase is ready to begin.

Do not mark the phase complete or begin the next phase without verified acceptance criteria and the required approval.

---

# 3. Final Instruction

You are not free to redesign the established visual identity independently.

Your primary responsibility is to build a consistent, professional portfolio using:

- Next.js
- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- Lucide React
- next-themes

**shadcn/ui provides the components. The Midnight Navy — Crisp Edition design system controls their appearance.**

Every component, section, page, interaction, and future feature must respect this relationship.

When a requested design conflicts with these rules, explain the conflict and request approval before changing the design system.

Always prioritize consistency, modularity, accessibility, maintainability, and professional quality.
