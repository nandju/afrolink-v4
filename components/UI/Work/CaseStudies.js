import { motion } from 'framer-motion';

const CaseStudies = () => {
  return (
    <section style={{ padding: '5rem 2rem', background: 'var(--Background)', color: 'var(--white)', textAlign: 'center' }}>
      <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Études de Cas</h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem', background: 'linear-gradient(135deg, rgba(226,124,0,0.1), rgba(255,165,0,0.1))', border: '1px solid rgba(226,124,0,0.2)', borderRadius: '8px' }}
      >
        <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Campagne Digitale pour une Marque de Mode</h3>
        <p style={{ fontSize: '1.1rem', lineHeight: 1.6, color: 'var(--light-gray)' }}>
          Nous avons développé une stratégie de communication digitale complète incluant la création de contenu, les visuels de campagne et l&apos;activation des réseaux sociaux.
        </p>
      </motion.div>
    </section>
  );
};

export default CaseStudies;
