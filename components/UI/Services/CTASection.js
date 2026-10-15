import { motion } from 'framer-motion';
import MaskText from '@/components/Common/MaskText';
import GetStartedButton from '@/components/Common/GetStartedButton';

const PhoneIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

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
          gap: 0;
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
          min-height: 380px;
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
        .cta-phone {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          color: #ffffff;
          font-weight: 700;
          font-size: 1.05rem;
          text-decoration: none;
          padding: 0.85rem 1.4rem;
          background: rgba(255, 255, 255, 0.15);
          border: 1px solid rgba(255, 255, 255, 0.35);
          border-radius: 100px;
          backdrop-filter: blur(6px);
          transition: background 0.25s ease, transform 0.25s ease;
        }
        .cta-phone:hover {
          background: rgba(255, 255, 255, 0.28);
          transform: translateY(-2px);
        }
        .cta-or {
          color: rgba(255, 255, 255, 0.75);
          font-size: 0.95rem;
        }
        @media (max-width: 900px) {
          .cta-banner {
            grid-template-columns: 1fr;
          }
          .cta-image-wrap {
            min-height: 240px;
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
          .cta-actions {
            flex-direction: column;
            gap: 1rem;
            width: 100%;
          }
          .cta-phone {
            width: 100%;
            justify-content: center;
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
            alt="Équipe AfroLink prête à vous accompagner"
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
          <p className="cta-label">Parlons de votre projet</p>
          <MaskText
            phrases={['Votre marque mérite', 'une communication qui se démarque.']}
            tag="h2"
          />
          <p className="cta-text">
            Vous avez un projet, une idée ou une marque à faire grandir ?
            AfroLink vous accompagne avec une stratégie créative et digitale
            pensée pour vos objectifs.
          </p>
          <div className="cta-actions">
            <a href="tel:+225XXXXXXXXXX" className="cta-phone">
              <PhoneIcon />
              <span>+225 XX XX XX XX XX</span>
            </a>
            <span className="cta-or">Ou</span>
            <GetStartedButton padding="0.9rem 1.75rem" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
