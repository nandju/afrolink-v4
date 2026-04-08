import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const titleAnimation = {
  rest: { transition: { staggerChildren: 0.005 } },
  hover: { transition: { staggerChildren: 0.005 } },
};

const letterAnimation = {
  rest: { y: 0 },
  hover: {
    y: -25,
    transition: { duration: 0.3, ease: [0.6, 0.01, 0.05, 0.95], type: 'tween' },
  },
};

const letterAnimationTwo = {
  rest: { y: 25 },
  hover: {
    y: 0,
    transition: { duration: 0.3, ease: [0.6, 0.01, 0.05, 0.95], type: 'tween' },
  },
};

const AnimatedWord = ({ title, animations, isHovered, color = 'var(--link-color)', fontWeight = 400 }) => (
  <motion.span
    variants={titleAnimation}
    initial="rest"
    animate={isHovered ? 'hover' : 'rest'}
    style={{ whiteSpace: 'nowrap', position: 'relative' }}
  >
    {title.split('').map((char, i) =>
      char === ' ' ? (
        <motion.span key={i} style={{ position: 'relative', display: 'inline-block', whiteSpace: 'nowrap', color, fontSize: '1rem', fontWeight }}>
          &nbsp;
        </motion.span>
      ) : (
        <motion.span
          variants={animations}
          key={i}
          style={{ position: 'relative', display: 'inline-block', whiteSpace: 'nowrap', color, fontSize: '1rem', fontWeight }}
        >
          {char}
        </motion.span>
      )
    )}
  </motion.span>
);

const AnimatedLink = ({ title, url, color, fontWeight }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Link href={url} style={{ textDecoration: 'none' }}>
      <motion.div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ position: 'relative', cursor: 'pointer', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}
      >
        <AnimatedWord title={title} animations={letterAnimation} isHovered={isHovered} color={color} fontWeight={fontWeight} />
        <div style={{ position: 'absolute', top: 0 }}>
          <AnimatedWord title={title} animations={letterAnimationTwo} isHovered={isHovered} color={color} fontWeight={fontWeight} />
        </div>
      </motion.div>
    </Link>
  );
};

export default AnimatedLink;
