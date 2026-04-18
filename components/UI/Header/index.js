import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import AnimatedLink from '@/components/Common/AnimatedLink';
import GetStartedButton from '@/components/Common/GetStartedButton';
import { useTheme } from '@/contexts/ThemeContext';
import afrolinkLogoDark from '@/public/svgs/logo_Afrolink-removebg-preview_3.png';
import afrolinkLogoLight from '@/public/svgs/logo_Afrolink_noir.png';
import { links } from './constants';

const SunIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);

const MoonIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

const BarsIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { dark, toggle } = useTheme();
  const router = useRouter();
  const headerLogo = dark ? afrolinkLogoDark : afrolinkLogoLight;

  useEffect(() => {
    const handleRouteChange = () => setIsOpen(false);
    router.events.on('routeChangeStart', handleRouteChange);
    return () => router.events.off('routeChangeStart', handleRouteChange);
  }, [router]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (url) => router.pathname === url;

  return (
    <>
      {/* ── Desktop / tablet bar ── */}
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          padding: '1.25rem 0',
          background: isScrolled ? 'rgba(var(--bg-rgb), 0.95)' : 'transparent',
          // borderBottom: '1px solid var(--border)',
          zIndex: 100,
          transition: 'all 0.3s ease',
        }}
        className="main-header"
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '92%', maxWidth: '1440px', margin: '0 auto' }}>

          {/* Left: Logo + Links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '3rem' }}>
            <Link href="/" style={{ display: 'flex', alignItems: 'center', transition: 'transform 0.2s ease' }} className="logo-link">
                <Image src={headerLogo} alt="Logo Afrolink" priority style={{ width: '120px', height: 'auto', objectFit: 'contain' }} />
            </Link>

            {/* Desktop nav */}
            <nav className="header-desktop-nav">
              {links.map((link) => (
                <Link
                  key={link.url}
                  href={link.url}
                  style={{
                    color: isActive(link.url) ? 'var(--gradient-start)' : 'var(--text)',
                    fontSize: '0.9rem',
                    fontWeight: isActive(link.url) ? 600 : 500,
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                    whiteSpace: 'nowrap',
                    opacity: isActive(link.url) ? 1 : 0.7,
                    letterSpacing: '0.02em',
                  }}
                  className="header-nav-link"
                >
                  {link.linkTo}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right: Theme toggle + CTA */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexShrink: 0 }}>
            {/* Theme toggle */}
            <button
              onClick={toggle}
              aria-label={dark ? 'Mode clair' : 'Mode sombre'}
              style={{
                background: 'var(--bg-surface)',
                border: '1px solid var(--border)',
                borderRadius: '12px',
                width: '42px',
                height: '42px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: 'var(--text)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: 'var(--card-shadow)',
              }}
              className="theme-toggle"
            >
              <div style={{ transform: dark ? 'rotate(0)' : 'rotate(180deg)', transition: 'transform 0.5s ease' }}>
                {dark ? <SunIcon /> : <MoonIcon />}
              </div>
            </button>

            {/* Planifier button — desktop only */}
            <div className="header-cta-btn">
              <GetStartedButton padding="0.65rem 1.25rem" />
            </div>

            {/* Burger — mobile/tablet */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
              style={{
                background: 'var(--bg-surface)',
                border: '1px solid var(--border)',
                borderRadius: '12px',
                width: '42px',
                height: '42px',
                display: 'none',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: 'var(--text)',
                transition: 'all 0.2s ease',
              }}
              className="header-burger"
            >
              {isOpen ? <CloseIcon /> : <BarsIcon />}
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile drawer ── */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          background: 'var(--bg)',
          display: 'flex',
          flexDirection: 'column',
          zIndex: 200,
          opacity: isOpen ? 1 : 0,
          visibility: isOpen ? 'visible' : 'hidden',
          transform: isOpen ? 'translateY(0)' : 'translateY(-20px)',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          paddingTop: '80px',
        }}
      >
        {/* Drawer header (absolute top) */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.25rem 5%', height: '80px' }}>
          <Image src={headerLogo} alt="Logo Afrolink" priority style={{ width: '100px', height: 'auto' }} />
          <button
            onClick={() => setIsOpen(false)}
            style={{ background: 'var(--bg-surface)', border: '1px solid var(--border)', borderRadius: '12px', width: '42px', height: '42px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'var(--text)' }}
          >
            <CloseIcon />
          </button>
        </div>

        {/* Drawer nav */}
        <nav style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 10%', gap: '1rem' }}>
          {links.map((link, i) => (
            <Link
              key={link.url}
              href={link.url}
              onClick={() => setIsOpen(false)}
              style={{
                color: isActive(link.url) ? 'var(--gradient-start)' : 'var(--text)',
                fontSize: '2.5rem',
                fontWeight: 700,
                textDecoration: 'none',
                opacity: isOpen ? 1 : 0,
                transform: isOpen ? 'translateX(0)' : 'translateX(-30px)',
                transition: `all 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${0.1 + i * 0.1}s`,
                display: 'block',
              }}
            >
              {link.linkTo}
            </Link>
          ))}
        </nav>

        {/* Drawer footer */}
        <div style={{ 
          padding: '2rem 10% 4rem', 
          opacity: isOpen ? 1 : 0,
          transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.5s ease 0.6s'
        }}>
          <GetStartedButton padding="1rem 1.5rem" fullWidth />
          
          <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center', gap: '2rem' }}>
            <button onClick={toggle} style={{ background: 'none', border: 'none', color: 'var(--text)', fontSize: '1rem', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              {dark ? <SunIcon /> : <MoonIcon />}
              <span>{dark ? 'Mode Clair' : 'Mode Sombre'}</span>
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .header-desktop-nav {
          display: flex;
          align-items: center;
          gap: 2.5rem;
        }
        .header-nav-link:hover {
          color: var(--gradient-end) !important;
          opacity: 1 !important;
        }
        .logo-link:hover {
          transform: scale(1.02);
        }
        .theme-toggle:hover {
          transform: translateY(-2px);
          background: var(--bg-surface-hover);
        }
        @media (max-width: 1024px) {
          .header-desktop-nav { gap: 1.5rem; }
        }
        @media (max-width: 900px) {
          .header-desktop-nav { display: none !important; }
          .header-cta-btn { display: none !important; }
          .header-burger { display: flex !important; }
        }
        :root {
          --bg-rgb: 0, 0, 0;
        }
        [data-theme="light"] {
          --bg-rgb: 255, 255, 255;
        }
      `}</style>
    </>
  );
};

export default Header;
