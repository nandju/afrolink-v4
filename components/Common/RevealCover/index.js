import { motion } from 'framer-motion';

const variant = {
  hidden: { width: '100%' },
  visible: {
    width: '0%',
    transition: { duration: 1.4, ease: [0.6, 0.05, -0.01, 0.9] },
  },
};

const RevealCover = () => {
  return (
    <motion.div
      variants={variant}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.6, once: true }}
      style={{
        content: '',
        display: 'block',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'var(--Background)',
        zIndex: 10,
      }}
    />
  );
};

export default RevealCover;
