import { motion } from 'framer-motion';

const CTASection = () => {
  return (
    <section style={{ padding: '5rem 2rem', background: 'var(--Background)', color: 'var(--white)', textAlign: 'center' }}>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <h2 style={{ fontSize: '2.5rem' }}>Restez inspiré par la créativité digitale.</h2>
      </motion.div>
    </section>
  );
};

export default CTASection;
