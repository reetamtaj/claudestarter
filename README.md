# Claude Starter

A modern Next.js application built with the latest technologies and best practices.

## Tech Stack

- **Next.js 16.1.1** - React framework with App Router architecture
- **React 19** - Latest React version
- **TypeScript** - Type-safe development
- **Tailwind CSS v4** - Utility-first CSS framework with CSS-first configuration
- **Geist Font** - Modern font family (Sans & Mono variants)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application in your browser.

### Available Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

## Project Structure

```
app/
├── layout.tsx      # Root layout with font configuration
├── page.tsx        # Home page
└── globals.css     # Global styles with Tailwind v4 config
```

## Key Features

- **App Router**: Uses Next.js 13+ App Router pattern for modern routing
- **Tailwind CSS v4**: CSS-first configuration via `@theme inline` directive
- **TypeScript**: Strict type checking with path aliases (`@/*`)
- **Dark Mode**: Configured via `prefers-color-scheme`
- **Variable Fonts**: Optimized Geist Sans and Mono fonts via `next/font/google`

## Development Notes

- Path alias `@/*` maps to the repository root
- Tailwind CSS v4 uses CSS-based configuration (no `tailwind.config.js`)
- Theme customization is done in `app/globals.css`

## Deploy

Deploy easily on [Vercel](https://vercel.com/new):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/reetamtaj/claudestarter)

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS v4](https://tailwindcss.com/docs)
- [TypeScript](https://www.typescriptlang.org/docs)
