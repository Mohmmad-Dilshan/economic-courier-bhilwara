'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function ScrollObserver() {
  const pathname = usePathname();

  useEffect(() => {
    // Respect user's reduced-motion preference
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.querySelectorAll('.reveal-init').forEach((el) => {
        el.classList.add('reveal-active');
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-active');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '0px 0px -40px 0px',
        threshold: 0.08,
      }
    );

    const observeElements = () => {
      const elements = document.querySelectorAll('.reveal-init:not(.reveal-active)');
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        // If element is already visible above the fold on initial load, activate with rAF so entrance transition plays
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          requestAnimationFrame(() => {
            el.classList.add('reveal-active');
          });
        } else {
          observer.observe(el);
        }
      });
    };

    // Run on mount and after short tick for painted DOM
    observeElements();
    const timer = setTimeout(observeElements, 60);

    // MutationObserver auto-observes any dynamically mounted DOM nodes
    const mutationObserver = new MutationObserver(() => {
      observeElements();
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      clearTimeout(timer);
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, [pathname]);

  return null;
}

export default ScrollObserver;
