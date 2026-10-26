import React from 'react';
import Image from 'next/image';

interface BrandLogoProps {
  variant?: 'light' | 'dark';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function BrandLogo({
  variant = 'light',
  className = '',
  size = 'md',
}: BrandLogoProps) {
  const isDark = variant === 'dark';

  // Exact lockup dimensions matching the reference UI
  const dimensions = {
    sm: { width: 105, height: 44, imgClass: 'h-8' },
    md: { width: 130, height: 54, imgClass: 'h-10 sm:h-11' },
    lg: { width: 160, height: 66, imgClass: 'h-12 sm:h-14' },
  };

  const current = dimensions[size];

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <Image
        src={isDark ? '/assets/logo/ecs-logo-dark.png' : '/assets/logo/ecs-logo-header.png'}
        alt="eCS World Wide Express - Economic Courier Bhilwara"
        width={current.width}
        height={current.height}
        unoptimized
        priority
        className={`${current.imgClass} w-auto object-contain transition-transform duration-150 hover:scale-[1.02]`}
      />
    </div>
  );
}
