import { motion } from 'framer-motion';
import MaskText from '@/components/Common/MaskText';
import GetStartedButton from '@/components/Common/GetStartedButton';

const CTASection = () => {
  return (
    <section className="cta-section">
      <style>{`
        .cta-section {
          padding: 5rem 2rem;
          background: var(--bg);
        }
        .cta-banner {
          display: grid;
          grid-template-columns: 42% 58%;
          max-width: 1200px;
          margin: 0 auto;
          background: var(--accent-gradient);
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(200, 90, 0, 0.35);
          position: relative;
        }
        .cta-glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 85% 15%, rgba(255,255,255,0.18) 0%, transparent 45%);
          pointer-events: none;
          z-index: 1;
        }
        .cta-image-wrap {
          position: relative;
          min-height: 360px;
        }
        .cta-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .cta-content {
          padding: 3.5rem 3rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          position: relative;
          z-index: 1;
        }
        .cta-label {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.85);
          margin-bottom: 1rem;
        }
        .cta-content h2 {
          font-size: clamp(1.8rem, 3.5vw, 2.6rem);
          font-weight: 800;
          line-height: 1.2;
          color: #ffffff;
          margin-bottom: 1rem;
        }
        .cta-text {
          font-size: 1.05rem;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.9);
          max-width: 46ch;
          margin-bottom: 2rem;
        }
        .cta-actions {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          flex-wrap: wrap;
        }
        @media (max-width: 900px) {
          .cta-banner {
            grid-template-columns: 1fr;
          }
          .cta-image-wrap {
            min-height: 220px;
            order: 2;
          }
          .cta-content {
            padding: 2.5rem 2rem;
            text-align: center;
            align-items: center;
          }
          .cta-text {
            max-width: 100%;
          }
          .cta-actions {
            justify-content: center;
          }
        }
        @media (max-width: 480px) {
          .cta-section {
            padding: 3.5rem 1rem;
          }
          .cta-content {
            padding: 2rem 1.25rem;
          }
        }
      `}</style>

      <div className="cta-banner">
        <div className="cta-glow" />
        <motion.div
          className="cta-image-wrap"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
        >
          <img
            src="/images/section-service.png"
            alt="L'équipe AfroLink à votre écoute"
            className="cta-image"
          />
        </motion.div>

        <motion.div
          className="cta-content"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
        >
          <p className="cta-label">Prêts à collaborer ?</p>
          <MaskText
            phrases={['Créons ensemble quelque', 'chose de remarquable.']}
            tag="h2"
          />
          <p className="cta-text">
            Rejoignez les marques qui font confiance à AfroLink pour leur
            communication digitale. Parlons de votre prochain projet.
          </p>
          <div className="cta-actions">
            <GetStartedButton padding="0.9rem 1.75rem" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
