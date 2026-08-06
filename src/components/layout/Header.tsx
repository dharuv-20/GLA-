"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, Sun, Moon, ChevronDown, BookOpen, MessageCircle } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Sync theme with local storage & document element on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  // Handle click outside to close the courses dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsCoursesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  const courses = [
    { label: "German Language (A1 - B2)", href: "/courses/german-language" },
    { label: "IELTS Masterclass", href: "/courses/ielts-preparation" },
    { label: "PTE Academic Strategy", href: "/courses/pte-academic" },
    { label: "Personality Development", href: "/courses/personality-development" },
    { label: "All Courses Directory", href: "/courses", isDivider: true }
  ];

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-card-border shadow-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <Link href="/" className="flex items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={isDark ? "/images/logo-dark.png" : "/images/logo-light.png"}
              alt="The Global Language Academy Logo"
              className="h-10 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-semibold text-navy hover:text-purple transition-colors">
              Home
            </Link>

            {/* Courses Dynamic Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsCoursesOpen(!isCoursesOpen)}
                className="flex items-center gap-1 text-sm font-semibold text-navy hover:text-purple transition-colors focus:outline-none cursor-pointer"
                aria-expanded={isCoursesOpen ? "true" : "false"}
              >
                <span>Courses</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isCoursesOpen ? 'rotate-180' : ''}`} />
              </button>

              {isCoursesOpen && (
                <div className="absolute left-0 mt-3 w-64 bg-card border border-card-border rounded-lg shadow-lg py-2 animate-fade-in z-50">
                  {courses.map((course, idx) => (
                    <div key={idx}>
                      {course.isDivider && <div className="border-t border-card-border my-1.5" />}
                      <Link
                        href={course.href}
                        onClick={() => setIsCoursesOpen(false)}
                        className={`block px-4 py-2.5 text-xs font-semibold text-navy hover:bg-navy-light hover:text-purple transition-colors ${
                          course.isDivider ? 'text-purple' : ''
                        }`}
                      >
                        {course.label}
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <Link href="/services" className="text-sm font-semibold text-navy hover:text-purple transition-colors">
              Services
            </Link>
            <Link href="/about" className="text-sm font-semibold text-navy hover:text-purple transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-sm font-semibold text-navy hover:text-purple transition-colors">
              Contact
            </Link>
          </nav>

          {/* Desktop Right items */}
          <div className="hidden md:flex items-center gap-6">
            
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full border border-card-border bg-card-bg text-navy hover:bg-navy-light transition-colors focus:outline-none cursor-pointer"
              aria-label="Toggle theme mode"
            >
              {isDark ? <Sun className="w-4 h-4 text-purple" /> : <Moon className="w-4 h-4 text-purple" />}
            </button>

            <a
              href="tel:+919876543210"
              className="flex items-center gap-1.5 text-sm font-semibold text-navy hover:text-purple transition-colors"
            >
              <Phone className="w-4 h-4 text-purple" />
              <span>+91 98765 43210</span>
            </a>
            
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-5 py-2.5 bg-purple text-white text-sm font-semibold rounded-md shadow-sm hover:bg-purple-hover hover:scale-102 active:scale-98 transition-all"
            >
              Book Free Demo
            </Link>
          </div>

          {/* Mobile Menu Actions */}
          <div className="flex items-center gap-3 md:hidden">
            {/* Theme Toggle Button (Mobile Header) */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full border border-card-border bg-card-bg text-navy hover:bg-navy-light transition-colors focus:outline-none"
              aria-label="Toggle theme mode"
            >
              {isDark ? <Sun className="w-4.5 h-4.5 text-purple" /> : <Moon className="w-4.5 h-4.5 text-purple" />}
            </button>

            {/* Hamburger menu */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-navy hover:bg-navy-light transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div className="md:hidden absolute top-full inset-x-0 bg-card border-b border-card-border shadow-xl z-50 animate-fade-in">
          <nav className="flex flex-col gap-2 p-6">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="text-base font-semibold text-navy hover:text-purple transition-colors py-2 border-b border-card-border/50"
            >
              Home
            </Link>

            {/* Mobile Courses Dropdown Segment */}
            <div className="py-2 border-b border-card-border/50 flex flex-col gap-1.5">
              <span className="text-xs font-extrabold uppercase tracking-wider text-purple-light">Courses</span>
              <div className="pl-4 flex flex-col gap-2.5 mt-1.5">
                {courses.map((course, idx) => (
                  <Link
                    key={idx}
                    href={course.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-sm font-semibold hover:text-purple transition-colors ${
                      course.isDivider ? 'text-purple text-xs font-bold pt-1 border-t border-card-border/50' : 'text-navy'
                    }`}
                  >
                    {course.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/services"
              onClick={() => setIsOpen(false)}
              className="text-base font-semibold text-navy hover:text-purple transition-colors py-2 border-b border-card-border/50"
            >
              Services
            </Link>
            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="text-base font-semibold text-navy hover:text-purple transition-colors py-2 border-b border-card-border/50"
            >
              About
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="text-base font-semibold text-navy hover:text-purple transition-colors py-2 border-b border-card-border/50"
            >
              Contact
            </Link>

            <div className="flex flex-col gap-4 pt-4">
              <a
                href="tel:+919876543210"
                className="flex items-center justify-center gap-2 text-base font-semibold text-navy py-3 bg-navy-light rounded-md border border-card-border"
              >
                <Phone className="w-5 h-5 text-purple" />
                <span>Call Us: +91 98765 43210</span>
              </a>
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center px-6 py-3 bg-purple text-white text-base font-semibold rounded-md shadow-md hover:bg-purple-hover"
              >
                Book Free Demo
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
