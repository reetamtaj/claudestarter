'use client';

import { useUser } from '@clerk/nextjs';
import { UserProfile } from '@clerk/nextjs';

export default function UserProfileSection() {
  const { user, isLoaded } = useUser();

  if (!isLoaded) {
    return (
      <div className="animate-pulse space-y-6">
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg p-6">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 bg-zinc-200 dark:bg-zinc-700 rounded-full"></div>
            <div className="flex-1">
              <div className="h-6 bg-zinc-200 dark:bg-zinc-700 rounded w-1/3 mb-2"></div>
              <div className="h-4 bg-zinc-200 dark:bg-zinc-700 rounded w-1/2"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="space-y-6">
      {/* User Overview Card */}
      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg p-6 shadow-sm">
        <div className="flex items-center gap-4">
          <img
            src={user.imageUrl}
            alt={user.fullName || 'User'}
            className="w-20 h-20 rounded-full"
          />
          <div>
            <h3 className="text-xl font-semibold text-foreground">
              {user.fullName || 'User'}
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              {user.primaryEmailAddress?.emailAddress}
            </p>
            <p className="text-xs text-zinc-500 dark:text-zinc-500 mt-1">
              Member since {new Date(user.createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>

      {/* Full Clerk User Profile Component */}
      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg overflow-hidden shadow-sm">
        <UserProfile
          appearance={{
            elements: {
              rootBox: 'w-full',
              card: 'shadow-none border-0',
            }
          }}
        />
      </div>
    </div>
  );
}
