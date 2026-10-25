import React, { forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'whatsapp';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] disabled:opacity-60 disabled:pointer-events-none cursor-pointer';

    const variants = {
      primary:
        'bg-[var(--color-accent-600)] text-white hover:bg-[var(--color-accent-500)] shadow-sm hover:shadow-md hover:shadow-red-500/20 focus-visible:outline-[var(--color-accent-600)]',
      secondary:
        'bg-[var(--color-primary-800)] text-white hover:bg-[var(--color-primary-700)] shadow-sm hover:shadow-md focus-visible:outline-[var(--color-primary-800)]',
      outline:
        'border border-[var(--color-border-default)] bg-white text-[var(--color-text-primary)] hover:bg-[var(--color-bg-secondary)] hover:border-[var(--color-border-strong)] focus-visible:outline-[var(--color-primary-700)]',
      ghost:
        'bg-transparent text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-secondary)] hover:text-[var(--color-text-primary)] focus-visible:outline-[var(--color-primary-700)]',
      whatsapp:
        'bg-[#25D366] text-white hover:bg-[#20BD5A] shadow-sm hover:shadow-md hover:shadow-emerald-500/20 focus-visible:outline-[#25D366]',
    };

    const sizes = {
      sm: 'text-xs px-3.5 py-2 gap-1.5',
      md: 'text-sm px-5 py-2.5 gap-2',
      lg: 'text-base px-6 py-3.5 gap-2.5',
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {isLoading && (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {!isLoading && leftIcon && <span className="shrink-0">{leftIcon}</span>}
        <span>{children}</span>
        {!isLoading && rightIcon && <span className="shrink-0">{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = 'Button';
