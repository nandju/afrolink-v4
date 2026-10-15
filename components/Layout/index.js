import { useState } from 'react';
import { ReactLenis } from 'lenis/react';
import Footer from '@/components/UI/Footer';
import Preloader from '@/components/UI/Preloader';
import CircularTransition from '@/components/Common/CircularTransition';
import Header from '@/components/UI/Header';
import { useIsMobile } from '@/libs/useIsMobile';

const Layout = ({ children }) => {
  const [complete, setComplete] = useState(false);
  const isMobile = useIsMobile();

  const content = (
    <>
      <Preloader setComplete={setComplete} />
      <div className={complete ? 'complete' : 'not_complete'}>
        <Header />
        <CircularTransition>
          <div style={{ paddingTop: '80px' }}>{children}</div>
        </CircularTransition>
        <Footer />
      </div>
    </>
  );

  // Mobile/tablet: no Lenis at all — native scrolling only, so the
  // smooth-scroll RAF loop can never interfere with navigation.
  if (isMobile) {
    return content;
  }

  return (
    <ReactLenis
      root
      options={{
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        smoothTouch: false,
        normalizeWheel: true,
        wheelMultiplier: 0.8,
        duration: 1.2,
        prevent: (node) => {
          // Never hijack wheel/scroll events on interactive elements.
          if (!node || typeof node.closest !== 'function') return false;
          try {
            return Boolean(
              node.closest('a, button, [role="button"], nav, input, textarea, select'),
            );
          } catch {
            return false;
          }
        },
      }}
    >
      {content}
    </ReactLenis>
  );
};

export default Layout;
