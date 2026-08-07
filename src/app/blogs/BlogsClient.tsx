"use client";

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { User, Search, BookOpen, Clock, X, CheckCircle } from 'lucide-react';
import { BlogPost } from '@/types';
import LeadForm from '@/features/lead-capture/components/LeadForm';

interface BlogsClientProps {
  initialPosts: BlogPost[];
}

export default function BlogsClient({ initialPosts }: BlogsClientProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activePost, setActivePost] = useState<BlogPost | null>(null);
  const [mounted, setMounted] = useState(false);

  // Set mounted state on client mount
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
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

  const categories = ['all', 'IELTS', 'PTE', 'German', 'Career'];

  return (
    <div className="flex flex-col text-navy relative">
      {/* Header Page Title Hero */}
      <section className="bg-[#00122E] dark:bg-[#020c1b] text-white py-16 sm:py-20 border-b border-card-border text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-4">
          <span className="text-xs font-bold uppercase tracking-widest text-purple-light">Study Resources</span>
          <h1 className="text-4xl font-extrabold font-display tracking-tight">
            Academic Insights & Guides
          </h1>
          <p className="text-sm text-slate-300 leading-relaxed max-w-xl mx-auto">
            Explore articles written by our certified educators to help you master languages, clear exam boards, and boost your corporate career.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-card py-16 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
          
          {/* Controls Bar (Search + Filter) */}
          <div className="flex flex-col md:flex-row gap-6 justify-between items-center bg-section-alt p-6 rounded-xl border border-card-border">
            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2 w-full md:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-md text-xs font-bold capitalize transition-all duration-200 cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-purple text-white'
                      : 'bg-card border border-card-border text-navy hover:bg-navy-light'
                  }`}
                >
                  {cat === 'all' ? 'All Posts' : cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-navy-muted">
                <Search className="w-4 h-4" />
              </span>
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-card text-navy border border-card-border rounded-md text-xs focus:outline-none focus:border-purple transition-colors"
              />
            </div>
          </div>

          {/* Grid Layout (Text-Centric Style) */}
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <div
                  key={post.id}
                  onClick={() => setActivePost(post)}
                  className="group flex flex-col justify-between rounded-2xl border border-card-border bg-[#00122E]/5 dark:bg-[#020c1b]/30 p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:translate-y-[-4px] cursor-pointer min-h-[250px]"
                >
                  <article className="flex flex-col h-full justify-between gap-6">
                    <div className="flex flex-col gap-4">
                      {/* Category Badge & Read Time info row */}
                      <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider">
                        <span className="text-purple bg-purple-light/50 px-2.5 py-1 rounded-md">
                          {post.category}
                        </span>
                        <span className="flex items-center gap-1 text-navy-muted">
                          <Clock className="w-3.5 h-3.5 text-purple" />
                          {post.readTime}
                        </span>
                      </div>
                      
                      {/* Heading & Excerpt */}
                      <div className="flex flex-col gap-2">
                        <h3 className="text-base font-bold text-navy group-hover:text-purple transition-colors line-clamp-2 leading-snug">
                          {post.title}
                        </h3>
                        <p className="text-xs text-navy-muted leading-relaxed line-clamp-3">
                          {post.excerpt}
                        </p>
                      </div>
                    </div>

                    {/* Bottom Author Row */}
                    <div className="pt-4 border-t border-card-border/80 flex justify-between items-center text-xs">
                      <span className="font-semibold text-navy flex items-center gap-1.5">
                        <User className="w-4 h-4 text-purple" />
                        {post.author}
                      </span>
                      <span className="text-purple font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        Read Article &rarr;
                      </span>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-section-alt rounded-xl border border-dashed border-card-border flex flex-col items-center gap-3">
              <BookOpen className="w-12 h-12 text-navy-muted opacity-40 animate-pulse" />
              <h3 className="text-lg font-bold text-navy">No articles match your criteria</h3>
              <p className="text-xs text-navy-muted">Try revising your search query or choosing another topic category.</p>
            </div>
          )}

        </div>
      </section>

      {/* Immersive Inline Article Reader Modal Overlay */}
      {activePost && mounted && createPortal(
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999] flex items-center justify-center p-4 sm:p-6 md:p-10 animate-fade-in">
          <div className="bg-card w-full max-w-5xl h-[85vh] rounded-2xl overflow-hidden shadow-2xl border border-card-border flex flex-col animate-slide-up relative">
            
            {/* Modal Header Bar */}
            <div className="bg-navy dark:bg-[#020c1b] text-white px-6 py-4 flex justify-between items-center border-b border-card-border shrink-0">
              <div className="flex flex-col">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-purple-light">
                  {activePost.category} Study Guide
                </span>
                <h2 className="text-sm sm:text-base font-bold truncate max-w-md sm:max-w-xl">
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
                  <div className="flex flex-wrap items-center gap-4 text-xs text-navy-muted font-bold uppercase border-b border-card-border pb-4">
                    <span className="flex items-center gap-1.5">
                      <User className="w-4 h-4 text-purple" />
                      By {activePost.author}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-purple" />
                      {activePost.readTime}
                    </span>
                  </div>

                  {/* Content Paragraphs */}
                  <div className="flex flex-col gap-5 text-sm sm:text-base text-navy-muted leading-relaxed">
                    {activePost.body.split('\n').filter((p: string) => p.trim() !== '').map((paragraph: string, index: number) => {
                      const isNumberedItem = /^[1-9]\./.test(paragraph);
                      if (isNumberedItem) {
                        const [numAndTitle, ...rest] = paragraph.split(':');
                        return (
                          <div key={index} className="p-4 bg-section-alt border-l-4 border-purple rounded-r-xl flex flex-col gap-1.5 shadow-sm my-1">
                            <h4 className="text-sm font-bold text-navy">{numAndTitle}</h4>
                            {rest.length > 0 && <p className="text-xs text-navy-muted leading-relaxed">{rest.join(':').trim()}</p>}
                          </div>
                        );
                      }
                      return (
                        <p key={index} className="text-navy-muted">
                          {paragraph}
                        </p>
                      );
                    })}
                  </div>

                  {/* Close button at bottom of reading area */}
                  <div className="pt-6 border-t border-card-border mt-4 flex justify-start">
                    <button
                      onClick={() => setActivePost(null)}
                      className="px-5 py-2.5 border border-navy text-navy text-xs font-bold rounded-md hover:bg-section-alt transition-colors cursor-pointer"
                    >
                      Close Article
                    </button>
                  </div>
                </div>

                {/* Right Side: Consultation Form */}
                <div className="lg:col-span-4 sticky top-0 flex flex-col gap-6">
                  <div className="p-5 rounded-xl bg-section-alt border border-card-border flex flex-col gap-4 shadow-sm">
                    <div className="flex flex-col gap-1.5">
                      <span className="text-[9px] font-extrabold uppercase tracking-widest text-purple">Dwarka Branch</span>
                      <h3 className="text-sm font-bold text-navy">Outcome-Focused Small Batches</h3>
                      <p className="text-[11px] text-navy-muted leading-relaxed">
                        Join our premium batches capped at exactly **5-7 students** for personalized IELTS, PTE, and German preparation.
                      </p>
                    </div>

                    <div className="flex flex-col gap-2 text-[11px] text-navy font-semibold border-t border-card-border pt-4">
                      <div className="flex items-center gap-1.5">
                        <CheckCircle className="w-3.5 h-3.5 text-purple" />
                        <span>Goethe & IDP certified mentors</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <CheckCircle className="w-3.5 h-3.5 text-purple" />
                        <span>Online 7 Days (7am-11pm)</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <CheckCircle className="w-3.5 h-3.5 text-purple" />
                        <span>Offline Mon-Fri (10am-6pm)</span>
                      </div>
                    </div>

                    <div className="border-t border-card-border pt-4">
                      <h4 className="text-[10px] font-extrabold uppercase tracking-wider text-navy mb-3">Book Free Demo Class</h4>
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
