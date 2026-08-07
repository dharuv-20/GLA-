"use client";

import { useState, useEffect } from 'react';
import { User, LogOut, FileText, Plus, Save, Eye, Edit2, CheckCircle, AlertTriangle, Trash2, Sun, Moon } from 'lucide-react';
import { BlogPost } from '@/types';

interface AdminDashboardProps {
  initialPosts: BlogPost[];
}

export default function AdminDashboard({ initialPosts }: AdminDashboardProps) {
  const [posts, setPosts] = useState<BlogPost[]>(initialPosts);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [isCreatingNew, setIsCreatingNew] = useState(false);
  
  // Form fields
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState<'IELTS' | 'PTE' | 'German' | 'Career'>('IELTS');
  const [author, setAuthor] = useState('');
  const [readTime, setReadTime] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [body, setBody] = useState('');

  // UI state
  const [activeTab, setActiveTab] = useState<'edit' | 'preview'>('edit');
  const [user, setUser] = useState<any>(null);
  const [isIdentityLoaded, setIsIdentityLoaded] = useState(false);
  const [isDark, setIsDark] = useState(true); // Defaults to brand dark mode
  const [saveStatus, setSaveStatus] = useState<{ type: 'success' | 'error' | 'loading' | null; message: string }>({ type: null, message: '' });

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

    // If script is already loaded, initialize immediately
    if ((window as any).netlifyIdentity) {
      initIdentity();
    } else {
      // Otherwise, load script dynamically and initialize on load to prevent race conditions
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
  };

  // Helper to slugify titles for files (e.g. "Learn German!" -> "learn-german")
  const getSlug = (t: string) => {
    return t
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '') // remove special characters
      .replace(/[\s_-]+/g, '-') // replace spaces/underscores with single hyphen
      .replace(/^-+|-+$/g, ''); // remove leading/trailing hyphens
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
    setCategory('IELTS');
    setAuthor('Faculty Mentor');
    setReadTime('5 min read');
    setExcerpt('');
    setBody('');
    setActiveTab('edit');
    setSaveStatus({ type: null, message: '' });
  };

  // Publish / Save pipeline
  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !body.trim()) {
      setSaveStatus({ type: 'error', message: 'Please fill out the title and content fields.' });
      return;
    }

    setSaveStatus({ type: 'loading', message: 'Publishing and saving changes...' });

    // Calculate automatic ID if creating a new post
    let postID = selectedPost ? selectedPost.id : Math.max(...posts.map(p => p.id), 0) + 1;
    const slug = getSlug(title);

    const postPayload: BlogPost = {
      id: postID,
      title,
      category,
      author,
      readTime,
      excerpt,
      body
    };

    const isLocalhost = typeof window !== 'undefined' && 
      (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1');

    if (isLocalhost) {
      // --- DEVELOPMENT: Save directly to the local filesystem using Next.js API route ---
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
      // --- PRODUCTION: Save to GitHub using Netlify Git Gateway API ---
      if (!user) {
        setSaveStatus({ type: 'error', message: 'Authentication error. Please re-login.' });
        return;
      }

      try {
        const token = user.token.access_token;
        const gatewayUrl = `/.netlify/git/github/contents/src/content/blogs/${slug}.json`;

        // 1. Check if the file already exists on GitHub to acquire its commit SHA (required for file updates)
        let sha: string | null = null;
        const checkResponse = await fetch(gatewayUrl, {
          headers: { Authorization: `Bearer ${token}` }
        });

        if (checkResponse.ok) {
          const fileData = await checkResponse.json();
          sha = fileData.sha;
        }

        // 2. Perform the write commit
        const commitMessage = selectedPost 
          ? `cms: update blog post "${title}"`
          : `cms: create blog post "${title}"`;

        // Safely encode Unicode contents into base64
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
    const slug = getSlug(selectedPost.title);

    const isLocalhost = typeof window !== 'undefined' && 
      (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1');

    if (isLocalhost) {
      // --- DEVELOPMENT: Delete file from local filesystem ---
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
      // --- PRODUCTION: Delete file from GitHub repository ---
      if (!user) {
        setSaveStatus({ type: 'error', message: 'Authentication required.' });
        return;
      }

      try {
        const token = user.token.access_token;
        const gatewayUrl = `/.netlify/git/github/contents/src/content/blogs/${slug}.json`;

        // 1. Get the commit SHA first
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

        // 2. Commit the deletion request
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

  // Theme styling variables mapping
  const containerTheme = isDark ? 'bg-[#00122E] text-white' : 'bg-slate-50 text-slate-800';
  const headerTheme = isDark ? 'bg-[#010814]/80 border-card-border' : 'bg-white border-slate-200';
  const sidebarTheme = isDark ? 'bg-[#010814]/30 border-card-border' : 'bg-slate-100/50 border-slate-200';
  const inputTheme = isDark ? 'bg-[#010814]/60 border-slate-700 text-white focus:border-purple' : 'bg-white border-slate-300 text-slate-900 focus:border-purple';
  const editorHeaderTheme = isDark ? 'bg-[#010814]/40 border-card-border' : 'bg-slate-50 border-slate-200';

  // --- RENDER LOGIN VIEW ---
  if (!user) {
    return (
      <div className={`min-h-screen ${containerTheme} flex items-center justify-center p-6 relative overflow-hidden transition-colors duration-300`}>
        {/* Soft background light spots */}
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-purple/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple/10 rounded-full blur-3xl" />

        <div className={`${isDark ? 'bg-[#010814]/60 border-card-border' : 'bg-white border-slate-200 shadow-xl'} backdrop-blur-md border p-8 rounded-2xl w-full max-w-md flex flex-col gap-6 relative z-10 transition-colors duration-300`}>
          <div className="flex flex-col gap-2 text-center">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-purple">Global Language Academy</span>
            <h1 className={`text-2xl font-extrabold tracking-tight font-display ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Academy Control Center
            </h1>
            <p className="text-xs text-slate-400">
              Please sign in to publish courses, articles, and workshops.
            </p>
          </div>

          <button
            onClick={handleLogin}
            disabled={!isIdentityLoaded}
            className="w-full py-3 bg-purple hover:bg-purple-hover text-white text-xs font-bold rounded-lg transition-all duration-200 cursor-pointer shadow-md disabled:opacity-50"
          >
            {isIdentityLoaded ? "Sign In with Netlify" : "Loading Credentials..."}
          </button>
        </div>
      </div>
    );
  }

  // --- RENDER DASHBOARD VIEW ---
  return (
    <div className={`min-h-screen ${containerTheme} flex flex-col font-sans transition-colors duration-300`}>
      
      {/* Top Banner Control Header */}
      <header className={`${headerTheme} border-b px-6 py-4 flex justify-between items-center shrink-0 sticky top-0 z-20 backdrop-blur-md transition-colors duration-300`}>
        <div className="flex items-center gap-3">
          <span className="bg-purple/20 p-2 rounded-lg border border-purple/30">
            <FileText className="w-5 h-5 text-purple" />
          </span>
          <div className="flex flex-col">
            <h1 className={`text-sm font-bold tracking-wide ${isDark ? 'text-white' : 'text-slate-900'}`}>TGLA Control Panel</h1>
            <span className="text-[10px] text-slate-400">Manage site blog publications</span>
          </div>
        </div>

        <div className="flex items-center gap-3 text-xs">
          <span className="hidden lg:inline text-slate-400 font-medium mr-2">
            Active User: <span className={isDark ? 'text-white font-semibold' : 'text-slate-800 font-semibold'}>{user.email}</span>
          </span>

          {/* Theme Toggler Button */}
          <button
            type="button"
            onClick={() => setIsDark(!isDark)}
            aria-label="Toggle theme"
            className={`p-2 rounded-lg border transition-colors cursor-pointer ${
              isDark 
                ? 'border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white' 
                : 'border-slate-300 text-slate-600 hover:bg-slate-100 hover:text-slate-900'
            }`}
          >
            {isDark ? <Sun className="w-4.5 h-4.5" /> : <Moon className="w-4.5 h-4.5" />}
          </button>

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className={`flex items-center gap-1.5 px-3.5 py-2 border rounded-lg transition-colors cursor-pointer text-xs ${
              isDark
                ? 'border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white'
                : 'border-slate-300 text-slate-600 hover:bg-slate-100 hover:text-slate-900'
            }`}
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      </header>

      {/* Main Panel Content Splitter */}
      <div className="flex-grow flex flex-col md:flex-row overflow-hidden">
        
        {/* Left Column: Post Sidebar list */}
        <aside className={`w-full md:w-80 border-b md:border-b-0 md:border-r ${sidebarTheme} flex flex-col shrink-0 transition-colors duration-300`}>
          <div className="p-4 border-b border-card-border flex justify-between items-center gap-3">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-purple">Articles ({posts.length})</span>
            <button
              onClick={startNewPost}
              className="flex items-center gap-1 px-3 py-1.5 bg-purple hover:bg-purple-hover text-white text-[10px] font-extrabold uppercase tracking-wider rounded-md transition-colors cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
              New Blog
            </button>
          </div>

          <div className="flex-grow overflow-y-auto p-3 flex flex-col gap-2 max-h-[300px] md:max-h-none">
            {posts.map((post) => (
              <button
                key={post.id}
                onClick={() => selectPostToEdit(post)}
                className={`w-full text-left p-3.5 rounded-xl border transition-all duration-200 flex flex-col gap-2 cursor-pointer ${
                  selectedPost?.id === post.id
                    ? 'bg-purple/20 border-purple text-white shadow-inner'
                    : isDark 
                      ? 'bg-[#010814]/40 border-card-border hover:bg-[#010814]/90 text-slate-300'
                      : 'bg-white border-slate-200 hover:bg-slate-50 text-slate-700 shadow-sm'
                }`}
              >
                <div className="flex justify-between items-start gap-2">
                  <span className="px-2 py-0.5 bg-purple/10 text-purple border border-purple/20 rounded text-[9px] font-extrabold uppercase tracking-wider">
                    {post.category}
                  </span>
                  <span className="text-[9px] text-slate-400 font-bold">ID: {post.id}</span>
                </div>
                <h3 className={`text-xs font-bold line-clamp-1 leading-snug ${isDark ? 'text-white' : 'text-slate-900'}`}>{post.title}</h3>
                <p className="text-[10px] text-slate-400 line-clamp-2 leading-relaxed">{post.excerpt}</p>
              </button>
            ))}
          </div>
        </aside>

        {/* Right Column: Editor Workspace form */}
        <main className="flex-grow flex flex-col overflow-hidden">
          {(!selectedPost && !isCreatingNew) ? (
            <div className="flex-grow flex flex-col items-center justify-center p-8 text-center gap-3">
              <FileText className="w-12 h-12 text-slate-500 animate-pulse" />
              <h2 className={`text-base font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>No article selected</h2>
              <p className="text-xs text-slate-400 max-w-xs">
                Select an existing article from the left sidebar to edit, or click the "+ New Blog" button to compose a new entry.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSave} className="flex-grow flex flex-col overflow-hidden">
              
              {/* Form Tab toggle controls */}
              <div className={`${editorHeaderTheme} border-b px-6 py-2 flex justify-between items-center shrink-0 transition-colors duration-300`}>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setActiveTab('edit')}
                    className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                      activeTab === 'edit'
                        ? 'bg-purple/20 text-purple border border-purple/30'
                        : 'text-slate-400 hover:text-slate-600'
                    }`}
                  >
                    <Edit2 className="w-4 h-4" />
                    Write Content
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('preview')}
                    className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                      activeTab === 'preview'
                        ? 'bg-purple/20 text-purple border border-purple/30'
                        : 'text-slate-400 hover:text-slate-600'
                    }`}
                  >
                    <Eye className="w-4 h-4" />
                    Live Preview
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-slate-400 font-semibold hidden sm:inline mr-2">
                    {selectedPost ? `Editing ID: ${selectedPost.id}` : "New Post (Auto-assign ID)"}
                  </span>

                  {/* Delete Button (Visible only when editing an existing post) */}
                  {selectedPost && (
                    <button
                      type="button"
                      onClick={handleDelete}
                      disabled={saveStatus.type === 'loading'}
                      className="flex items-center gap-1.5 px-3 py-2 border border-rose-500 hover:bg-rose-500/10 text-rose-500 text-xs font-bold rounded-lg transition-colors cursor-pointer disabled:opacity-50"
                    >
                      <Trash2 className="w-4 h-4" />
                      Delete Post
                    </button>
                  )}

                  {/* Publish Save Button */}
                  <button
                    type="submit"
                    disabled={saveStatus.type === 'loading'}
                    className="flex items-center gap-1.5 px-4 py-2 bg-purple hover:bg-purple-hover text-white text-xs font-bold rounded-lg transition-colors cursor-pointer shadow-md disabled:opacity-50"
                  >
                    <Save className="w-4 h-4" />
                    {saveStatus.type === 'loading' ? 'Publishing...' : 'Publish Post'}
                  </button>
                </div>
              </div>

              {/* Status Alert Panels */}
              {saveStatus.type && (
                <div className={`px-6 py-3.5 border-b text-xs flex items-center gap-2 shrink-0 ${
                  saveStatus.type === 'success' ? 'bg-emerald-950/40 text-emerald-300 border-emerald-800' :
                  saveStatus.type === 'loading' ? 'bg-indigo-950/40 text-indigo-300 border-indigo-800' :
                  'bg-rose-950/40 text-rose-300 border-rose-800'
                }`}>
                  {saveStatus.type === 'success' && <CheckCircle className="w-4 h-4 text-emerald-400" />}
                  {saveStatus.type === 'error' && <AlertTriangle className="w-4 h-4 text-rose-400" />}
                  <span className="font-semibold">{saveStatus.message}</span>
                </div>
              )}

              {/* Workspace Scroll Containers */}
              <div className="flex-grow overflow-y-auto p-6">
                
                {activeTab === 'edit' ? (
                  <div className="max-w-4xl mx-auto flex flex-col gap-6">
                    
                    {/* Title Grid */}
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-extrabold uppercase tracking-widest text-purple">Blog Title</label>
                      <input
                        type="text"
                        placeholder="e.g. 10 Essential Tips to Score 8+ Band in IELTS Writing..."
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className={`w-full px-4 py-3 border rounded-xl text-sm focus:outline-none transition-colors ${inputTheme}`}
                        required
                      />
                    </div>

                    {/* Metadata Split Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      
                      {/* Category select dropdown */}
                      <div className="flex flex-col gap-2">
                        <label className="text-[10px] font-extrabold uppercase tracking-widest text-purple">Category</label>
                        <select
                          value={category}
                          onChange={(e) => setCategory(e.target.value as any)}
                          className={`w-full px-4 py-3 border rounded-xl text-xs focus:outline-none transition-colors cursor-pointer ${inputTheme}`}
                        >
                          <option value="IELTS">IELTS</option>
                          <option value="PTE">PTE</option>
                          <option value="German">German</option>
                          <option value="Career">Career</option>
                        </select>
                      </div>

                      {/* Author */}
                      <div className="flex flex-col gap-2">
                        <label className="text-[10px] font-extrabold uppercase tracking-widest text-purple">Author</label>
                        <input
                          type="text"
                          value={author}
                          onChange={(e) => setAuthor(e.target.value)}
                          className={`w-full px-4 py-3 border rounded-xl text-xs focus:outline-none transition-colors ${inputTheme}`}
                          required
                        />
                      </div>

                      {/* Read Time */}
                      <div className="flex flex-col gap-2">
                        <label className="text-[10px] font-extrabold uppercase tracking-widest text-purple">Read Time</label>
                        <input
                          type="text"
                          value={readTime}
                          onChange={(e) => setReadTime(e.target.value)}
                          className={`w-full px-4 py-3 border rounded-xl text-xs focus:outline-none transition-colors ${inputTheme}`}
                          required
                        />
                      </div>

                    </div>

                    {/* Excerpt */}
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-extrabold uppercase tracking-widest text-purple">Card Summary Excerpt</label>
                      <textarea
                        rows={2}
                        placeholder="Write a brief, high-impact summary that will appear on the blog list card..."
                        value={excerpt}
                        onChange={(e) => setExcerpt(e.target.value)}
                        className={`w-full px-4 py-3 border rounded-xl text-xs focus:outline-none transition-colors resize-none ${inputTheme}`}
                        required
                      />
                    </div>

                    {/* Markdown Body Textarea */}
                    <div className="flex flex-col gap-2">
                      <div className="flex justify-between items-center">
                        <label className="text-[10px] font-extrabold uppercase tracking-widest text-purple">Article Content</label>
                        <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider">Separate paragraphs with double newlines</span>
                      </div>
                      <textarea
                        rows={12}
                        placeholder="Compose your article body here. Hit enter twice to start a new paragraph..."
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                        className={`w-full px-4 py-4 border rounded-xl text-sm focus:outline-none transition-colors font-mono leading-relaxed ${inputTheme}`}
                        required
                      />
                    </div>

                  </div>
                ) : (
                  // --- RENDER VISUAL WYSIWYG PREVIEW TAB ---
                  <div className="max-w-3xl mx-auto bg-white text-navy p-8 sm:p-10 rounded-2xl shadow-lg border border-slate-200">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-700 mb-4 pb-3 border-b border-slate-100">
                      <span>{category}</span>
                      <span>•</span>
                      <span>{readTime}</span>
                      <span>•</span>
                      <span>By {author}</span>
                    </div>

                    <h1 className="text-2xl sm:text-3xl font-extrabold font-display leading-tight text-navy mb-6">
                      {title || 'Untitled Post'}
                    </h1>

                    <div className="flex flex-col gap-5 text-sm sm:text-base text-slate-700 leading-relaxed font-sans">
                      {body ? (
                        body.split('\n').filter(p => p.trim() !== '').map((paragraph, index) => {
                          const isNumberedItem = /^[1-9]\./.test(paragraph);
                          if (isNumberedItem) {
                            const [numAndTitle, ...rest] = paragraph.split(':');
                            return (
                              <div key={index} className="p-4 bg-slate-50 border-l-4 border-purple-600 rounded-r-xl flex flex-col gap-1 shadow-sm my-1">
                                <h4 className="text-xs sm:text-sm font-bold text-navy">{numAndTitle}</h4>
                                {rest.length > 0 && <p className="text-xs text-slate-600 leading-relaxed">{rest.join(':').trim()}</p>}
                              </div>
                            );
                          }
                          return (
                            <p key={index}>
                              {paragraph}
                            </p>
                          );
                        })
                      ) : (
                        <p className="text-slate-400 italic">No content typed yet. Go back to the Write tab to add text.</p>
                      )}
                    </div>
                  </div>
                )}

              </div>
            </form>
          )}
        </main>

      </div>
    </div>
  );
}
