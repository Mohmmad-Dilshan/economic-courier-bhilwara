import React from 'react';
import { cn } from '@/lib/utils';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'bordered' | 'accent';
  hoverEffect?: boolean;
}

export function Card({
  className,
  variant = 'default',
  hoverEffect = false,
  children,
  ...props
}: CardProps) {
  const baseStyles = 'rounded-2xl transition-all duration-200';

  const variants = {
    default: 'bg-white border border-[var(--color-border-default)] shadow-[var(--shadow-sm)]',
    elevated: 'bg-white border border-[var(--color-border-subtle)] shadow-[var(--shadow-md)]',
    bordered: 'bg-white border-2 border-[var(--color-border-default)]',
    accent:
      'bg-white border border-[var(--color-border-accent)] shadow-[var(--shadow-sm)] ring-1 ring-[var(--color-accent-100)]',
  };

  const hoverStyles = hoverEffect
    ? 'hover:-translate-y-1 hover:shadow-[var(--shadow-lg)] hover:border-[var(--color-border-strong)]'
    : '';

  return (
    <div className={cn(baseStyles, variants[variant], hoverStyles, className)} {...props}>
      {children}
    </div>
  );
}

export function CardHeader({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('p-6 pb-3', className)} {...props}>
      {children}
    </div>
  );
}

export function CardContent({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('p-6 pt-0', className)} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('p-6 pt-3 border-t border-[var(--color-border-subtle)] flex items-center', className)}
      {...props}
    >
      {children}
    </div>
  );
}
