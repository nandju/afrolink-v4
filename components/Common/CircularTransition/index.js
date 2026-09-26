import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

const CircularTransition = ({ children }) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [targetPage, setTargetPage] = useState('');
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);
  const isMounted = useRef(true);
  const transitionTimeout = useRef(null);
  const navigationLock = useRef(false);

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
      if (transitionTimeout.current) {
        clearTimeout(transitionTimeout.current);
      }
    };
  }, []);

  useEffect(() => {
    // Safe mobile detection with null checks
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

  useEffect(() => {
    // Comprehensive safety checks
    if (!isMounted.current || typeof window === 'undefined') return;
    
    // Skip router events entirely on mobile to prevent interference
    if (isMobile) return;
    
    // Ensure router exists and has events
    if (!router || !router.events) {
      console.warn('Router or router.events not available');
      return;
    }

    const pageLabels = {
      '/': 'Accueil',
      '/services': 'Services',
      '/work': 'Notre travail',
      '/insights': 'Actualités',
      '/afrolink': 'AfroLink',
      '/schedule-call': 'Planifier un appel',
    };

    const handleStart = (url) => {
      // Multiple safety checks
      if (!isMounted.current || navigationLock.current || typeof window === 'undefined') {
        return;
      }
      
      try {
        // Lock navigation to prevent multiple triggers
        navigationLock.current = true;
        
        const path = url?.split('?')[0] || '';
        const pageName = pageLabels[path] ||
          path
            .replace('/', '')
            .replace(/-/g, ' ')
            .replace(/\b\w/g, (char) => char?.toUpperCase?.() || '');
        
        if (isMounted.current) {
          setTargetPage(pageName);
          setIsTransitioning(true);
        }
      } catch (error) {
        console.warn('Transition start error:', error);
        navigationLock.current = false;
      }
    };

    const handleComplete = () => {
      if (!isMounted.current) return;
      
      try {
        // Clear any existing timeout
        if (transitionTimeout.current) {
          clearTimeout(transitionTimeout.current);
        }
        
        // Reset transition state with delay
        transitionTimeout.current = setTimeout(() => {
          if (isMounted.current) {
            setIsTransitioning(false);
            navigationLock.current = false;
          }
        }, 800);
      } catch (error) {
        console.warn('Transition complete error:', error);
        // Fallback
        if (isMounted.current) {
          setIsTransitioning(false);
          navigationLock.current = false;
        }
      }
    };

    // Safe event listener setup
    try {
      router.events.on('routeChangeStart', handleStart);
      router.events.on('routeChangeComplete', handleComplete);
      router.events.on('routeChangeError', handleComplete);
    } catch (error) {
      console.warn('Router event listener setup error:', error);
    }

    return () => {
      try {
        if (router?.events) {
          router.events.off('routeChangeStart', handleStart);
          router.events.off('routeChangeComplete', handleComplete);
          router.events.off('routeChangeError', handleComplete);
        }
        if (transitionTimeout.current) {
          clearTimeout(transitionTimeout.current);
        }
        navigationLock.current = false;
      } catch (error) {
        console.warn('Router event cleanup error:', error);
      }
    };
  }, [router, isMobile]);

  // Disable transitions entirely on mobile to prevent navigation interference
  if (isMobile) {
    return <>{children}</>;
  }

  return (
    <>
      <AnimatePresence mode="wait">
        {isTransitioning && isMounted.current && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              background: 'var(--Background)',
              zIndex: 9999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              // Remove pointerEvents: 'none' to prevent navigation blocking
            }}
          >
            <motion.div
              initial={{ scale: 0, x: '-50%', y: '-50%' }}
              animate={{ scale: 200, x: '-50%', y: '-50%' }}
              exit={{ scale: 0, x: '-50%', y: '-50%' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: '80px',
                height: '80px',
                background: 'var(--accent-gradient)',
                borderRadius: '50%',
                transformOrigin: 'center',
              }}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
              style={{
                position: 'absolute',
                color: 'var(--white)',
                fontSize: '3rem',
                fontWeight: 900,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                zIndex: 10,
                textShadow: '0 0 30px rgba(226, 124, 0, 0.5)',
              }}
            >
              {targetPage}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </>
  );
};

export default CircularTransition;
