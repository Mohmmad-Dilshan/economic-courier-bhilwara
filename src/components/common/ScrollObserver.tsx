'use client';

// Lightweight no-op ScrollObserver: all elements render instantly at 100% opacity in pure CSS
// Eliminates forced reflows, mutation observer CPU thrashing, and main-thread blocking
export function ScrollObserver() {
  return null;
}

export default ScrollObserver;
