import { useRef, useState } from 'react';
import { AnimatePresence, motion, useInView } from 'framer-motion';
import Image from 'next/image';
import icChevronDown from '@/public/svgs/ic_chevron_down.svg';
import MaskText from '@/components/Common/MaskText';
import { useIsMobile } from '@/libs/useIsMobile';
import { animate, desktopHeaderPhrase, faqData, mobileHeaderPhrase } from './constants';

const FAQ = () => {
  const [openItem, setOpenItem] = useState(null);
  const accordionRef = useRef(null);
  const isInView = useInView(accordionRef, { once: true, margin: '-10%', amount: 0.4 });
  const isMobile = useIsMobile();

  return (
    <div style={{ padding: '8.25rem 0 10rem' }}>
      <div style={{ width: '90%', maxWidth: '1440px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '6.25rem' }}>
        <div className="faq-title">
          {isMobile ? (
            <MaskText phrases={mobileHeaderPhrase} tag="h1" />
          ) : (
            <MaskText phrases={desktopHeaderPhrase} tag="h1" />
          )}
        </div>

        <div ref={accordionRef} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              variants={animate}
              initial="initial"
              animate={isInView ? 'open' : ''}
              custom={index}
              style={{ display: 'flex', flexDirection: 'column', paddingBottom: '1rem', borderBottom: '0.0625rem solid #3d3d3d', overflow: 'hidden' }}
            >
              <div
                onClick={() => setOpenItem(openItem === index ? null : index)}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer', fontWeight: 500, marginBottom: '1.5rem' }}
                className="faq-question"
              >
                {item.question}
                <Image src={icChevronDown} alt="Flèche de la question fréquente" />
              </div>
              <AnimatePresence>
                {openItem === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    style={{ color: 'var(--link-color)', fontSize: '1rem', fontWeight: 400, lineHeight: '1.5rem' }}
                  >
                    {item.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .faq-title h1 { max-width: 56rem; font-size: 6rem; font-weight: 400; }
        .faq-question { font-size: 1.5rem; }
        @media (max-width: 768px) {
          .faq-title h1 { font-size: 3.75rem !important; }
          .faq-question { font-size: 1rem !important; margin-bottom: 2rem !important; gap: 1rem !important; }
        }
      `}</style>
    </div>
  );
};

export default FAQ;
