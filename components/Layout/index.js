import { useState, useEffect, useRef } from 'react';
import { ReactLenis } from 'lenis/react';
import Footer from '@/components/UI/Footer';
import Preloader from '@/components/UI/Preloader';
import CircularTransition from '@/components/Common/CircularTransition';
import Header from '@/components/UI/Header';

const Layout = ({ children }) => {
  const [complete, setComplete] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const isMounted = useRef(true);

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    // Safe mobile detection
    if (typeof window === 'undefined') return;
    
    const checkMobile = () => {
      try {
        setIsMobile(window.innerWidth <= 768 || 'ontouchstart' in window);
      } catch (error) {
        console.warn('Mobile detection error:', error);
        setIsMobile(false);
      }
    };
    
    checkMobile();
    
    try {
      window.addEventListener('resize', checkMobile, { passive: true });
    } catch (error) {
      console.warn('Resize listener error:', error);
    }
    
    return () => {
      try {
        window.removeEventListener('resize', checkMobile);
      } catch (error) {
        console.warn('Resize cleanup error:', error);
      }
    };
  }, []);

  // Disable Lenis entirely on mobile to prevent navigation interference
  if (isMobile) {
    return (
      <>
        <Preloader setComplete={setComplete} />
        <div className={complete ? 'complete' : 'not_complete'}>
          <Header />
          <CircularTransition>
            <div style={{ paddingTop: '80px' }}>
              {children}
            </div>
          </CircularTransition>
          <Footer />
        </div>
      </>
    );
  }

  return (
    <ReactLenis 
      root 
      options={{
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        smoothTouch: false, // Always disabled to prevent navigation interference
        touchMultiplier: 0, // Completely disable touch effects
        normalizeWheel: true,
        wheelMultiplier: 0.8, // Reduced sensitivity
        duration: 1.2,
        // Additional safety options
        prevent: (node) => {
          // Prevent Lenis from interfering with navigation elements
          if (!node || !isMounted.current) return false;
          try {
            return node.tagName === 'A' || 
                   node.tagName === 'BUTTON' || 
                   node.closest('a') || 
                   node.closest('button') ||
                   node.closest('[role="button"]');
          } catch (error) {
            return false;
          }
        },
      }}
    >
      <Preloader setComplete={setComplete} />
      <div className={complete ? 'complete' : 'not_complete'}>
        <Header />
        <CircularTransition>
          <div style={{ paddingTop: '80px' }}>
            {children}
          </div>
        </CircularTransition>
        <Footer />
      </div>
    </ReactLenis>
  );
};

export default Layout;
