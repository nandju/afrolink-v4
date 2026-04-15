import Image from 'next/image';
import { motion } from 'framer-motion';
import bigBanner from '@/public/images/big_banner.png';
import featuredMobileBanner from '@/public/images/featured_mobile_banner.png';
import companiesImage from '@/public/images/companies.png';
import ParallaxText from '@/components/Common/ParallaxImages';
import RevealCover from '@/components/Common/RevealCover';
import { useIsMobile } from '@/libs/useIsMobile';
import { useTheme } from '@/contexts/ThemeContext';

const imageVariants = {
  hidden: { scale: 1.6 },
  visible: {
    scale: 1,
    transition: { duration: 1.4, ease: [0.6, 0.05, -0.01, 0.9], delay: 0.2 },
  },
};

const Featured = () => {
  const isMobile = useIsMobile();
  const { dark } = useTheme();

  return (
    <section>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          margin: '6.25rem auto 0',
          maxWidth: '1440px',
          width: '90%',
        }}
        className="featured-inner"
      >
        {/* Banner */}
        <div
          style={{
            maxWidth: '85rem',
            margin: '0 auto',
            position: 'relative',
            width: '100%',
            overflow: 'hidden',
            borderRadius: '0.75rem',
          }}
          className="featured-image-container"
        >
          <RevealCover />
          <motion.div
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.25, once: true }}
            style={{ position: 'relative', height: '35rem', overflow: 'hidden' }}
            className="featured-div"
          >
            {isMobile ? (
              <Image src={featuredMobileBanner} alt="Créations Afrolink en version mobile" fill style={{ objectFit: 'cover', borderRadius: '0.75rem' }} />
            ) : (
              <Image src={bigBanner} alt="Créations Afrolink en version desktop" fill style={{ objectFit: 'cover', borderRadius: '0.75rem' }} />
            )}
          </motion.div>
        </div>

        {/* <h2 className="featured-title" style={{ 
          color: 'var(--text-muted)', 
          fontSize: '1rem', 
          fontWeight: 600, 
          textTransform: 'uppercase', 
          marginTop: '8rem',
          letterSpacing: '0.3em',
          opacity: 0.8,
        }}>
          Ils propulsent leurs marques avec Afrolink
        </h2> */}
      </div>

      {/* ── Bande logos pleine largeur ── */}
      {/* <div
        style={{
          position: 'relative',
          width: '100vw',
          left: '50%',
          marginLeft: '-50vw',
          marginTop: '4rem',
          paddingTop: '3rem',
          paddingBottom: '3rem',
          borderTop: dark ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(0,0,0,0.07)',
          borderBottom: dark ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(0,0,0,0.07)',
          overflow: 'hidden',
        }}
        className="logos-band"
      >
        <ParallaxText baseVelocity={-3}>
          <div
            className="partner-logos-strip"
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '0 5rem',
              filter: dark
                ? 'brightness(1.8) contrast(1.4)'
                : 'brightness(0.3) opacity(0.7)',
              transition: 'filter 0.3s ease',
            }}
          >
            <Image
              src={companiesImage}
              alt="Logos des partenaires Afrolink"
              style={{
                height: '200px',
                width: 'auto',
                objectFit: 'contain',
                display: 'block',
                margin: '0 3rem',
              }}
            />
          </div>
        </ParallaxText>
      </div>

      <style>{`
        .partner-logos-strip:hover {
          filter: brightness(2) contrast(1.4) !important;
        }
        @media (max-width: 768px) {
          .featured-inner  { margin-top: 4rem !important; }
          .featured-title  { font-size: 0.8rem !important; margin-top: 5rem !important; letter-spacing: 0.2em !important; }
          .featured-image-container { border-radius: 0.5rem !important; }
          .featured-div    { height: 20rem !important; }
          .logos-band      { padding-top: 2rem !important; padding-bottom: 2rem !important; }
        }
      `}</style> */}
    </section>
  );
};

export default Featured;