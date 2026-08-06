import Link from 'next/link';
import { AlertTriangle, Home, BookOpen } from 'lucide-react';

export const metadata = {
  title: "404 - Page Not Found",
};

export default function NotFound() {
  return (
    <div className="min-h-[60vh] bg-white flex flex-col items-center justify-center p-6 text-center gap-6">
      <div className="p-4 bg-purple-light text-purple rounded-full">
        <AlertTriangle className="w-12 h-12" />
      </div>
      
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-extrabold font-display text-navy tracking-tight">Page Not Found</h1>
        <p className="text-sm text-navy-muted leading-relaxed max-w-sm mx-auto">
          We couldn't find the page you're looking for. It might have been moved, or the URL address was mistyped.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 mt-2">
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-purple text-white text-sm font-semibold rounded-md shadow-sm hover:bg-purple-hover transition-all"
        >
          <Home className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>
        <Link
          href="/courses"
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 border border-navy text-navy text-sm font-semibold rounded-md hover:bg-navy-light transition-all"
        >
          <BookOpen className="w-4 h-4" />
          <span>View All Courses</span>
        </Link>
      </div>
    </div>
  );
}
