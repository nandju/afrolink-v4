import Image from 'next/image';
import { motion } from 'framer-motion';
import financialFreedomBanner from '@/public/images/financial_freedom_banner.png';
import freedomMobileBanner from '@/public/images/freedom_mobile_banner.png';
import MaskText from '@/components/Common/MaskText';
import RevealCover from '@/components/Common/RevealCover';
import { useIsMobile } from '@/libs/useIsMobile';
import {
  desktopBriefNotePhrase,
  desktopHeaderPhrase,
  desktopParagraphPhrase,
  edges,
  mobileBriefNotePhrase,
  mobileHeaderPhrase,
  mobileParagraphPhrase,
} from './constants';

const imageVariants = {
  hidden: { scale: 1.6 },
  visible: { scale: 1, transition: { duration: 1.4, ease: [0.6, 0.05, -0.01, 0.9], delay: 0.2 } },
};

const FinancialFreedom = () => {
  const isMobile = useIsMobile();

  return (
    <section style={{ marginTop: '11.25rem', background: 'var(--bg)', padding: '8rem 0' }} className="ff-wrapper">
      <div style={{ width: '90%', maxWidth: '1440px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }} className="ff-inner">
        {/* Header */}
        <header
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem', maxWidth: '65rem', margin: '0 auto 8rem', textAlign: 'center' }}
          className="ff-header"
        >
          {isMobile ? (
            <>
              <MaskText phrases={mobileHeaderPhrase} tag="h1" />
              <div style={{ color: 'var(--text-muted)', opacity: 0.85 }}><MaskText phrases={mobileParagraphPhrase} tag="p" /></div>
            </>
          ) : (
            <>
              <MaskText phrases={desktopHeaderPhrase} tag="h1" />
              <div style={{ color: 'var(--text-muted)', opacity: 0.85 }}><MaskText phrases={desktopParagraphPhrase} tag="p" /></div>
            </>
          )}
        </header>

        {/* Banner */}
        <div style={{ marginBottom: '8rem', width: '100%', position: 'relative', height: '42rem', overflow: 'hidden', borderRadius: '24px', boxShadow: '0 20px 50px rgba(0,0,0,0.5)' }} className="ff-banner">
          <RevealCover />
          <motion.div
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.25, once: true }}
            style={{ position: 'relative', width: '100%', height: '100%' }}
          >
            {isMobile ? (
              <Image src={freedomMobileBanner} alt="Équipe" fill style={{ objectFit: 'cover' }} />
            ) : (
              <Image src={financialFreedomBanner} alt="Équipe" fill style={{ objectFit: 'cover' }} />
            )}
          </motion.div>
        </div>

        {/* Edges */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '4rem' }} className="ff-edges">
          {edges.map((edge, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <Image src={edge.icon} alt={edge.point} style={{ filter: 'brightness(0) invert(1)' }} />
                <h3 style={{ fontSize: '1.5rem', fontWeight: 900, color: 'var(--text)' }}>{edge.point}</h3>
              </div>
              <p style={{ fontSize: '1rem', color: 'var(--text-muted)', opacity: 0.85, lineHeight: 1.6 }}>{edge.details}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Brief note */}
      <div
        style={{
          maxHeight: '54.75rem',
          padding: '8.25rem 4.5rem',
          background: 'var(--accent-gradient)',
          marginTop: '6rem', // ✅ uniquement en haut
        }}
        className="ff-brief-note"
      >
        {isMobile ? (
          <div style={{ color: 'var(--text)' }}>
            <MaskText phrases={mobileBriefNotePhrase} tag="p" />
          </div>
        ) : (
          <div style={{ color: '#000000' }}>
            <MaskText phrases={desktopBriefNotePhrase} tag="p" />
          </div>
        )}
      </div>

      <style>{`
        .ff-header h1 { font-size: clamp(2.5rem, 6vw, 4.5rem); font-weight: 800; color: var(--text); line-height: 1.1; }
        .ff-header p { font-size: 1.25rem; line-height: 1.6; color: var(--text-muted); }
        .ff-brief-note p { font-size: clamp(3rem, 6vw, 6rem); font-weight: 700; max-width: 1440px; margin: 0 auto; line-height: 1.1; letter-spacing: -0.02em; color: var(--text); }
        @media (max-width: 768px) {
          .ff-wrapper { margin-top: 6rem !important; padding: 4rem 0 !important; }
          .ff-header { margin-bottom: 4rem !important; }
          .ff-banner { height: 25rem !important; margin-bottom: 4rem !important; }
          .ff-edges { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .ff-brief-note { padding: 4rem 1.5rem !important; }
        }
      `}</style>
    </section>
  );
};

export default FinancialFreedom;
