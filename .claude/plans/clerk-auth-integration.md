# Clerk Authentication Integration for Dashboard

## Overview
Integrate Clerk authentication to protect the entire dashboard application. Users will need to sign in to access any page, with user profile management available in both the sidebar and settings page.

## User Requirements
- Create Clerk account and get API keys
- Protect ALL dashboard pages (requires authentication)
- User profile/sign-out in BOTH sidebar AND settings page
- Sign-in/sign-up pages using Clerk components

## Implementation Steps

### 1. Clerk Account Setup
1. Go to https://clerk.com and create a free account
2. Click "Create Application" in the Clerk Dashboard
3. Choose authentication methods (Email, Google, GitHub recommended)
4. Select "Next.js" as framework
5. Copy API keys:
   - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
   - `CLERK_SECRET_KEY`

### 2. Install Clerk Package
```bash
npm install @clerk/nextjs
```

### 3. Create Environment Configuration
**File**: `.env.local` (NEW)

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_your_key_here
CLERK_SECRET_KEY=sk_test_your_key_here
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
```

**Important**: Restart dev server after creating this file.

### 4. Create Middleware for Route Protection
**File**: `middleware.ts` (NEW at project root)

- Import `clerkMiddleware` and `createRouteMatcher` from `@clerk/nextjs/server`
- Define public routes: `/sign-in` and `/sign-up` (with sub-routes using `(.*)`)
- Use `auth.protect()` for all non-public routes
- Configure matcher to run on all routes except static files and Next.js internals
- This protects Dashboard, Analytics, Users, and Settings pages

### 5. Wrap App with ClerkProvider
**File**: [app/layout.tsx](app/layout.tsx) (MODIFY)

- Import `ClerkProvider` from `@clerk/nextjs`
- Wrap the entire `<html>` element with `<ClerkProvider>`
- Keep existing structure: ClerkProvider → html → body → DashboardLayout → children
- ClerkProvider reads environment variables automatically

### 6. Create Sign-In Page
**File**: `app/sign-in/[[...sign-in]]/page.tsx` (NEW)

- Import `SignIn` from `@clerk/nextjs`
- Render in centered container with `bg-zinc-50 dark:bg-black`
- Use `appearance` prop to customize styling (shadow-xl on card)
- Catch-all route `[[...sign-in]]` handles OAuth callbacks

### 7. Create Sign-Up Page
**File**: `app/sign-up/[[...sign-up]]/page.tsx` (NEW)

- Import `SignUp` from `@clerk/nextjs`
- Same layout and styling as sign-in page
- Catch-all route `[[...sign-up]]` handles OAuth callbacks

### 8. Add User Profile to Sidebar
**File**: [app/components/Sidebar.tsx](app/components/Sidebar.tsx) (MODIFY)

- Import `UserButton` and `useUser` from `@clerk/nextjs`
- Add `'use client'` directive (already present)
- Get user data with `useUser()` hook
- Add new user profile section above the toggle button
- Show `UserButton` with avatar (8x8 size)
- When expanded: show user's full name and email
- When collapsed: show only avatar (centered)
- Keep existing toggle button below user section
- Conditional rendering based on `user` existence

### 9. Create User Profile Component for Settings
**File**: `app/components/UserProfileSection.tsx` (NEW)

- Client component (`'use client'`)
- Import `useUser` and `UserProfile` from `@clerk/nextjs`
- Show loading skeleton while `!isLoaded`
- Display user overview card:
  - Avatar (20x20 rounded)
  - Full name
  - Email address
  - Member since date
- Embed full `UserProfile` component for detailed management
- Style with matching design system (white/zinc-900 cards, borders, rounded-lg)

### 10. Update Settings Page
**File**: [app/settings/page.tsx](app/settings/page.tsx) (MODIFY)

- Import `UserProfileSection` from `@/app/components/UserProfileSection`
- Add `UserProfileSection` at the top (before other sections)
- **Remove** the existing "Profile" section (it's replaced by Clerk's UI)
- Keep existing "Preferences" and "Notifications" sections

### 11. Optional: Personalize Dashboard
**File**: [app/page.tsx](app/page.tsx) (OPTIONAL)

- Add `'use client'` directive
- Import `useUser` from `@clerk/nextjs`
- Add personalized greeting: "Welcome back, {firstName}!"
- Show loading state while `!isLoaded`

## Critical Files to Modify

1. `middleware.ts` - NEW (route protection)
2. `.env.local` - NEW (API keys)
3. [app/layout.tsx](app/layout.tsx) - MODIFY (add ClerkProvider)
4. [app/components/Sidebar.tsx](app/components/Sidebar.tsx) - MODIFY (add UserButton)
5. `app/sign-in/[[...sign-in]]/page.tsx` - NEW
6. `app/sign-up/[[...sign-up]]/page.tsx` - NEW
7. `app/components/UserProfileSection.tsx` - NEW
8. [app/settings/page.tsx](app/settings/page.tsx) - MODIFY

## Key Technical Decisions

- **ClerkProvider**: Wraps entire HTML to provide auth context everywhere
- **Middleware**: Protects all routes by default (secure by design)
- **UserButton**: Pre-built component handles sign-out and profile access
- **Catch-all routes**: Required for OAuth callbacks (`[[...sign-in]]`)
- **Client components**: Sidebar and settings use `useUser()` hook

## Testing Checklist

- [ ] Navigate to `/` while logged out → redirects to `/sign-in`
- [ ] Sign up with new account → redirects to dashboard
- [ ] User profile shows in sidebar with name and email (when expanded)
- [ ] UserButton dropdown shows "Manage Account" and "Sign Out"
- [ ] Settings page shows full profile management at top
- [ ] Can edit profile (name, email, avatar) in settings
- [ ] Sign out works from UserButton
- [ ] All protected routes require authentication
- [ ] Dark mode works in Clerk components

## Important Notes

### After Installing Package
Restart the dev server with `npm run dev` to load environment variables.

### Security
- Never commit `.env.local` to git (already in .gitignore)
- `CLERK_SECRET_KEY` is server-only, never expose to client
- Middleware provides server-side route protection (don't rely on client-side only)

### File Structure Created
```
app/
├── sign-in/
│   └── [[...sign-in]]/
│       └── page.tsx
├── sign-up/
│   └── [[...sign-up]]/
│       └── page.tsx
└── components/
    └── UserProfileSection.tsx
```

## Quick Start Commands

```bash
# 1. Install Clerk
npm install @clerk/nextjs

# 2. Create .env.local and add your Clerk keys

# 3. Restart dev server
npm run dev

# 4. Visit http://localhost:3000
# Should redirect to /sign-in
```
