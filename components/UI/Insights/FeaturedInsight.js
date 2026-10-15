import { motion } from 'framer-motion';
import Image from 'next/image';

const featured = {
  title: 'Tendances du Marketing Digital en Afrique',
  category: 'À la une',
  date: '15 Mars 2024',
  image:
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop',
  excerpt:
    'Explorez les dernières tendances qui façonnent le marketing digital à travers le continent africain : IA, social commerce et création de contenu authentique.',
};

const FeaturedInsight = () => {
  return (
    <section className="featured-insight-section">
      <style>{`
        .featured-insight-section {
          padding: 6rem 2rem 3rem;
          background: var(--bg);
        }
        .fi-card {
          display: grid;
          grid-template-columns: 1.15fr 1fr;
          max-width: 1100px;
          margin: 0 auto;
          background: var(--bg-surface);
          border: 1px solid var(--border);
          border-radius: 20px;
          overflow: hidden;
          transition: transform 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease;
        }
        .fi-card:hover {
          transform: translateY(-4px);
          border-color: var(--border-accent);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.25);
        }
        .fi-img-wrap {
          position: relative;
          min-height: 320px;
        }
        .fi-badge {
          position: absolute;
          top: 1.25rem;
          left: 1.25rem;
          z-index: 2;
          background: var(--accent-gradient);
          color: #fff;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 0.4rem 0.9rem;
          border-radius: 100px;
        }
        .fi-body {
          padding: 2.75rem 2.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .fi-label {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--gradient-start);
          margin-bottom: 0.9rem;
        }
        .fi-title {
          font-size: clamp(1.6rem, 3vw, 2.2rem);
          font-weight: 800;
          line-height: 1.25;
          color: var(--text);
          margin-bottom: 1rem;
        }
        .fi-excerpt {
          font-size: 1rem;
          line-height: 1.7;
          color: var(--text-muted);
          margin-bottom: 1.75rem;
        }
        .fi-meta {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.85rem;
          color: var(--text-subtle);
        }
        .fi-read {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          margin-top: 1.5rem;
          color: var(--gradient-start);
          font-weight: 700;
          font-size: 0.95rem;
        }
        @media (max-width: 820px) {
          .fi-card {
            grid-template-columns: 1fr;
          }
          .fi-img-wrap {
            min-height: 230px;
          }
          .fi-body {
            padding: 2rem 1.5rem;
          }
        }
        @media (max-width: 480px) {
          .featured-insight-section {
            padding: 4rem 1rem 2rem;
          }
        }
      `}</style>

      <motion.div
        className="fi-card"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
      >
        <div className="fi-img-wrap">
          <span className="fi-badge">{featured.category}</span>
          <Image
            src={featured.image}
            alt={featured.title}
            fill
            sizes="(max-width: 820px) 100vw, 50vw"
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="fi-body">
          <p className="fi-label">Insight Vedette</p>
          <h3 className="fi-title">{featured.title}</h3>
          <p className="fi-excerpt">{featured.excerpt}</p>
          <div className="fi-meta">
            <span>{featured.date}</span>
            <span>•</span>
            <span>5 min de lecture</span>
          </div>
          <span className="fi-read">Lire l&apos;article →</span>
        </div>
      </motion.div>
    </section>
  );
};

export default FeaturedInsight;
