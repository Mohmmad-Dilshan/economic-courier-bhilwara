import React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'accent' | 'primary' | 'success' | 'warning' | 'neutral' | 'blue';
  size?: 'sm' | 'md';
  dot?: boolean;
}

export function Badge({
  className,
  variant = 'neutral',
  size = 'md',
  dot = false,
  children,
  ...props
}: BadgeProps) {
  const baseStyles = 'inline-flex items-center font-semibold rounded-full tracking-wide';

  const variants = {
    accent:
      'bg-[var(--color-accent-50)] text-[var(--color-accent-600)] border border-[var(--color-border-accent)]',
    primary:
      'bg-slate-100 text-[var(--color-primary-800)] border border-slate-200',
    success:
      'bg-[var(--color-success-bg)] text-[var(--color-success)] border border-green-200',
    warning:
      'bg-[var(--color-warning-bg)] text-[var(--color-warning)] border border-amber-200',
    blue:
      'bg-[var(--color-blue-50)] text-[var(--color-blue-700)] border border-[var(--color-blue-100)]',
    neutral:
      'bg-slate-100 text-slate-700 border border-slate-200',
  };

  const dotColors = {
    accent: 'bg-[var(--color-accent-600)]',
    primary: 'bg-[var(--color-primary-800)]',
    success: 'bg-[var(--color-success)]',
    warning: 'bg-[var(--color-warning)]',
    blue: 'bg-[var(--color-blue-600)]',
    neutral: 'bg-slate-500',
  };

  const sizes = {
    sm: 'text-[11px] px-2.5 py-0.5 gap-1.5',
    md: 'text-xs px-3 py-1 gap-2',
  };

  return (
    <span className={cn(baseStyles, variants[variant], sizes[size], className)} {...props}>
      {dot && (
        <span className={cn('w-1.5 h-1.5 rounded-full shrink-0', dotColors[variant])} />
      )}
      {children}
    </span>
  );
}
