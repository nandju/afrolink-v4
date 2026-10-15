import { motion } from 'framer-motion';
import MaskText from '@/components/Common/MaskText';

const stats = [
  { value: '5+', label: "Années d'expérience" },
  { value: '50+', label: 'Projets livrés' },
  { value: '30+', label: 'Clients accompagnés' },
];

const OurStory = () => {
  return (
    <section className="story-section">
      <style>{`
        .story-section {
          padding: 6rem 2rem;
          background: var(--bg);
        }
        .story-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          max-width: 1150px;
          margin: 0 auto;
        }
        .story-img-wrap {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          min-height: 420px;
        }
        .story-img {
          width: 100%;
          height: 100%;
          min-height: 420px;
          object-fit: cover;
          display: block;
        }
        .story-accent {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: var(--accent-gradient);
        }
        .story-label {
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
        .story-content h2 {
          font-size: clamp(1.9rem, 3.5vw, 2.6rem);
          font-weight: 800;
          line-height: 1.2;
          color: var(--text);
          margin-bottom: 1.25rem;
        }
        .story-text {
          font-size: 1.05rem;
          line-height: 1.75;
          color: var(--text-muted);
          margin-bottom: 1.25rem;
        }
        .story-stats {
          display: flex;
          gap: 2.5rem;
          margin-top: 2.5rem;
          padding-top: 2rem;
          border-top: 1px solid var(--border);
        }
        .story-stat-value {
          display: block;
          font-size: 2.2rem;
          font-weight: 800;
          background: var(--accent-gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1.1;
        }
        .story-stat-label {
          font-size: 0.85rem;
          color: var(--text-muted);
          margin-top: 0.3rem;
          display: block;
        }
        @media (max-width: 900px) {
          .story-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .story-img-wrap,
          .story-img {
            min-height: 280px;
          }
        }
        @media (max-width: 480px) {
          .story-section {
            padding: 4rem 1rem;
          }
          .story-stats {
            gap: 1.5rem;
          }
          .story-stat-value {
            font-size: 1.7rem;
          }
        }
      `}</style>

      <div className="story-grid">
        <motion.div
          className="story-img-wrap"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
        >
          <img src="/images/big_banner.png" alt="L'agence AfroLink en action" className="story-img" />
          <span className="story-accent" />
        </motion.div>

        <motion.div
          className="story-content"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
        >
          <span className="story-label">Notre Histoire</span>
          <MaskText phrases={['Une agence née de la passion pour les marques africaines']} tag="h2" />
          <p className="story-text">
            AfroLink a été créée pour aider les marques et les organisations à
            construire une communication digitale forte.
          </p>
          <p className="story-text">
            Basée en Côte d&apos;Ivoire, nous combinons créativité, stratégie et
            technologie pour créer des expériences de marque significatives qui
            connectent les entreprises à leurs audiences.
          </p>

          <div className="story-stats">
            {stats.map((stat) => (
              <div key={stat.label}>
                <span className="story-stat-value">{stat.value}</span>
                <span className="story-stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurStory;
