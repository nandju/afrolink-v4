import { motion } from 'framer-motion';
import MaskText from '@/components/Common/MaskText';

const OurStory = () => {
  const titlePhrases = ['Notre Histoire'];
  const descriptionPhrases = [
    "AfroLink a été créée pour aider les marques et les organisations à construire une communication digitale forte.",
    "Basée en Côte d'Ivoire, nous combinons créativité, stratégie et technologie pour créer des expériences de marque significatives.",
  ];

  return (
    <section style={{ padding: '5rem 2rem', background: 'var(--Background)', textAlign: 'center' }}>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <MaskText phrases={titlePhrases} tag="h2" />
        <MaskText phrases={descriptionPhrases} tag="p" />
      </motion.div>
    </section>
  );
};

export default OurStory;
