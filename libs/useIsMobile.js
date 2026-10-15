import { useEffect, useState } from 'react';

const detectMobile = () => {
  if (typeof window === 'undefined') return false;
  try {
    return (
      window.innerWidth <= 768 ||
      'ontouchstart' in window ||
      (typeof navigator !== 'undefined' && navigator.maxTouchPoints > 0) ||
      window.matchMedia?.('(pointer: coarse)')?.matches === true
    );
  } catch {
    return window.innerWidth <= 768;
  }
};

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleResize = () => {
      try {
        setIsMobile(detectMobile());
      } catch {
        setIsMobile(false);
      }
    };

    handleResize();

    try {
      window.addEventListener('resize', handleResize, { passive: true });
      return () => window.removeEventListener('resize', handleResize);
    } catch {
      return undefined;
    }
  }, []);

  return isMobile;
};
