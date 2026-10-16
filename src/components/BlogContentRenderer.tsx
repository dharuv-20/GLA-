import React from 'react';

interface BlogContentRendererProps {
  content: string;
  className?: string;
}

/**
 * Strips dangerous tags and attributes from user-supplied HTML.
 */
export function sanitizeBlogHtml(rawHtml: string): string {
  if (!rawHtml) return '';

  return rawHtml
    // Remove scripts, styles, objects, embeds, iframes, forms
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
    .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '')
    .replace(/<object\b[^<]*(?:(?!<\/object>)<[^<]*)*<\/object>/gi, '')
    .replace(/<embed\b[^>]*>/gi, '')
    .replace(/<form\b[^<]*(?:(?!<\/form>)<[^<]*)*<\/form>/gi, '')
    // Remove inline event handlers like onload, onclick, onerror
    .replace(/\son\w+\s*=\s*(['"]).*?\1/gi, '')
    .replace(/\son\w+\s*=\s*[^>\s]+/gi, '')
    // Remove javascript: hrefs
    .replace(/href\s*=\s*(['"])javascript:.*?\1/gi, 'href="#"')
    // Ensure all <a> tags open securely in new tab
    .replace(/<a\b(?![^>]*target=)([^>]*)>/gi, '<a target="_blank" rel="noopener noreferrer"$1>')
    .replace(/<a\b(?![^>]*rel=)([^>]*target="_blank"[^>]*)>/gi, '<a rel="noopener noreferrer"$1>');
}

/**
 * Inline markdown parser for bold, italic, and links.
 */
function parseInlineMarkdown(text: string): string {
  return text
    // Links: [Label](url)
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
    // Bold: **text**
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    // Italic: *text*
    .replace(/\*([^*]+)\*/g, '<em>$1</em>');
}

/**
 * Converts legacy plain-text or markdown blog bodies into clean semantic HTML.
 */
export function legacyMarkdownToHtml(md: string): string {
  if (!md || !md.trim()) return '';

  // If the content already contains rich HTML tags, return it sanitized directly
  if (/<(p|h[1-6]|ul|ol|li|blockquote|div|hr|strong|em|table)\b[^>]*>/i.test(md)) {
    return sanitizeBlogHtml(md);
  }

  const lines = md.split('\n');
  const output: string[] = [];
  let inUl = false;
  let inOl = false;

  for (let i = 0; i < lines.length; i++) {
    const rawLine = lines[i];
    const trimmed = rawLine.trim();

    // Empty line separates blocks
    if (!trimmed) {
      if (inUl) { output.push('</ul>'); inUl = false; }
      if (inOl) { output.push('</ol>'); inOl = false; }
      continue;
    }

    // Horizontal Rule / Divider (--- or *** or ___)
    if (/^(\-{3,}|\*{3,}|_{3,})$/.test(trimmed)) {
      if (inUl) { output.push('</ul>'); inUl = false; }
      if (inOl) { output.push('</ol>'); inOl = false; }
      output.push('<hr />');
      continue;
    }

    // Heading 1: # Heading
    if (/^#\s+/.test(trimmed)) {
      if (inUl) { output.push('</ul>'); inUl = false; }
      if (inOl) { output.push('</ol>'); inOl = false; }
      output.push(`<h2>${parseInlineMarkdown(trimmed.replace(/^#\s+/, ''))}</h2>`);
      continue;
    }

    // Heading 2: ## Heading
    if (/^##\s+/.test(trimmed)) {
      if (inUl) { output.push('</ul>'); inUl = false; }
      if (inOl) { output.push('</ol>'); inOl = false; }
      output.push(`<h2>${parseInlineMarkdown(trimmed.replace(/^##\s+/, ''))}</h2>`);
      continue;
    }

    // Heading 3: ### Heading
    if (/^###\s+/.test(trimmed)) {
      if (inUl) { output.push('</ul>'); inUl = false; }
      if (inOl) { output.push('</ol>'); inOl = false; }
      output.push(`<h3>${parseInlineMarkdown(trimmed.replace(/^###\s+/, ''))}</h3>`);
      continue;
    }

    // Blockquote: > Quote
    if (/^>\s+/.test(trimmed)) {
      if (inUl) { output.push('</ul>'); inUl = false; }
      if (inOl) { output.push('</ol>'); inOl = false; }
      output.push(`<blockquote>${parseInlineMarkdown(trimmed.replace(/^>\s+/, ''))}</blockquote>`);
      continue;
    }

    // Numbered Feature Box: 1. Title: Description
    const boxMatch = trimmed.match(/^[0-9]+\.\s+([^:]+):(.*)$/);
    if (boxMatch) {
      if (inUl) { output.push('</ul>'); inUl = false; }
      if (inOl) { output.push('</ol>'); inOl = false; }
      const boxTitle = boxMatch[1].trim();
      const boxDesc = boxMatch[2].trim();
      output.push(
        `<div class="blog-callout-box"><h4 class="font-bold text-sm mb-1">${boxTitle}</h4><p class="text-xs leading-relaxed m-0">${parseInlineMarkdown(boxDesc)}</p></div>`
      );
      continue;
    }

    // Bullet List item: - item or * item
    if (/^[-*]\s+/.test(trimmed)) {
      if (inOl) { output.push('</ol>'); inOl = false; }
      if (!inUl) { output.push('<ul>'); inUl = true; }
      output.push(`<li>${parseInlineMarkdown(trimmed.replace(/^[-*]\s+/, ''))}</li>`);
      continue;
    }

    // Numbered list item: 1. item
    if (/^[0-9]+\.\s+/.test(trimmed)) {
      if (inUl) { output.push('</ul>'); inUl = false; }
      if (!inOl) { output.push('<ol>'); inOl = true; }
      output.push(`<li>${parseInlineMarkdown(trimmed.replace(/^[0-9]+\.\s+/, ''))}</li>`);
      continue;
    }

    // Heuristic for standalone sub-headers (short capitalized line without trailing punctuation)
    if (
      trimmed.length < 55 &&
      /^[A-Z][A-Za-z0-9\s,&-]+$/.test(trimmed) &&
      !/[.?!]$/.test(trimmed) &&
      i > 0 &&
      !lines[i - 1].trim()
    ) {
      if (inUl) { output.push('</ul>'); inUl = false; }
      if (inOl) { output.push('</ol>'); inOl = false; }
      output.push(`<h3>${trimmed}</h3>`);
      continue;
    }

    // Regular Paragraph
    if (inUl) { output.push('</ul>'); inUl = false; }
    if (inOl) { output.push('</ol>'); inOl = false; }
    output.push(`<p>${parseInlineMarkdown(trimmed)}</p>`);
  }

  if (inUl) output.push('</ul>');
  if (inOl) output.push('</ol>');

  return sanitizeBlogHtml(output.join(''));
}

/**
 * Retained for backward-compatibility with any external components.
 */
export function renderFormattedText(text: string): React.ReactNode {
  const pattern = /(\[.*?\]\(.*?\)|\*\*.*?\*\*|\*.*?\*)/g;
  const parts = text.split(pattern);

  return parts.map((part, i) => {
    if (!part) return null;

    const linkMatch = part.match(/^\[(.*?)\]\((.*?)\)$/);
    if (linkMatch) {
      return (
        <a
          key={i}
          href={linkMatch[2]}
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-600 dark:text-purple-400 hover:underline font-semibold"
        >
          {linkMatch[1]}
        </a>
      );
    }

    if (part.startsWith('**') && part.endsWith('**') && part.length >= 4) {
      return (
        <strong key={i} className="font-bold text-slate-900 dark:text-white">
          {part.slice(2, -2)}
        </strong>
      );
    }

    if (part.startsWith('*') && part.endsWith('*') && part.length >= 2) {
      return (
        <em key={i} className="italic text-slate-700 dark:text-slate-200">
          {part.slice(1, -1)}
        </em>
      );
    }

    return part;
  });
}

export default function BlogContentRenderer({ content, className = '' }: BlogContentRendererProps) {
  if (!content || !content.trim()) {
    return <p className="text-slate-400 italic text-sm py-4">No content provided.</p>;
  }

  // Ensure content is formatted as safe HTML (either converted from markdown or sanitized direct HTML)
  const isHtml = /<(p|h[1-6]|ul|ol|li|blockquote|div|hr|strong|em|table)\b[^>]*>/i.test(content);
  const cleanHtml = isHtml ? sanitizeBlogHtml(content) : legacyMarkdownToHtml(content);

  return (
    <div
      className={`blog-rendered-content font-sans transition-colors duration-200 ${className}`}
      dangerouslySetInnerHTML={{ __html: cleanHtml }}
    />
  );
}
