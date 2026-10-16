import Link from 'next/link';
import { motion } from 'framer-motion';
import MaskText from '@/components/Common/MaskText';

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

const ArrowIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
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
          position: relative;
          max-width: 1200px;
          margin: 0 auto;
          background: var(--accent-gradient);
          border-radius: 28px;
          overflow: hidden;
          min-height: 420px;
          box-shadow: 0 25px 70px rgba(200, 90, 0, 0.35);
        }
        .cta-blob {
          position: absolute;
          top: -20%;
          right: -10%;
          width: 58%;
          height: 140%;
          background: #fff4e0;
          border-radius: 55% 0 0 55%;
          pointer-events: none;
        }
        .cta-img-wrap {
          position: absolute;
          right: 0;
          bottom: 0;
          width: 52%;
          height: 112%;
          display: flex;
          align-items: flex-end;
          justify-content: flex-end;
          pointer-events: none;
          z-index: 1;
        }
        .cta-img {
          height: 100%;
          width: auto;
          max-width: 100%;
          object-fit: contain;
          object-position: bottom right;
          display: block;
          filter: drop-shadow(-15px 10px 30px rgba(60, 20, 0, 0.25));
        }
        .cta-content {
          position: relative;
          z-index: 2;
          width: 55%;
          padding: 3.5rem 1rem 3.5rem 3.5rem;
        }
        .cta-label {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.85);
          margin-bottom: 1.25rem;
        }
        .cta-content h2 {
          font-size: clamp(1.9rem, 3.6vw, 2.8rem);
          font-weight: 800;
          line-height: 1.15;
          color: #ffffff;
          margin-bottom: 1.1rem;
        }
        .cta-text {
          font-size: 1.05rem;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.92);
          max-width: 40ch;
          margin-bottom: 2.25rem;
        }
        .cta-actions {
          display: flex;
          align-items: center;
          gap: 1.1rem;
          flex-wrap: wrap;
        }
        .cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.9rem;
          background: #3a1e04;
          color: #ffffff;
          font-size: 1rem;
          font-weight: 700;
          padding: 0.6rem 0.6rem 0.6rem 1.5rem;
          border-radius: 100px;
          text-decoration: none;
          transition: transform 0.25s ease, background 0.25s ease;
        }
        .cta-btn:hover {
          background: #4a2805;
          transform: translateY(-2px);
        }
        .cta-btn-icon {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: var(--accent-gradient);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #3a1e04;
          flex-shrink: 0;
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
        @media (max-width: 900px) {
          .cta-banner {
            display: flex;
            flex-direction: column;
          }
          .cta-content {
            width: 100%;
            padding: 2.75rem 2rem 1rem;
            text-align: center;
          }
          .cta-text {
            max-width: 100%;
            margin-left: auto;
            margin-right: auto;
          }
          .cta-actions {
            justify-content: center;
          }
          .cta-blob {
            display: none;
          }
          .cta-img-wrap {
            position: relative;
            width: 100%;
            height: 300px;
            order: 2;
          }
          .cta-img {
            object-position: bottom center;
          }
        }
        @media (max-width: 480px) {
          .cta-section {
            padding: 3.5rem 1rem;
          }
          .cta-content {
            padding: 2.25rem 1.25rem 0.5rem;
          }
          .cta-actions {
            flex-direction: column;
            gap: 1rem;
            width: 100%;
          }
          .cta-btn {
            justify-content: center;
          }
          .cta-phone {
            width: 100%;
            justify-content: center;
          }
          .cta-img-wrap {
            height: 240px;
          }
        }
      `}</style>

      <div className="cta-banner">
        <div className="cta-blob" />
        <motion.div
          className="cta-img-wrap"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
        >
          <img
            src="/images/section-service.png"
            alt="Équipe AfroLink prête à vous accompagner"
            className="cta-img"
          />
        </motion.div>

        <motion.div
          className="cta-content"
          initial={{ opacity: 0, x: -40 }}
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
            <Link href="/schedule-call" className="cta-btn">
              Planifier un appel
              <span className="cta-btn-icon">
                <ArrowIcon />
              </span>
            </Link>
            <a href="tel:+225XXXXXXXXXX" className="cta-phone">
              <PhoneIcon />
              <span>+225 XX XX XX XX XX</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
