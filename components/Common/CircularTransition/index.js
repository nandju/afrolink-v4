import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

const CircularTransition = ({ children }) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [targetPage, setTargetPage] = useState('');
  const router = useRouter();

  useEffect(() => {
    const handleStart = (url) => {
      const path = url.split('?')[0];
      const pageName =
        path === '/'
          ? 'Accueil'
          : path.replace('/', '').charAt(0).toUpperCase() + path.slice(2);
      setTargetPage(pageName);
      setIsTransitioning(true);
    };

    const handleComplete = () => {
      setTimeout(() => setIsTransitioning(false), 500);
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router]);

  return (
    <>
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
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
              pointerEvents: 'none',
            }}
          >
            <motion.div
              initial={{ scale: 0, x: '-50%', y: '-50%' }}
              animate={{ scale: 300, x: '-50%', y: '-50%' }}
              exit={{ scale: 0, x: '-50%', y: '-50%' }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: '100px',
                height: '100px',
                background: 'var(--accent-gradient)',
                borderRadius: '50%',
                transformOrigin: 'center',
              }}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
              style={{
                position: 'absolute',
                color: 'var(--white)',
                fontSize: '4rem',
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
