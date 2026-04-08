import { motion } from 'framer-motion';
import MaskText from '@/components/Common/MaskText';

const OurVision = () => {
  const titlePhrases = ['Notre Vision'];
  const descriptionPhrases = [
    "Devenir une agence créative leader façonnant l'avenir de la communication digitale en Afrique.",
  ];

  return (
    <section style={{ padding: '5rem 2rem', background: 'var(--Background)', color: 'var(--white)', textAlign: 'center' }}>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <MaskText phrases={titlePhrases} tag="h2" />
        <MaskText phrases={descriptionPhrases} tag="p" />
      </motion.div>
    </section>
  );
};

export default OurVision;
