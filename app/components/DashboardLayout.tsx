'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Sidebar from './Sidebar';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();

  // Check if we're on an auth page (sign-in or sign-up)
  const isAuthPage = pathname?.startsWith('/sign-in') || pathname?.startsWith('/sign-up');

  useEffect(() => {
    setIsMounted(true);
    const stored = localStorage.getItem('sidebar-collapsed');
    if (stored !== null) {
      setIsCollapsed(stored === 'true');
    }
  }, []);

  const handleToggle = () => {
    const newState = !isCollapsed;
    setIsCollapsed(newState);
    localStorage.setItem('sidebar-collapsed', String(newState));
  };

  // If on auth page, render without sidebar
  if (isAuthPage) {
    return <>{children}</>;
  }

  if (!isMounted) {
    return (
      <div className="flex min-h-screen">
        <Sidebar isCollapsed={false} onToggle={() => {}} />
        <main className="flex-1 ml-16 md:ml-64 bg-zinc-50 dark:bg-black">
          {children}
        </main>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen">
      <Sidebar isCollapsed={isCollapsed} onToggle={handleToggle} />
      <main
        className={`flex-1 transition-all duration-300 bg-zinc-50 dark:bg-black ${
          isCollapsed ? 'ml-16' : 'ml-16 md:ml-64'
        }`}
      >
        {children}
      </main>
    </div>
  );
}
