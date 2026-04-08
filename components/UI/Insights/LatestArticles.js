import { motion } from 'framer-motion';

const articles = [
  'Tendances du marketing digital en Afrique',
  'Comment le branding construit des entreprises solides',
  'Stratégies de réseaux sociaux pour les marques modernes',
  'Narration créative en marketing',
];

const LatestArticles = () => {
  return (
    <section style={{ padding: '5rem 2rem', background: 'var(--Background)', textAlign: 'center' }}>
      <h2 style={{ fontSize: '2.5rem', color: 'var(--white)', marginBottom: '2rem' }}>Articles Récents</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        {articles.map((article, index) => (
          <motion.div
            key={article}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            style={{ background: 'linear-gradient(135deg, rgba(226,124,0,0.1), rgba(255,165,0,0.1))', border: '1px solid rgba(226,124,0,0.2)', padding: '2rem', borderRadius: '8px' }}
          >
            <h3 style={{ fontSize: '1.5rem', color: 'var(--white)', marginBottom: '1rem' }}>{article}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default LatestArticles;
