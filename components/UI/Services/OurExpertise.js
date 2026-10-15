import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import MaskText from '@/components/Common/MaskText';

const services = [
  {
    number: '01',
    title: 'Stratégie de marque',
    description: 'Positionnez votre marque avec clarté et impact sur les marchés africains et internationaux.',
    image: '/images/services/strategy.png',
  },
  {
    number: '02',
    title: 'Gestion des réseaux sociaux',
    description: 'Créez une présence digitale engageante qui fidélise votre communauté.',
    image: '/images/services/social.jpg',
  },
  {
    number: '03',
    title: 'Création de contenu & motion',
    description: 'Photos, vidéos, animations qui racontent votre histoire avec émotion.',
    image: '/images/services/content.jpg',
  },
  {
    number: '04',
    title: 'Campagnes digitales',
    description: 'Stratégies multicanales ciblées pour maximiser votre portée et vos conversions.',
    image: '/images/projects/programme2.jpg',
  },
  {
    number: '05',
    title: 'Conception web & UI/UX',
    description: "Interfaces modernes, rapides et pensées pour l'expérience utilisateur.",
    image: '/images/big_banner.png',
  },
  {
    number: '06',
    title: 'Direction créative',
    description: 'Une vision cohérente pour tous vos supports de communication.',
    image: '/images/projects/creationdecontenu.jpg',
  },
];

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const OurExpertise = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-10%', amount: 0.2 });

  return (
    <section ref={sectionRef} className="expertise-section">
      <style>{`
        .expertise-section {
          padding: 6rem 2rem;
          background: var(--bg);
        }
        .expertise-header {
          text-align: center;
          max-width: 640px;
          margin: 0 auto 4rem;
        }
        .expertise-label {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--gradient-start);
          padding: 0.4rem 1rem;
          border: 1px solid var(--border-accent);
          border-radius: 100px;
          margin-bottom: 1.25rem;
        }
        .expertise-header h2 {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 800;
          color: var(--text);
          margin-bottom: 0.75rem;
        }
        .expertise-header p {
          font-size: 1.05rem;
          color: var(--text-muted);
        }
        .expertise-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        .expertise-card {
          background: var(--bg-surface);
          border: 1px solid var(--border);
          border-radius: 16px;
          position: relative;
          overflow: hidden;
          transition: transform 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease;
          cursor: default;
          display: flex;
          flex-direction: column;
        }
        .expertise-card:hover {
          transform: translateY(-6px);
          border-color: var(--border-accent);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.25);
        }
        .expertise-img-wrap {
          position: relative;
          height: 190px;
          overflow: hidden;
        }
        .expertise-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }
        .expertise-card:hover .expertise-img {
          transform: scale(1.07);
        }
        .expertise-badge {
          position: absolute;
          top: 1rem;
          left: 1rem;
          background: var(--accent-gradient);
          color: #fff;
          font-size: 0.85rem;
          font-weight: 800;
          padding: 0.35rem 0.8rem;
          border-radius: 100px;
          box-shadow: 0 4px 14px rgba(200, 90, 0, 0.4);
        }
        .expertise-body {
          padding: 1.5rem 1.75rem 1.75rem;
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .expertise-title {
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--text);
          margin-bottom: 0.6rem;
        }
        .expertise-desc {
          font-size: 0.92rem;
          color: var(--text-muted);
          line-height: 1.65;
          flex: 1;
        }
        .expertise-link {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          margin-top: 1.25rem;
          color: var(--gradient-start);
          font-size: 0.9rem;
          font-weight: 700;
          text-decoration: none;
          transition: gap 0.25s ease;
        }
        .expertise-card:hover .expertise-link {
          gap: 0.8rem;
        }
        .expertise-line {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: var(--accent-gradient);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s ease;
          pointer-events: none;
        }
        .expertise-card:hover .expertise-line {
          transform: scaleX(1);
        }
        @media (max-width: 900px) {
          .expertise-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 560px) {
          .expertise-section {
            padding: 4rem 1rem;
          }
          .expertise-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="expertise-header">
        <span className="expertise-label">Nos Services</span>
        <MaskText phrases={['Ce que nous faisons le mieux']} tag="h2" />
        <MaskText
          phrases={['Des solutions digitales complètes pour faire grandir votre marque']}
          tag="p"
        />
      </div>

      <div className="expertise-grid">
        {services.map((service, index) => (
          <motion.div
            key={service.number}
            className="expertise-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: index * 0.08, ease: [0.33, 1, 0.68, 1] }}
          >
            <div className="expertise-img-wrap">
              <img src={service.image} alt={service.title} className="expertise-img" />
              <span className="expertise-badge">{service.number}</span>
            </div>
            <div className="expertise-body">
              <h3 className="expertise-title">{service.title}</h3>
              <p className="expertise-desc">{service.description}</p>
              <span className="expertise-link">
                En savoir plus
                <ArrowIcon />
              </span>
            </div>
            <span className="expertise-line" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default OurExpertise;
