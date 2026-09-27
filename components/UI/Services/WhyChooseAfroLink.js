import { motion } from 'framer-motion';
import MaskText from '@/components/Common/MaskText';

const WhyChooseAfroLink = () => {
  const features = [
    {
      title: 'Stratégie Digitale',
      description: 'Nous développons des stratégies sur mesure pour maximiser votre présence en ligne et atteindre vos objectifs commerciaux.',
      image: '/images/services/strategy.png',
    },
    {
      title: 'Création de Contenu',
      description: 'Du contenu engageant et de qualité qui capte l\'attention de votre audience et renforce votre marque.',
      image: '/images/services/content.jpg',
    },
    {
      title: 'Gestion Réseaux Sociaux',
      description: 'Une gestion professionnelle de vos réseaux sociaux pour créer une communauté engagée et fidèle.',
      image: '/images/services/social.jpg',
    },
  ];

  return (
    <section style={{ padding: '5rem 2rem', background: 'var(--Background)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <p
            style={{
              fontSize: '0.875rem',
              fontWeight: '600',
              letterSpacing: '2px',
              color: 'var(--accent-color)',
              marginBottom: '1rem',
              textTransform: 'uppercase',
            }}
          >
            Pourquoi Choisir AfroLink
          </p>
          <h2 className="whyChooseTitle">
            Une agence digitale créative basée en Côte d'Ivoire
          </h2>
          <p className="whyChooseSubtitle">
            Aider les marques à se connecter, s'engager et grandir grâce à une communication impactante
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="whyChooseGrid">
          {/* Left Block - Image + Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div
              style={{
                borderRadius: '12px',
                overflow: 'hidden',
                marginBottom: '1.5rem',
              }}
            >
              <img
                src={features[0].image}
                alt={features[0].title}
                className="whyChooseImage"
              />
            </div>
            <h3
              style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                color: 'var(--white)',
                marginBottom: '0.75rem',
              }}
            >
              {features[0].title}
            </h3>
            <p
              style={{
                fontSize: '1rem',
                color: 'var(--light-gray)',
                lineHeight: '1.6',
              }}
            >
              {features[0].description}
            </p>
          </motion.div>

          {/* Middle Block - Green Box */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{
              background: 'linear-gradient(135deg, rgba(226,124,0,0.15), rgba(255,165,0,0.15))',
              border: '2px solid rgba(226,124,0,0.3)',
              borderRadius: '16px',
              padding: '2rem',
            }}
          >
            <p
              style={{
                fontSize: '1.25rem',
                fontStyle: 'italic',
                color: 'var(--white)',
                marginBottom: '2rem',
                lineHeight: '1.6',
              }}
            >
              "Une communication qui transforme votre vision en réalité digitale"
            </p>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
              }}
            >
              {[
                'Plus de 5 ans d\'expérience',
                'Équipe créative et passionnée',
                'Solutions sur mesure',
                'Résultats mesurables',
              ].map((item, index) => (
                <li
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    marginBottom: '1rem',
                    color: 'var(--white)',
                    fontSize: '1rem',
                  }}
                >
                  <span
                    style={{
                      width: '24px',
                      height: '24px',
                      background: 'var(--accent-color)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right Block - Image + Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div
              style={{
                borderRadius: '12px',
                overflow: 'hidden',
                marginBottom: '1.5rem',
                position: 'relative',
              }}
            >
              <img
                src={features[1].image}
                alt={features[1].title}
                className="whyChooseImage"
              />
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '60px',
                  height: '60px',
                  background: 'rgba(255,255,255,0.9)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--accent-color)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              </div>
            </div>
            <h3
              style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                color: 'var(--white)',
                marginBottom: '0.75rem',
              }}
            >
              {features[1].title}
            </h3>
            <p
              style={{
                fontSize: '1rem',
                color: 'var(--light-gray)',
                lineHeight: '1.6',
              }}
            >
              {features[1].description}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Responsive Styles */}
      <style jsx>{`
        .whyChooseTitle {
          font-size: 2.5rem;
          font-weight: 800;
          line-height: 1.2;
          color: var(--white);
          margin-bottom: 1rem;
        }

        .whyChooseSubtitle {
          font-size: 1.125rem;
          color: var(--light-gray);
          line-height: 1.7;
          max-width: 700px;
          margin: 0 auto;
        }

        .whyChooseGrid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          align-items: start;
        }

        .whyChooseHighlight {
          background: linear-gradient(135deg, rgba(226, 124, 0, 0.15), rgba(255, 165, 0, 0.15));
          border: 2px solid rgba(226, 124, 0, 0.3);
          border-radius: 16px;
          padding: 2rem;
        }

        .whyChooseImage {
          width: 100%;
          height: 250px;
          object-fit: cover;
          display: block;
        }

        @media (max-width: 1024px) {
          .whyChooseGrid {
            grid-template-columns: repeat(2, 1fr);
          }

          .whyChooseHighlight {
            grid-column: span 2;
          }
        }

        @media (max-width: 768px) {
          .whyChooseGrid {
            grid-template-columns: 1fr;
          }

          .whyChooseHighlight {
            grid-column: span 1;
          }

          .whyChooseTitle {
            font-size: 2rem;
          }

          .whyChooseSubtitle {
            font-size: 1rem;
          }

          .whyChooseImage {
            height: 200px;
          }
        }

        @media (max-width: 480px) {
          .whyChooseTitle {
            font-size: 1.6rem;
          }

          .whyChooseHighlight {
            padding: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default WhyChooseAfroLink;