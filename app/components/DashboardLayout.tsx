'use client';

import { useState, useEffect } from 'react';
import Sidebar from './Sidebar';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

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
