import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { parsePayload, validatePayload } from '@/lib/validation';
import { getEmailJsConfigError, sendTeamNotification } from '@/lib/emailjs';
import afrolinkLogo from '@/public/images/logo/afrolink-logo-white.png';

// Délai minimum entre deux demandes réussies (anti-spam côté client).
const RESUBMIT_COOLDOWN_MS = 60 * 1000;

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
    website: '', // honeypot anti-spam
  });
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [statusMessage, setStatusMessage] = useState('');
  const lastSuccessAt = useRef(0);

  // Verrouille le scroll de la page pendant l'écran de succès.
  useEffect(() => {
    if (status !== 'success') return undefined;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
    };
  }, [status]);

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === 'submitting') return;

    // Honeypot : rempli uniquement par des bots — succès factice silencieux.
    if (formData.website) {
      setStatus('success');
      return;
    }

    // Anti-resoumission : une demande réussie verrouille le formulaire 60 s.
    if (Date.now() - lastSuccessAt.current < RESUBMIT_COOLDOWN_MS) {
      setStatus('error');
      setStatusMessage('Votre demande vient déjà d’être transmise. Veuillez patienter un instant.');
      return;
    }

    // Validation partagée (mêmes règles que précédemment côté serveur).
    const payload = parsePayload(formData);
    const { valid, errors } = validatePayload(payload);
    if (!valid) {
      setStatus('error');
      setStatusMessage(Object.values(errors)[0] || 'Veuillez vérifier les champs du formulaire.');
      return;
    }

    const configError = getEmailJsConfigError();
    if (configError) {
      setStatus('error');
      setStatusMessage(configError);
      return;
    }

    setStatus('submitting');
    setStatusMessage('');

    // 1. Notification à l'équipe — le succès de la demande repose sur cet envoi.
    try {
      await sendTeamNotification(payload);
    } catch (err) {
      console.error('[schedule-call] EmailJS team notification failed:', err);
      setStatus('error');
      setStatusMessage("Votre demande n'a pas pu être transmise. Veuillez réessayer dans quelques instants.");
      return;
    }

    lastSuccessAt.current = Date.now();
    setStatus('success');
    setStatusMessage('');
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
        {/* <span style={{ 
          color: 'var(--gradient-start)', 
          textTransform: 'uppercase', 
          fontWeight: 700, 
          letterSpacing: '0.2rem',
          fontSize: '0.85rem'
        }}>
          Contactez-nous
        </span> */}
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

        {/* Honeypot anti-spam — invisible pour les humains */}
        <div style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden' }} aria-hidden="true">
          <label htmlFor="website">Site web</label>
          <input id="website" type="text" name="website" value={formData.website} onChange={handleChange} tabIndex={-1} autoComplete="off" />
        </div>

        {/* Checkboxes */}
        <div style={{ marginTop: '3rem', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.95rem', color: 'var(--text-muted)', cursor: 'pointer' }}>
            <input type="checkbox" name="acceptComms" checked={formData.acceptComms} onChange={handleChange} style={{ width: '20px', height: '20px', accentColor: 'var(--gradient-start)' }} />
            <span>J&rsquo;accepte de recevoir des actualités de la part d&rsquo;AfroLink.</span>
          </label>

          <label style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.95rem', color: 'var(--text-muted)', cursor: 'pointer' }}>
            <input type="checkbox" name="acceptAdvisor" checked={formData.acceptAdvisor} onChange={handleChange} style={{ width: '20px', height: '20px', accentColor: 'var(--gradient-start)' }} required />
            <span>J&rsquo;accepte d&rsquo;être contacté par un conseiller stratégique.</span>
          </label>
        </div>

        {/* Message d'erreur */}
        {statusMessage && (
          <div
            role="alert"
            style={{
              marginTop: '2.5rem',
              padding: '1rem 1.5rem',
              borderRadius: '14px',
              fontSize: '1rem',
              fontWeight: 500,
              lineHeight: 1.5,
              background: 'rgba(220, 60, 40, 0.12)',
              border: '1px solid rgba(220, 60, 40, 0.4)',
              color: '#e05a45',
            }}
          >
            {statusMessage}
          </div>
        )}

        <div style={{ display: 'flex', justifyContent: 'flex-start', marginTop: '3rem' }}>
          <button
            type="submit"
            disabled={status === 'submitting'}
            style={{ 
              padding: '1.25rem 3.5rem', 
              background: 'var(--accent-gradient)', 
              color: '#fff', 
              border: 'none', 
              borderRadius: '100px', 
              fontSize: '1.1rem', 
              fontWeight: 700, 
              cursor: status === 'submitting' ? 'not-allowed' : 'pointer', 
              opacity: status === 'submitting' ? 0.7 : 1,
              transition: 'all 0.3s ease',
              boxShadow: '0 10px 30px rgba(226, 124, 0, 0.3)'
            }}
            onMouseEnter={(e) => {
              if (status === 'submitting') return;
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 15px 40px rgba(226, 124, 0, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(226, 124, 0, 0.3)';
            }}
          >
            {status === 'submitting' ? 'Envoi en cours…' : 'Lancer la collaboration'}
          </button>
        </div>
      </motion.form>

      {/* Écran de succès — affiché uniquement après confirmation EmailJS */}
      <AnimatePresence>
        {status === 'success' && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="success-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 9500,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1.5rem',
              background: 'rgba(0, 0, 0, 0.88)',
              backdropFilter: 'blur(8px)',
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.88, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.45, ease: [0.33, 1, 0.68, 1] }}
              className="success-card"
              style={{
                width: '100%',
                maxWidth: '620px',
                background: '#0A0A0A',
                border: '1px solid rgba(255, 165, 0, 0.25)',
                borderRadius: '28px',
                padding: '3rem 2.5rem',
                textAlign: 'center',
                boxShadow: '0 30px 80px rgba(0, 0, 0, 0.6), 0 0 60px rgba(200, 90, 0, 0.12)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
                <Image src={afrolinkLogo} alt="AfroLink" style={{ height: '2.5rem', width: 'auto' }} />
              </div>

              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.25, type: 'spring', stiffness: 300, damping: 18 }}
                style={{
                  width: '76px',
                  height: '76px',
                  margin: '0 auto 1.75rem',
                  borderRadius: '20px',
                  background: '#C85A00',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 12px 35px rgba(200, 90, 0, 0.45)',
                }}
              >
                <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </motion.div>

              <h3 id="success-title" style={{ fontSize: '1.7rem', fontWeight: 800, color: '#fff', margin: '0 0 0.9rem' }}>
                Demande envoyée !
              </h3>
              <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.75)', margin: '0 0 2rem', lineHeight: 1.6 }}>
                Votre demande a bien été transmise à l&apos;équipe AfroLink.
              </p>

              <div style={{
                background: '#141414',
                border: '1px solid rgba(255, 165, 0, 0.15)',
                borderRadius: '16px',
                padding: '1.5rem 1.75rem',
                textAlign: 'left',
                display: 'flex',
                gap: '1rem',
                alignItems: 'flex-start',
                marginBottom: '2rem',
              }}>
                <span style={{
                  flexShrink: 0,
                  width: '40px',
                  height: '40px',
                  borderRadius: '12px',
                  background: 'rgba(200, 90, 0, 0.18)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFA500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </span>
                <div>
                  <p style={{ fontSize: '1.05rem', fontWeight: 700, color: '#fff', margin: '0 0 0.4rem' }}>
                    C&apos;est tout bon !
                  </p>
                  <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.65)', margin: 0, lineHeight: 1.6 }}>
                    Notre équipe a bien reçu vos informations et reviendra vers vous pour échanger sur votre projet.
                  </p>
                </div>
              </div>

              <p style={{ fontSize: '1rem', fontWeight: 700, color: '#FFA500', margin: '0 0 2rem' }}>
                Merci de faire confiance à AfroLink.
              </p>

              <Link
                href="/"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  padding: '1rem 2.5rem',
                  background: 'var(--accent-gradient)',
                  color: '#fff',
                  borderRadius: '100px',
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  textDecoration: 'none',
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                  boxShadow: '0 10px 30px rgba(226, 124, 0, 0.35)',
                }}
              >
                Retour à l&apos;accueil
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) { 
          .form-row { grid-template-columns: 1fr !important; gap: 1.5rem !important; } 
          .contact-card-form { padding: 2rem !important; border-radius: 24px !important; }
          .success-card { padding: 2.25rem 1.5rem !important; border-radius: 22px !important; }
        }
        .form-input:focus {
           border-bottom-color: var(--gradient-start) !important;
        }
      `}</style>
    </section>
  );
};

export default ContactForm;
