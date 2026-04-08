import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import MaskText from '@/components/Common/MaskText';

const steps = [
  {
    number: '01',
    title: 'Découvrir',
    description: 'Immersion dans votre univers, analyse de vos besoins et de votre marché.',
  },
  {
    number: '02',
    title: 'Stratégiser',
    description: 'Co-construction d'un plan de communication solide et mesurable.',
  },
  {
    number: '03',
    title: 'Créer',
    description: 'Production de contenus, campagnes et supports avec excellence créative.',
  },
  {
    number: '04',
    title: 'Lancer & Optimiser',
    description: 'Déploiement, suivi des KPIs et amélioration continue.',
  },
];

const OurProcess = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-10%', amount: 0.2 });

  return (
    <section ref={sectionRef} style={{ padding: '6rem 2rem', background: 'var(--bg)' }}>
      <style>{`
        .process-header {
          text-align: center;
          max-width: 640px;
          margin: 0 auto 5rem;
        }
        .process-header h2 {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 700;
          color: var(--text);
          margin-bottom: 0.75rem;
        }
        .process-header p {
          font-size: 1.05rem;
          color: var(--text-muted);
        }
        .process-track {
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: center;
          max-width: 1100px;
          margin: 0 auto;
          position: relative;
        }
        .process-step {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          flex: 1;
          position: relative;
          z-index: 1;
        }
        .process-circle-row {
          display: flex;
          align-items: center;
          width: 100%;
          margin-bottom: 1.5rem;
        }
        .process-circle {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: var(--accent-gradient);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.1rem;
          font-weight: 800;
          color: #fff;
          flex-shrink: 0;
          box-shadow: 0 4px 20px rgba(226, 124, 0, 0.35);
          margin: 0 auto;
        }
        .process-connector {
          flex: 1;
          height: 2px;
          background: linear-gradient(90deg, #e27c00, #ffa500);
          opacity: 0.45;
          margin: 0 -1px;
        }
        .process-step:last-child .process-connector {
          display: none;
        }
        .process-content {
          padding: 0 1rem;
        }
        .process-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--text);
          margin-bottom: 0.5rem;
        }
        .process-desc {
          font-size: 0.9rem;
          color: var(--text-muted);
          line-height: 1.65;
        }
        @media (max-width: 700px) {
          .process-track {
            flex-direction: column;
            align-items: center;
            gap: 0;
          }
          .process-step {
            flex-direction: row;
            align-items: flex-start;
            text-align: left;
            width: 100%;
            max-width: 400px;
            gap: 1.25rem;
          }
          .process-circle-row {
            flex-direction: column;
            align-items: center;
            width: auto;
            margin-bottom: 0;
          }
          .process-connector {
            width: 2px;
            height: 40px;
            background: linear-gradient(180deg, #e27c00, #ffa500);
            margin: 0;
            flex: none;
          }
          .process-content {
            padding: 0;
            padding-top: 0.25rem;
          }
        }
      `}</style>

      <div className="process-header">
        <MaskText phrases={['Notre Processus']} tag="h2" />
        <MaskText phrases={['Une méthode éprouvée pour votre succès']} tag="p" />
      </div>

      <div className="process-track">
        {steps.map((step, index) => (
          <motion.div
            key={step.number}
            className="process-step"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: index * 0.15, ease: [0.33, 1, 0.68, 1] }}
          >
            <div className="process-circle-row">
              <div className="process-circle">{step.number}</div>
              {index < steps.length - 1 && <div className="process-connector" />}
            </div>
            <div className="process-content">
              <h3 className="process-title">{step.title}</h3>
              <p className="process-desc">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default OurProcess;
