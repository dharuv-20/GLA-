"use client";

import { useEffect, useState, useRef } from 'react';

interface CountUpProps {
  end: number;
  duration?: number; // animation duration in milliseconds
  decimals?: number; // number of decimal points
  suffix?: string;   // suffix string (like '%', '+')
}

export default function CountUp({ end, duration = 2000, decimals = 0, suffix = "" }: CountUpProps) {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);
  const [mounted, setMounted] = useState(false);

  // Set mounted state to bypass Next.js SSR hydration checks
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let startTimestamp: number | null = null;
          
          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            
            // Easing: easeOutQuad (starts fast, slows down at the end)
            const easeProgress = progress * (2 - progress);
            const currentValue = easeProgress * end;
            
            setCount(currentValue);
            
            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setCount(end);
            }
          };
          
          window.requestAnimationFrame(step);
          observer.unobserve(entry.target);
        }
      },
      { 
        threshold: 0.01, 
        rootMargin: "0px 0px 100px 0px" // triggers 100px before entering viewport
      }
    );

    const currentRef = countRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      observer.disconnect();
    };
  }, [end, duration, mounted]);

  // On the server render the final value to prevent empty content or layout shifts
  const valueToFormat = mounted ? count : end;
  
  const formattedCount = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(valueToFormat);

  return (
    <span ref={countRef}>
      {formattedCount}
      {suffix}
    </span>
  );
}
