import Image from 'next/image';
import { motion } from 'framer-motion';
import MaskText from '@/components/Common/MaskText';
import GetStartedButton from '@/components/Common/GetStartedButton';
import icChevronRight from '@/public/svgs/ic_chevron_right.svg';
import gridBackground from '@/public/images/grid_background.png';
import { useIsMobile } from '@/libs/useIsMobile';
import { mobileParagraphPhrases, mobilePhrases, paragraphPhrases, phrases } from './constants';

const HeroSection = () => {
  const isMobile = useIsMobile();

  return (
    <section style={{ 
      position: 'relative',
      padding: isMobile ? '4rem 0' : '6rem 0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      background: 'var(--bg)',
      overflow: 'hidden'
    }}>
      {/* Decorative Grid BG */}
      <div 
        style={{ 
          position: 'absolute', 
          inset: 0, 
          backgroundImage: `url(${gridBackground.src})`, 
          backgroundSize: '100% auto', 
          backgroundPosition: 'top', 
          opacity: 0.3,
          pointerEvents: 'none'
        }} 
      />

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          maxWidth: '80rem',
          width: '90%',
          margin: '0 auto',
          textAlign: 'center',
          position: 'relative',
          zIndex: 2,
        }}
      >
        {/* Modern Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            display: 'inline-flex',
            padding: '0.5rem 1rem',
            alignItems: 'center',
            gap: '0.75rem',
            borderRadius: '100px',
            border: '1px solid var(--border)',
            background: 'var(--bg-surface)',
            backdropFilter: 'blur(12px)',
            marginBottom: '2.5rem',
            boxShadow: 'var(--card-shadow)',
          }}
        >
          <span style={{ 
            background: 'var(--accent-gradient)', 
            padding: '0.15rem 0.65rem', 
            borderRadius: '100px', 
            fontSize: '0.75rem', 
            fontWeight: 700, 
            color: '#fff',
            textTransform: 'uppercase'
          }}>
            Nouveau
          </span>
          <span style={{ color: 'var(--text)', fontSize: '0.9rem', fontWeight: 500 }}>L'agence AfroLink 2.0 est là</span>
          <Image src={icChevronRight} alt="Arrow" style={{ width: '12px' }} />
        </motion.div>

        {/* Hero Headline */}
        <div
          className="hero-text-container"
          style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: isMobile ? '1rem' : '2rem', 
            marginBottom: '3rem',
            maxWidth: '65rem'
          }}
        >
          {isMobile ? (
            <>
              <MaskText phrases={mobilePhrases} tag="h1" />
              <div style={{ transform: 'translateY(-10px)' }}>
                 <MaskText phrases={mobileParagraphPhrases} tag="p" />
              </div>
            </>
          ) : (
            <>
              <MaskText phrases={phrases} tag="h1" />
              <div style={{ transform: 'translateY(-20px)' }}>
                <MaskText phrases={paragraphPhrases} tag="p" />
              </div>
            </>
          )}
        </div>

        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.5, delay: 0.4 }}
        >
          <GetStartedButton padding="1.15rem 2.8rem" />
        </motion.div>
      </div>

      <style>{`
        .hero-text-container h1 { 
          font-size: clamp(3rem, 8vw, 7.5rem); 
          font-weight: 800; 
          line-height: 1; 
          color: var(--text);
          letter-spacing: -0.02em;
        }
        .hero-text-container p { 
          max-width: 45rem; 
          color: var(--text-muted); 
          font-size: clamp(1rem, 2vw, 1.4rem); 
          font-weight: 400; 
          margin: 0 auto;
          line-height: 1.5;
        }
        @media (max-width: 768px) {
          .hero-text-container h1 { font-size: 2.8rem !important; }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
