"use client";

import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
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
  Underline,
  Heading1,
  Heading2,
  Minus,
  List,
  ListOrdered,
  Quote,
  Link as LinkIcon,
  Sparkles,
  ExternalLink,
  Columns,
  X,
  Layers,
  ShieldCheck,
  Eraser,
  Code,
  Key
} from 'lucide-react';
import { BlogPost } from '@/types';
import BlogContentRenderer, { legacyMarkdownToHtml } from '@/components/BlogContentRenderer';

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
  const [editorMode, setEditorMode] = useState<'visual' | 'code'>('visual');
  const [user, setUser] = useState<any>(null);
  const [isIdentityLoaded, setIsIdentityLoaded] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [saveStatus, setSaveStatus] = useState<{ type: 'success' | 'error' | 'loading' | null; message: string }>({ type: null, message: '' });
  const [sidebarSearch, setSidebarSearch] = useState('');
  const [sidebarCategoryFilter, setSidebarCategoryFilter] = useState('all');
  const [mounted, setMounted] = useState(false);

  // Category modal state
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState('');
  const [categoryModalError, setCategoryModalError] = useState('');
  const [categoryModalSuccess, setCategoryModalSuccess] = useState('');

  // Git Connection / GitHub Token state
  const [githubToken, setGithubToken] = useState<string>('');
  const [isGithubModalOpen, setIsGithubModalOpen] = useState(false);
  const [tokenInput, setTokenInput] = useState('');
  const [tokenSuccess, setTokenSuccess] = useState('');

  // Editor reference
  const editorRef = useRef<HTMLDivElement>(null);

  // Check if running in a local development environment
  const isLocalhost = typeof window !== 'undefined' && 
    (window.location.hostname === 'localhost' || 
     window.location.hostname === '127.0.0.1' ||
     window.location.hostname.startsWith('192.168.') ||
     window.location.hostname.startsWith('10.') ||
     window.location.hostname.endsWith('.local') ||
     Boolean(window.location.port) ||
     Boolean(user?.isLocalAdmin));

  // Set mounted state
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // Lock background scroll when any modal is open so it stays dead-center in the viewport
  useEffect(() => {
    if (isCategoryModalOpen || isGithubModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isCategoryModalOpen, isGithubModalOpen]);

  // Sync theme with localStorage and root HTML document class
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const initialDark = savedTheme !== null ? savedTheme === 'dark' : true;
    
    setIsDark(initialDark);
    if (initialDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Load saved GitHub token if available
    const savedGh = localStorage.getItem('gla_github_token');
    if (savedGh) {
      setGithubToken(savedGh);
      setTokenInput(savedGh);
    }
  }, []);

  const handleToggleTheme = () => {
    const nextTheme = !isDark;
    setIsDark(nextTheme);
    if (nextTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  // Sync contentEditable innerHTML when post selection or activeTab changes
  useEffect(() => {
    if (editorRef.current && (activeTab === 'edit' || activeTab === 'split') && editorMode === 'visual') {
      if (editorRef.current.innerHTML !== body) {
        editorRef.current.innerHTML = body || '';
      }
    }
  }, [selectedPost, isCreatingNew, activeTab, editorMode]);

  // Bind Netlify Identity Widget callbacks on mount
  useEffect(() => {
    const initIdentity = () => {
      const netlifyIdentity = (window as any).netlifyIdentity;
      if (netlifyIdentity) {
        setIsIdentityLoaded(true);
        const currentUser = netlifyIdentity.currentUser();
        if (currentUser) setUser(currentUser);

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
      script.onload = () => initIdentity();
      document.body.appendChild(script);
    }
  }, []);

  const handleLogin = () => {
    const netlifyIdentity = (window as any).netlifyIdentity;
    if (netlifyIdentity) netlifyIdentity.open();
  };

  const handleLogout = () => {
    const netlifyIdentity = (window as any).netlifyIdentity;
    if (netlifyIdentity) netlifyIdentity.logout();
    setUser(null);
  };

  const handleLocalAdminLogin = () => {
    setUser({
      email: 'admin@tglalearning.com',
      user_metadata: { full_name: 'Academy Administrator' },
      isLocalAdmin: true
    });
  };

  // Retrieve fresh Netlify Identity JWT token (with auto-refresh)
  const getFreshToken = async (u: any): Promise<string> => {
    if (!u) return '';
    if (typeof u.jwt === 'function') {
      try {
        const refreshed = await u.jwt(true);
        if (refreshed) return refreshed;
      } catch (err) {
        console.warn('Could not refresh JWT via u.jwt(true):', err);
      }
    }
    return u.token?.access_token || '';
  };

  const getSlug = (t: string) => {
    return t
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');
  };

  const selectPostToEdit = (post: BlogPost) => {
    setSelectedPost(post);
    setIsCreatingNew(false);
    setTitle(post.title);
    setCategory(post.category);
    setAuthor(post.author);
    setReadTime(post.readTime);
    setExcerpt(post.excerpt);
    
    // Convert legacy markdown or format HTML body
    const formattedHtml = legacyMarkdownToHtml(post.body);
    setBody(formattedHtml);
    if (editorRef.current) {
      editorRef.current.innerHTML = formattedHtml;
    }

    setActiveTab('edit');
    setEditorMode('visual');
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
    setBody('<p>Start typing your article here...</p>');
    if (editorRef.current) {
      editorRef.current.innerHTML = '<p>Start typing your article here...</p>';
    }
    setActiveTab('edit');
    setEditorMode('visual');
    setSaveStatus({ type: null, message: '' });
  };

  // Sync editor content to state
  const handleEditorInput = () => {
    if (editorRef.current) {
      setBody(editorRef.current.innerHTML);
    }
  };

  // Safe DOM node insertion that preserves cursor position
  const insertCustomHtml = (htmlString: string) => {
    const editor = editorRef.current;
    if (!editor) return;
    editor.focus();

    const selection = window.getSelection();
    if (selection && selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      range.deleteContents();
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = htmlString.trim();
      const frag = document.createDocumentFragment();
      let node: Node | null;
      let lastNode: Node | null = null;
      while ((node = tempDiv.firstChild)) {
        lastNode = frag.appendChild(node);
      }
      range.insertNode(frag);
      if (lastNode) {
        range.setStartAfter(lastNode);
        range.collapse(true);
        selection.removeAllRanges();
        selection.addRange(range);
      }
    } else {
      editor.innerHTML += htmlString;
    }
    handleEditorInput();
  };

  // Visual Editor Command Actions
  const formatHeading1 = (e: React.MouseEvent) => {
    e.preventDefault();
    document.execCommand('formatBlock', false, '<h2>');
    handleEditorInput();
  };

  const formatHeading2 = (e: React.MouseEvent) => {
    e.preventDefault();
    document.execCommand('formatBlock', false, '<h3>');
    handleEditorInput();
  };

  const formatParagraph = (e: React.MouseEvent) => {
    e.preventDefault();
    document.execCommand('formatBlock', false, '<p>');
    handleEditorInput();
  };

  const formatBold = (e: React.MouseEvent) => {
    e.preventDefault();
    document.execCommand('bold', false);
    handleEditorInput();
  };

  const formatItalic = (e: React.MouseEvent) => {
    e.preventDefault();
    document.execCommand('italic', false);
    handleEditorInput();
  };

  const formatUnderline = (e: React.MouseEvent) => {
    e.preventDefault();
    document.execCommand('underline', false);
    handleEditorInput();
  };

  const insertDivider = (e: React.MouseEvent) => {
    e.preventDefault();
    document.execCommand('insertHorizontalRule', false);
    handleEditorInput();
  };

  const formatBulletList = (e: React.MouseEvent) => {
    e.preventDefault();
    document.execCommand('insertUnorderedList', false);
    handleEditorInput();
  };

  const formatNumberedList = (e: React.MouseEvent) => {
    e.preventDefault();
    document.execCommand('insertOrderedList', false);
    handleEditorInput();
  };

  const formatQuote = (e: React.MouseEvent) => {
    e.preventDefault();
    document.execCommand('formatBlock', false, '<blockquote>');
    handleEditorInput();
  };

  const insertCalloutBox = (e: React.MouseEvent) => {
    e.preventDefault();
    insertCustomHtml(`
      <div class="blog-callout-box">
        <h4 class="font-bold text-sm mb-1">Key Insight / Study Tip</h4>
        <p class="text-xs leading-relaxed m-0">Write your highlighted recommendation or key takeaway here...</p>
      </div>
      <p><br></p>
    `);
  };

  const insertLink = (e: React.MouseEvent) => {
    e.preventDefault();
    const url = window.prompt('Enter destination URL (e.g. https://tglalearning.com/courses):', 'https://');
    if (url && url.trim() && url !== 'https://') {
      document.execCommand('createLink', false, url.trim());
      handleEditorInput();
    }
  };

  const clearFormatting = (e: React.MouseEvent) => {
    e.preventDefault();
    document.execCommand('removeFormat', false);
    document.execCommand('formatBlock', false, '<p>');
    handleEditorInput();
  };

  // Keyboard shortcut handler for editor
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.ctrlKey || e.metaKey) {
      if (e.key === 'b' || e.key === 'B') {
        e.preventDefault();
        document.execCommand('bold', false);
        handleEditorInput();
      } else if (e.key === 'i' || e.key === 'I') {
        e.preventDefault();
        document.execCommand('italic', false);
        handleEditorInput();
      } else if (e.key === 'u' || e.key === 'U') {
        e.preventDefault();
        document.execCommand('underline', false);
        handleEditorInput();
      }
    }
  };

  // Calculated word and reading metrics
  const cleanPlainText = body.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  const wordCount = cleanPlainText ? cleanPlainText.split(' ').length : 0;
  const charCount = cleanPlainText.length;
  const autoCalculatedReadTime = `${Math.max(1, Math.ceil(wordCount / 180))} min read`;

  // Sync Categories to Both Local Disk & Remote Git (Ensures main blog page is updated)
  const syncCategoriesToRemote = async (updatedCategories: string[]) => {
    // 1. Always call local API route
    try {
      await fetch('/api/categories', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ categories: updatedCategories })
      });
    } catch (err) {
      console.warn('Local categories sync error:', err);
    }

    // 2. If in production with GitHub token, commit directly to GitHub repository
    if (githubToken) {
      try {
        const ghRepo = 'dharuv-20/GLA-';
        const fileUrl = `https://api.github.com/repos/${ghRepo}/contents/src/content/categories.json`;
        
        let sha: string | null = null;
        const checkRes = await fetch(fileUrl, {
          headers: {
            Authorization: `Bearer ${githubToken}`,
            Accept: 'application/vnd.github.v3+json'
          }
        });
        if (checkRes.ok) {
          const fileData = await checkRes.json();
          sha = fileData.sha;
        }

        const encodedContent = btoa(unescape(encodeURIComponent(JSON.stringify(updatedCategories, null, 2))));
        const payload: any = {
          message: 'cms: sync categories list with main blog page',
          content: encodedContent,
          branch: 'main'
        };
        if (sha) payload.sha = sha;

        await fetch(fileUrl, {
          method: 'PUT',
          headers: {
            Authorization: `Bearer ${githubToken}`,
            'Content-Type': 'application/json',
            Accept: 'application/vnd.github.v3+json'
          },
          body: JSON.stringify(payload)
        });
      } catch (err) {
        console.warn('GitHub categories sync error:', err);
      }
    } else if (!isLocalhost && user) {
      // 3. Or if in production with Netlify Identity, commit via Git Gateway
      try {
        const token = await getFreshToken(user);
        if (token) {
          const gatewayUrl = `/.netlify/git/github/contents/src/content/categories.json`;
          let sha: string | null = null;
          const checkRes = await fetch(gatewayUrl, {
            headers: { Authorization: `Bearer ${token}` }
          });
          if (checkRes.ok) {
            const fileData = await checkRes.json();
            sha = fileData.sha;
          }

          const encodedContent = btoa(unescape(encodeURIComponent(JSON.stringify(updatedCategories, null, 2))));
          const payload: any = {
            message: 'cms: sync categories list with main blog page',
            content: encodedContent,
            branch: 'main'
          };
          if (sha) payload.sha = sha;

          await fetch(gatewayUrl, {
            method: 'PUT',
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
          });
        }
      } catch (err) {
        console.warn('Netlify Git Gateway categories sync error:', err);
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
      await syncCategoriesToRemote(updated);
      setCategoryModalSuccess(`Category "${trimmed}" added and synced with main blog page!`);
    } catch (err: any) {
      console.error('Failed to sync category:', err);
    }
  };

  const handleDeleteCategory = async (catToDelete: string) => {
    setCategoryModalError('');
    setCategoryModalSuccess('');

    const countUsing = posts.filter(p => p.category === catToDelete).length;
    let confirmMsg = `Are you sure you want to delete "${catToDelete}"?`;
    if (countUsing > 0) {
      confirmMsg += `\nWarning: ${countUsing} existing post(s) are currently tagged with this category.`;
    }

    if (!window.confirm(confirmMsg)) return;

    const updated = categories.filter(c => c !== catToDelete);
    setCategories(updated);

    if (category === catToDelete) {
      setCategory(updated[0] || 'General');
    }

    try {
      await syncCategoriesToRemote(updated);
      setCategoryModalSuccess(`Category "${catToDelete}" removed from website!`);
    } catch (err: any) {
      console.error('Failed to sync category removal:', err);
    }
  };

  // Save GitHub Token Handler
  const handleSaveToken = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = tokenInput.trim();
    setGithubToken(trimmed);
    if (trimmed) {
      localStorage.setItem('gla_github_token', trimmed);
      setTokenSuccess('GitHub Access Token saved permanently! Future publishes will sync directly to GitHub.');
    } else {
      localStorage.removeItem('gla_github_token');
      setTokenSuccess('Token cleared. Using Netlify Git Gateway.');
    }
    setTimeout(() => {
      setIsGithubModalOpen(false);
      setTokenSuccess('');
    }, 1500);
  };

  // Publish / Save pipeline
  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !body.trim() || body === '<p><br></p>') {
      setSaveStatus({ type: 'error', message: 'Please provide both an article title and content.' });
      return;
    }

    setSaveStatus({ type: 'loading', message: 'Publishing and saving changes...' });

    const postID = selectedPost ? selectedPost.id : Math.max(...posts.map(p => p.id), 0) + 1;
    const slug = selectedPost ? selectedPost.slug : getSlug(title);

    const postPayload: BlogPost = {
      id: postID,
      slug,
      title: title.trim(),
      category,
      author: author.trim(),
      readTime: readTime.trim() || autoCalculatedReadTime,
      excerpt: excerpt.trim(),
      body
    };

    // 1. LOCAL WORKSPACE DEVELOPMENT MODE
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
      return;
    }

    // 2. DIRECT GITHUB API COMMIT (Alternative when configured)
    if (githubToken) {
      try {
        setSaveStatus({ type: 'loading', message: 'Committing directly to GitHub repository...' });
        const ghRepo = 'dharuv-20/GLA-';
        const fileUrl = `https://api.github.com/repos/${ghRepo}/contents/src/content/blogs/${slug}.json`;

        let sha: string | null = null;
        const checkRes = await fetch(fileUrl, {
          headers: {
            Authorization: `Bearer ${githubToken}`,
            Accept: 'application/vnd.github.v3+json'
          }
        });
        if (checkRes.ok) {
          const fileData = await checkRes.json();
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
        if (sha) payload.sha = sha;

        const publishRes = await fetch(fileUrl, {
          method: 'PUT',
          headers: {
            Authorization: `Bearer ${githubToken}`,
            'Content-Type': 'application/json',
            Accept: 'application/vnd.github.v3+json'
          },
          body: JSON.stringify(payload)
        });

        if (publishRes.ok) {
          updateLocalPostsState(postPayload);
          setSaveStatus({ type: 'success', message: 'Published directly to GitHub! Netlify build will trigger shortly.' });
        } else {
          const errData = await publishRes.json().catch(() => ({}));
          throw new Error(errData.message || 'GitHub API rejected commit');
        }
      } catch (err: any) {
        setSaveStatus({ type: 'error', message: `GitHub publish failed: ${err.message}` });
      }
      return;
    }

    // 3. NETLIFY GIT GATEWAY
    if (!user) {
      setSaveStatus({ type: 'error', message: 'Authentication required. Please sign in.' });
      return;
    }

    try {
      const token = await getFreshToken(user);
      if (!token) {
        throw new Error('Your session token has expired. Please click "Sign Out" and log back in.');
      }

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
      if (sha) payload.sha = sha;

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
        setSaveStatus({ type: 'success', message: 'Published successfully! Changes will be live shortly.' });
      } else {
        const errText = await publishResponse.text();
        let parsedMsg = errText;
        try {
          const errObj = JSON.parse(errText);
          if (errObj.msg?.includes('Operator microservice headers missing') || errObj.code === 400) {
            parsedMsg = 'Netlify Git Gateway is not enabled in your Netlify site settings or session expired. Click "Git Connection" above to connect your GitHub token or re-enable Git Gateway in Netlify.';
          } else if (errObj.msg) {
            parsedMsg = errObj.msg;
          }
        } catch {}
        throw new Error(parsedMsg);
      }
    } catch (err: any) {
      setSaveStatus({ type: 'error', message: `Publish error: ${err.message}` });
    }
  };

  // Delete article pipeline
  const handleDelete = async () => {
    if (!selectedPost) return;

    const confirmDelete = window.confirm(`Are you sure you want to delete the article "${selectedPost.title}"? This cannot be undone.`);
    if (!confirmDelete) return;

    setSaveStatus({ type: 'loading', message: 'Deleting article...' });
    const slug = selectedPost.slug;

    // 1. LOCAL WORKSPACE
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
      return;
    }

    // 2. DIRECT GITHUB API DELETE
    if (githubToken) {
      try {
        const ghRepo = 'dharuv-20/GLA-';
        const fileUrl = `https://api.github.com/repos/${ghRepo}/contents/src/content/blogs/${slug}.json`;

        let sha: string | null = null;
        const checkRes = await fetch(fileUrl, {
          headers: {
            Authorization: `Bearer ${githubToken}`,
            Accept: 'application/vnd.github.v3+json'
          }
        });
        if (checkRes.ok) {
          const fileData = await checkRes.json();
          sha = fileData.sha;
        }

        if (!sha) {
          throw new Error("Could not find article file on GitHub to delete.");
        }

        const deletePayload = {
          message: `cms: delete blog post "${selectedPost.title}"`,
          sha: sha,
          branch: "main"
        };

        const deleteResponse = await fetch(fileUrl, {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${githubToken}`,
            'Content-Type': 'application/json',
            Accept: 'application/vnd.github.v3+json'
          },
          body: JSON.stringify(deletePayload)
        });

        if (deleteResponse.ok) {
          removeLocalPostState(selectedPost.id);
          setSaveStatus({ type: 'success', message: 'Article successfully removed from GitHub repository!' });
        } else {
          const errData = await deleteResponse.json().catch(() => ({}));
          throw new Error(errData.message || 'GitHub API rejected deletion');
        }
      } catch (err: any) {
        setSaveStatus({ type: 'error', message: `Delete failed: ${err.message}` });
      }
      return;
    }

    // 3. NETLIFY GIT GATEWAY DELETE
    if (!user) {
      setSaveStatus({ type: 'error', message: 'Authentication required.' });
      return;
    }

    try {
      const token = await getFreshToken(user);
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
        throw new Error("Could not find article file on GitHub to delete.");
      }

      const deletePayload = {
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
        body: JSON.stringify(deletePayload)
      });

      if (deleteResponse.ok) {
        removeLocalPostState(selectedPost.id);
        setSaveStatus({ type: 'success', message: 'Article successfully removed from repository!' });
      } else {
        const errText = await deleteResponse.text();
        throw new Error(`Git Gateway error: ${errText}`);
      }
    } catch (err: any) {
      setSaveStatus({ type: 'error', message: `Delete failed: ${err.message}` });
    }
  };

  const updateLocalPostsState = (savedPost: BlogPost) => {
    setPosts(prev => {
      const idx = prev.findIndex(p => p.id === savedPost.id);
      if (idx >= 0) {
        const copy = [...prev];
        copy[idx] = savedPost;
        return copy;
      } else {
        return [savedPost, ...prev];
      }
    });
    setSelectedPost(savedPost);
    setIsCreatingNew(false);
  };

  const removeLocalPostState = (idToDelete: number) => {
    setPosts(prev => prev.filter(p => p.id !== idToDelete));
    setSelectedPost(null);
    setIsCreatingNew(false);
    setTitle('');
    setExcerpt('');
    setBody('');
  };

  // Filtered posts in the sidebar
  const filteredSidebarPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(sidebarSearch.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(sidebarSearch.toLowerCase());
    const matchesCat = sidebarCategoryFilter === 'all' || post.category === sidebarCategoryFilter;
    return matchesSearch && matchesCat;
  });

  // Explicit, High-Contrast UI Color Mappings
  const theme = {
    pageBg: isDark ? 'bg-[#070e1b] text-slate-100' : 'bg-slate-100 text-slate-900',
    headerBg: isDark ? 'bg-[#0b1426] border-slate-800' : 'bg-white border-slate-200',
    sidebarBg: isDark ? 'bg-[#08101e] border-slate-800' : 'bg-slate-50 border-slate-200',
    input: isDark 
      ? 'bg-[#0d1a33] border-slate-700 text-white placeholder:text-slate-400 focus:border-purple-400 focus:ring-1 focus:ring-purple-400' 
      : 'bg-white border-slate-300 text-slate-900 placeholder:text-slate-500 focus:border-purple-600 focus:ring-1 focus:ring-purple-600',
    label: isDark ? 'text-purple-300 font-bold uppercase tracking-wider' : 'text-purple-700 font-bold uppercase tracking-wider',
    card: isDark ? 'bg-[#0d182e] border-slate-700/80 shadow-md' : 'bg-white border-slate-200 shadow-sm',
    toolbar: isDark ? 'bg-[#0e1c36] border-slate-700 shadow-md' : 'bg-slate-100 border-slate-300 shadow-sm',
    toolbarBtn: isDark 
      ? 'bg-[#142647] text-slate-100 border-slate-700 hover:bg-purple-600 hover:text-white' 
      : 'bg-white text-slate-800 border-slate-300 hover:bg-purple-600 hover:text-white',
    editorBg: isDark ? 'bg-[#091224] border-slate-700 text-slate-100' : 'bg-white border-slate-300 text-slate-900',
    previewCard: isDark ? 'bg-[#091224] border-slate-700 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
  };

  // --- RENDER LOGIN VIEW ---
  if (!user) {
    return (
      <div className={`min-h-screen ${theme.pageBg} flex items-center justify-center p-6 relative overflow-hidden transition-colors duration-300`}>
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-purple/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple/15 rounded-full blur-3xl pointer-events-none" />

        <div className={`${isDark ? 'bg-[#0d182e] border-slate-700 shadow-2xl' : 'bg-white border-slate-200 shadow-xl'} backdrop-blur-md border p-8 sm:p-10 rounded-2xl w-full max-w-md flex flex-col gap-6 relative z-10 transition-colors duration-300`}>
          <div className="flex flex-col gap-2 text-center">
            <span className="inline-flex items-center justify-center gap-1.5 text-[11px] font-bold uppercase tracking-wider bg-purple/15 text-purple-400 dark:text-purple-300 px-3 py-1 rounded-full border border-purple/30 self-center">
              <ShieldCheck className="w-3.5 h-3.5" />
              Global Language Academy
            </span>
            <h1 className={`text-2xl font-extrabold tracking-tight font-display ${isDark ? 'text-white' : 'text-slate-900'}`}>
              GLA Control Panel
            </h1>
            <p className="text-xs text-slate-400 dark:text-slate-300 leading-relaxed">
              Sign in to manage academic articles, write study guides, and organize blog categories.
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
              className={`w-full py-2.5 border text-xs font-semibold rounded-xl transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 ${
                isDark 
                  ? 'bg-[#142647] border-slate-700 text-slate-200 hover:bg-[#1a335e]' 
                  : 'bg-slate-100 border-slate-300 text-slate-800 hover:bg-slate-200'
              }`}
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
    <div className={`min-h-screen ${theme.pageBg} flex flex-col font-sans transition-colors duration-300`}>
      
      {/* Top Banner Control Header */}
      <header className={`${theme.headerBg} border-b px-6 py-3.5 flex justify-between items-center shrink-0 sticky top-0 z-30 backdrop-blur-md transition-colors duration-300 shadow-sm`}>
        <div className="flex items-center gap-3">
          <span className="bg-purple/20 p-2 rounded-xl border border-purple/30">
            <FileText className="w-5 h-5 text-purple-400" />
          </span>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <h1 className={`text-base font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                GLA
              </h1>
              <span className="text-[11px] text-slate-400 font-medium hidden sm:inline">
                Global Language Academy
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 text-xs">
          {/* Git Publishing Connection Button */}
          <button
            type="button"
            onClick={() => setIsGithubModalOpen(true)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border font-semibold transition-colors cursor-pointer text-xs ${
              githubToken
                ? 'border-emerald-500/50 bg-emerald-500/15 text-emerald-300'
                : isDark
                  ? 'bg-[#142647] border-slate-700 text-slate-200 hover:bg-[#1a335e]'
                  : 'bg-slate-100 border-slate-300 text-slate-700 hover:bg-slate-200'
            }`}
            title="Configure Git Publishing Connection"
          >
            <Key className="w-3.5 h-3.5 text-purple-400" />
            <span className="hidden sm:inline">{githubToken ? 'GitHub Token Active' : 'Git Connection'}</span>
          </button>

          {/* Category Manager Trigger */}
          <button
            type="button"
            onClick={() => setIsCategoryModalOpen(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-purple/40 bg-purple/15 text-purple-300 hover:bg-purple/25 font-semibold transition-colors cursor-pointer text-xs"
          >
            <Layers className="w-3.5 h-3.5 text-purple-400" />
            <span>Manage Categories</span>
            <span className="bg-purple text-white px-1.5 py-0.2 rounded-full text-[10px] font-bold">
              {categories.length}
            </span>
          </button>

          {/* View Live Blog */}
          <a
            href="/blogs"
            target="_blank"
            rel="noopener noreferrer"
            className={`hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-lg border font-semibold transition-colors cursor-pointer text-xs ${
              isDark 
                ? 'bg-[#142647] border-slate-700 text-slate-200 hover:bg-[#1a335e]' 
                : 'bg-slate-100 border-slate-300 text-slate-800 hover:bg-slate-200'
            }`}
          >
            <span>Live Site</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          {/* Theme Toggler Button */}
          <button
            type="button"
            onClick={handleToggleTheme}
            className={`p-2 rounded-lg border transition-colors cursor-pointer ${
              isDark 
                ? 'bg-[#142647] border-slate-700 text-amber-300 hover:text-amber-200' 
                : 'bg-white border-slate-300 text-slate-700 hover:text-slate-900'
            }`}
            title="Toggle Light / Dark Mode"
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

      {/* Main Workspace Split */}
      <div className="flex flex-grow overflow-hidden relative">
        
        {/* Left Sidebar: Articles & Filter Navigator */}
        <aside className={`w-80 sm:w-96 ${theme.sidebarBg} border-r flex flex-col shrink-0 overflow-hidden transition-colors duration-300`}>
          
          <div className="p-4 border-b border-slate-700/60 flex flex-col gap-3 shrink-0">
            <button
              onClick={startNewPost}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple to-purple-hover text-white py-2.5 px-4 rounded-xl font-bold text-xs shadow-md hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer"
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
                className={`w-full pl-9 pr-3 py-1.5 text-xs rounded-lg border focus:outline-none transition-colors ${theme.input}`}
              />
            </div>

            {/* Category Filter Pills in Sidebar */}
            <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none text-[11px]">
              <button
                onClick={() => setSidebarCategoryFilter('all')}
                className={`px-2.5 py-1 rounded-md font-bold whitespace-nowrap transition-colors cursor-pointer ${
                  sidebarCategoryFilter === 'all'
                    ? 'bg-purple text-white shadow-sm'
                    : isDark ? 'bg-[#142647] text-slate-300 hover:text-white' : 'bg-slate-200 text-slate-700 hover:text-slate-900'
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
                        ? 'bg-purple text-white shadow-sm'
                        : isDark ? 'bg-[#142647] text-slate-300 hover:text-white' : 'bg-slate-200 text-slate-700 hover:text-slate-900'
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
                        ? isDark
                          ? 'bg-purple-950/60 border-purple-400 text-white shadow-md ring-1 ring-purple-400'
                          : 'bg-purple-50 border-purple-500 text-purple-950 shadow-sm ring-1 ring-purple-500'
                        : isDark
                          ? 'bg-[#0d182e] border-slate-700/60 text-slate-200 hover:bg-[#122240] hover:border-slate-500'
                          : 'bg-white border-slate-200 text-slate-800 hover:bg-slate-50 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between text-[10px] font-bold">
                      <span className="text-purple-300 bg-purple/20 px-2 py-0.5 rounded-md border border-purple/30">
                        {post.category}
                      </span>
                      <span className="text-slate-400">{post.readTime}</span>
                    </div>

                    <h3 className={`text-xs font-bold line-clamp-2 leading-snug ${
                      isSelected ? 'text-purple-300 font-extrabold' : isDark ? 'text-white' : 'text-slate-900'
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
                <FileText className="w-8 h-8 opacity-40" />
                <span>No articles found</span>
              </div>
            )}
          </div>
        </aside>

        {/* Right Area: Form & Editor Workspace */}
        <main className="flex-grow flex flex-col overflow-hidden">
          
          {!selectedPost && !isCreatingNew ? (
            <div className="flex-grow flex flex-col items-center justify-center p-8 text-center gap-4">
              <div className="p-4 bg-purple/15 rounded-full border border-purple/30">
                <FileText className="w-12 h-12 text-purple-400" />
              </div>
              <div className="max-w-md flex flex-col gap-1.5">
                <h2 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Select an Article or Start a New One
                </h2>
                <p className="text-xs text-slate-400 leading-relaxed">
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
              <div className={`${theme.headerBg} border-b px-6 py-2.5 flex justify-between items-center shrink-0 transition-colors duration-300 flex-wrap gap-2`}>
                
                {/* View Mode Toggle Buttons */}
                <div className={`flex gap-1.5 p-1 rounded-xl border ${isDark ? 'bg-[#0d1a33] border-slate-700' : 'bg-slate-200/80 border-slate-300'}`}>
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
                    <span>Visual Writer</span>
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
                    <span>Live Preview</span>
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
                    <span>Split Screen</span>
                  </button>
                </div>

                {/* Right Action buttons */}
                <div className="flex items-center gap-2">
                  <span className="text-[11px] text-slate-400 font-semibold hidden md:inline mr-2">
                    {selectedPost ? `Editing Article ID: #${selectedPost.id}` : "✨ Fresh Article"}
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
                    className="flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-purple to-purple-hover text-white text-xs font-bold rounded-xl transition-all cursor-pointer shadow-md hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
                  >
                    <Save className="w-4 h-4" />
                    <span>{saveStatus.type === 'loading' ? 'Publishing...' : 'Publish Article'}</span>
                  </button>
                </div>
              </div>

              {/* Status Alert Banner */}
              {saveStatus.type && (
                <div className={`px-6 py-2.5 border-b text-xs flex items-center justify-between shrink-0 animate-fade-in ${
                  saveStatus.type === 'success' ? 'bg-emerald-950/80 text-emerald-200 border-emerald-700' :
                  saveStatus.type === 'loading' ? 'bg-indigo-950/80 text-indigo-200 border-indigo-700' :
                  'bg-rose-950/80 text-rose-200 border-rose-700'
                }`}>
                  <div className="flex items-center gap-2 flex-wrap">
                    {saveStatus.type === 'success' && <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />}
                    {saveStatus.type === 'error' && <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0" />}
                    <span className="font-semibold">{saveStatus.message}</span>
                    {saveStatus.type === 'error' && saveStatus.message.includes('Git Gateway') && (
                      <button
                        type="button"
                        onClick={() => setIsGithubModalOpen(true)}
                        className="underline font-bold text-amber-300 hover:text-white cursor-pointer ml-1"
                      >
                        [Open Connection Settings]
                      </button>
                    )}
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
                
                {/* 1. VISUAL EDIT TAB */}
                {activeTab === 'edit' && (
                  <div className="max-w-4xl mx-auto flex flex-col gap-5">
                    
                    {/* Blog Title */}
                    <div className="flex flex-col gap-1.5">
                      <label className={theme.label}>
                        Blog Title <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 10 Essential Tips to Score 8+ Band in IELTS Writing..."
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className={`w-full px-4 py-3 border rounded-xl text-base font-bold focus:outline-none transition-colors ${theme.input}`}
                        required
                      />
                    </div>

                    {/* Metadata Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      
                      {/* Category select with inline Add button */}
                      <div className="flex flex-col gap-1.5">
                        <div className="flex justify-between items-center">
                          <label className={theme.label}>Category</label>
                          <button
                            type="button"
                            onClick={() => setIsCategoryModalOpen(true)}
                            className="text-[10px] text-purple-400 hover:underline font-bold flex items-center gap-0.5 cursor-pointer"
                          >
                            <Plus className="w-3 h-3" /> Add Category
                          </button>
                        </div>
                        <select
                          value={category}
                          onChange={(e) => setCategory(e.target.value)}
                          className={`w-full px-3.5 py-2.5 border rounded-xl text-xs focus:outline-none transition-colors cursor-pointer ${theme.input}`}
                        >
                          {categories.map((cat) => (
                            <option key={cat} value={cat} className={isDark ? "bg-[#0b1426] text-white" : "bg-white text-slate-900"}>
                              {cat}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Author */}
                      <div className="flex flex-col gap-1.5">
                        <label className={theme.label}>Author</label>
                        <input
                          type="text"
                          value={author}
                          onChange={(e) => setAuthor(e.target.value)}
                          className={`w-full px-3.5 py-2.5 border rounded-xl text-xs focus:outline-none transition-colors ${theme.input}`}
                          required
                        />
                      </div>

                      {/* Read Time */}
                      <div className="flex flex-col gap-1.5">
                        <div className="flex justify-between items-center">
                          <label className={theme.label}>Read Time</label>
                          <button
                            type="button"
                            onClick={() => setReadTime(autoCalculatedReadTime)}
                            className="text-[10px] text-purple-400 hover:underline font-semibold cursor-pointer"
                            title="Auto-fill estimated read time"
                          >
                            Auto: {autoCalculatedReadTime}
                          </button>
                        </div>
                        <input
                          type="text"
                          value={readTime}
                          onChange={(e) => setReadTime(e.target.value)}
                          className={`w-full px-3.5 py-2.5 border rounded-xl text-xs focus:outline-none transition-colors ${theme.input}`}
                          required
                        />
                      </div>

                    </div>

                    {/* Card Excerpt */}
                    <div className="flex flex-col gap-1.5">
                      <label className={theme.label}>
                        Summary Excerpt <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        rows={2}
                        placeholder="Write a clear, high-impact summary that appears on blog cards and search engines..."
                        value={excerpt}
                        onChange={(e) => setExcerpt(e.target.value)}
                        className={`w-full px-4 py-2.5 border rounded-xl text-xs focus:outline-none transition-colors resize-none leading-relaxed ${theme.input}`}
                        required
                      />
                    </div>

                    {/* Dedicated Visual Text Editor */}
                    <div className="flex flex-col gap-1.5">
                      <div className="flex justify-between items-center">
                        <label className={theme.label}>
                          Article Writing Canvas <span className="text-red-500">*</span>
                        </label>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] text-slate-400">
                            {wordCount} words • {charCount} chars
                          </span>
                          <button
                            type="button"
                            onClick={() => setEditorMode(editorMode === 'visual' ? 'code' : 'visual')}
                            className="text-[10px] text-purple-400 hover:underline font-bold flex items-center gap-1 cursor-pointer"
                          >
                            <Code className="w-3 h-3" />
                            {editorMode === 'visual' ? 'View HTML Code' : 'Back to Visual'}
                          </button>
                        </div>
                      </div>

                      {/* Sticky Dedicated Toolbar */}
                      <div className={`p-2 border rounded-t-xl flex flex-wrap items-center gap-1.5 sticky top-0 z-20 ${theme.toolbar}`}>
                        
                        {/* H1 Large Heading */}
                        <button
                          type="button"
                          onMouseDown={formatHeading1}
                          className={`px-2.5 py-1.5 rounded-lg border text-xs font-extrabold transition-all cursor-pointer flex items-center gap-1 ${theme.toolbarBtn}`}
                          title="Heading 1 (Large Title)"
                        >
                          <Heading1 className="w-3.5 h-3.5 text-purple-400" />
                          <span>H1 Large</span>
                        </button>

                        {/* H2 Section Heading */}
                        <button
                          type="button"
                          onMouseDown={formatHeading2}
                          className={`px-2.5 py-1.5 rounded-lg border text-xs font-bold transition-all cursor-pointer flex items-center gap-1 ${theme.toolbarBtn}`}
                          title="Heading 2 (Section Header)"
                        >
                          <Heading2 className="w-3.5 h-3.5 text-purple-400" />
                          <span>H2 Section</span>
                        </button>

                        {/* Normal Text Paragraph */}
                        <button
                          type="button"
                          onMouseDown={formatParagraph}
                          className={`px-2.5 py-1.5 rounded-lg border text-xs font-semibold transition-all cursor-pointer ${theme.toolbarBtn}`}
                          title="Normal Paragraph Text"
                        >
                          Paragraph
                        </button>

                        <div className="w-px h-5 bg-slate-700/80 mx-1" />

                        {/* Bold */}
                        <button
                          type="button"
                          onMouseDown={formatBold}
                          className={`p-1.5 px-2 rounded-lg border text-xs font-bold transition-all cursor-pointer ${theme.toolbarBtn}`}
                          title="Bold (Ctrl+B)"
                        >
                          <Bold className="w-4 h-4" />
                        </button>

                        {/* Italic */}
                        <button
                          type="button"
                          onMouseDown={formatItalic}
                          className={`p-1.5 px-2 rounded-lg border text-xs italic transition-all cursor-pointer ${theme.toolbarBtn}`}
                          title="Italic (Ctrl+I)"
                        >
                          <Italic className="w-4 h-4" />
                        </button>

                        {/* Underline */}
                        <button
                          type="button"
                          onMouseDown={formatUnderline}
                          className={`p-1.5 px-2 rounded-lg border text-xs underline transition-all cursor-pointer ${theme.toolbarBtn}`}
                          title="Underline (Ctrl+U)"
                        >
                          <Underline className="w-4 h-4" />
                        </button>

                        <div className="w-px h-5 bg-slate-700/80 mx-1" />

                        {/* Line Separation Divider */}
                        <button
                          type="button"
                          onMouseDown={insertDivider}
                          className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border text-xs font-semibold transition-all cursor-pointer ${theme.toolbarBtn}`}
                          title="Insert Horizontal Line Divider"
                        >
                          <Minus className="w-4 h-4 text-purple-400" />
                          <span>Line Divider</span>
                        </button>

                        <div className="w-px h-5 bg-slate-700/80 mx-1" />

                        {/* Bullet List */}
                        <button
                          type="button"
                          onMouseDown={formatBulletList}
                          className={`p-1.5 px-2 rounded-lg border text-xs transition-all cursor-pointer ${theme.toolbarBtn}`}
                          title="Bullet List"
                        >
                          <List className="w-4 h-4" />
                        </button>

                        {/* Numbered List */}
                        <button
                          type="button"
                          onMouseDown={formatNumberedList}
                          className={`p-1.5 px-2 rounded-lg border text-xs transition-all cursor-pointer ${theme.toolbarBtn}`}
                          title="Numbered List"
                        >
                          <ListOrdered className="w-4 h-4" />
                        </button>

                        {/* Feature Box */}
                        <button
                          type="button"
                          onMouseDown={insertCalloutBox}
                          className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border text-xs font-bold transition-all cursor-pointer text-purple-300 hover:text-white ${theme.toolbarBtn}`}
                          title="Insert Highlight Callout Box"
                        >
                          <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                          <span>Feature Box</span>
                        </button>

                        {/* Blockquote */}
                        <button
                          type="button"
                          onMouseDown={formatQuote}
                          className={`p-1.5 px-2 rounded-lg border text-xs transition-all cursor-pointer ${theme.toolbarBtn}`}
                          title="Insert Blockquote"
                        >
                          <Quote className="w-4 h-4" />
                        </button>

                        {/* Link */}
                        <button
                          type="button"
                          onMouseDown={insertLink}
                          className={`p-1.5 px-2 rounded-lg border text-xs transition-all cursor-pointer ${theme.toolbarBtn}`}
                          title="Insert Web Link"
                        >
                          <LinkIcon className="w-4 h-4" />
                        </button>

                        {/* Clear Formatting */}
                        <button
                          type="button"
                          onMouseDown={clearFormatting}
                          className={`p-1.5 px-2 rounded-lg border text-xs transition-all cursor-pointer ${theme.toolbarBtn}`}
                          title="Clear Selected Formatting"
                        >
                          <Eraser className="w-4 h-4 text-rose-400" />
                        </button>
                      </div>

                      {/* Visual ContentEditable Area */}
                      {editorMode === 'visual' ? (
                        <div
                          ref={editorRef}
                          contentEditable
                          suppressContentEditableWarning
                          onInput={handleEditorInput}
                          onKeyDown={handleKeyDown}
                          data-placeholder="Start typing your article here... Use the toolbar above to format headings, bold, italic, lists, and dividers."
                          className={`w-full p-5 sm:p-6 border border-t-0 rounded-b-xl min-h-[440px] focus:outline-none transition-colors rich-editor-content ${theme.editorBg}`}
                        />
                      ) : (
                        <textarea
                          rows={18}
                          value={body}
                          onChange={(e) => setBody(e.target.value)}
                          className={`w-full p-4 border border-t-0 rounded-b-xl text-xs font-mono focus:outline-none transition-colors ${theme.editorBg}`}
                        />
                      )}

                      {/* Editor Sub-Footer Guide */}
                      <div className="flex justify-between items-center text-[11px] text-slate-400 pt-1 px-1">
                        <span>Global Language Academy Article Publisher</span>
                        <span>{autoCalculatedReadTime}</span>
                      </div>
                    </div>

                  </div>
                )}

                {/* 2. LIVE PREVIEW TAB */}
                {activeTab === 'preview' && (
                  <div className="max-w-4xl mx-auto flex flex-col gap-6">
                    <div className="p-4 rounded-xl border border-purple/30 bg-purple/10 text-xs text-purple-300 flex items-center justify-between">
                      <span className="font-semibold">Live Reader Simulation Mode</span>
                      <span className="text-[10px] bg-purple text-white px-2 py-0.5 rounded-full font-bold">Preview</span>
                    </div>

                    <div className={`p-8 sm:p-10 rounded-2xl border ${theme.previewCard}`}>
                      <div className="flex flex-col gap-4 border-b border-slate-700/60 pb-6 mb-6">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold uppercase tracking-wider text-purple-400 bg-purple/15 px-3 py-1 rounded-md border border-purple/30">
                            {category}
                          </span>
                          <span className="text-xs text-slate-400">{readTime || autoCalculatedReadTime}</span>
                        </div>
                        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                          {title || "Untitled Article"}
                        </h1>
                        <p className="text-xs text-slate-400">
                          By <strong className="text-slate-200">{author || "Faculty"}</strong> • Published by Global Language Academy
                        </p>
                      </div>

                      <BlogContentRenderer content={body} />
                    </div>
                  </div>
                )}

                {/* 3. SPLIT SCREEN VIEW */}
                {activeTab === 'split' && (
                  <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 h-full">
                    
                    {/* Left: Visual Editor */}
                    <div className="flex flex-col gap-3">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-bold uppercase tracking-wider text-purple-400">Visual Editor</span>
                        <span className="text-[11px] text-slate-400">{wordCount} words</span>
                      </div>
                      
                      <div className={`p-2 border rounded-t-xl flex flex-wrap items-center gap-1.5 sticky top-0 z-20 ${theme.toolbar}`}>
                        <button type="button" onMouseDown={formatHeading1} className={`px-2 py-1 rounded text-xs font-bold ${theme.toolbarBtn}`}>H1</button>
                        <button type="button" onMouseDown={formatHeading2} className={`px-2 py-1 rounded text-xs font-bold ${theme.toolbarBtn}`}>H2</button>
                        <button type="button" onMouseDown={formatParagraph} className={`px-2 py-1 rounded text-xs ${theme.toolbarBtn}`}>P</button>
                        <button type="button" onMouseDown={formatBold} className={`p-1.5 rounded ${theme.toolbarBtn}`}><Bold className="w-3.5 h-3.5" /></button>
                        <button type="button" onMouseDown={formatItalic} className={`p-1.5 rounded ${theme.toolbarBtn}`}><Italic className="w-3.5 h-3.5" /></button>
                        <button type="button" onMouseDown={insertDivider} className={`px-2 py-1 rounded text-xs font-semibold ${theme.toolbarBtn}`}>Divider</button>
                        <button type="button" onMouseDown={formatBulletList} className={`p-1.5 rounded ${theme.toolbarBtn}`}><List className="w-3.5 h-3.5" /></button>
                        <button type="button" onMouseDown={insertCalloutBox} className={`px-2 py-1 rounded text-xs font-bold text-purple-300 ${theme.toolbarBtn}`}>Box</button>
                      </div>

                      <div
                        ref={editorRef}
                        contentEditable
                        suppressContentEditableWarning
                        onInput={handleEditorInput}
                        onKeyDown={handleKeyDown}
                        className={`w-full p-4 border border-t-0 rounded-b-xl min-h-[450px] focus:outline-none rich-editor-content ${theme.editorBg}`}
                      />
                    </div>

                    {/* Right: Real-time Rendered Preview */}
                    <div className="flex flex-col gap-3">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">Live Preview Output</span>
                        <span className="text-[11px] text-slate-400">Instant Sync</span>
                      </div>
                      
                      <div className={`p-6 rounded-xl border overflow-y-auto max-h-[600px] ${theme.previewCard}`}>
                        <h2 className="text-xl font-extrabold mb-4 pb-2 border-b border-slate-700/60">
                          {title || "Untitled Article"}
                        </h2>
                        <BlogContentRenderer content={body} />
                      </div>
                    </div>

                  </div>
                )}

              </div>
            </form>
          )}

        </main>
      </div>

      {/* Category Manager Modal - Rendered via Portal directly into document.body to ensure dead-center positioning */}
      {isCategoryModalOpen && mounted && createPortal(
        <div className="fixed inset-0 z-[99999] bg-black/75 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in">
          <div className={`${isDark ? 'bg-[#0d182e] border-slate-700 text-white' : 'bg-white border-slate-200 text-slate-900'} border rounded-2xl w-full max-w-lg p-6 flex flex-col gap-5 shadow-2xl relative animate-scale-up`}>
            
            <div className="flex justify-between items-center border-b border-slate-700/60 pb-3">
              <div className="flex items-center gap-2">
                <Layers className="w-5 h-5 text-purple-400" />
                <h3 className="text-base font-bold">Manage Blog Categories</h3>
              </div>
              <button
                type="button"
                onClick={() => {
                  setIsCategoryModalOpen(false);
                  setCategoryModalError('');
                  setCategoryModalSuccess('');
                }}
                className="p-1 hover:bg-white/10 rounded-lg text-slate-400 hover:text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Notification messages */}
            {categoryModalError && (
              <div className="p-3 bg-rose-950/80 text-rose-200 border border-rose-700 rounded-xl text-xs flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0" />
                <span>{categoryModalError}</span>
              </div>
            )}
            {categoryModalSuccess && (
              <div className="p-3 bg-emerald-950/80 text-emerald-200 border border-emerald-700 rounded-xl text-xs flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{categoryModalSuccess}</span>
              </div>
            )}

            {/* Add New Category Form */}
            <form onSubmit={handleAddCategory} className="flex gap-2">
              <input
                type="text"
                placeholder="Enter new category name (e.g. Study in Germany)..."
                value={newCategoryName}
                onChange={(e) => setNewCategoryName(e.target.value)}
                className={`flex-grow px-3.5 py-2 text-xs rounded-xl border focus:outline-none ${theme.input}`}
              />
              <button
                type="submit"
                className="px-4 py-2 bg-purple hover:bg-purple-hover text-white text-xs font-bold rounded-xl transition-colors cursor-pointer shrink-0 flex items-center gap-1.5 shadow-sm"
              >
                <Plus className="w-4 h-4" />
                <span>Add</span>
              </button>
            </form>

            {/* Existing Categories List with dedicated scroll bar */}
            <div className="flex flex-col gap-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Active Categories ({categories.length})
              </span>
              
              <div className="max-h-64 overflow-y-auto flex flex-col gap-2 pr-1">
                {categories.map((cat) => {
                  const usageCount = posts.filter(p => p.category === cat).length;
                  return (
                    <div
                      key={cat}
                      className={`flex justify-between items-center p-2.5 rounded-xl border text-xs ${
                        isDark ? 'bg-[#142647] border-slate-700 text-slate-100' : 'bg-slate-50 border-slate-200 text-slate-800'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="font-bold">{cat}</span>
                        <span className="text-[10px] text-slate-400 bg-black/20 px-2 py-0.5 rounded-full">
                          {usageCount} {usageCount === 1 ? 'article' : 'articles'}
                        </span>
                      </div>

                      <button
                        type="button"
                        onClick={() => handleDeleteCategory(cat)}
                        className="p-1 hover:bg-rose-500/20 text-slate-400 hover:text-rose-400 rounded transition-colors cursor-pointer"
                        title={`Delete ${cat}`}
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="pt-2 border-t border-slate-700/60 flex justify-end">
              <button
                type="button"
                onClick={() => {
                  setIsCategoryModalOpen(false);
                  setCategoryModalError('');
                  setCategoryModalSuccess('');
                }}
                className={`px-4 py-2 rounded-xl text-xs font-bold border transition-colors cursor-pointer ${
                  isDark ? 'bg-[#142647] border-slate-700 text-slate-200 hover:bg-[#1a335e]' : 'bg-slate-100 border-slate-300 text-slate-800 hover:bg-slate-200'
                }`}
              >
                Done
              </button>
            </div>

          </div>
        </div>,
        document.body
      )}

      {/* Git Connection / GitHub Token Settings Modal - Rendered via Portal */}
      {isGithubModalOpen && mounted && createPortal(
        <div className="fixed inset-0 z-[99999] bg-black/75 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in">
          <div className={`${isDark ? 'bg-[#0d182e] border-slate-700 text-white' : 'bg-white border-slate-200 text-slate-900'} border rounded-2xl w-full max-w-lg p-6 flex flex-col gap-5 shadow-2xl relative animate-scale-up`}>
            
            <div className="flex justify-between items-center border-b border-slate-700/60 pb-3">
              <div className="flex items-center gap-2">
                <Key className="w-5 h-5 text-purple-400" />
                <h3 className="text-base font-bold">Publishing Connection Settings</h3>
              </div>
              <button
                type="button"
                onClick={() => setIsGithubModalOpen(false)}
                className="p-1 hover:bg-white/10 rounded-lg text-slate-400 hover:text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {tokenSuccess && (
              <div className="p-3 bg-emerald-950/80 text-emerald-200 border border-emerald-700 rounded-xl text-xs flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{tokenSuccess}</span>
              </div>
            )}

            <div className="flex flex-col gap-4 text-xs text-slate-300">
              <div className={`p-3.5 rounded-xl border ${isDark ? 'bg-[#142647] border-slate-700' : 'bg-slate-50 border-slate-200 text-slate-800'}`}>
                <h4 className="font-bold text-sm text-purple-300 mb-1">Option 1: Direct GitHub Sync (Recommended)</h4>
                <p className="text-[11px] text-slate-400 mb-3 leading-relaxed">
                  Provide a GitHub Personal Access Token (PAT with <code className="text-purple-400 font-mono">repo</code> permissions). This commits new and edited articles directly to your GitHub repository without relying on Netlify microservices.
                </p>

                <form onSubmit={handleSaveToken} className="flex flex-col gap-2.5">
                  <input
                    type="password"
                    placeholder="ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
                    value={tokenInput}
                    onChange={(e) => setTokenInput(e.target.value)}
                    className={`w-full px-3.5 py-2 text-xs rounded-xl border font-mono focus:outline-none ${theme.input}`}
                  />
                  <div className="flex gap-2 justify-end">
                    {githubToken && (
                      <button
                        type="button"
                        onClick={() => {
                          setTokenInput('');
                          handleSaveToken({ preventDefault: () => {} } as any);
                        }}
                        className="px-3 py-1.5 border border-rose-500/40 text-rose-400 hover:bg-rose-500/10 rounded-lg font-bold text-xs cursor-pointer"
                      >
                        Disconnect Token
                      </button>
                    )}
                    <button
                      type="submit"
                      className="px-4 py-1.5 bg-purple hover:bg-purple-hover text-white rounded-lg font-bold text-xs cursor-pointer shadow-sm"
                    >
                      Save GitHub Token
                    </button>
                  </div>
                </form>
              </div>

              <div className={`p-3.5 rounded-xl border ${isDark ? 'bg-[#091224] border-slate-800' : 'bg-slate-100 border-slate-200 text-slate-800'}`}>
                <h4 className="font-bold text-sm text-slate-200 mb-1">Option 2: Netlify Git Gateway</h4>
                <p className="text-[11px] text-slate-400 leading-relaxed mb-2">
                  If you prefer using Netlify Identity without a GitHub Token, ensure Git Gateway is enabled:
                </p>
                <ol className="list-decimal pl-4 space-y-1 text-[11px] text-slate-400">
                  <li>Go to your <strong>Netlify Dashboard</strong> &rarr; <strong>Site Configuration</strong>.</li>
                  <li>Click <strong>Identity</strong> &rarr; scroll to <strong>Services</strong> &rarr; <strong>Git Gateway</strong>.</li>
                  <li>Click <strong>Enable Git Gateway</strong> (or re-link GitHub).</li>
                  <li>In this admin panel, click <strong>Sign Out</strong> and sign back in to refresh your token.</li>
                </ol>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-700/60 flex justify-end">
              <button
                type="button"
                onClick={() => setIsGithubModalOpen(false)}
                className={`px-4 py-2 rounded-xl text-xs font-bold border transition-colors cursor-pointer ${
                  isDark ? 'bg-[#142647] border-slate-700 text-slate-200 hover:bg-[#1a335e]' : 'bg-slate-100 border-slate-300 text-slate-800 hover:bg-slate-200'
                }`}
              >
                Close
              </button>
            </div>

          </div>
        </div>,
        document.body
      )}

    </div>
  );
}
