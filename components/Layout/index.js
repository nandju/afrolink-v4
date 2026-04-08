import { useState } from 'react';
import { ReactLenis } from 'lenis/react';
import Footer from '@/components/UI/Footer';
import Preloader from '@/components/UI/Preloader';
import CircularTransition from '@/components/Common/CircularTransition';
import Header from '@/components/UI/Header';

const Layout = ({ children }) => {
  const [complete, setComplete] = useState(false);

  return (
    <ReactLenis root options={{ easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) }}>
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
