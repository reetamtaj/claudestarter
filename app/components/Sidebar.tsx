'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, BarChart3, Users, Settings, ChevronLeft, ChevronRight } from 'lucide-react';
import { UserButton, useUser } from '@clerk/nextjs';

interface SidebarProps {
  isCollapsed: boolean;
  onToggle: () => void;
}

const navItems = [
  { label: 'Dashboard', href: '/', icon: LayoutDashboard },
  { label: 'Analytics', href: '/analytics', icon: BarChart3 },
  { label: 'Users', href: '/users', icon: Users },
  { label: 'Settings', href: '/settings', icon: Settings },
];

export default function Sidebar({ isCollapsed, onToggle }: SidebarProps) {
  const pathname = usePathname();
  const { user } = useUser();

  return (
    <aside
      className={`fixed left-0 top-0 h-screen bg-white dark:bg-zinc-900 border-r border-zinc-200 dark:border-zinc-800 transition-all duration-300 z-40 ${
        isCollapsed ? 'w-16' : 'w-16 md:w-64'
      }`}
    >
      <div className="flex flex-col h-full">
        {/* Logo/Brand */}
        <div className="h-16 flex items-center justify-center border-b border-zinc-200 dark:border-zinc-800">
          <span className={`font-semibold text-lg ${isCollapsed ? 'hidden' : 'hidden md:block'}`}>
            Dashboard
          </span>
          <span className={`font-semibold text-lg ${isCollapsed ? 'block' : 'block md:hidden'}`}>
            D
          </span>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-3 space-y-1" aria-label="Main navigation">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white font-medium'
                    : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800/50'
                } ${isCollapsed ? 'justify-center' : 'justify-center md:justify-start'}`}
              >
                <Icon className="w-5 h-5 shrink-0" />
                <span className={`${isCollapsed ? 'hidden' : 'hidden md:block'}`}>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* User Profile and Controls */}
        <div className="p-3 border-t border-zinc-200 dark:border-zinc-800">
          {/* User Profile Section */}
          {user && (
            <div className={`flex items-center gap-3 px-3 py-2.5 mb-2 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors ${
              isCollapsed ? 'justify-center' : 'justify-center md:justify-start'
            }`}>
              <UserButton
                appearance={{
                  elements: {
                    avatarBox: 'w-8 h-8',
                  }
                }}
              />
              <span className={`text-sm font-medium text-zinc-900 dark:text-white truncate ${isCollapsed ? 'hidden' : 'hidden md:block'}`}>
                {user.fullName || user.firstName || 'User'}
              </span>
            </div>
          )}

          {/* Toggle Button - Desktop Only */}
          <button
            onClick={onToggle}
            className="flex items-center justify-center w-full px-3 py-2.5 rounded-lg text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors hidden md:flex"
            aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            aria-expanded={!isCollapsed}
          >
            {isCollapsed ? (
              <ChevronRight className="w-5 h-5" />
            ) : (
              <>
                <ChevronLeft className="w-5 h-5 shrink-0" />
                <span className="ml-auto text-sm">Collapse</span>
              </>
            )}
          </button>
        </div>
      </div>
    </aside>
  );
}
