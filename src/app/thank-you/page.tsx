import { Metadata } from 'next';
import { Suspense } from 'react';
import ThankYouContent from './ThankYouContent';

export const metadata: Metadata = {
  title: "Thank You | The Global Language Academy",
  description: "Thank you for contacting The Global Language Academy. Your request has been received.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage() {
  return (
    <main className="bg-background min-h-screen text-foreground transition-colors duration-300">
      <Suspense fallback={
        <div className="min-h-[70vh] flex items-center justify-center">
          <div className="flex flex-col items-center gap-3">
            <div className="w-10 h-10 border-4 border-purple border-t-transparent rounded-full animate-spin"></div>
            <p className="text-xs font-semibold text-navy-muted">Loading confirmation...</p>
          </div>
        </div>
      }>
        <ThankYouContent />
      </Suspense>
    </main>
  );
}
