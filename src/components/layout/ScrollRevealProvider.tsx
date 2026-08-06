"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollRevealProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    // Defer the observer registration to a separate macro-task and wait for the next paint frame.
    // This guarantees that React hydration has completely settled, committed, and painted to the DOM
    // before we query and modify class lists, preventing hydration mismatches on route loads.
    const timer = setTimeout(() => {
      requestAnimationFrame(() => {
        const observerOptions = {
          root: null, // viewport
          rootMargin: "0px 0px 100px 0px", // triggers reveal 100px before entering viewport
          threshold: 0.01, // trigger immediately upon entering threshold
        };

        const revealCallback = (entries: IntersectionObserverEntry[]) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("active");
            } else {
              // Revert animation when scrolling back up/out of view
              entry.target.classList.remove("active");
            }
          });
        };

        const observer = new IntersectionObserver(revealCallback, observerOptions);

        // Observe all elements with class 'reveal'
        const revealElements = document.querySelectorAll('.reveal');
        revealElements.forEach((el) => observer.observe(el));

        return () => {
          observer.disconnect();
        };
      });
    }, 400); // 400ms is a safe buffer for dev-mode dynamic compilations

    return () => {
      clearTimeout(timer);
      // Clean up active classes on HMR/Fast Refresh to prevent dev-mode hydration mismatches
      const revealElements = document.querySelectorAll('.reveal');
      revealElements.forEach((el) => el.classList.remove('active'));
    };
  }, [pathname]); // re-evaluate on path changes

  return <>{children}</>;
}
