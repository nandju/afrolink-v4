import { motion } from 'framer-motion';
import MaskText from '@/components/Common/MaskText';

const team = [
  { name: 'John Doe', role: 'Directeur Créatif' },
  { name: 'Jane Smith', role: 'Stratège Digital' },
  { name: 'Bob Johnson', role: 'Créateur de Contenu' },
  { name: 'Alice Brown', role: 'Chef de Projet' },
];

const OurTeam = () => {
  return (
    <section style={{ padding: '5rem 2rem', background: 'var(--Background)', color: 'var(--white)', textAlign: 'center' }}>
      <MaskText phrases={['Notre Équipe']} tag="h2" />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', maxWidth: '1000px', margin: '2rem auto 0' }}>
        {team.map((member, index) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            style={{ padding: '2rem', background: 'linear-gradient(135deg, rgba(226,124,0,0.1), rgba(255,165,0,0.1))', border: '1px solid rgba(226,124,0,0.2)', borderRadius: '8px' }}
          >
            <div style={{ width: '100px', height: '100px', background: 'var(--accent-gradient)', borderRadius: '50%', margin: '0 auto 1rem' }} />
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--white)' }}>{member.name}</h3>
            <p style={{ fontSize: '1rem', color: 'var(--light-gray)' }}>{member.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default OurTeam;
