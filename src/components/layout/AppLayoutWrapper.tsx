"use client";

import { usePathname } from 'next/navigation';

export default function AppLayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // If visiting the admin dashboard, suppress all standard website wrappers
  if (pathname?.startsWith('/admin')) {
    return null;
  }

  return <>{children}</>;
}
