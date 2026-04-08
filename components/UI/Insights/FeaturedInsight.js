import { motion } from 'framer-motion';

const FeaturedInsight = () => {
  return (
    <section style={{ padding: '5rem 2rem', background: 'var(--Background)', textAlign: 'center' }}>
      <h2 style={{ fontSize: '2.5rem', color: 'var(--white)', marginBottom: '2rem' }}>Insight Vedette</h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ maxWidth: '800px', margin: '0 auto', padding: '3rem', background: 'linear-gradient(135deg, rgba(226,124,0,0.1), rgba(255,165,0,0.1))', border: '1px solid rgba(226,124,0,0.2)', borderRadius: '8px' }}
      >
        <h3 style={{ fontSize: '2rem', color: 'var(--white)', marginBottom: '1rem' }}>Tendances du Marketing Digital en Afrique</h3>
        <p style={{ fontSize: '1.1rem', lineHeight: 1.6, color: 'var(--light-gray)' }}>
          Explorez les dernières tendances qui façonnent le marketing digital à travers le continent africain.
        </p>
      </motion.div>
    </section>
  );
};

export default FeaturedInsight;
