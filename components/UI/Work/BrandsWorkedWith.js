import { motion } from 'framer-motion';

const brands = ['Marque 1', 'Marque 2', 'Marque 3', 'Marque 4', 'Marque 5', 'Marque 6'];

const BrandsWorkedWith = () => {
  return (
    <section style={{ padding: '5rem 2rem', background: 'var(--Background)', textAlign: 'center' }}>
      <h2 style={{ fontSize: '2.5rem', color: 'var(--white)', marginBottom: '2rem' }}>Marques Avec Lesquelles Nous Avons Travaillé</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        {brands.map((brand, index) => (
          <motion.div
            key={brand}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            style={{ height: '100px', background: 'linear-gradient(135deg, rgba(226,124,0,0.1), rgba(255,165,0,0.1))', border: '1px solid rgba(226,124,0,0.2)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', color: 'var(--light-gray)' }}
          >
            {brand}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BrandsWorkedWith;
