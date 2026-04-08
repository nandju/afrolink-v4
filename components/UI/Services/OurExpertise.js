import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import MaskText from '@/components/Common/MaskText';

const services = [
  {
    number: '01',
    title: 'Stratégie de marque',
    description: 'Positionnez votre marque avec clarté et impact sur les marchés africains et internationaux.',
  },
  {
    number: '02',
    title: 'Gestion des réseaux sociaux',
    description: 'Créez une présence digitale engageante qui fidélise votre communauté.',
  },
  {
    number: '03',
    title: 'Création de contenu & motion',
    description: 'Photos, vidéos, animations qui racontent votre histoire avec émotion.',
  },
  {
    number: '04',
    title: 'Campagnes digitales',
    description: 'Stratégies multicanales ciblées pour maximiser votre portée et vos conversions.',
  },
  {
    number: '05',
    title: 'Conception web & UI/UX',
    description: 'Interfaces modernes, rapides et pensées pour l'expérience utilisateur.',
  },
  {
    number: '06',
    title: 'Direction créative',
    description: 'Une vision cohérente pour tous vos supports de communication.',
  },
];

const OurExpertise = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-10%', amount: 0.2 });

  return (
    <section ref={sectionRef} style={{ padding: '6rem 2rem', background: 'var(--bg)' }}>
      <style>{`
        .expertise-header {
          text-align: center;
          max-width: 640px;
          margin: 0 auto 4rem;
        }
        .expertise-header h2 {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 700;
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
        @media (max-width: 900px) {
          .expertise-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 560px) {
          .expertise-grid {
            grid-template-columns: 1fr;
          }
        }
        .expertise-card {
          background: var(--bg-surface);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 2rem 1.75rem;
          position: relative;
          overflow: hidden;
          transition: border-color 0.3s ease, background 0.3s ease;
          cursor: default;
        }
        .expertise-card::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: var(--accent-gradient);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s ease;
        }
        .expertise-card:hover {
          background: var(--bg-surface-hover);
          border-color: var(--border-accent);
        }
        .expertise-card:hover::after {
          transform: scaleX(1);
        }
        .expertise-number {
          font-size: 3.5rem;
          font-weight: 800;
          line-height: 1;
          background: var(--accent-gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 1rem;
          display: block;
        }
        .expertise-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--text);
          margin-bottom: 0.6rem;
        }
        .expertise-desc {
          font-size: 0.92rem;
          color: var(--text-muted);
          line-height: 1.65;
        }
      `}</style>

      <div className="expertise-header">
        <MaskText phrases={['Nos Services']} tag="h2" />
        <MaskText phrases={['Ce que nous faisons le mieux']} tag="p" />
      </div>

      <div className="expertise-grid">
        {services.map((service, index) => (
          <motion.div
            key={service.number}
            className="expertise-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: index * 0.1, ease: [0.33, 1, 0.68, 1] }}
          >
            <span className="expertise-number">{service.number}</span>
            <h3 className="expertise-title">{service.title}</h3>
            <p className="expertise-desc">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default OurExpertise;
