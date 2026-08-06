import Link from 'next/link';

export default function AnnouncementBar() {
  return (
    <div className="bg-purple text-white py-2 px-4 text-center text-xs font-semibold tracking-wide border-b border-purple-hover flex items-center justify-center gap-2">
      <span>🚀 New hybrid & offline batches start weekly. Limited seats per class.</span>
      <Link href="/contact" className="underline hover:text-purple-light transition-colors">
        Book Free Demo Session &rarr;
      </Link>
    </div>
  );
}
