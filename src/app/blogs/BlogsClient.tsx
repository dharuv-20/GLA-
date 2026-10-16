"use client";

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { User, Search, BookOpen, Clock, X, CheckCircle } from 'lucide-react';
import { BlogPost } from '@/types';
import LeadForm from '@/features/lead-capture/components/LeadForm';
import BlogContentRenderer from '@/components/BlogContentRenderer';

interface BlogsClientProps {
  initialPosts: BlogPost[];
  initialCategories?: string[];
}

export default function BlogsClient({ initialPosts, initialCategories }: BlogsClientProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activePost, setActivePost] = useState<BlogPost | null>(null);
  const [mounted, setMounted] = useState(false);

  // Dynamic categories synced directly with admin portal choices
  const [categories, setCategories] = useState<string[]>(() => {
    if (initialCategories && initialCategories.length > 0) {
      return ['all', ...initialCategories];
    }
    return ['all'];
  });

  // Set mounted state on client mount
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // Sync latest categories from the API on mount so changes in admin reflect immediately
  useEffect(() => {
    fetch('/api/categories')
      .then(res => res.json())
      .then(data => {
        if (data?.success && Array.isArray(data.categories) && data.categories.length > 0) {
          setCategories(['all', ...data.categories]);
        }
      })
      .catch(err => console.warn('Could not sync dynamic categories:', err));
  }, []);

  // Lock background scroll when the modal is active
  useEffect(() => {
    if (activePost) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activePost]);

  const filteredPosts = initialPosts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="flex flex-col text-slate-900 dark:text-slate-100 relative transition-colors duration-300">
      {/* Header Page Title Hero */}
      <section className="bg-[#00122E] dark:bg-[#030914] text-white py-16 sm:py-20 border-b border-slate-800 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-purple/15 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-4 relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-purple-300 bg-purple/20 px-3 py-1 rounded-full border border-purple/40 self-center">
            Study Resources & Strategy
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white">
            Academic Insights & Guides
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Practical articles written by our certified educators to help you ace language exams, master spoken fluency, and succeed in your international career.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-slate-50 dark:bg-[#070e1b] py-14 sm:py-16 transition-colors duration-300 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
          
          {/* Controls Bar (Search + Dynamic Category Filter) */}
          <div className="flex flex-col md:flex-row gap-5 justify-between items-center bg-white dark:bg-[#0b162c] p-5 sm:p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
            {/* Category Tabs - Exactly the categories chosen in the Admin Portal */}
            <div className="flex flex-wrap gap-2 w-full md:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold capitalize transition-all duration-200 cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-purple text-white shadow-sm'
                      : 'bg-slate-100 dark:bg-[#132242] border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:border-purple-400'
                  }`}
                >
                  {cat === 'all' ? 'All Guides' : cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">
                <Search className="w-4 h-4" />
              </span>
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-[#132242] text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 rounded-xl text-xs focus:outline-none focus:border-purple transition-colors"
              />
            </div>
          </div>

          {/* Grid Layout of Blog Cards */}
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredPosts.map((post) => (
                <div
                  key={post.id}
                  onClick={() => setActivePost(post)}
                  className="group flex flex-col justify-between rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0b162c] p-7 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-purple-400 dark:hover:border-purple-400 cursor-pointer min-h-[260px]"
                >
                  <article className="flex flex-col h-full justify-between gap-6">
                    <div className="flex flex-col gap-3.5">
                      {/* Category Badge & Read Time info row */}
                      <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider">
                        <span className="text-purple-700 dark:text-purple-300 bg-purple-50 dark:bg-purple-950/60 border border-purple-200 dark:border-purple-800 px-2.5 py-1 rounded-md">
                          {post.category}
                        </span>
                        <span className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
                          <Clock className="w-3.5 h-3.5 text-purple-400" />
                          {post.readTime}
                        </span>
                      </div>
                      
                      {/* Heading & Excerpt */}
                      <div className="flex flex-col gap-2">
                        <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-purple dark:group-hover:text-purple-300 transition-colors line-clamp-2 leading-snug">
                          {post.title}
                        </h3>
                        <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                          {post.excerpt}
                        </p>
                      </div>
                    </div>

                    {/* Bottom Author Row */}
                    <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex justify-between items-center text-xs">
                      <span className="font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                        <User className="w-4 h-4 text-purple-400" />
                        {post.author}
                      </span>
                      <span className="text-purple-700 dark:text-purple-400 font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        Read Guide &rarr;
                      </span>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white dark:bg-[#0b162c] rounded-2xl border border-dashed border-slate-300 dark:border-slate-800 flex flex-col items-center gap-3">
              <BookOpen className="w-12 h-12 text-slate-400 opacity-40 animate-pulse" />
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">No articles match your criteria</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">Try revising your search keywords or choosing another category filter.</p>
            </div>
          )}

        </div>
      </section>

      {/* Immersive Inline Article Reader Modal Overlay */}
      {activePost && mounted && createPortal(
        <div className="fixed inset-0 bg-black/75 backdrop-blur-md z-[9999] flex items-center justify-center p-3 sm:p-6 md:p-8 animate-fade-in">
          <div className="bg-white dark:bg-[#091224] text-slate-900 dark:text-slate-100 w-full max-w-5xl h-[88vh] rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-700 flex flex-col animate-scale-up relative">
            
            {/* Modal Header Bar */}
            <div className="bg-[#00122E] dark:bg-[#040b18] text-white px-6 py-4 flex justify-between items-center border-b border-slate-700/80 shrink-0">
              <div className="flex flex-col">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-purple-300">
                  {activePost.category} Study Guide
                </span>
                <h2 className="text-sm sm:text-base font-bold text-white truncate max-w-md sm:max-w-xl">
                  {activePost.title}
                </h2>
              </div>
              <button
                onClick={() => setActivePost(null)}
                className="p-1.5 rounded-full hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
                aria-label="Close article"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body Container (Scrollable) */}
            <div className="flex-grow overflow-y-auto p-6 md:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Side: Article Content */}
                <div className="lg:col-span-8 flex flex-col gap-6">
                  
                  {/* Metadata */}
                  <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 dark:text-slate-400 font-bold uppercase border-b border-slate-200 dark:border-slate-800 pb-4">
                    <span className="flex items-center gap-1.5">
                      <User className="w-4 h-4 text-purple-400" />
                      By {activePost.author}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-purple-400" />
                      {activePost.readTime}
                    </span>
                  </div>

                  {/* Content Paragraphs & Visual Rich Formatting */}
                  <div className="py-2">
                    <BlogContentRenderer content={activePost.body} />
                  </div>

                  {/* Close button at bottom of reading area */}
                  <div className="pt-6 border-t border-slate-200 dark:border-slate-800 mt-4 flex justify-start">
                    <button
                      onClick={() => setActivePost(null)}
                      className="px-5 py-2.5 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 text-xs font-bold rounded-xl hover:bg-slate-100 dark:hover:bg-[#132242] transition-colors cursor-pointer"
                    >
                      Close Guide
                    </button>
                  </div>
                </div>

                {/* Right Side: Consultation Form */}
                <div className="lg:col-span-4 sticky top-0 flex flex-col gap-6">
                  <div className="p-5 rounded-2xl bg-slate-50 dark:bg-[#0f1f38] border border-slate-200 dark:border-slate-700/80 flex flex-col gap-4 shadow-sm">
                    <div className="flex flex-col gap-1.5">
                      <span className="text-[10px] font-extrabold uppercase tracking-widest text-purple-600 dark:text-purple-300">Dwarka Sector 7 Branch</span>
                      <h3 className="text-sm font-bold text-slate-900 dark:text-white">Outcome-Focused Small Batches</h3>
                      <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                        Join our premium batches capped at exactly <strong>5-7 students</strong> for personalized IELTS, PTE, and German preparation.
                      </p>
                    </div>

                    <div className="flex flex-col gap-2 text-[11px] text-slate-700 dark:text-slate-200 font-semibold border-t border-slate-200 dark:border-slate-700/80 pt-4">
                      <div className="flex items-center gap-1.5">
                        <CheckCircle className="w-3.5 h-3.5 text-purple-500 dark:text-purple-400 shrink-0" />
                        <span>Goethe & IDP certified mentors</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <CheckCircle className="w-3.5 h-3.5 text-purple-500 dark:text-purple-400 shrink-0" />
                        <span>Online 7 Days (7am-11pm)</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <CheckCircle className="w-3.5 h-3.5 text-purple-500 dark:text-purple-400 shrink-0" />
                        <span>Offline Mon-Fri (10am-6pm)</span>
                      </div>
                    </div>

                    <div className="border-t border-slate-200 dark:border-slate-700/80 pt-4">
                      <h4 className="text-[10px] font-extrabold uppercase tracking-wider text-slate-900 dark:text-white mb-3">Book Free Consultation</h4>
                      <LeadForm />
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>,
        document.body
      )}
    </div>
  );
}
