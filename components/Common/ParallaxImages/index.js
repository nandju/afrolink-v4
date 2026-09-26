import { useRef, useEffect, useState } from 'react';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from 'framer-motion';
import { wrap } from '@motionone/utils';

function ParallaxText({ children, baseVelocity = 100 }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], { clamp: false });

  const x = useTransform(baseX, (v) => `${wrap(-50, 50, v)}%`);

  const directionFactor = useRef(1);
  const lastTouchY = useRef(0);
  const touchVelocity = useRef(0);
  const isMounted = useRef(true);
  const [isMobile, setIsMobile] = useState(false);
  const animationFrameId = useRef(null);
  const touchListenersAttached = useRef(false);

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  useEffect(() => {
    // Safe mobile detection
    if (typeof window === 'undefined') return;
    
    const checkMobile = () => {
      try {
        const mobile = window.innerWidth <= 768 || 'ontouchstart' in window;
        setIsMobile(mobile);
        return mobile;
      } catch (error) {
        console.warn('Mobile detection error:', error);
        setIsMobile(false);
        return false;
      }
    };
    
    const isMobileDevice = checkMobile();
    
    // Disable touch events entirely on mobile to prevent navigation interference
    if (isMobileDevice) {
      return;
    }
    
    let isTracking = false;
    
    const handleTouchStart = (e) => {
      if (!isMounted.current || !isMobileDevice) return;
      
      try {
        // Don't track if touching navigation elements
        const target = e.target;
        if (target?.closest('a') || target?.closest('button') || target?.closest('[role="button"]')) {
          return;
        }
        
        isTracking = true;
        lastTouchY.current = e.touches[0]?.clientY || 0;
      } catch (error) {
        console.warn('Touch start error:', error);
        isTracking = false;
      }
    };

    const handleTouchMove = (e) => {
      if (!isMounted.current || !isMobileDevice || !isTracking) return;
      
      try {
        // Stop tracking if we hit navigation elements
        const target = e.target;
        if (target?.closest('a') || target?.closest('button') || target?.closest('[role="button"]')) {
          isTracking = false;
          return;
        }
        
        const currentTouchY = e.touches[0]?.clientY;
        if (currentTouchY !== undefined && lastTouchY.current !== undefined) {
          const deltaY = lastTouchY.current - currentTouchY;
          touchVelocity.current = deltaY;
          lastTouchY.current = currentTouchY;
        }
      } catch (error) {
        console.warn('Touch move error:', error);
        isTracking = false;
      }
    };

    const handleTouchEnd = () => {
      if (!isMounted.current || !isMobileDevice) return;
      
      try {
        isTracking = false;
        touchVelocity.current = 0;
      } catch (error) {
        console.warn('Touch end error:', error);
      }
    };

    // Only attach listeners on desktop
    if (!isMobileDevice && !touchListenersAttached.current) {
      try {
        window.addEventListener('touchstart', handleTouchStart, { passive: true });
        window.addEventListener('touchmove', handleTouchMove, { passive: true });
        window.addEventListener('touchend', handleTouchEnd, { passive: true });
        touchListenersAttached.current = true;
      } catch (error) {
        console.warn('Touch listener setup error:', error);
      }
    }

    return () => {
      try {
        if (touchListenersAttached.current) {
          window.removeEventListener('touchstart', handleTouchStart);
          window.removeEventListener('touchmove', handleTouchMove);
          window.removeEventListener('touchend', handleTouchEnd);
          touchListenersAttached.current = false;
        }
      } catch (error) {
        console.warn('Touch listener cleanup error:', error);
      }
    };
  }, [isMobile]);

  useAnimationFrame((t, delta) => {
    if (!isMounted.current) return;
    
    try {
      let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
      
      // Use scroll velocity on desktop, ignore touch on mobile
      let currentVelocity = velocityFactor.get();
      
      // Only use touch velocity on desktop (not mobile) to prevent navigation interference
      if (!isMobile && Math.abs(touchVelocity.current) > Math.abs(currentVelocity * 100)) {
        currentVelocity = touchVelocity.current / 400; // Very reduced sensitivity
      }
      
      if (currentVelocity < 0) {
        directionFactor.current = -1;
      } else if (currentVelocity > 0) {
        directionFactor.current = 1;
      }
      
      moveBy += directionFactor.current * moveBy * currentVelocity;
      baseX.set(baseX.get() + moveBy);
    } catch (error) {
      console.warn('Animation frame error:', error);
    }
  });

  return (
    <div 
      className="parallax" 
      style={{ 
        overflow: 'hidden', 
        // Remove WebkitOverflowScrolling to prevent navigation interference
        touchAction: 'none', // Prevent touch actions from interfering with navigation
      }}
    >
      <motion.div 
        className="scroller" 
        style={{ 
          x, 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          willChange: 'transform',
          // Remove pointer events blocking
        }}
      >
        <span style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
      </motion.div>
    </div>
  );
}

export default ParallaxText;
