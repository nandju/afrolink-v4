import React, { useState } from 'react';
import Image from 'next/image';
import { useTheme } from '@/contexts/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';

const insights = [
  {
    id: 1,
    title: "L'intelligence Artificielle dans la Communication Africaine",
    category: "Technologie",
    date: "12 Mars 2024",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop",
    content: "L'IA transforme la manière dont les agences conçoivent leurs campagnes. En Afrique, l'adoption est rapide et permet une personnalisation sans précédent...",
  },
  {
    id: 2,
    title: "Le Branding Culturel : Plus qu'un simple logo",
    category: "Design",
    date: "08 Mars 2024",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1000&auto=format&fit=crop",
    content: "Comprendre les nuances culturelles est essentiel pour une marque qui souhaite s'implanter durablement sur le continent. Le design doit refléter l'héritage...",
  },
  {
    id: 3,
    title: "Stratégies Digitales 2024 : Les tendances",
    category: "Marketing",
    date: "01 Mars 2024",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
    content: "Le marketing d'influence et le social commerce dominent le paysage digital. Nous analysons les chiffres clés pour cette année charnière...",
  }
];

const NewsCard = ({ item, onClick }) => {
  return (
    <motion.div
      layoutId={`card-${item.id}`}
      onClick={onClick}
      style={{
        background: 'var(--bg-surface)',
        borderRadius: '24px',
        overflow: 'hidden',
        border: '1px solid var(--border)',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
      }}
      whileHover={{ y: -10, borderColor: 'var(--gradient-start)' }}
    >
      <div style={{ position: 'relative', width: '100%', height: '240px' }}>
        <Image src={item.image} alt={item.title} fill style={{ objectFit: 'cover' }} />
        <div style={{
          position: 'absolute', top: '1rem', left: '1rem',
          background: 'var(--accent-gradient)',
          padding: '0.25rem 0.75rem', borderRadius: '100px',
          fontSize: '0.75rem', fontWeight: 600, color: '#fff'
        }}>
          {item.category}
        </div>
      </div>
      <div style={{ padding: '1.5rem' }}>
        <p style={{ color: 'var(--text-subtle)', fontSize: '0.85rem', marginBottom: '0.5rem' }}>{item.date}</p>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 600, lineHeight: 1.4 }}>{item.title}</h3>
      </div>
    </motion.div>
  );
};

const InsightsGrid = () => {
  const [selected, setSelected] = useState(null);
  const { dark } = useTheme();

  return (
    <section style={{ padding: '6rem 0', background: 'var(--bg)' }}>
      <div style={{ width: '90%', maxWidth: '1440px', margin: '0 auto' }}>
        <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '1rem' }}>Nos Insights</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
            Restez informé des dernières tendances du marketing et du digital en Afrique.
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', 
          gap: '2.5rem' 
        }}>
          {insights.map(item => (
            <NewsCard key={item.id} item={item} onClick={() => setSelected(item)} />
          ))}
        </div>
      </div>

      {/* Modal for Details */}
      <AnimatePresence>
        {selected && (
          <div style={{
            position: 'fixed', inset: 0, 
            background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(10px)',
            zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '2rem'
          }}>
            <motion.div
              layoutId={`card-${selected.id}`}
              style={{
                background: 'var(--bg)',
                width: '100%', maxWidth: '800px', borderRadius: '32px',
                overflow: 'hidden', border: '1px solid var(--border)',
                maxHeight: '90vh', overflowY: 'auto'
              }}
            >
              <div style={{ position: 'relative', width: '100%', height: '400px' }}>
                <Image src={selected.image} alt={selected.title} fill style={{ objectFit: 'cover' }} />
                <button 
                  onClick={() => setSelected(null)}
                  style={{
                    position: 'absolute', top: '1.5rem', right: '1.5rem',
                    width: '44px', height: '44px', borderRadius: '50%',
                    background: 'rgba(0,0,0,0.5)', border: 'none', color: '#fff',
                    cursor: 'pointer', fontSize: '1.5rem'
                  }}
                >
                  &times;
                </button>
              </div>
              <div style={{ padding: '3rem' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <span style={{ color: 'var(--gradient-start)', fontWeight: 600 }}>{selected.category}</span>
                  <span style={{ color: 'var(--text-subtle)' }}>•</span>
                  <span style={{ color: 'var(--text-subtle)' }}>{selected.date}</span>
                </div>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '2rem', lineHeight: 1.2 }}>{selected.title}</h2>
                <div style={{ color: 'var(--text-muted)', fontSize: '1.15rem', lineHeight: 1.8 }}>
                  {selected.content}
                  <br /><br />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default InsightsGrid;
