import { motion } from 'framer-motion';
import MaskText from '@/components/Common/MaskText';

const projects = [
  {
    title: 'Campagne de Marque',
    description: 'Développement complet de campagne de marque.',
    image: '/images/projects/creationdecontenu.jpg',
  },
  {
    title: 'Stratégie de Réseaux Sociaux',
    description: 'Stratégies engageantes de réseaux sociaux.',
    image: '/images/projects/reseauxsociaux.jpg',
  },
  {
    title: 'Lancement de Produit',
    description: 'Campagnes de lancement de produit réussies.',
    image: '/images/projects/programme2.jpg',
  },
];

const FeaturedProjects = () => {
  return (
    <section
      style={{
        padding: '5rem 2rem',
        background: 'var(--Background)',
        textAlign: 'center',
      }}
    >
      <h2 style={{ marginBottom: '2rem' }}>
        <MaskText phrases={['Projets Présentés']} tag="h2" />
      </h2>

      <style jsx>{`
        h2 {
          font-size: 2.5rem;
          font-weight: 800;
          line-height: 1.2;
        }
      `}</style>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          maxWidth: '1200px',
          margin: '2rem auto 0',
        }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            style={{
              background:
                'linear-gradient(135deg, rgba(226,124,0,0.1), rgba(255,165,0,0.1))',
              border: '1px solid rgba(226,124,0,0.2)',
              borderRadius: '8px',
              overflow: 'hidden',
            }}
          >
            {/* IMAGE DU PROJET */}
            <div
              style={{
                height: '200px',
                width: '100%',
                overflow: 'hidden',
                background: 'var(--accent-gradient)',
              }}
            >
              <img
                src={project.image}
                alt={project.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </div>

            {/* INFORMATIONS */}
            <div style={{ padding: '1.5rem' }}>
              <h3
                style={{
                  fontSize: '1.5rem',
                  color: 'var(--white)',
                  marginBottom: '0.5rem',
                }}
              >
                {project.title}
              </h3>

              <p
                style={{
                  fontSize: '1rem',
                  color: 'var(--light-gray)',
                  lineHeight: 1.6,
                }}
              >
                {project.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;