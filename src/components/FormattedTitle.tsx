import React from 'react';

interface FormattedTitleProps {
  title: string;
  className?: string;
  bracketClassName?: string;
}

export default function FormattedTitle({
  title,
  className = '',
  bracketClassName = '',
}: FormattedTitleProps) {
  if (!title || !title.includes('(')) {
    return <span className={className}>{title}</span>;
  }

  const match = title.match(/^(.*?)\s*(\([^)]*\))\s*$/);
  if (!match) {
    return <span className={className}>{title}</span>;
  }

  const [, mainPart, bracketPart] = match;

  return (
    <span className={className}>
      <span className="block">{mainPart}</span>
      <span className={`block whitespace-nowrap ${bracketClassName}`}>
        {bracketPart}
      </span>
    </span>
  );
}
