import { motion } from 'framer-motion';
import MaskText from '@/components/Common/MaskText';

const visionPoints = [
  'Façonner la communication digitale africaine',
  'Porter les marques locales vers le monde',
  'Innover par la créativité et la technologie',
];

const OurVision = () => {
  return (
    <section className="vision-section">
      <style>{`
        .vision-section {
          padding: 6rem 2rem;
          background: var(--bg-surface);
        }
        .vision-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          max-width: 1150px;
          margin: 0 auto;
        }
        .vision-label {
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
        .vision-content h2 {
          font-size: clamp(1.9rem, 3.5vw, 2.6rem);
          font-weight: 800;
          line-height: 1.2;
          color: var(--text);
          margin-bottom: 1.25rem;
        }
        .vision-text {
          font-size: 1.05rem;
          line-height: 1.75;
          color: var(--text-muted);
          margin-bottom: 1.75rem;
        }
        .vision-quote {
          background: linear-gradient(135deg, rgba(200, 90, 0, 0.12), rgba(255, 165, 0, 0.12));
          border: 1px solid var(--border-accent);
          border-left: 4px solid var(--gradient-start);
          border-radius: 12px;
          padding: 1.5rem 1.75rem;
          margin-bottom: 1.75rem;
        }
        .vision-quote-text {
          font-size: 1.05rem;
          font-style: italic;
          line-height: 1.6;
          color: var(--text);
        }
        .vision-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .vision-list li {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.9rem;
          color: var(--text-muted);
          font-size: 1rem;
        }
        .vision-check {
          width: 22px;
          height: 22px;
          background: var(--accent-gradient);
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-size: 0.75rem;
          font-weight: 700;
          flex-shrink: 0;
        }
        .vision-img-wrap {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          min-height: 420px;
        }
        .vision-img {
          width: 100%;
          height: 100%;
          min-height: 420px;
          object-fit: cover;
          display: block;
        }
        @media (max-width: 900px) {
          .vision-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .vision-img-wrap,
          .vision-img {
            min-height: 260px;
          }
          .vision-img-wrap {
            order: -1;
          }
        }
        @media (max-width: 480px) {
          .vision-section {
            padding: 4rem 1rem;
          }
        }
      `}</style>

      <div className="vision-grid">
        <motion.div
          className="vision-content"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
        >
          <span className="vision-label">Notre Vision</span>
          <MaskText phrases={["Façonner l'avenir de la communication en Afrique"]} tag="h2" />
          <p className="vision-text">
            Devenir une agence créative leader façonnant l&apos;avenir de la
            communication digitale en Afrique.
          </p>

          <div className="vision-quote">
            <p className="vision-quote-text">
              &laquo; Chaque marque africaine mérite une voix qui résonne au-delà des frontières. &raquo;
            </p>
          </div>

          <ul className="vision-list">
            {visionPoints.map((point) => (
              <li key={point}>
                <span className="vision-check">✓</span>
                {point}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className="vision-img-wrap"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
        >
          <img src="/images/future_banner.png" alt="La vision créative d'AfroLink" className="vision-img" />
        </motion.div>
      </div>
    </section>
  );
};

export default OurVision;
