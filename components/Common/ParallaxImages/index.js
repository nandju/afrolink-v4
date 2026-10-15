import { useRef, useEffect } from 'react';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from 'framer-motion';
import { wrap } from '@motionone/utils';

function ParallaxText({ children, baseVelocity = 100 }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], { clamp: false });

  const x = useTransform(baseX, (v) => `${wrap(-50, 50, v)}%`);

  const directionFactor = useRef(1);
  const isMounted = useRef(true);

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  useAnimationFrame((t, delta) => {
    if (!isMounted.current) return;

    try {
      let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
      const currentVelocity = velocityFactor.get();

      if (currentVelocity < 0) {
        directionFactor.current = -1;
      } else if (currentVelocity > 0) {
        directionFactor.current = 1;
      }

      moveBy += directionFactor.current * moveBy * currentVelocity;
      baseX.set(baseX.get() + moveBy);
    } catch {
      // Motion values may be released during teardown — skip frame.
    }
  });

  return (
    <div
      className="parallax"
      style={{
        overflow: 'hidden',
        // Never use touch-action: none — it blocks native scroll on
        // mobile and interferes with navigation gesture handling.
        touchAction: 'pan-y',
      }}
    >
      <motion.div
        className="scroller"
        style={{
          x,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          willChange: 'transform',
        }}
      >
        <span style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
      </motion.div>
    </div>
  );
}

export default ParallaxText;
