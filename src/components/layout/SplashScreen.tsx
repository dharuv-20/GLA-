"use client";

import { useEffect, useState } from "react";

export default function SplashScreen() {
  const [showSplash, setShowSplash] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Check if the splash has already played in this browser session
    const hasPlayed = sessionStorage.getItem("splash-played");

    if (hasPlayed) {
      setIsFinished(true);
      return;
    }

    // Otherwise, show the splash screen
    setShowSplash(true);
    document.body.style.overflow = "hidden";

    // Simulate progress bar filling up
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 5;
      });
    }, 60); // 20 steps of 5% every 60ms = exactly 1200ms (1.2 seconds)

    // Start fade out after 1.2s
    const fadeTimeout = setTimeout(() => {
      setIsFadingOut(true);
      sessionStorage.setItem("splash-played", "true");
    }, 1200);

    // Completely destroy element after fade-out transition completes (1.5s total)
    const destroyTimeout = setTimeout(() => {
      setIsFinished(true);
      document.body.style.overflow = "";
    }, 1500);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(fadeTimeout);
      clearTimeout(destroyTimeout);
      document.body.style.overflow = "";
    };
  }, []);

  if (isFinished || !showSplash) return null;

  return (
    <div
      id="splash-screen-container"
      className={`fixed inset-0 z-50 bg-[#00122E] flex flex-col items-center justify-center transition-all duration-500 ease-in-out ${
        isFadingOut ? "opacity-0 scale-105 pointer-events-none" : "opacity-100 scale-100"
      }`}
    >
      {/* Dynamic particles / glow in background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(75,36,94,0.15)_0%,transparent_60%)] animate-pulse" />

      {/* Main Logo & Loader Wrapper */}
      <div className="relative z-10 flex flex-col items-center gap-8 max-w-xs sm:max-w-sm px-4">
        {/* Animated Brand Emblem & Logo */}
        <div className="relative group animate-fade-in-up">
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-purple to-purple-hero opacity-30 blur-md group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/logo-dark.png"
            alt="The Global Language Academy Logo"
            className="relative h-16 w-auto object-contain drop-shadow-[0_4px_20px_rgba(192,132,252,0.15)]"
          />
        </div>

        {/* Loading Progress Bar Container */}
        <div className="w-48 h-1 bg-navy-light rounded-full overflow-hidden relative border border-card-border">
          {/* Glowing Progress Fill */}
          <div
            className="h-full bg-gradient-to-r from-purple to-purple-hero rounded-full transition-all duration-100 ease-out shadow-[0_0_8px_#c084fc]"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        {/* Academic Tagline */}
        <span className="text-[10px] uppercase font-bold tracking-widest text-purple-hero/80 animate-pulse">
          Laying Global Foundations
        </span>
      </div>
    </div>
  );
}
