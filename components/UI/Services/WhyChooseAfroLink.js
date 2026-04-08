import { motion } from 'framer-motion';
import MaskText from '@/components/Common/MaskText';

const WhyChooseAfroLink = () => {
  return (
    <section style={{ padding: '5rem 2rem', background: 'var(--Background)', textAlign: 'center' }}>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <MaskText phrases={['Pourquoi Choisir AfroLink']} tag="h2" />
        <MaskText
          phrases={["Une agence digitale créative basée en Côte d'Ivoire aidant les marques à se connecter, s'engager et grandir grâce à une communication impactante."]}
          tag="p"
        />
      </motion.div>
    </section>
  );
};

export default WhyChooseAfroLink;
