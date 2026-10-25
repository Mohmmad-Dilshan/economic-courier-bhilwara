import React, { forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: string;
  leftIcon?: React.ReactNode;
  rightElement?: React.ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      label,
      helperText,
      error,
      leftIcon,
      rightElement,
      id,
      disabled,
      ...props
    },
    ref
  ) => {
    const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

    return (
      <div className="w-full flex flex-col gap-1.5 text-left">
        {label && (
          <label
            htmlFor={inputId}
            className="text-xs font-semibold text-[var(--color-primary-800)] uppercase tracking-wider"
          >
            {label}
          </label>
        )}
        <div className="relative flex items-center">
          {leftIcon && (
            <div className="absolute left-3.5 text-[var(--color-text-muted)] pointer-events-none shrink-0">
              {leftIcon}
            </div>
          )}
          <input
            ref={ref}
            id={inputId}
            disabled={disabled}
            aria-invalid={!!error}
            aria-describedby={error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined}
            className={cn(
              'w-full bg-white border border-[var(--color-border-default)] rounded-xl px-4 py-2.5 text-sm text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] transition-all duration-150',
              'focus:outline-none focus:border-[var(--color-accent-600)] focus:ring-2 focus:ring-[var(--color-accent-100)]',
              'disabled:bg-[var(--color-bg-tertiary)] disabled:text-[var(--color-text-muted)] disabled:cursor-not-allowed',
              Boolean(leftIcon) && 'pl-10',
              Boolean(rightElement) && 'pr-24',
              Boolean(error) && 'border-red-500 focus:border-red-500 focus:ring-red-100',
              className
            )}
            {...props}
          />
          {rightElement && (
            <div className="absolute right-2 flex items-center">{rightElement}</div>
          )}
        </div>
        {error && (
          <span id={`${inputId}-error`} className="text-xs text-red-600 font-medium">
            {error}
          </span>
        )}
        {!error && helperText && (
          <span id={`${inputId}-helper`} className="text-xs text-[var(--color-text-muted)]">
            {helperText}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
