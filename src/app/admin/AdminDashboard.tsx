"use client";

import { useState, useEffect, useRef } from 'react';
import { 
  User, 
  LogOut, 
  FileText, 
  Plus, 
  Save, 
  Eye, 
  Edit2, 
  CheckCircle, 
  AlertTriangle, 
  Trash2, 
  Sun, 
  Moon,
  Search,
  Bold,
  Italic,
  Heading2,
  Heading3,
  Minus,
  List,
  ListOrdered,
  Quote,
  Link as LinkIcon,
  Sparkles,
  ExternalLink,
  FolderPlus,
  Columns,
  X,
  Layers,
  ShieldCheck,
  Tag
} from 'lucide-react';
import { BlogPost } from '@/types';
import BlogContentRenderer from '@/components/BlogContentRenderer';

interface AdminDashboardProps {
  initialPosts: BlogPost[];
  initialCategories?: string[];
}

export default function AdminDashboard({ initialPosts, initialCategories = [] }: AdminDashboardProps) {
  const [posts, setPosts] = useState<BlogPost[]>(initialPosts);
  const [categories, setCategories] = useState<string[]>(
    initialCategories.length > 0 
      ? initialCategories 
      : ['IELTS', 'PTE', 'German', 'French', 'Japanese', 'Spoken English', 'Study Abroad', 'Career Guidance']
  );
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [isCreatingNew, setIsCreatingNew] = useState(false);
  
  // Form fields
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState<string>(categories[0] || 'IELTS');
  const [author, setAuthor] = useState('');
  const [readTime, setReadTime] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [body, setBody] = useState('');

  // UI state
  const [activeTab, setActiveTab] = useState<'edit' | 'preview' | 'split'>('edit');
  const [user, setUser] = useState<any>(null);
  const [isIdentityLoaded, setIsIdentityLoaded] = useState(false);
  const [isDark, setIsDark] = useState(true); // Defaults to brand dark mode
  const [saveStatus, setSaveStatus] = useState<{ type: 'success' | 'error' | 'loading' | null; message: string }>({ type: null, message: '' });
  const [sidebarSearch, setSidebarSearch] = useState('');
  const [sidebarCategoryFilter, setSidebarCategoryFilter] = useState('all');

  // Category modal state
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState('');
  const [categoryModalError, setCategoryModalError] = useState('');
  const [categoryModalSuccess, setCategoryModalSuccess] = useState('');

  // Textarea reference for editor toolbar
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Check if running on localhost
  const isLocalhost = typeof window !== 'undefined' && 
    (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1');

  // Sync and bind Netlify Identity Widget callbacks on mount
  useEffect(() => {
    const initIdentity = () => {
      const netlifyIdentity = (window as any).netlifyIdentity;
      if (netlifyIdentity) {
        setIsIdentityLoaded(true);
        
        // Get current logged in user
        const currentUser = netlifyIdentity.currentUser();
        if (currentUser) {
          setUser(currentUser);
        }

        // Bind events
        netlifyIdentity.on('login', (u: any) => {
          setUser(u);
          netlifyIdentity.close();
        });
        netlifyIdentity.on('logout', () => {
          setUser(null);
        });
      }
    };

    if ((window as any).netlifyIdentity) {
      initIdentity();
    } else {
      const script = document.createElement("script");
      script.src = "https://identity.netlify.com/v1/netlify-identity-widget.js";
      script.async = true;
      script.onload = () => {
        initIdentity();
      };
      script.onerror = () => {
        console.error("Failed to load Netlify Identity script.");
      };
      document.body.appendChild(script);
    }
  }, []);

  const handleLogin = () => {
    const netlifyIdentity = (window as any).netlifyIdentity;
    if (netlifyIdentity) {
      netlifyIdentity.open();
    }
  };

  const handleLogout = () => {
    const netlifyIdentity = (window as any).netlifyIdentity;
    if (netlifyIdentity) {
      netlifyIdentity.logout();
    }
    setUser(null);
  };

  const handleLocalAdminLogin = () => {
    setUser({
      email: 'admin@tglalearning.com',
      user_metadata: { full_name: 'Academy Administrator' }
    });
  };

  // Helper to slugify titles for files (e.g. "Learn German!" -> "learn-german")
  const getSlug = (t: string) => {
    return t
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');
  };

  // Pre-fill form when post selection changes
  const selectPostToEdit = (post: BlogPost) => {
    setSelectedPost(post);
    setIsCreatingNew(false);
    setTitle(post.title);
    setCategory(post.category);
    setAuthor(post.author);
    setReadTime(post.readTime);
    setExcerpt(post.excerpt);
    setBody(post.body);
    setActiveTab('edit');
    setSaveStatus({ type: null, message: '' });
  };

  const startNewPost = () => {
    setSelectedPost(null);
    setIsCreatingNew(true);
    setTitle('');
    setCategory(categories[0] || 'IELTS');
    setAuthor('Faculty Mentor');
    setReadTime('5 min read');
    setExcerpt('');
    setBody('');
    setActiveTab('edit');
    setSaveStatus({ type: null, message: '' });
  };

  // Rich Text Editor Toolbar action
  const insertFormatting = (prefix: string, suffix: string = '', defaultText: string = '') => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const currentVal = textarea.value;

    const hasSelection = start !== end;
    const selectedText = hasSelection ? currentVal.substring(start, end) : defaultText;
    const replacement = prefix + selectedText + suffix;

    const updatedText = currentVal.substring(0, start) + replacement + currentVal.substring(end);
    setBody(updatedText);

    setTimeout(() => {
      textarea.focus();
      if (hasSelection) {
        textarea.setSelectionRange(start, start + replacement.length);
      } else {
        const cursorStart = start + prefix.length;
        const cursorEnd = cursorStart + defaultText.length;
        textarea.setSelectionRange(cursorStart, cursorEnd);
      }
    }, 0);
  };

  const insertBlock = (blockText: string) => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const currentVal = textarea.value;

    const needsNewlineBefore = start > 0 && currentVal[start - 1] !== '\n';
    const prefix = needsNewlineBefore ? '\n\n' : '';
    const replacement = prefix + blockText.trim() + '\n\n';

    const updatedText = currentVal.substring(0, start) + replacement + currentVal.substring(end);
    setBody(updatedText);

    setTimeout(() => {
      textarea.focus();
      const pos = start + replacement.length;
      textarea.setSelectionRange(pos, pos);
    }, 0);
  };

  // Keyboard shortcut handler
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.ctrlKey || e.metaKey) {
      if (e.key === 'b' || e.key === 'B') {
        e.preventDefault();
        insertFormatting('**', '**', 'bold text');
      } else if (e.key === 'i' || e.key === 'I') {
        e.preventDefault();
        insertFormatting('*', '*', 'italic text');
      }
    }
  };

  // Category Manager Methods
  const handleAddCategory = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setCategoryModalError('');
    setCategoryModalSuccess('');

    const trimmed = newCategoryName.trim();
    if (!trimmed) {
      setCategoryModalError('Please enter a valid category name.');
      return;
    }

    if (categories.some(c => c.toLowerCase() === trimmed.toLowerCase())) {
      setCategoryModalError('This category already exists.');
      return;
    }

    const updated = [...categories, trimmed];
    setCategories(updated);
    setNewCategoryName('');

    try {
      const res = await fetch('/api/categories', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ categories: updated })
      });
      if (res.ok) {
        setCategoryModalSuccess(`Category "${trimmed}" added successfully!`);
      }
    } catch (err: any) {
      console.error('Failed to sync categories:', err);
    }
  };

  const handleDeleteCategory = async (catToDelete: string) => {
    setCategoryModalError('');
    setCategoryModalSuccess('');

    const countUsing = posts.filter(p => p.category === catToDelete).length;
    let confirmMsg = `Are you sure you want to delete the category "${catToDelete}"?`;
    if (countUsing > 0) {
      confirmMsg += `\nWarning: ${countUsing} existing post(s) are currently assigned to this category.`;
    }

    if (!window.confirm(confirmMsg)) return;

    const updated = categories.filter(c => c !== catToDelete);
    setCategories(updated);

    if (category === catToDelete) {
      setCategory(updated[0] || 'General');
    }

    try {
      const res = await fetch('/api/categories', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ categories: updated })
      });
      if (res.ok) {
        setCategoryModalSuccess(`Category "${catToDelete}" removed.`);
      }
    } catch (err: any) {
      console.error('Failed to sync categories deletion:', err);
    }
  };

  // Publish / Save pipeline
  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !body.trim()) {
      setSaveStatus({ type: 'error', message: 'Please fill out the title and content fields.' });
      return;
    }

    setSaveStatus({ type: 'loading', message: 'Publishing and saving changes...' });

    const postID = selectedPost ? selectedPost.id : Math.max(...posts.map(p => p.id), 0) + 1;
    const slug = selectedPost ? selectedPost.slug : getSlug(title);

    const postPayload: BlogPost = {
      id: postID,
      slug,
      title,
      category,
      author,
      readTime,
      excerpt,
      body
    };

    if (isLocalhost) {
      try {
        const response = await fetch('/api/save-blog', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ slug, post: postPayload })
        });
        
        const resData = await response.json();
        if (response.ok && resData.success) {
          updateLocalPostsState(postPayload);
          setSaveStatus({ type: 'success', message: `Saved locally to src/content/blogs/${slug}.json!` });
        } else {
          throw new Error(resData.error || 'Failed to save');
        }
      } catch (err: any) {
        setSaveStatus({ type: 'error', message: `Local save failed: ${err.message}` });
      }
    } else {
      if (!user) {
        setSaveStatus({ type: 'error', message: 'Authentication error. Please re-login.' });
        return;
      }

      try {
        const token = user.token?.access_token || '';
        const gatewayUrl = `/.netlify/git/github/contents/src/content/blogs/${slug}.json`;

        let sha: string | null = null;
        const checkResponse = await fetch(gatewayUrl, {
          headers: { Authorization: `Bearer ${token}` }
        });

        if (checkResponse.ok) {
          const fileData = await checkResponse.json();
          sha = fileData.sha;
        }

        const commitMessage = selectedPost 
          ? `cms: update blog post "${title}"`
          : `cms: create blog post "${title}"`;

        const encodedContent = btoa(unescape(encodeURIComponent(JSON.stringify(postPayload, null, 2))));

        const payload: any = {
          message: commitMessage,
          content: encodedContent,
          branch: "main"
        };
        if (sha) {
          payload.sha = sha;
        }

        const publishResponse = await fetch(gatewayUrl, {
          method: 'PUT',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        });

        if (publishResponse.ok) {
          updateLocalPostsState(postPayload);
          setSaveStatus({ type: 'success', message: 'Published successfully! It will go live shortly.' });
        } else {
          const errText = await publishResponse.text();
          throw new Error(`Git Gateway rejected commit: ${errText}`);
        }
      } catch (err: any) {
        setSaveStatus({ type: 'error', message: `Publish failed: ${err.message}` });
      }
    }
  };

  // Delete blog post pipeline
  const handleDelete = async () => {
    if (!selectedPost) return;

    const confirmDelete = window.confirm(`Are you sure you want to delete the article "${selectedPost.title}"? This cannot be undone.`);
    if (!confirmDelete) return;

    setSaveStatus({ type: 'loading', message: 'Deleting article...' });
    const slug = selectedPost.slug;

    if (isLocalhost) {
      try {
        const response = await fetch('/api/delete-blog', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ slug })
        });
        
        const resData = await response.json();
        if (response.ok && resData.success) {
          removeLocalPostState(selectedPost.id);
          setSaveStatus({ type: 'success', message: 'Article deleted successfully from local workspace!' });
        } else {
          throw new Error(resData.error || 'Failed to delete');
        }
      } catch (err: any) {
        setSaveStatus({ type: 'error', message: `Local deletion failed: ${err.message}` });
      }
    } else {
      if (!user) {
        setSaveStatus({ type: 'error', message: 'Authentication required.' });
        return;
      }

      try {
        const token = user.token?.access_token || '';
        const gatewayUrl = `/.netlify/git/github/contents/src/content/blogs/${slug}.json`;

        let sha: string | null = null;
        const checkResponse = await fetch(gatewayUrl, {
          headers: { Authorization: `Bearer ${token}` }
        });

        if (checkResponse.ok) {
          const fileData = await checkResponse.json();
          sha = fileData.sha;
        }

        if (!sha) {
          throw new Error("Could not retrieve the file SHA from GitHub.");
        }

        const payload = {
          message: `cms: delete blog post "${selectedPost.title}"`,
          sha: sha,
          branch: "main"
        };

        const deleteResponse = await fetch(gatewayUrl, {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        });

        if (deleteResponse.ok) {
          removeLocalPostState(selectedPost.id);
          setSaveStatus({ type: 'success', message: 'Article deleted from GitHub successfully!' });
        } else {
          const errText = await deleteResponse.text();
          throw new Error(`Git Gateway rejected delete command: ${errText}`);
        }
      } catch (err: any) {
        setSaveStatus({ type: 'error', message: `Deletion failed: ${err.message}` });
      }
    }
  };

  const updateLocalPostsState = (savedPost: BlogPost) => {
    setPosts(prev => {
      const exists = prev.some(p => p.id === savedPost.id);
      if (exists) {
        return prev.map(p => p.id === savedPost.id ? savedPost : p).sort((a, b) => b.id - a.id);
      } else {
        return [savedPost, ...prev].sort((a, b) => b.id - a.id);
      }
    });
    setSelectedPost(savedPost);
    setIsCreatingNew(false);
  };

  const removeLocalPostState = (idToDelete: number) => {
    setPosts(prev => prev.filter(p => p.id !== idToDelete));
    setSelectedPost(null);
    setIsCreatingNew(false);
  };

  // Filtered posts in the sidebar
  const filteredSidebarPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(sidebarSearch.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(sidebarSearch.toLowerCase());
    const matchesCat = sidebarCategoryFilter === 'all' || post.category === sidebarCategoryFilter;
    return matchesSearch && matchesCat;
  });

  // Theme styling variables mapping
  const containerTheme = isDark ? 'bg-[#00122E] text-white' : 'bg-slate-50 text-slate-800';
  const headerTheme = isDark ? 'bg-[#010814]/85 border-card-border' : 'bg-white border-slate-200';
  const sidebarTheme = isDark ? 'bg-[#010814]/40 border-card-border' : 'bg-slate-100/70 border-slate-200';
  const inputTheme = isDark ? 'bg-[#010814]/70 border-slate-700 text-white placeholder:text-slate-500 focus:border-purple' : 'bg-white border-slate-300 text-slate-900 placeholder:text-slate-400 focus:border-purple';
  const editorHeaderTheme = isDark ? 'bg-[#010814]/60 border-card-border' : 'bg-slate-50 border-slate-200';
  const toolbarTheme = isDark ? 'bg-[#010a18] border-card-border' : 'bg-slate-100 border-slate-200';

  // --- RENDER LOGIN VIEW ---
  if (!user) {
    return (
      <div className={`min-h-screen ${containerTheme} flex items-center justify-center p-6 relative overflow-hidden transition-colors duration-300`}>
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-purple/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple/10 rounded-full blur-3xl pointer-events-none" />

        <div className={`${isDark ? 'bg-[#010814]/75 border-card-border shadow-2xl' : 'bg-white border-slate-200 shadow-xl'} backdrop-blur-md border p-8 sm:p-10 rounded-2xl w-full max-w-md flex flex-col gap-6 relative z-10 transition-colors duration-300`}>
          <div className="flex flex-col gap-2 text-center">
            <span className="inline-flex items-center justify-center gap-1.5 text-[11px] font-bold uppercase tracking-wider bg-purple/10 text-purple px-3 py-1 rounded-full border border-purple/20 self-center">
              <ShieldCheck className="w-3.5 h-3.5 text-purple" />
              Global Language Academy
            </span>
            <h1 className={`text-2xl font-extrabold tracking-tight font-display ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Academy Control Panel
            </h1>
            <p className="text-xs text-slate-400 leading-relaxed">
              Sign in to manage academic articles, study resources, and blog categories.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <button
              onClick={handleLogin}
              disabled={!isIdentityLoaded}
              className="w-full py-3 bg-purple hover:bg-purple-hover text-white text-xs font-bold rounded-xl transition-all duration-200 cursor-pointer shadow-md disabled:opacity-50 flex items-center justify-center gap-2"
            >
              <User className="w-4 h-4" />
              <span>{isIdentityLoaded ? "Sign In with Netlify Identity" : "Loading Identity..."}</span>
            </button>

            {/* Quick Local Development Access */}
            <button
              onClick={handleLocalAdminLogin}
              className="w-full py-2.5 bg-card/60 hover:bg-card border border-card-border text-navy-muted hover:text-navy text-xs font-semibold rounded-xl transition-all duration-200 cursor-pointer flex items-center justify-center gap-2"
            >
              <span>⚡ Continue as Local Administrator</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // --- RENDER DASHBOARD VIEW ---
  return (
    <div className={`min-h-screen ${containerTheme} flex flex-col font-sans transition-colors duration-300`}>
      
      {/* Top Banner Control Header */}
      <header className={`${headerTheme} border-b px-6 py-3.5 flex justify-between items-center shrink-0 sticky top-0 z-30 backdrop-blur-md transition-colors duration-300`}>
        <div className="flex items-center gap-3">
          <span className="bg-purple/20 p-2 rounded-xl border border-purple/30">
            <FileText className="w-5 h-5 text-purple" />
          </span>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <h1 className={`text-sm font-bold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                GLA Academy Blog Studio
              </h1>
              <span className="text-[10px] bg-purple/15 text-purple px-2 py-0.5 rounded-full font-bold">
                CMS v2.0
              </span>
            </div>
            <span className="text-[11px] text-slate-400 hidden sm:inline">
              Manage articles, rich formatting & categories
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3 text-xs">
          {/* Category Manager Trigger */}
          <button
            type="button"
            onClick={() => setIsCategoryModalOpen(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-purple/30 bg-purple/10 text-purple font-semibold hover:bg-purple/20 transition-colors cursor-pointer text-xs"
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Manage Categories</span>
            <span className="bg-purple text-white px-1.5 py-0.2 rounded-full text-[10px] font-bold">
              {categories.length}
            </span>
          </button>

          {/* View Public Blogs Link */}
          <a
            href="/blogs"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-card-border bg-card/60 text-navy-muted hover:text-navy hover:bg-card transition-colors cursor-pointer text-xs"
          >
            <span>Live Site</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          {/* Theme Toggler Button */}
          <button
            type="button"
            onClick={() => setIsDark(!isDark)}
            className={`p-2 rounded-lg border transition-colors cursor-pointer ${
              isDark 
                ? 'bg-[#010814]/60 border-card-border text-amber-300 hover:text-amber-200' 
                : 'bg-white border-slate-300 text-slate-700 hover:text-slate-900'
            }`}
            title="Toggle Dashboard Theme"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Logout Button */}
          <button
            type="button"
            onClick={handleLogout}
            className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-rose-500/30 text-rose-400 hover:bg-rose-500/10 transition-colors cursor-pointer font-semibold text-xs"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Sign Out</span>
          </button>
        </div>
      </header>

      {/* Main Workspace split */}
      <div className="flex flex-grow overflow-hidden relative">
        
        {/* Left Sidebar: Articles & Filter Navigator */}
        <aside className={`w-80 sm:w-96 ${sidebarTheme} border-r flex flex-col shrink-0 overflow-hidden transition-colors duration-300`}>
          
          <div className="p-4 border-b border-card-border flex flex-col gap-3 shrink-0">
            <button
              onClick={startNewPost}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple via-purple to-purple-hover text-white py-2.5 px-4 rounded-xl font-bold text-xs shadow-md hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>Write New Article</span>
            </button>

            {/* Search Input */}
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search articles..."
                value={sidebarSearch}
                onChange={(e) => setSidebarSearch(e.target.value)}
                className={`w-full pl-9 pr-3 py-1.5 text-xs rounded-lg border focus:outline-none transition-colors ${inputTheme}`}
              />
            </div>

            {/* Category Filter Pills in Sidebar */}
            <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none text-[11px]">
              <button
                onClick={() => setSidebarCategoryFilter('all')}
                className={`px-2.5 py-1 rounded-md font-bold whitespace-nowrap transition-colors cursor-pointer ${
                  sidebarCategoryFilter === 'all'
                    ? 'bg-purple text-white'
                    : 'bg-card/60 text-slate-400 hover:text-slate-200'
                }`}
              >
                All ({posts.length})
              </button>
              {categories.map(cat => {
                const count = posts.filter(p => p.category === cat).length;
                return (
                  <button
                    key={cat}
                    onClick={() => setSidebarCategoryFilter(cat)}
                    className={`px-2.5 py-1 rounded-md font-bold whitespace-nowrap transition-colors cursor-pointer ${
                      sidebarCategoryFilter === cat
                        ? 'bg-purple text-white'
                        : 'bg-card/60 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {cat} ({count})
                  </button>
                );
              })}
            </div>
          </div>

          {/* List of Blog Posts */}
          <div className="flex-grow overflow-y-auto p-3 flex flex-col gap-2">
            {filteredSidebarPosts.length > 0 ? (
              filteredSidebarPosts.map(post => {
                const isSelected = selectedPost?.id === post.id && !isCreatingNew;
                return (
                  <div
                    key={post.id}
                    onClick={() => selectPostToEdit(post)}
                    className={`p-3.5 rounded-xl border transition-all cursor-pointer text-left flex flex-col gap-1.5 ${
                      isSelected
                        ? 'bg-purple/15 border-purple shadow-sm'
                        : isDark
                          ? 'bg-[#010814]/30 border-card-border/60 hover:bg-[#010814]/60 hover:border-card-border'
                          : 'bg-white border-slate-200 hover:bg-slate-50 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between text-[10px] font-bold">
                      <span className="text-purple bg-purple/15 px-2 py-0.5 rounded-md">
                        {post.category}
                      </span>
                      <span className="text-slate-400">{post.readTime}</span>
                    </div>

                    <h3 className={`text-xs font-bold line-clamp-2 leading-snug ${
                      isSelected ? 'text-purple-300' : isDark ? 'text-slate-200' : 'text-slate-800'
                    }`}>
                      {post.title}
                    </h3>

                    <span className="text-[10px] text-slate-400 truncate">
                      By {post.author}
                    </span>
                  </div>
                );
              })
            ) : (
              <div className="p-8 text-center text-xs text-slate-400 flex flex-col items-center gap-2">
                <FileText className="w-8 h-8 opacity-30" />
                <span>No articles found</span>
              </div>
            )}
          </div>
        </aside>

        {/* Right Area: Form & Editor Workspace */}
        <main className="flex-grow flex flex-col overflow-hidden bg-card/10">
          
          {!selectedPost && !isCreatingNew ? (
            <div className="flex-grow flex flex-col items-center justify-center p-8 text-center text-slate-400 gap-4">
              <div className="p-4 bg-purple/10 rounded-full border border-purple/20">
                <FileText className="w-12 h-12 text-purple" />
              </div>
              <div className="max-w-md flex flex-col gap-1.5">
                <h2 className="text-lg font-bold text-navy dark:text-white">Select an Article or Start a New One</h2>
                <p className="text-xs text-navy-muted">
                  Choose a published article from the sidebar to edit its text, or click &ldquo;Write New Article&rdquo; to publish a fresh guide.
                </p>
              </div>
              <button
                onClick={startNewPost}
                className="mt-2 flex items-center gap-2 bg-purple text-white py-2.5 px-5 rounded-xl font-bold text-xs shadow-md hover:bg-purple-hover cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>Create New Post</span>
              </button>
            </div>
          ) : (
            <form onSubmit={handleSave} className="flex-grow flex flex-col overflow-hidden">
              
              {/* Editor Top Bar with Tabs and Action buttons */}
              <div className={`${editorHeaderTheme} border-b px-6 py-2.5 flex justify-between items-center shrink-0 transition-colors duration-300 flex-wrap gap-2`}>
                
                {/* View Mode Toggle Buttons */}
                <div className="flex gap-1.5 bg-card/60 p-1 rounded-xl border border-card-border">
                  <button
                    type="button"
                    onClick={() => setActiveTab('edit')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                      activeTab === 'edit'
                        ? 'bg-purple text-white shadow-sm'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Edit2 className="w-3.5 h-3.5" />
                    <span>Write</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('preview')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                      activeTab === 'preview'
                        ? 'bg-purple text-white shadow-sm'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Preview</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('split')}
                    className={`hidden xl:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                      activeTab === 'split'
                        ? 'bg-purple text-white shadow-sm'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Columns className="w-3.5 h-3.5" />
                    <span>Split View</span>
                  </button>
                </div>

                {/* Right Action buttons */}
                <div className="flex items-center gap-2">
                  <span className="text-[11px] text-slate-400 font-semibold hidden md:inline mr-2">
                    {selectedPost ? `Editing ID: #${selectedPost.id}` : "✨ New Article"}
                  </span>

                  {/* Delete Button */}
                  {selectedPost && (
                    <button
                      type="button"
                      onClick={handleDelete}
                      disabled={saveStatus.type === 'loading'}
                      className="flex items-center gap-1.5 px-3 py-2 border border-rose-500/40 hover:bg-rose-500/10 text-rose-400 text-xs font-bold rounded-xl transition-colors cursor-pointer disabled:opacity-50"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Delete</span>
                    </button>
                  )}

                  {/* Publish Save Button */}
                  <button
                    type="submit"
                    disabled={saveStatus.type === 'loading'}
                    className="flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-purple via-purple to-purple-hover text-white text-xs font-bold rounded-xl transition-all cursor-pointer shadow-md hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
                  >
                    <Save className="w-4 h-4" />
                    <span>{saveStatus.type === 'loading' ? 'Publishing...' : 'Publish Article'}</span>
                  </button>
                </div>
              </div>

              {/* Status Alert Banner */}
              {saveStatus.type && (
                <div className={`px-6 py-2.5 border-b text-xs flex items-center justify-between shrink-0 animate-fade-in ${
                  saveStatus.type === 'success' ? 'bg-emerald-950/40 text-emerald-300 border-emerald-800' :
                  saveStatus.type === 'loading' ? 'bg-indigo-950/40 text-indigo-300 border-indigo-800' :
                  'bg-rose-950/40 text-rose-300 border-rose-800'
                }`}>
                  <div className="flex items-center gap-2">
                    {saveStatus.type === 'success' && <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />}
                    {saveStatus.type === 'error' && <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0" />}
                    <span className="font-semibold">{saveStatus.message}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSaveStatus({ type: null, message: '' })}
                    className="p-1 hover:bg-white/10 rounded"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}

              {/* Editor Workspace Content */}
              <div className="flex-grow overflow-y-auto p-4 sm:p-6">
                
                {activeTab === 'edit' && (
                  <div className="max-w-4xl mx-auto flex flex-col gap-5">
                    
                    {/* Title */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[11px] font-bold uppercase tracking-wider text-purple">
                        Blog Title <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 10 Essential Tips to Score 8+ Band in IELTS Writing..."
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className={`w-full px-4 py-3 border rounded-xl text-base font-semibold focus:outline-none transition-colors ${inputTheme}`}
                        required
                      />
                    </div>

                    {/* Metadata Split Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      
                      {/* Category select with inline Add button */}
                      <div className="flex flex-col gap-1.5">
                        <div className="flex justify-between items-center">
                          <label className="text-[11px] font-bold uppercase tracking-wider text-purple">Category</label>
                          <button
                            type="button"
                            onClick={() => setIsCategoryModalOpen(true)}
                            className="text-[10px] text-purple hover:underline font-bold flex items-center gap-0.5 cursor-pointer"
                          >
                            <Plus className="w-3 h-3" /> Add Category
                          </button>
                        </div>
                        <select
                          value={category}
                          onChange={(e) => setCategory(e.target.value)}
                          className={`w-full px-3.5 py-2.5 border rounded-xl text-xs focus:outline-none transition-colors cursor-pointer ${inputTheme}`}
                        >
                          {categories.map((cat) => (
                            <option key={cat} value={cat} className="bg-card text-navy">
                              {cat}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Author */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[11px] font-bold uppercase tracking-wider text-purple">Author</label>
                        <input
                          type="text"
                          value={author}
                          onChange={(e) => setAuthor(e.target.value)}
                          className={`w-full px-3.5 py-2.5 border rounded-xl text-xs focus:outline-none transition-colors ${inputTheme}`}
                          required
                        />
                      </div>

                      {/* Read Time */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[11px] font-bold uppercase tracking-wider text-purple">Estimated Read Time</label>
                        <input
                          type="text"
                          value={readTime}
                          onChange={(e) => setReadTime(e.target.value)}
                          className={`w-full px-3.5 py-2.5 border rounded-xl text-xs focus:outline-none transition-colors ${inputTheme}`}
                          required
                        />
                      </div>

                    </div>

                    {/* Card Excerpt */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[11px] font-bold uppercase tracking-wider text-purple">
                        Card Summary Excerpt <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        rows={2}
                        placeholder="Write a brief, high-impact summary that appears on the blog cards and previews..."
                        value={excerpt}
                        onChange={(e) => setExcerpt(e.target.value)}
                        className={`w-full px-4 py-2.5 border rounded-xl text-xs focus:outline-none transition-colors resize-none leading-relaxed ${inputTheme}`}
                        required
                      />
                    </div>

                    {/* Dedicated Rich Text Writing Box */}
                    <div className="flex flex-col gap-1.5">
                      <div className="flex justify-between items-center">
                        <label className="text-[11px] font-bold uppercase tracking-wider text-purple">
                          Article Content & Formatting <span className="text-red-500">*</span>
                        </label>
                        <span className="text-[10px] text-slate-400 font-medium">
                          Supports Markdown (Bold, Italics, Headings, Dividers)
                        </span>
                      </div>

                      {/* Dedicated Rich Text Toolbar */}
                      <div className={`p-1.5 border rounded-t-xl flex flex-wrap items-center gap-1 ${toolbarTheme}`}>
                        
                        {/* Bold */}
                        <button
                          type="button"
                          onClick={() => insertFormatting('**', '**', 'bold text')}
                          className="p-1.5 rounded-lg hover:bg-card/80 text-navy-muted hover:text-navy transition-colors cursor-pointer"
                          title="Bold (Ctrl+B)"
                        >
                          <Bold className="w-4 h-4" />
                        </button>

                        {/* Italic */}
                        <button
                          type="button"
                          onClick={() => insertFormatting('*', '*', 'italic text')}
                          className="p-1.5 rounded-lg hover:bg-card/80 text-navy-muted hover:text-navy transition-colors cursor-pointer"
                          title="Italic (Ctrl+I)"
                        >
                          <Italic className="w-4 h-4" />
                        </button>

                        <div className="w-px h-4 bg-card-border mx-1" />

                        {/* Heading 2 */}
                        <button
                          type="button"
                          onClick={() => insertBlock('## Big Section Heading')}
                          className="px-2 py-1 rounded-lg hover:bg-card/80 text-navy-muted hover:text-navy transition-colors cursor-pointer text-xs font-bold"
                          title="Heading 2 (Big in size)"
                        >
                          H2
                        </button>

                        {/* Heading 3 */}
                        <button
                          type="button"
                          onClick={() => insertBlock('### Sub-Section Heading')}
                          className="px-2 py-1 rounded-lg hover:bg-card/80 text-navy-muted hover:text-navy transition-colors cursor-pointer text-xs font-bold"
                          title="Heading 3 (Medium Header)"
                        >
                          H3
                        </button>

                        <div className="w-px h-4 bg-card-border mx-1" />

                        {/* Horizontal Line Separation */}
                        <button
                          type="button"
                          onClick={() => insertBlock('---')}
                          className="flex items-center gap-1 px-2 py-1 rounded-lg hover:bg-card/80 text-navy-muted hover:text-navy transition-colors cursor-pointer text-xs font-semibold"
                          title="Insert Line Separation (Divider)"
                        >
                          <Minus className="w-4 h-4" />
                          <span>Line Divider</span>
                        </button>

                        <div className="w-px h-4 bg-card-border mx-1" />

                        {/* Bullet List */}
                        <button
                          type="button"
                          onClick={() => insertBlock('- First bullet item\n- Second bullet item\n- Third bullet item')}
                          className="p-1.5 rounded-lg hover:bg-card/80 text-navy-muted hover:text-navy transition-colors cursor-pointer"
                          title="Bullet List"
                        >
                          <List className="w-4 h-4" />
                        </button>

                        {/* Numbered List */}
                        <button
                          type="button"
                          onClick={() => insertBlock('1. First step\n2. Second step\n3. Third step')}
                          className="p-1.5 rounded-lg hover:bg-card/80 text-navy-muted hover:text-navy transition-colors cursor-pointer"
                          title="Numbered List"
                        >
                          <ListOrdered className="w-4 h-4" />
                        </button>

                        {/* Structured Box / Step Card */}
                        <button
                          type="button"
                          onClick={() => insertBlock('1. Core Strategy: Detail the actionable study advice or tip here...')}
                          className="flex items-center gap-1 px-2 py-1 rounded-lg hover:bg-card/80 text-navy-muted hover:text-navy transition-colors cursor-pointer text-xs font-semibold"
                          title="Insert Highlight Step Box"
                        >
                          <Sparkles className="w-3.5 h-3.5 text-purple" />
                          <span>Feature Box</span>
                        </button>

                        <div className="w-px h-4 bg-card-border mx-1" />

                        {/* Quote */}
                        <button
                          type="button"
                          onClick={() => insertBlock('> "Quote or expert advice here..."')}
                          className="p-1.5 rounded-lg hover:bg-card/80 text-navy-muted hover:text-navy transition-colors cursor-pointer"
                          title="Blockquote"
                        >
                          <Quote className="w-4 h-4" />
                        </button>

                        {/* Link */}
                        <button
                          type="button"
                          onClick={() => insertFormatting('[', '](https://tglalearning.com/courses)', 'Link text')}
                          className="p-1.5 rounded-lg hover:bg-card/80 text-navy-muted hover:text-navy transition-colors cursor-pointer"
                          title="Insert Web Link"
                        >
                          <LinkIcon className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Textarea */}
                      <textarea
                        ref={textareaRef}
                        rows={16}
                        placeholder="Compose your article body here... Use the toolbar above to make text bold, italic, add big headings, or insert line dividers."
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className={`w-full px-4 py-4 border border-t-0 rounded-b-xl text-sm focus:outline-none transition-colors font-mono leading-relaxed resize-y ${inputTheme}`}
                        required
                      />
                    </div>

                  </div>
                )}

                {/* Single Tab: Live Preview */}
                {activeTab === 'preview' && (
                  <div className="max-w-3xl mx-auto bg-card border border-card-border text-navy p-8 sm:p-10 rounded-2xl shadow-xl">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple pb-3 border-b border-card-border mb-6">
                      <span className="bg-purple/10 px-2.5 py-0.5 rounded-full border border-purple/20">{category}</span>
                      <span>•</span>
                      <span>{readTime || '5 min read'}</span>
                      <span>•</span>
                      <span>By {author || 'Academy Faculty'}</span>
                    </div>

                    <h1 className="text-2xl sm:text-3xl font-extrabold font-display leading-tight text-navy mb-6">
                      {title || 'Untitled Article'}
                    </h1>

                    <BlogContentRenderer content={body} />
                  </div>
                )}

                {/* Split View: Write on Left, Real-time Preview on Right */}
                {activeTab === 'split' && (
                  <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 h-full items-start">
                    
                    {/* Left side editor */}
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-col gap-1">
                        <label className="text-[11px] font-bold uppercase text-purple">Title</label>
                        <input
                          type="text"
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                          className={`w-full px-3 py-2 text-sm font-semibold border rounded-lg ${inputTheme}`}
                          placeholder="Article title..."
                        />
                      </div>

                      {/* Toolbar */}
                      <div className={`p-1.5 border rounded-t-xl flex flex-wrap items-center gap-1 ${toolbarTheme}`}>
                        <button
                          type="button"
                          onClick={() => insertFormatting('**', '**', 'bold text')}
                          className="p-1 rounded hover:bg-card text-xs font-bold px-2"
                        >
                          B
                        </button>
                        <button
                          type="button"
                          onClick={() => insertFormatting('*', '*', 'italic text')}
                          className="p-1 rounded hover:bg-card text-xs italic px-2"
                        >
                          I
                        </button>
                        <button
                          type="button"
                          onClick={() => insertBlock('## Big Section Heading')}
                          className="p-1 rounded hover:bg-card text-xs font-bold px-2"
                        >
                          H2
                        </button>
                        <button
                          type="button"
                          onClick={() => insertBlock('### Sub-Section Heading')}
                          className="p-1 rounded hover:bg-card text-xs font-bold px-2"
                        >
                          H3
                        </button>
                        <button
                          type="button"
                          onClick={() => insertBlock('---')}
                          className="p-1 rounded hover:bg-card text-xs px-2"
                        >
                          Line Divider
                        </button>
                        <button
                          type="button"
                          onClick={() => insertBlock('- Bullet point')}
                          className="p-1 rounded hover:bg-card text-xs px-2"
                        >
                          • List
                        </button>
                        <button
                          type="button"
                          onClick={() => insertBlock('1. Core Strategy: Description here...')}
                          className="p-1 rounded hover:bg-card text-xs px-2 text-purple font-semibold"
                        >
                          ✨ Feature Box
                        </button>
                      </div>

                      <textarea
                        ref={textareaRef}
                        rows={18}
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Type content here..."
                        className={`w-full p-4 border border-t-0 rounded-b-xl text-sm font-mono leading-relaxed ${inputTheme}`}
                      />
                    </div>

                    {/* Right side real-time live preview */}
                    <div className="bg-card border border-card-border p-6 sm:p-8 rounded-2xl shadow-xl overflow-y-auto max-h-[80vh]">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-purple block mb-2">
                        {category} • {readTime || '5 min read'}
                      </span>
                      <h2 className="text-xl sm:text-2xl font-bold font-display text-navy mb-4">
                        {title || 'Article Title Preview'}
                      </h2>
                      <BlogContentRenderer content={body} />
                    </div>

                  </div>
                )}

              </div>
            </form>
          )}
        </main>

      </div>

      {/* CATEGORY MANAGER MODAL */}
      {isCategoryModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className={`w-full max-w-lg ${isDark ? 'bg-[#010814] border-card-border text-white' : 'bg-white border-slate-200 text-slate-800'} border rounded-2xl shadow-2xl p-6 sm:p-7 flex flex-col gap-5 relative animate-scale-up`}>
            
            {/* Modal Header */}
            <div className="flex justify-between items-center pb-3 border-b border-card-border">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-xl bg-purple/15 text-purple">
                  <Tag className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold">Category Management</h3>
                  <p className="text-xs text-slate-400">Add or delete blog categories across the website.</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => {
                  setIsCategoryModalOpen(false);
                  setCategoryModalError('');
                  setCategoryModalSuccess('');
                }}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-card/60 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Success & Error alerts */}
            {categoryModalSuccess && (
              <div className="p-2.5 bg-emerald-950/40 text-emerald-300 border border-emerald-800 rounded-lg text-xs flex items-center gap-2">
                <CheckCircle className="w-4 h-4 shrink-0 text-emerald-400" />
                <span>{categoryModalSuccess}</span>
              </div>
            )}
            {categoryModalError && (
              <div className="p-2.5 bg-rose-950/40 text-rose-300 border border-rose-800 rounded-lg text-xs flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 shrink-0 text-rose-400" />
                <span>{categoryModalError}</span>
              </div>
            )}

            {/* Add New Category Form */}
            <form onSubmit={handleAddCategory} className="flex gap-2">
              <input
                type="text"
                placeholder="Enter new category (e.g. French, TEF, Visa Guidance)..."
                value={newCategoryName}
                onChange={(e) => setNewCategoryName(e.target.value)}
                className={`flex-grow px-3.5 py-2 text-xs rounded-xl border focus:outline-none ${inputTheme}`}
              />
              <button
                type="submit"
                className="px-4 py-2 bg-purple text-white text-xs font-bold rounded-xl hover:bg-purple-hover cursor-pointer shrink-0 flex items-center gap-1 shadow-sm"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Category</span>
              </button>
            </form>

            {/* Existing Categories List */}
            <div className="flex flex-col gap-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-purple">
                Active Categories ({categories.length})
              </span>
              <div className="max-h-60 overflow-y-auto flex flex-col gap-1.5 pr-1">
                {categories.map((cat) => {
                  const postsCount = posts.filter(p => p.category === cat).length;
                  return (
                    <div
                      key={cat}
                      className={`flex justify-between items-center px-3.5 py-2 rounded-xl border transition-colors ${
                        isDark ? 'bg-[#010a18] border-card-border' : 'bg-slate-50 border-slate-200'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold">{cat}</span>
                        <span className="text-[10px] text-slate-400 bg-card px-2 py-0.5 rounded-full border border-card-border">
                          {postsCount} {postsCount === 1 ? 'article' : 'articles'}
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleDeleteCategory(cat)}
                        className="p-1 rounded-md text-rose-400 hover:bg-rose-500/10 hover:text-rose-300 transition-colors cursor-pointer"
                        title={`Delete category "${cat}"`}
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="pt-2 border-t border-card-border flex justify-end">
              <button
                type="button"
                onClick={() => {
                  setIsCategoryModalOpen(false);
                  setCategoryModalError('');
                  setCategoryModalSuccess('');
                }}
                className="px-4 py-2 bg-card border border-card-border text-navy-muted hover:text-navy text-xs font-bold rounded-xl cursor-pointer"
              >
                Done
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
