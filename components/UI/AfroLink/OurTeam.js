import { motion } from 'framer-motion';
import MaskText from '@/components/Common/MaskText';

const team = [
  { name: 'John Doe', role: 'Directeur Créatif', photo: '/images/robert_fox.png' },
  { name: 'Jane Smith', role: 'Stratège Digital', photo: '/images/esther_howard.png' },
  { name: 'Bob Johnson', role: 'Créateur de Contenu', photo: '/images/cameron_williamson.png' },
  { name: 'Alice Brown', role: 'Chef de Projet', photo: null },
];

const initials = (name) =>
  name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();

const OurTeam = () => {
  return (
    <section className="team-section">
      <style>{`
        .team-section {
          padding: 6rem 2rem;
          background: var(--bg-surface);
        }
        .team-header {
          text-align: center;
          max-width: 640px;
          margin: 0 auto 4rem;
        }
        .team-label {
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
        .team-header h2 {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 800;
          color: var(--text);
          margin-bottom: 0.75rem;
        }
        .team-header p {
          font-size: 1.05rem;
          color: var(--text-muted);
        }
        .team-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          max-width: 1150px;
          margin: 0 auto;
        }
        .team-card {
          background: var(--bg);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 2rem 1.5rem;
          text-align: center;
          transition: transform 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease;
        }
        .team-card:hover {
          transform: translateY(-6px);
          border-color: var(--border-accent);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.25);
        }
        .team-avatar {
          width: 110px;
          height: 110px;
          border-radius: 50%;
          margin: 0 auto 1.25rem;
          overflow: hidden;
          border: 3px solid var(--border-accent);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .team-avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .team-avatar-fallback {
          width: 100%;
          height: 100%;
          background: var(--accent-gradient);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-size: 1.8rem;
          font-weight: 800;
        }
        .team-name {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--text);
          margin-bottom: 0.35rem;
        }
        .team-role {
          font-size: 0.9rem;
          color: var(--gradient-start);
          font-weight: 600;
        }
        @media (max-width: 1024px) {
          .team-grid {
            grid-template-columns: repeat(2, 1fr);
            max-width: 640px;
          }
        }
        @media (max-width: 560px) {
          .team-section {
            padding: 4rem 1rem;
          }
          .team-grid {
            grid-template-columns: 1fr;
            max-width: 320px;
          }
        }
      `}</style>

      <div className="team-header">
        <span className="team-label">Notre Équipe</span>
        <MaskText phrases={['Les talents derrière vos projets']} tag="h2" />
        <MaskText phrases={['Une équipe créative et passionnée à votre service']} tag="p" />
      </div>

      <div className="team-grid">
        {team.map((member, index) => (
          <motion.div
            key={member.name}
            className="team-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: index * 0.1, ease: [0.33, 1, 0.68, 1] }}
          >
            <div className="team-avatar">
              {member.photo ? (
                <img src={member.photo} alt={member.name} />
              ) : (
                <span className="team-avatar-fallback">{initials(member.name)}</span>
              )}
            </div>
            <h3 className="team-name">{member.name}</h3>
            <p className="team-role">{member.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default OurTeam;
