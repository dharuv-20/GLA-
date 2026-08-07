"use client";

import Link from 'next/link';
import { Mail, MapPin, Phone, Clock, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#00122E] dark:bg-[#010814] text-white pt-16 pb-8 border-t border-card-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand Info */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/logo-dark.png"
                alt="The Global Language Academy Logo"
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              The Global Language Academy is a premium education platform helping candidates clear international language exams and achieve global career opportunities.
            </p>
            <div className="flex gap-4 mt-2">
              <a href="https://www.facebook.com/share/1RcNQDJLLG/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-navy-muted hover:bg-purple transition-colors" aria-label="Follow us on Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/the.globallanguageacademy/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-navy-muted hover:bg-purple transition-colors" aria-label="Follow us on Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-full bg-navy-muted hover:bg-purple transition-colors" aria-label="Connect on LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-full bg-navy-muted hover:bg-purple transition-colors" aria-label="Subscribe on YouTube">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-bold font-display uppercase tracking-wider mb-6 text-purple-300">Quick Links</h3>
            <ul className="flex flex-col gap-3 text-sm text-slate-300">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/courses" className="hover:text-white transition-colors">Courses</Link></li>
              <li><Link href="/blogs" className="hover:text-white transition-colors">Blogs</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Featured Courses */}
          <div>
            <h3 className="text-base font-bold font-display uppercase tracking-wider mb-6 text-purple-300">Language Courses</h3>
            <ul className="flex flex-col gap-3 text-sm text-slate-300">
              <li><Link href="/courses/german-language" className="hover:text-white transition-colors">German Language (A1 - C2)</Link></li>
              <li><Link href="/courses/ielts-preparation" className="hover:text-white transition-colors">IELTS Masterclass</Link></li>
              <li><Link href="/courses/pte-academic" className="hover:text-white transition-colors">PTE Strategy Preparation</Link></li>
              <li><Link href="/courses/personality-development" className="hover:text-white transition-colors">Personality Development</Link></li>
            </ul>
          </div>

          {/* Contact & Branch */}
          <div className="flex flex-col gap-4">
            <h3 className="text-base font-bold font-display uppercase tracking-wider mb-2 text-purple-300">Contact Info</h3>
            <div className="flex items-start gap-2.5 text-sm text-slate-300">
              <MapPin className="w-5 h-5 text-purple-300 shrink-0 mt-0.5" />
              <span>3rd Floor, Plot no 94, PKT- 10, Dwarka Sec.13 Opp. Metro station, Near Radisson Blu Hotel, Delhi 110078</span>
            </div>
            <div className="flex items-center gap-2.5 text-sm text-slate-300">
              <Phone className="w-5 h-5 text-purple-300 shrink-0" />
              <a href="tel:+919217999511" className="hover:text-white">+91 92179 99511</a>
            </div>
            <div className="flex items-center gap-2.5 text-sm text-slate-300">
              <Mail className="w-5 h-5 text-purple-300 shrink-0" />
              <a href="mailto:care@glaind.com" className="hover:text-white">care@glaind.com</a>
            </div>
            <div className="flex items-start gap-2.5 text-sm text-slate-300">
              <Clock className="w-5 h-5 text-purple-300 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-white">Working Hours</p>
                <p>Online (7 Days): 7:00 AM - 11:00 PM</p>
                <p>Offline (Mon - Fri): 10:00 AM - 6:00 PM</p>
                <p className="text-xs text-slate-400">Offline Closed on Weekends</p>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-navy-muted flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <p>&copy; {new Date().getFullYear()} TGLA Learning Pvt. Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
