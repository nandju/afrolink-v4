import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';

const animate = {
  initial: { y: '100%' },
  open: (i) => ({
    y: '0%',
    transition: { duration: 1, delay: 0.1 * i, ease: [0.33, 1, 0.68, 1] },
  }),
};

const MaskText = ({ phrases, tag }) => {
  const body = useRef(null);
  const isInView = useInView(body, { once: true, margin: '-10%', amount: 0.4 });

  return (
    <div ref={body}>
      {phrases.map((phrase, index) => (
        <div key={index} style={{ overflow: 'hidden' }}>
          {tag === 'h1' ? (
            <motion.h1 variants={animate} initial="initial" animate={isInView ? 'open' : ''} custom={index}>
              {phrase}
            </motion.h1>
          ) : tag === 'h2' ? (
            <motion.h2 variants={animate} initial="initial" animate={isInView ? 'open' : ''} custom={index}>
              {phrase}
            </motion.h2>
          ) : tag === 'h3' ? (
            <motion.h3 variants={animate} initial="initial" animate={isInView ? 'open' : ''} custom={index}>
              {phrase}
            </motion.h3>
          ) : (
            <motion.p variants={animate} initial="initial" animate={isInView ? 'open' : ''} custom={index}>
              {phrase}
            </motion.p>
          )}
        </div>
      ))}
    </div>
  );
};

export default MaskText;
