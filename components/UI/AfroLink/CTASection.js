import Link from 'next/link';
import { motion } from 'framer-motion';
import MaskText from '@/components/Common/MaskText';

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
            alt="L'équipe AfroLink au travail"
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
          <p className="cta-label">Prêts à collaborer ?</p>
          <MaskText
            phrases={['Créons ensemble', 'quelque chose de', 'remarquable.']}
            tag="h2"
          />
          <p className="cta-text">
            Rejoignez les marques qui font confiance à AfroLink pour leur
            communication digitale. Parlons de votre prochain projet.
          </p>
          <Link href="/schedule-call" className="cta-btn">
            Planifier un appel
            <span className="cta-btn-icon">
              <ArrowIcon />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
