"use client";

import { usePathname } from 'next/navigation';
import { useEffect, useState, useRef } from 'react';

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [displayChildren, setDisplayChildren] = useState(children);
  const [stage, setStage] = useState("page-enter-active");
  const isInitialMount = useRef(true);

  useEffect(() => {
    // Skip fade-out transition on initial render to prevent layout jump
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    setStage("page-enter");
    
    const timer = setTimeout(() => {
      setDisplayChildren(children);
      setStage("page-enter-active");
    }, 180); // trigger page swap mid-fade

    return () => clearTimeout(timer);
  }, [pathname, children]);

  return (
    <div className={stage}>
      {displayChildren}
    </div>
  );
}
