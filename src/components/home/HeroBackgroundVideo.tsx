"use client";

import { useEffect, useRef, useState } from 'react';

interface HeroBackgroundVideoProps {
  videoSrc?: string;
  className?: string;
}

export default function HeroBackgroundVideo({
  videoSrc = "/videos/hero-bg.mp4",
  className = ""
}: HeroBackgroundVideoProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.9;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsVideoLoaded(true))
          .catch(() => {
            setIsVideoLoaded(true);
          });
      }
    }
  }, []);

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none select-none z-0 ${className}`}
      aria-hidden="true"
    >
      {/* HTML5 Video Element with Responsive Object Position & GPU Acceleration */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className={`w-full h-full object-cover object-[center_28%] sm:object-center transition-opacity duration-700 ease-in-out transform-gpu will-change-transform ${
          isVideoLoaded ? 'opacity-65 dark:opacity-55' : 'opacity-0'
        }`}
      >
        <source src={videoSrc} type="video/mp4" />
        <source src="/bg%20video/206779_tiny.mp4" type="video/mp4" />
      </video>

      {/* Balanced High-Visibility Overlay: Soft Readability Shadow on Left Text */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#00122E]/85 via-[#00122E]/55 to-[#00122E]/35 dark:from-[#020c1b]/90 dark:via-[#020c1b]/60 dark:to-[#020c1b]/40" />

      {/* Top & Bottom Cinematic Edge Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#00122E]/50 via-transparent to-[#00122E]/70 dark:from-[#020c1b]/50 dark:to-[#020c1b]/80" />

      {/* Subtle Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-purple/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[350px] h-[350px] bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />
    </div>
  );
}
