import Link from 'next/link';
import { MapPin, Tag, Mail } from 'lucide-react';

export default function AnnouncementBar() {
  return (
    <div className="bg-purple text-white py-2 px-4 border-b border-purple-hover text-xs font-semibold tracking-wide transition-colors duration-300">
      <div className="max-w-7xl mx-auto w-full flex flex-col sm:flex-row sm:justify-between items-center gap-y-1.5 text-center sm:text-left">
        <div className="flex items-center gap-1.5">
          <MapPin className="w-3.5 h-3.5 text-purple-light shrink-0" />
          <span className="text-[11px] sm:text-xs">Dwarka Sec-13, Delhi</span>
        </div>
        
        <div className="flex items-center gap-1.5">
          <Tag className="w-3.5 h-3.5 text-purple-light shrink-0" />
          <Link href="/contact" className="text-[11px] sm:text-xs font-bold hover:text-purple-light transition-colors">
            Special Offers
          </Link>
        </div>
        
        <div className="flex items-center gap-1.5">
          <Mail className="w-3.5 h-3.5 text-purple-light shrink-0" />
          <a href="mailto:care@glaind.com" className="text-[11px] sm:text-xs hover:text-purple-light transition-colors font-sans">care@glaind.com</a>
        </div>
      </div>
    </div>
  );
}
