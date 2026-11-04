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
                loading="lazy"
                width={180}
                height={48}
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              The Global Language Academy (TGLA) is Delhi NCR&apos;s premier language education institute helping candidates clear international language exams and achieve global career opportunities.
            </p>
            <div className="flex gap-4 mt-2">
              <a href="https://www.facebook.com/share/1RcNQDJLLG/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-navy-muted hover:bg-purple transition-colors" aria-label="Follow us on Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/the.globallanguageacademy/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-navy-muted hover:bg-purple transition-colors" aria-label="Follow us on Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://www.linkedin.com/company/the-global-language-academy/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-navy-muted hover:bg-purple transition-colors" aria-label="Connect on LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://www.youtube.com/@TheGlobalLanguageAcademy" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-navy-muted hover:bg-purple transition-colors" aria-label="Subscribe on YouTube">
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
            <ul className="flex flex-col gap-2.5 text-sm text-slate-300">
              <li><Link href="/courses/german-language" className="hover:text-purple-hero transition-colors">German Language (A1 - C2)</Link></li>
              <li><Link href="/courses/french-language" className="hover:text-purple-hero transition-colors">French Language (A1 - C2)</Link></li>
              <li><Link href="/courses/japanese-language" className="hover:text-purple-hero transition-colors">Japanese Language (N5 - N1)</Link></li>
              <li><Link href="/courses/spoken-english" className="hover:text-purple-hero transition-colors">Spoken English Language</Link></li>
              <li><Link href="/courses/ielts-preparation" className="hover:text-purple-hero transition-colors">IELTS Exam Masterclass</Link></li>
              <li><Link href="/courses/pte-academic" className="hover:text-purple-hero transition-colors">PTE Strategy</Link></li>
            </ul>
          </div>

          {/* Contact & Branch */}
          <div className="flex flex-col gap-4">
            <h3 className="text-base font-bold font-display uppercase tracking-wider mb-2 text-purple-300">Contact &amp; Locations</h3>
            
            {/* Training Center */}
            <div className="flex items-start gap-2.5 text-sm text-slate-300">
              <MapPin className="w-5 h-5 text-purple-300 shrink-0 mt-0.5" />
              <div className="flex flex-col gap-0.5">
                <span className="text-xs font-bold text-white uppercase tracking-wider">Sector 12 - Training Center:</span>
                <a href="https://maps.app.goo.gl/MjoAJesxjva2uNEX8?g_st=ic" target="_blank" rel="noopener noreferrer" className="text-xs leading-relaxed hover:text-purple-200 transition-colors">Second Floor, Plot No 20, Rd Number 203, Parmanand Colony, Pocket 8, Block B, Near City Centre, Sector 12 Dwarka, New Delhi 110078</a>
              </div>
            </div>

            {/* Registered Office */}
            <div className="flex items-start gap-2.5 text-sm text-slate-300">
              <MapPin className="w-5 h-5 text-purple-300 shrink-0 mt-0.5" />
              <div className="flex flex-col gap-0.5">
                <span className="text-xs font-bold text-white uppercase tracking-wider">Sector 13 - Registered Office:</span>
                <span className="text-xs leading-relaxed">3rd Floor, Plot No 94, PKT-10, Dwarka Sector 13 (Opp. Metro Station, Near Radisson Blu Hotel), New Delhi 110078</span>
              </div>
            </div>

            {/* Phone numbers */}
            <div className="flex items-start gap-2.5 text-sm text-slate-300 pt-1">
              <Phone className="w-5 h-5 text-purple-300 shrink-0 mt-0.5" />
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-purple-200">Landline:</span>
                  <a href="tel:01140583726" className="hover:text-white transition-colors font-bold text-white">011 4058 3726</a>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-purple-200">WhatsApp:</span>
                  <a href="tel:+919217999511" className="hover:text-white transition-colors font-bold text-white">+91 92179 99511</a>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-purple-200">WhatsApp:</span>
                  <a href="tel:+919217669511" className="hover:text-white transition-colors font-bold text-white">+91 92176 69511</a>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2.5 text-sm text-slate-300">
              <Mail className="w-5 h-5 text-purple-300 shrink-0" />
              <a href="mailto:care@tglalearning.com" className="hover:text-white">care@tglalearning.com</a>
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
        <div className="mt-12 pt-8 border-t border-navy-muted flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400 text-center md:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
            <p>&copy; {new Date().getFullYear()} TGLA Learning Pvt. Ltd. All rights reserved.</p>
            <span className="hidden sm:inline text-slate-600">•</span>
            <p className="flex items-center gap-1.5">
              <span>Website by</span>
              <a
                href="https://wa.me/918969698999?text=Hi%20Prajana%20Business%20Sol.%2C%20I%20saw%20The%20Global%20Language%20Academy%20website%20developed%20by%20you%20and%20would%20like%20to%20inquire%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-purple-300 hover:text-white underline underline-offset-2 transition-colors inline-flex items-center gap-1"
                title="Contact Prajana Business Sol. on WhatsApp"
              >
                Prajana Business Sol.
              </a>
            </p>
          </div>
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
