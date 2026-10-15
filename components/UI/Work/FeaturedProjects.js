import { motion } from 'framer-motion';
import MaskText from '@/components/Common/MaskText';

const projects = [
  {
    title: 'Campagne de Marque',
    description: 'Développement complet de campagne de marque.',
    tag: 'Branding',
    image: '/images/projects/creationdecontenu.jpg',
  },
  {
    title: 'Stratégie de Réseaux Sociaux',
    description: 'Stratégies engageantes de réseaux sociaux.',
    tag: 'Social Media',
    image: '/images/projects/reseauxsociaux.jpg',
  },
  {
    title: 'Lancement de Produit',
    description: 'Campagnes de lancement de produit réussies.',
    tag: 'Activation',
    image: '/images/projects/programme2.jpg',
  },
];

const FeaturedProjects = () => {
  return (
    <section className="projects-section">
      <style>{`
        .projects-section {
          padding: 6rem 2rem;
          background: var(--bg);
        }
        .projects-header {
          text-align: center;
          max-width: 640px;
          margin: 0 auto 4rem;
        }
        .projects-label {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--gradient-start);
          padding: 0.4rem 1rem;
          border: 1px solid var(--border-accent);
          border-radius: 100px;
          margin-bottom: 1.25rem;
        }
        .projects-header h2 {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 800;
          line-height: 1.2;
          color: var(--text);
          margin-bottom: 0.75rem;
        }
        .projects-header p {
          font-size: 1.05rem;
          color: var(--text-muted);
        }
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.75rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        .project-card {
          background: var(--bg-surface);
          border: 1px solid var(--border);
          border-radius: 16px;
          overflow: hidden;
          transition: transform 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease;
          display: flex;
          flex-direction: column;
        }
        .project-card:hover {
          transform: translateY(-6px);
          border-color: var(--border-accent);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.25);
        }
        .project-img-wrap {
          position: relative;
          height: 220px;
          overflow: hidden;
        }
        .project-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }
        .project-card:hover .project-img {
          transform: scale(1.08);
        }
        .project-tag {
          position: absolute;
          top: 1rem;
          left: 1rem;
          background: var(--accent-gradient);
          color: #fff;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          padding: 0.35rem 0.8rem;
          border-radius: 100px;
        }
        .project-body {
          padding: 1.5rem;
        }
        .project-title {
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--text);
          margin-bottom: 0.5rem;
        }
        .project-desc {
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.6;
        }
        @media (max-width: 900px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 600px) {
          .projects-section {
            padding: 4rem 1rem;
          }
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="projects-header">
        <span className="projects-label">Notre Travail</span>
        <MaskText phrases={['Projets Présentés']} tag="h2" />
        <MaskText
          phrases={["Une sélection de collaborations récentes qui illustrent notre savoir-faire"]}
          tag="p"
        />
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            className="project-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: index * 0.1, ease: [0.33, 1, 0.68, 1] }}
          >
            <div className="project-img-wrap">
              <img src={project.image} alt={project.title} className="project-img" />
              <span className="project-tag">{project.tag}</span>
            </div>
            <div className="project-body">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
