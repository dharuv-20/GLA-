"use client";

import { useEffect } from 'react';
import { ShieldAlert, RefreshCw } from 'lucide-react';

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to monitoring logs service
    console.error("ErrorBoundary caught error:", error);
  }, [error]);

  return (
    <div className="min-h-[60vh] bg-white flex flex-col items-center justify-center p-6 text-center gap-6">
      <div className="p-4 bg-red-50 text-red-600 rounded-full border border-red-150">
        <ShieldAlert className="w-12 h-12" />
      </div>

      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-extrabold font-display text-navy tracking-tight">System Error Occurred</h1>
        <p className="text-sm text-navy-muted leading-relaxed max-w-sm mx-auto">
          An unexpected error occurred in our system interface. Our engineers have been notified.
        </p>
      </div>

      <div className="flex gap-3 mt-2">
        <button
          onClick={() => reset()}
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-purple text-white text-sm font-semibold rounded-md shadow-sm hover:bg-purple-hover active:scale-98 transition-all cursor-pointer"
        >
          <RefreshCw className="w-4 h-4" />
          <span>Try Again</span>
        </button>
      </div>
    </div>
  );
}
