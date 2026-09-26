import { motion } from 'framer-motion';
import MaskText from '@/components/Common/MaskText';
import GetStartedButton from '@/components/Common/GetStartedButton';
import styles from '@/styles/ServiceSection.module.css';

const PhoneIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const CTASection = () => {
  return (
    <section style={{ padding: '5rem 2rem', background: 'var(--Background)', color: 'var(--white)' }}>
      <div className={styles.container}>
        <motion.div
          className={styles.imageWrap}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="/images/section-service.png"
            alt="Technicien prêt à intervenir"
            className={styles.image}
          />
        </motion.div>

        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
        <MaskText
            phrases={['Votre marque mérite', 'une communication qui se démarque.']}
            tag="h2"
          />

          <p className={styles.text}>
            Vous avez un projet, une idée ou une marque à faire grandir ?
            AfroLink vous accompagne avec une stratégie créative et digitale
            pensée pour vos objectifs.
          </p>

          <div className={styles.actions}>
            <a href="tel:+225XXXXXXXXXX" className={styles.phone}>
              <PhoneIcon />
              <span>+225 XX XX XX XX XX</span>
            </a>

            <span className={styles.or}>Ou</span>

            <GetStartedButton padding="1rem 2rem" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;