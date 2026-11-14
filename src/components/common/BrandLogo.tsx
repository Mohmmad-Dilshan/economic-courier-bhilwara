import React from 'react';
import Image from 'next/image';
import { getMediaUrl } from '@/lib/cloudinary';

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
    sm: { width: 105, height: 44, imgClass: 'h-7 sm:h-8' },
    md: { width: 130, height: 54, imgClass: 'h-8 sm:h-10 lg:h-11' },
    lg: { width: 160, height: 66, imgClass: 'h-11 sm:h-12 lg:h-14' },
  };

  const current = dimensions[size];

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <Image
        src={getMediaUrl(isDark ? '/assets/logo/ecs-logo-dark.png' : '/assets/logo/ecs-logo-header.webp', { type: 'image' })}
        alt="Economic Courier & eCS World Wide Express Bhilwara Official Logo"
        title="Economic Courier & eCS World Wide Express - Best Courier Service in Bhilwara"
        width={current.width}
        height={current.height}
        priority
        style={{ aspectRatio: `${current.width}/${current.height}` }}
        className={`${current.imgClass} w-auto object-contain transition-transform duration-150 hover:scale-[1.02]`}
      />
    </div>
  );
}
