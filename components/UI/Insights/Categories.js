import { motion } from 'framer-motion';

const categories = ['Image de Marque', 'Marketing', 'Réseaux Sociaux', 'Stratégie'];

const Categories = () => {
  return (
    <section style={{ padding: '5rem 2rem', background: 'var(--Background)', color: 'var(--white)', textAlign: 'center' }}>
      <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Catégories</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        {categories.map((category, index) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            style={{ padding: '1.5rem', background: 'linear-gradient(135deg, rgba(226,124,0,0.1), rgba(255,165,0,0.1))', border: '1px solid rgba(226,124,0,0.2)', borderRadius: '8px' }}
          >
            <h3 style={{ fontSize: '1.2rem', color: 'var(--white)' }}>{category}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
