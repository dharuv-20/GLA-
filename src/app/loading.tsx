import { Loader2 } from 'lucide-react';

export default function Loading() {
  return (
    <div className="min-h-[70vh] w-full flex flex-col items-center justify-center gap-4 bg-white">
      <div className="relative flex items-center justify-center">
        <Loader2 className="w-12 h-12 text-purple animate-spin" />
        <span className="absolute text-[10px] font-bold font-display text-navy">GLA</span>
      </div>
      <p className="text-xs font-semibold text-navy-muted animate-pulse">
        Loading Academy Resources...
      </p>
    </div>
  );
}
