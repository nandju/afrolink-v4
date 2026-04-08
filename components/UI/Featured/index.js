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

        <h2 className="featured-title" style={{ 
          color: 'var(--text-muted)', 
          fontSize: '1rem', 
          fontWeight: 600, 
          textTransform: 'uppercase', 
          marginTop: '8rem',
          letterSpacing: '0.3em',
          opacity: 0.8
        }}>
          Ils propulsent leurs marques avec Afrolink
        </h2>

        <div style={{ 
          position: 'relative', 
          width: '100vw', 
          left: '50%',
          right: '50%',
          marginLeft: '-50vw',
          marginRight: '-50vw',
          marginTop: '4rem',
          overflow: 'hidden'
        }}>
          <ParallaxText baseVelocity={-2}>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '8rem',
              padding: '2.5rem 0',
              filter: dark ? 'brightness(1.5) contrast(1.2)' : 'brightness(0) opacity(0.6)',
              opacity: 0.9,
              transform: 'scale(1.35)', // Slightly larger
              transition: 'all 0.3s ease'
            }}
            className="partner-logos-strip"
            >
              <Image src={companiesImage} alt="Partner Logo" style={{ height: '55px', width: 'auto', objectFit: 'contain' }} />
              <Image src={companiesImage} alt="Partner Logo" style={{ height: '55px', width: 'auto', objectFit: 'contain' }} />
              <Image src={companiesImage} alt="Partner Logo" style={{ height: '55px', width: 'auto', objectFit: 'contain' }} />
              <Image src={companiesImage} alt="Partner Logo" style={{ height: '55px', width: 'auto', objectFit: 'contain' }} />
            </div>
          </ParallaxText>
        </div>
      </div>

      <style>{`
        .partner-logos-strip:hover {
          filter: brightness(2) contrast(1.5) !important;
          opacity: 1 !important;
        }
        @media (max-width: 768px) {
          .featured-inner { margin-top: 4rem !important; }
          .featured-title { font-size: 0.8rem !important; margin-top: 5rem !important; letter-spacing: 0.2em !important; }
          .featured-image-container { border-radius: 0.5rem !important; }
          .featured-div { height: 20rem !important; }
        }
      `}</style>
    </section>
  );
};

export default Featured;
