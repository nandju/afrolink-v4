import { useTheme } from '@/contexts/ThemeContext';

const BeforeHeroSection = ({
  backgroundImage = '/images/before-hero.jpg',
  compact = false,
}) => {
  const { dark } = useTheme();

  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        height: compact ? '45vh' : '85vh',
        minHeight: compact ? '280px' : '500px',
        overflow: 'hidden',
        marginTop: '-80px', // Offset layout padding
      }}
    >
      {/* Background Image */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url('${backgroundImage}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: 1,
          transform: 'scale(1.05)', // Subtle zoom for impact
        }}
        className="hero-bg-image"
      />

      {/* Modern Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: dark 
            ? 'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.2) 60%, rgba(0,0,0,0.9) 100%)'
            : 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.1) 60%, rgba(0,0,0,0.4) 100%)',
          zIndex: 2,
        }}
      />

      {/* Fade to background */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '150px',
          background: 'linear-gradient(to bottom, transparent, var(--bg))',
          zIndex: 3,
        }}
      />
      
      <style>{`
        .hero-bg-image {
          animation: slowZoom 20s ease-in-out infinite alternate;
        }
        @keyframes slowZoom {
          from { transform: scale(1.05); }
          to { transform: scale(1.15); }
        }
      `}</style>
    </section>
  );
};

export default BeforeHeroSection;
