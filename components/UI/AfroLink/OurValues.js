import { motion } from 'framer-motion';
import MaskText from '@/components/Common/MaskText';

const values = ['Créativité', 'Innovation', 'Collaboration', 'Impact'];

const OurValues = () => {
  return (
    <section style={{ padding: '5rem 2rem', background: 'var(--Background)', textAlign: 'center' }}>
      <MaskText phrases={['Nos Valeurs']} tag="h2" />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', maxWidth: '800px', margin: '2rem auto 0' }}>
        {values.map((value, index) => (
          <motion.div
            key={value}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            style={{
              padding: '2rem',
              background: 'linear-gradient(135deg, rgba(226,124,0,0.1), rgba(255,165,0,0.1))',
              border: '1px solid rgba(226,124,0,0.2)',
              borderRadius: '8px',
            }}
          >
            <h3 style={{ fontSize: '1.5rem', color: 'var(--white)' }}>{value}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default OurValues;
