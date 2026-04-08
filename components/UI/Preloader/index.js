import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import icImport from '@/public/svgs/ic_import.svg';

const logoLetters = Array.from('Afro');

const Preloader = ({ setComplete }) => {
  const spans = useRef([]);
  const imageRef = useRef(null);
  const secondOverlayRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline({ defaults: { ease: 'back.out(1.7)' } });

    timeline.to(imageRef.current, { rotate: '360deg', duration: 1.4 });
    timeline.to(imageRef.current, { y: '-100%' });
    timeline.to(spans.current, { y: '-100%', duration: 1.4, stagger: 0.05 });
    timeline.to(
      [wrapperRef.current, secondOverlayRef.current],
      { scaleY: 0, transformOrigin: 'top', duration: 1, stagger: 0.2, onComplete: () => setComplete(true) },
      '-=0.8',
    );
    timeline.to(secondOverlayRef.current, {
      scaleY: 0,
      transformOrigin: 'top',
      duration: 1,
      ease: [0.83, 0, 0.17, 1],
    });
  }, [setComplete]);

  return (
    <>
      <div
        ref={wrapperRef}
        style={{
          background: 'var(--Background)',
          color: 'var(--white)',
          position: 'fixed',
          height: '100vh',
          width: '100vw',
          zIndex: 9999,
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'flex-end',
        }}
      >
        <div
          style={{
            display: 'flex',
            gap: '2em',
            alignItems: 'center',
            padding: '0 2em',
            overflow: 'hidden',
            height: '20em',
          }}
          className="preloader-inner"
        >
          <Image ref={imageRef} src={icImport} alt="Icône de préchargement Afrolink" style={{ width: '25em', height: '25em' }} />
          <div style={{ overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
            {logoLetters.map((letter, index) => (
              <div
                key={letter + index}
                ref={(el) => { spans.current[index] = el; }}
                style={{ fontWeight: 600, fontSize: '25em' }}
              >
                {letter}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        ref={secondOverlayRef}
        style={{
          background: 'var(--emerald)',
          position: 'fixed',
          height: '100vh',
          width: '100vw',
          zIndex: 9990,
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
        }}
      />

      <style>{`
        @media (max-width: 768px) {
          .preloader-inner { gap: 1rem !important; height: 13rem !important; }
          .preloader-inner img { width: 7rem !important; height: 100% !important; }
          .preloader-inner > div > div { font-size: 6rem !important; }
        }
      `}</style>
    </>
  );
};

export default Preloader;
