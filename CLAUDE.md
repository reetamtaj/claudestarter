# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 16.1.1 application using React 19, TypeScript, and Tailwind CSS v4. It uses the Next.js App Router architecture with the `app/` directory structure.

## Development Commands


```bash
# Start development server (runs on http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Architecture

### Next.js App Router

This project uses the App Router pattern (Next.js 13+):
- `app/layout.tsx` - Root layout with Geist fonts (Sans and Mono) configured via `next/font/google`
- `app/page.tsx` - Home page component
- `app/globals.css` - Global styles with Tailwind CSS v4 and CSS custom properties

### Styling System

**Tailwind CSS v4** is configured via PostCSS:
- Configuration: `postcss.config.mjs` with `@tailwindcss/postcss` plugin
- No traditional `tailwind.config.js` file (v4 uses CSS-first configuration)
- Theme customization is done in `app/globals.css` using `@theme inline` directive
- Custom properties defined: `--color-background`, `--color-foreground`, `--font-sans`, `--font-mono`
- Dark mode configured via `prefers-color-scheme` media query

### TypeScript Configuration

- Path alias: `@/*` maps to repository root
- Compiler target: ES2017
- JSX: `react-jsx` mode (Next.js 13+ style)
- Module resolution: `bundler` mode

### Font System

Google Fonts are loaded via `next/font/google`:
- Geist Sans: main UI font (`--font-geist-sans`)
- Geist Mono: monospace font (`--font-geist-mono`)

Both fonts are variable fonts with Latin subset loaded.

## Important Notes

- This is a fresh Next.js project created with `create-next-app`
- Uses Tailwind CSS v4 which has a different configuration approach than v3 (CSS-based instead of JS config)
- Path aliases use `@/*` for imports from the root directory
- The project uses strict TypeScript settings
