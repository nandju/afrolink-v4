import { motion } from 'framer-motion';
import { useState } from 'react';

const partners = [
  { name: 'Partner 1', link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/EdX_newer_logo.svg/langfr-330px-EdX_newer_logo.svg.png', size: 'large', color: 'orange' },
  { name: 'Partner 2', link: 'https://i.pinimg.com/1200x/d7/c7/e5/d7c7e5f8e9f816947ead3165433160d5.jpg', size: 'medium', color: 'green' },
  { name: 'Partner 3', link: 'https://i.pinimg.com/1200x/a5/89/c8/a589c8077c7e4735b767a9ffc7ef6c23.jpg', size: 'small', color: 'blue' },
  { name: 'Partner 4', link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Khan_Academy_logo_%282018%29.svg/langfr-500px-Khan_Academy_logo_%282018%29.svg.png', size: 'large', color: 'purple' },
  { name: 'Partner 5', link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Logo_UNESCO_2021.svg/langfr-330px-Logo_UNESCO_2021.svg.png', size: 'medium', color: 'orange' },
  { name: 'Partner 6', link: 'https://i.pinimg.com/736x/13/f5/8d/13f58db3254b16cb2c9ca747f8e2de4b.jpg', size: 'small', color: 'green' },
  { name: 'Partner 7', link: 'https://i.pinimg.com/736x/9f/65/e0/9f65e0094e0172fd3bccd9fc3306d514.jpg', size: 'large', color: 'blue' },
  { name: 'Partner 8', link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Khan_Academy_logo_%282018%29.svg/langfr-500px-Khan_Academy_logo_%282018%29.svg.png', size: 'medium', color: 'purple' },
  { name: 'Partner 9', link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/EdX_newer_logo.svg/langfr-330px-EdX_newer_logo.svg.png', size: 'small', color: 'orange' },
  { name: 'Partner 10', link: 'https://i.pinimg.com/1200x/04/e1/e6/04e1e66d3807f49210ab4c9d21048f72.jpg', size: 'large', color: 'green' },
  { name: 'Partner 11', link: 'https://i.pinimg.com/736x/7f/eb/02/7feb0256dc66ee941c1a5d4c945ed60b.jpg', size: 'medium', color: 'blue' },
  { name: 'Partner 12', link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Khan_Academy_logo_%282018%29.svg/langfr-500px-Khan_Academy_logo_%282018%29.svg.png', size: 'small', color: 'purple' },
  { name: 'Partner 13', link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Logo_UNESCO_2021.svg/langfr-330px-Logo_UNESCO_2021.svg.png', size: 'large', color: 'orange' },
  { name: 'Partner 14', link: 'https://i.pinimg.com/1200x/b0/de/60/b0de6006aee3fce314fc2575019d0b0d.jpg', size: 'medium', color: 'green' },
  { name: 'Partner 15', link: 'https://i.pinimg.com/1200x/ae/a6/f5/aea6f543a891c8bb4708ed55bdb4cef0.jpg', size: 'small', color: 'blue' },
];

const sizeStyles = {
  large: { width: '80px', height: '80px' },
  medium: { width: '60px', height: '60px' },
  small: { width: '45px', height: '45px' },
};

const colorStyles = {
  orange: { background: 'linear-gradient(135deg, rgba(226,124,0,0.2), rgba(255,165,0,0.2))', border: '2px solid rgba(226,124,0,0.4)' },
  green: { background: 'linear-gradient(135deg, rgba(34,197,94,0.2), rgba(74,222,128,0.2))', border: '2px solid rgba(34,197,94,0.4)' },
  blue: { background: 'linear-gradient(135deg, rgba(59,130,246,0.2), rgba(96,165,250,0.2))', border: '2px solid rgba(59,130,246,0.4)' },
  purple: { background: 'linear-gradient(135deg, rgba(147,51,234,0.2), rgba(192,132,252,0.2))', border: '2px solid rgba(147,51,234,0.4)' },
};

const BrandsWorkedWith = () => {
  const [hoveredPartner, setHoveredPartner] = useState(null);

  return (
    <section
      style={{
        padding: '6rem 2rem',
        background: 'linear-gradient(180deg, var(--Background) 0%, rgba(226,124,0,0.05) 50%, var(--Background) 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Floating Background Elements */}
      <div
        style={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(226,124,0,0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '10%',
          right: '5%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(34,197,94,0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(80px)',
        }}
      />

      <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h2
            style={{
              fontSize: '2.5rem',
              fontWeight: '800',
              color: 'var(--white)',
              marginBottom: '1rem',
              lineHeight: '1.2',
            }}
          >
            Nos Partenaires de Confiance
          </h2>
          <p
            style={{
              fontSize: '1.25rem',
              color: 'var(--light-gray)',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.6',
            }}
          >
            Rejoignez notre réseau de partenaires et développez votre marque avec AfroLink
          </p>
        </motion.div>

        {/* Partner Logos Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
            gap: '1.5rem',
            maxWidth: '1000px',
            margin: '0 auto 4rem',
            position: 'relative',
          }}
        >
          {partners.map((partner, index) => (
            <motion.a
              key={partner.name}
              href={partner.link}
              initial={{ opacity: 0, scale: 0.5, rotate: Math.random() * 20 - 10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              whileHover={{ scale: 1.15, rotate: 5 }}
              onMouseEnter={() => setHoveredPartner(index)}
              onMouseLeave={() => setHoveredPartner(null)}
              style={{
                ...sizeStyles[partner.size],
                ...colorStyles[partner.color],
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                overflow : 'clip',
                boxShadow: hoveredPartner === index ? '0 10px 30px rgba(226,124,0,0.3)' : '0 4px 15px rgba(0,0,0,0.1)',
              }}
            >
            <img 
              src={partner.link}
              alt={partner.name}
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
            </motion.a>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={{
            textAlign: 'center',
            padding: '3rem 2rem',
            background: 'linear-gradient(135deg, rgba(226,124,0,0.1), rgba(34,197,94,0.1))',
            border: '2px solid rgba(226,124,0,0.2)',
            borderRadius: '20px',
            maxWidth: '700px',
            margin: '0 auto',
          }}
        >
          <h3
            style={{
              fontSize: '2rem',
              fontWeight: '700',
              color: 'var(--white)',
              marginBottom: '1.5rem',
              lineHeight: '1.3',
            }}
          >
            Rejoignez notre réseau de partenaires dès aujourd'hui !
          </h3>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: '1.25rem 3rem',
              fontSize: '1.125rem',
              fontWeight: '700',
              color: 'var(--white)',
              background: 'linear-gradient(135deg, var(--accent-color), #e67e22)',
              border: 'none',
              borderRadius: '50px',
              cursor: 'pointer',
              boxShadow: '0 8px 25px rgba(226,124,0,0.4)',
              transition: 'all 0.3s ease',
            }}
          >
            Devenir Partenaire
          </motion.button>
        </motion.div>
      </div>

      {/* Decorative Floating Circles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            position: 'absolute',
            width: `${10 + i * 5}px`,
            height: `${10 + i * 5}px`,
            borderRadius: '50%',
            background: i % 2 === 0 ? 'rgba(226,124,0,0.3)' : 'rgba(34,197,94,0.3)',
            top: `${20 + i * 10}%`,
            left: `${10 + i * 8}%`,
            pointerEvents: 'none',
          }}
        />
      ))}

      {/* Responsive Styles */}
      <style jsx>{`
        @media (max-width: 1024px) {
          div[style*='gridTemplateColumns'] {
            gridTemplateColumns: repeat(auto-fit, minmax(80px, 1fr));
            gap: 1rem;
          }

          h2 {
            font-size: 2rem !important;
          }

          h3 {
            font-size: 1.5rem !important;
          }
        }

        @media (max-width: 768px) {
          section {
            padding: 4rem 1rem !important;
          }

          div[style*='gridTemplateColumns'] {
            gridTemplateColumns: repeat(auto-fit, minmax(60px, 1fr));
            gap: 0.75rem;
          }

          h2 {
            font-size: 1.75rem !important;
          }

          p[style*='fontSize: 1.25rem'] {
            font-size: 1rem !important;
          }

          h3 {
            font-size: 1.25rem !important;
          }

          motion.button {
            padding: 1rem 2rem !important;
            font-size: 1rem !important;
          }
        }

        @media (max-width: 480px) {
          div[style*='gridTemplateColumns'] {
            gridTemplateColumns: repeat(4, 1fr);
          }
        }
      `}</style>
    </section>
  );
};

export default BrandsWorkedWith;
