import Image from 'next/image';
import raftFooterLogoDark from '@/public/svgs/logo_Afrolink-removebg-preview.png';
import raftFooterLogoLight from '@/public/svgs/logo_Afrolink_noir.png';
import qrCode from '@/public/svgs/qr_code.svg';
import icGooglePlaystore from '@/public/svgs/ic_google_playstore.svg';
import icBaselineApple from '@/public/svgs/ic_baseline_apple.svg';
import icChevronDown from '@/public/svgs/ic_chevron_down.svg';
import icCopyright from '@/public/svgs/ic_copyright.svg';

const linksArr = [
  { title: 'Agence', links: ['Notre mission', 'Équipe', 'Recrutement'] },
  { title: 'Expertises', links: ['Stratégie digitale', 'Production créative', 'Activation média'] },
  { title: 'Ressources', links: ['Contact', 'FAQ', 'Blog'] },
];

import { useTheme } from '@/contexts/ThemeContext';

const Footer = () => {
  const { dark } = useTheme();
  const footerLogo = dark ? raftFooterLogoDark : raftFooterLogoLight;

  return (
    <footer style={{ paddingBottom: '3.5rem' }}>
      <main style={{ width: '90%', maxWidth: '1440px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '3.75rem' }}>
        {/* Logo */}
        <div style={{ width: '12rem', height: '7.5rem' }}>
          <Image src={footerLogo} alt="Logo Afrolink en pied de page" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
        </div>

        {/* Main content */}
        <div style={{ display: 'flex', flexDirection: 'column', padding: '3.75rem 0 3.25rem', borderTop: '0.0625rem solid rgba(226, 124, 0, 0.3)', gap: '3.25rem' }}>
          {/* Middle */}
          <div className="footer-middle" style={{ display: 'flex', justifyContent: 'space-between', width: '100%', gap: '2rem' }}>
            {/* QR */}
            <div style={{ display: 'flex', gap: '0.75rem', padding: '1.25rem 1rem', borderRadius: '0.5rem', border: '1px dashed rgba(226, 124, 0, 0.5)', background: 'linear-gradient(135deg, rgba(226,124,0,0.05), rgba(255,165,0,0.05))' }}>
              <div>
                <Image src={qrCode} alt="QR code de téléchargement" />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <p style={{ maxWidth: '19.5625rem', fontSize: '1.25rem', fontWeight: 400 }}>
                  Scannez pour accéder à notre board de ressources et aux kits média.
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <Image src={icGooglePlaystore} alt="Accès ressources via Google Play" />
                  <Image src={icBaselineApple} alt="Accès ressources via Apple" />
                </div>
              </div>
            </div>

            {/* Nav grid */}
            <div className="footer-nav" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
              {linksArr.map((l, i) => (
                <div key={i} style={{ display: 'flex', minWidth: '12.5rem', width: '100%', flexDirection: 'column', alignItems: 'flex-start', gap: '1rem' }}>
                  <h3>{l.title}</h3>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {l.links.map((link, j) => (
                      <li key={j} style={{ color: 'var(--light-gray)', fontSize: '1rem', fontWeight: 400, cursor: 'pointer' }}>
                        {link}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.12rem', cursor: 'pointer' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 400, color: 'var(--white)' }}>Français (Civ)</h3>
              <Image src={icChevronDown} alt="Sélection de langue" />
            </div>
            <div style={{ fontSize: '1rem', fontWeight: 400, display: 'flex', alignItems: 'center', color: 'var(--light-gray)' }}>
              <Image src={icCopyright} alt="Symbole copyright" />
              Afrolink Studio · 2025
            </div>
          </div>
        </div>
      </main>

      <style>{`
        @media (max-width: 768px) {
          .footer-middle { flex-direction: column !important; gap: 3.5rem !important; align-items: stretch !important; }
          .footer-nav { grid-template-columns: 1fr !important; gap: 2rem 0 !important; }
          .footer-nav > div { min-width: 0 !important; width: 100% !important; }
          .footer-middle > div { width: 100%; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
