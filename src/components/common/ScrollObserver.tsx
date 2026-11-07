'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function ScrollObserver() {
  const pathname = usePathname();

  useEffect(() => {
    // If navigation to home page happens without a hash, ensure top of page
    if (pathname === '/' && !window.location.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  }, [pathname]);

  return null;
}

export default ScrollObserver;
