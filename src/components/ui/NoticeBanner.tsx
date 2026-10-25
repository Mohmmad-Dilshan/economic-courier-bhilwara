import React from 'react';
import { AlertCircle, Info, ShieldAlert, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface NoticeBannerProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'demo' | 'pending' | 'warning' | 'info';
  title?: string;
  isDismissible?: boolean;
}

export function NoticeBanner({
  className,
  variant = 'demo',
  title,
  children,
  ...props
}: NoticeBannerProps) {
  const configs = {
    demo: {
      container:
        'bg-amber-50 border-amber-200 text-amber-900',
      icon: <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />,
      defaultTitle: 'Demonstration Mode Notice',
    },
    pending: {
      container:
        'bg-slate-50 border-slate-200 text-slate-700',
      icon: <Info className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />,
      defaultTitle: 'Client Confirmation Pending',
    },
    warning: {
      container:
        'bg-red-50 border-red-200 text-red-900',
      icon: <ShieldAlert className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />,
      defaultTitle: 'Important Advisory',
    },
    info: {
      container:
        'bg-blue-50 border-blue-200 text-blue-900',
      icon: <AlertCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />,
      defaultTitle: 'Information',
    },
  };

  const current = configs[variant];

  return (
    <div
      role="status"
      className={cn(
        'w-full flex items-start gap-3 p-3.5 rounded-xl border text-xs sm:text-sm leading-relaxed',
        current.container,
        className
      )}
      {...props}
    >
      {current.icon}
      <div className="flex-1">
        {title && <span className="font-bold block mb-0.5">{title}</span>}
        {!title && current.defaultTitle && (
          <span className="font-bold block mb-0.5">{current.defaultTitle}:</span>
        )}
        <div>{children}</div>
      </div>
    </div>
  );
}
