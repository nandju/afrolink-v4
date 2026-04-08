import { motion } from 'framer-motion';
import GetStartedButton from '@/components/Common/GetStartedButton';

const CTASection = () => {
  return (
    <section style={{ padding: '5rem 2rem', background: 'var(--Background)', color: 'var(--white)', textAlign: 'center' }}>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Envie de collaborer avec AfroLink ?</h2>
        <div style={{ marginTop: '2rem' }}>
          <GetStartedButton padding="1rem 2rem" />
        </div>
      </motion.div>
    </section>
  );
};

export default CTASection;
