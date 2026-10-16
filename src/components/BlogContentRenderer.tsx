import React from 'react';

interface BlogContentRendererProps {
  content: string;
  className?: string;
}

export function renderFormattedText(text: string): React.ReactNode {
  // Regex that captures: [link](url), **bold**, *italic*
  const pattern = /(\[.*?\]\(.*?\)|\*\*.*?\*\*|\*.*?\*)/g;
  const parts = text.split(pattern);

  return parts.map((part, i) => {
    if (!part) return null;

    // Link: [label](url)
    const linkMatch = part.match(/^\[(.*?)\]\((.*?)\)$/);
    if (linkMatch) {
      return (
        <a
          key={i}
          href={linkMatch[2]}
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple hover:underline font-semibold"
        >
          {linkMatch[1]}
        </a>
      );
    }

    // Bold: **text**
    if (part.startsWith('**') && part.endsWith('**') && part.length >= 4) {
      return (
        <strong key={i} className="font-bold text-navy dark:text-white">
          {part.slice(2, -2)}
        </strong>
      );
    }

    // Italic: *text*
    if (part.startsWith('*') && part.endsWith('*') && part.length >= 2) {
      return (
        <em key={i} className="italic text-navy/90 dark:text-slate-200">
          {part.slice(1, -1)}
        </em>
      );
    }

    return part;
  });
}

export default function BlogContentRenderer({ content, className = "" }: BlogContentRendererProps) {
  if (!content || !content.trim()) {
    return <p className="text-navy-muted italic text-sm">No content provided.</p>;
  }

  // Split into raw lines while preserving structure
  const lines = content.split('\n');
  const elements: React.ReactNode[] = [];
  let currentList: { type: 'ul' | 'ol'; items: string[] } | null = null;

  const flushList = (keyIndex: number) => {
    if (!currentList) return;
    if (currentList.type === 'ul') {
      elements.push(
        <ul key={`ul-${keyIndex}`} className="list-disc pl-5 my-3 space-y-1.5 text-sm sm:text-base text-navy-muted dark:text-slate-300">
          {currentList.items.map((item, itemIdx) => (
            <li key={itemIdx}>{renderFormattedText(item)}</li>
          ))}
        </ul>
      );
    } else {
      elements.push(
        <ol key={`ol-${keyIndex}`} className="list-decimal pl-5 my-3 space-y-1.5 text-sm sm:text-base text-navy-muted dark:text-slate-300">
          {currentList.items.map((item, itemIdx) => (
            <li key={itemIdx}>{renderFormattedText(item)}</li>
          ))}
        </ol>
      );
    }
    currentList = null;
  };

  lines.forEach((line, index) => {
    const trimmed = line.trim();

    // Empty line
    if (!trimmed) {
      flushList(index);
      return;
    }

    // Horizontal Rule / Divider (--- or *** or ___)
    if (/^(\-{3,}|\*{3,}|_{3,})$/.test(trimmed)) {
      flushList(index);
      elements.push(
        <div key={`hr-${index}`} className="my-6">
          <hr className="border-0 h-px bg-gradient-to-r from-transparent via-purple/40 to-transparent" />
        </div>
      );
      return;
    }

    // Heading 1: # Heading
    if (/^#\s+/.test(trimmed)) {
      flushList(index);
      const text = trimmed.replace(/^#\s+/, '');
      elements.push(
        <h2 key={`h1-${index}`} className="text-2xl sm:text-3xl font-extrabold font-display text-navy dark:text-white tracking-tight mt-6 mb-3">
          {renderFormattedText(text)}
        </h2>
      );
      return;
    }

    // Heading 2: ## Heading
    if (/^##\s+/.test(trimmed)) {
      flushList(index);
      const text = trimmed.replace(/^##\s+/, '');
      elements.push(
        <h3 key={`h2-${index}`} className="text-xl sm:text-2xl font-bold font-display text-navy dark:text-white tracking-tight mt-5 mb-2 pb-1 border-b border-card-border/60">
          {renderFormattedText(text)}
        </h3>
      );
      return;
    }

    // Heading 3: ### Heading
    if (/^###\s+/.test(trimmed)) {
      flushList(index);
      const text = trimmed.replace(/^###\s+/, '');
      elements.push(
        <h4 key={`h3-${index}`} className="text-lg font-bold font-display text-navy dark:text-white mt-4 mb-1.5">
          {renderFormattedText(text)}
        </h4>
      );
      return;
    }

    // Blockquote: > Quote
    if (/^>\s+/.test(trimmed)) {
      flushList(index);
      const text = trimmed.replace(/^>\s+/, '');
      elements.push(
        <blockquote key={`quote-${index}`} className="p-4 bg-purple/5 dark:bg-purple/10 border-l-4 border-purple rounded-r-xl my-3 text-sm italic text-navy dark:text-slate-200">
          {renderFormattedText(text)}
        </blockquote>
      );
      return;
    }

    // Bullet List item: - item or * item
    if (/^[-*]\s+/.test(trimmed)) {
      const text = trimmed.replace(/^[-*]\s+/, '');
      if (!currentList || currentList.type !== 'ul') {
        flushList(index);
        currentList = { type: 'ul', items: [text] };
      } else {
        currentList.items.push(text);
      }
      return;
    }

    // Numbered Item with title and description (e.g. "1. Step One: Description...")
    const numberedBoxMatch = trimmed.match(/^[0-9]+\.\s+([^:]+):(.*)$/);
    if (numberedBoxMatch) {
      flushList(index);
      const title = numberedBoxMatch[1].trim();
      const desc = numberedBoxMatch[2].trim();
      elements.push(
        <div key={`box-${index}`} className="p-4 bg-section-alt dark:bg-slate-900/50 border-l-4 border-purple rounded-r-xl flex flex-col gap-1.5 shadow-sm my-2.5">
          <h4 className="text-sm font-bold text-navy dark:text-white">{title}</h4>
          {desc && <p className="text-xs text-navy-muted dark:text-slate-300 leading-relaxed">{renderFormattedText(desc)}</p>}
        </div>
      );
      return;
    }

    // Standard numbered list: 1. Item
    if (/^[0-9]+\.\s+/.test(trimmed)) {
      const text = trimmed.replace(/^[0-9]+\.\s+/, '');
      if (!currentList || currentList.type !== 'ol') {
        flushList(index);
        currentList = { type: 'ol', items: [text] };
      } else {
        currentList.items.push(text);
      }
      return;
    }

    // Plain Paragraph
    flushList(index);
    elements.push(
      <p key={`p-${index}`} className="text-sm sm:text-base text-navy-muted dark:text-slate-300 leading-relaxed my-1">
        {renderFormattedText(trimmed)}
      </p>
    );
  });

  flushList(lines.length);

  return (
    <div className={`flex flex-col gap-3 font-sans ${className}`}>
      {elements}
    </div>
  );
}
