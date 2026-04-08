import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';

const ContactForm = () => {
  const { dark } = useTheme();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    acceptComms: false,
    acceptAdvisor: false,
  });

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add success feedback
    alert("Message envoyé ! Nous vous recontacterons bientôt.");
  };

  const inputStyle = {
    padding: '1rem 0',
    border: 'none',
    borderBottom: '1.5px solid var(--border)',
    background: 'transparent',
    fontSize: '1.1rem',
    color: 'var(--text)',
    outline: 'none',
    width: '100%',
    transition: 'border-color 0.3s ease',
  };

  return (
    <section style={{ padding: '8rem 5%', background: 'var(--bg)', textAlign: 'center' }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span style={{ 
          color: 'var(--gradient-start)', 
          textTransform: 'uppercase', 
          fontWeight: 700, 
          letterSpacing: '0.2rem',
          fontSize: '0.85rem'
        }}>
          Contactez-nous
        </span>
        <h2 style={{
          fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
          fontWeight: 800,
          lineHeight: 1.1,
          color: 'var(--text)',
          marginTop: '1.5rem',
          marginBottom: '2rem',
        }}>
          Prêt à propulser <br/>
          <span style={{ 
            background: 'var(--accent-gradient)', 
            WebkitBackgroundClip: 'text', 
            WebkitTextFillColor: 'transparent' 
          }}>
            votre marque ?
          </span>
        </h2>

        <p style={{ 
          fontSize: '1.25rem', 
          color: 'var(--text-muted)', 
          maxWidth: '800px', 
          margin: '0 auto 5rem', 
          lineHeight: 1.6,
          fontWeight: 400
        }}>
          Besoin d’un accompagnement stratégique ou d’une identité visuelle marquante ? <br />
          Nos experts sont prêts à donner vie à vos ambitions.
        </p>
      </motion.div>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{ 
          maxWidth: '1000px', 
          margin: '0 auto', 
          textAlign: 'left', 
          padding: '4rem',
          background: 'var(--bg-surface)',
          borderRadius: '40px',
          border: '1px solid var(--border)',
          backdropFilter: 'blur(10px)',
          boxShadow: 'var(--card-shadow)'
        }}
        className="contact-card-form"
      >
        {/* Row 1 */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }} className="form-row">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-muted)' }} htmlFor="firstName">
              Prénom
            </label>
            <input id="firstName" type="text" name="firstName" value={formData.firstName} onChange={handleChange} required style={inputStyle} className="form-input" />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-muted)' }} htmlFor="lastName">
              Nom
            </label>
            <input id="lastName" type="text" name="lastName" value={formData.lastName} onChange={handleChange} required style={inputStyle} className="form-input" />
          </div>
        </div>

        {/* Row 2 */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', marginTop: '2rem' }} className="form-row">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-muted)' }} htmlFor="email">
              E-mail Professionnel
            </label>
            <input id="email" type="email" name="email" value={formData.email} onChange={handleChange} required style={inputStyle} className="form-input" />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-muted)' }} htmlFor="phone">Téléphone</label>
            <input id="phone" type="tel" name="phone" value={formData.phone} onChange={handleChange} style={inputStyle} className="form-input" />
          </div>
        </div>

        {/* Message */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '3rem' }}>
          <label style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-muted)' }} htmlFor="message">
            Votre Projet
          </label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange} required style={{ ...inputStyle, minHeight: '120px', resize: 'none' }} placeholder="Dites-nous tout..." className="form-input" />
        </div>

        {/* Checkboxes */}
        <div style={{ marginTop: '3rem', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.95rem', color: 'var(--text-muted)', cursor: 'pointer' }}>
            <input type="checkbox" name="acceptComms" checked={formData.acceptComms} onChange={handleChange} style={{ width: '20px', height: '20px', accentColor: 'var(--gradient-start)' }} />
            <span>J'accepte de recevoir des actualités de la part d'AfroLink.</span>
          </label>

          <label style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.95rem', color: 'var(--text-muted)', cursor: 'pointer' }}>
            <input type="checkbox" name="acceptAdvisor" checked={formData.acceptAdvisor} onChange={handleChange} style={{ width: '20px', height: '20px', accentColor: 'var(--gradient-start)' }} required />
            <span>J'accepte d'être contacté par un conseiller stratégique.</span>
          </label>
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-start', marginTop: '4rem' }}>
          <button
            type="submit"
            style={{ 
              padding: '1.25rem 3.5rem', 
              background: 'var(--accent-gradient)', 
              color: '#fff', 
              border: 'none', 
              borderRadius: '100px', 
              fontSize: '1.1rem', 
              fontWeight: 700, 
              cursor: 'pointer', 
              transition: 'all 0.3s ease',
              boxShadow: '0 10px 30px rgba(226, 124, 0, 0.3)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 15px 40px rgba(226, 124, 0, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(226, 124, 0, 0.3)';
            }}
          >
            Lancer la collaboration
          </button>
        </div>
      </motion.form>

      <style>{`
        @media (max-width: 768px) { 
          .form-row { grid-template-columns: 1fr !important; gap: 1.5rem !important; } 
          .contact-card-form { padding: 2rem !important; border-radius: 24px !important; }
        }
        .form-input:focus {
           border-bottom-color: var(--gradient-start) !important;
        }
      `}</style>
    </section>
  );
};

export default ContactForm;
