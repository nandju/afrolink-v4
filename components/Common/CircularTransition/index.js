import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import { useIsMobile } from '@/libs/useIsMobile';

const MAX_TRANSITION_MS = 2500; // auto-release if route events never fire
const EXIT_DELAY_MS = 800;

const CircularTransition = ({ children }) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [targetPage, setTargetPage] = useState('');
  const router = useRouter();
  const isMobile = useIsMobile();
  const isMounted = useRef(true);
  const exitTimeout = useRef(null);
  const lockTimeout = useRef(null);
  const navigationLock = useRef(false);

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
      if (exitTimeout.current) clearTimeout(exitTimeout.current);
      if (lockTimeout.current) clearTimeout(lockTimeout.current);
    };
  }, []);

  const releaseLock = useCallback(() => {
    navigationLock.current = false;
    if (isMounted.current) setIsTransitioning(false);
  }, []);

  useEffect(() => {
    if (!isMounted.current || typeof window === 'undefined') return;

    // Never subscribe to router events on mobile — let native
    // navigation run untouched to avoid pushState conflicts.
    if (isMobile) return;

    if (!router?.events) return;

    const pageLabels = {
      '/': 'Accueil',
      '/services': 'Services',
      '/work': 'Notre travail',
      '/insights': 'Actualités',
      '/afrolink': 'AfroLink',
      '/schedule-call': 'Planifier un appel',
    };

    const handleStart = (url) => {
      if (!isMounted.current || navigationLock.current) return;

      try {
        navigationLock.current = true;

        const path = typeof url === 'string' ? url.split('?')[0] : '';
        const pageName =
          pageLabels[path] ||
          path
            .replace('/', '')
            .replace(/-/g, ' ')
            .replace(/\b\w/g, (c) => c.toUpperCase());

        if (!isMounted.current) return;
        setTargetPage(pageName);
        setIsTransitioning(true);

        // Safety: release the lock even if complete/error never fires
        // (cancelled navigation, bfcache, aborted fetch, etc.)
        if (lockTimeout.current) clearTimeout(lockTimeout.current);
        lockTimeout.current = setTimeout(() => {
          if (isMounted.current) releaseLock();
        }, MAX_TRANSITION_MS);
      } catch {
        navigationLock.current = false;
      }
    };

    const handleComplete = () => {
      if (!isMounted.current) return;

      try {
        if (lockTimeout.current) clearTimeout(lockTimeout.current);
        if (exitTimeout.current) clearTimeout(exitTimeout.current);

        exitTimeout.current = setTimeout(() => {
          if (isMounted.current) releaseLock();
        }, EXIT_DELAY_MS);
      } catch {
        releaseLock();
      }
    };

    try {
      router.events.on('routeChangeStart', handleStart);
      router.events.on('routeChangeComplete', handleComplete);
      router.events.on('routeChangeError', handleComplete);
    } catch {
      // Router events unavailable — transitions simply won't run.
    }

    return () => {
      try {
        router?.events?.off('routeChangeStart', handleStart);
        router?.events?.off('routeChangeComplete', handleComplete);
        router?.events?.off('routeChangeError', handleComplete);
      } catch {
        // ignore
      }
      if (exitTimeout.current) clearTimeout(exitTimeout.current);
      if (lockTimeout.current) clearTimeout(lockTimeout.current);
      navigationLock.current = false;
    };
  }, [router, isMobile, releaseLock]);

  // On mobile/tablet: render children directly, zero overlay,
  // zero event interference with native navigation.
  if (isMobile) {
    return <>{children}</>;
  }

  return (
    <>
      <AnimatePresence mode="wait">
        {isTransitioning && (
          <motion.div
            key="page-transition"
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
