import { motion } from 'framer-motion';
import MaskText from '@/components/Common/MaskText';

const values = [
  {
    number: '01',
    title: 'Créativité',
    description: 'Des idées audacieuses qui font la différence et marquent les esprits.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.4 1 2.3h6c0-.9.4-1.8 1-2.3A7 7 0 0 0 12 2z" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Innovation',
    description: 'Toujours à la pointe des tendances et des technologies digitales.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Collaboration',
    description: 'Un partenariat étroit avec nos clients à chaque étape du projet.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Impact',
    description: 'Des résultats mesurables qui font grandir réellement votre marque.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
];

const OurValues = () => {
  return (
    <section className="values-section">
      <style>{`
        .values-section {
          padding: 6rem 2rem;
          background: var(--bg);
        }
        .values-header {
          text-align: center;
          max-width: 640px;
          margin: 0 auto 4rem;
        }
        .values-label {
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
        .values-header h2 {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 800;
          color: var(--text);
          margin-bottom: 0.75rem;
        }
        .values-header p {
          font-size: 1.05rem;
          color: var(--text-muted);
        }
        .values-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        .value-card {
          position: relative;
          background: var(--bg-surface);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 2rem 1.75rem;
          overflow: hidden;
          transition: transform 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease;
        }
        .value-card:hover {
          transform: translateY(-6px);
          border-color: var(--border-accent);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.25);
        }
        .value-number {
          position: absolute;
          top: 1.25rem;
          right: 1.5rem;
          font-size: 2.5rem;
          font-weight: 800;
          color: var(--text);
          opacity: 0.08;
          line-height: 1;
        }
        .value-icon {
          width: 54px;
          height: 54px;
          border-radius: 14px;
          background: linear-gradient(135deg, rgba(200, 90, 0, 0.15), rgba(255, 165, 0, 0.15));
          border: 1px solid var(--border-accent);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--gradient-start);
          margin-bottom: 1.25rem;
        }
        .value-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text);
          margin-bottom: 0.6rem;
        }
        .value-desc {
          font-size: 0.92rem;
          color: var(--text-muted);
          line-height: 1.65;
        }
        @media (max-width: 900px) {
          .values-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 560px) {
          .values-section {
            padding: 4rem 1rem;
          }
          .values-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="values-header">
        <span className="values-label">Nos Valeurs</span>
        <MaskText phrases={['Ce qui nous anime au quotidien']} tag="h2" />
        <MaskText phrases={['Quatre principes qui guident chacun de nos projets']} tag="p" />
      </div>

      <div className="values-grid">
        {values.map((value, index) => (
          <motion.div
            key={value.title}
            className="value-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: index * 0.1, ease: [0.33, 1, 0.68, 1] }}
          >
            <span className="value-number">{value.number}</span>
            <div className="value-icon">{value.icon}</div>
            <h3 className="value-title">{value.title}</h3>
            <p className="value-desc">{value.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default OurValues;
