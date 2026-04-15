import Image from 'next/image';
import MaskText from '@/components/Common/MaskText';
import { useIsMobile } from '@/libs/useIsMobile';
import gridBackground from '@/public/images/offer_card_grid_1.png';
import { desktopHeaderPhrases, desktopParagraphPhrase, mobileParagraphPhrase, offers } from './constants';

const OfferCard = ({ offer }) => (
  <div
    style={{
      overflow: 'hidden',
      height: '31.25rem',
      borderRadius: '0.75rem',
      border: '1px solid var(--border)',
      display: 'flex',
      flexDirection: 'column',
      background: `url(${gridBackground.src}) var(--bg-surface) no-repeat`,
      backgroundSize: 'cover',
    }}
  >
    <div
      style={{
        margin: '3rem auto 0',
        position: 'relative',
        display: 'flex',
      }}
      className="offer-image-ctn"
    >
      <Image src={offer.illustration} alt={`Illustration ${offer.title}`} style={{ width: '100%', objectFit: 'contain' }} />
    </div>
    <div style={{ padding: '2.5rem', paddingTop: '3.25rem', maxWidth: '32.25rem', display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: 'auto' }}>
      <MaskText phrases={[offer.title]} tag="h2" style={{ fontWeight: 900, fontSize: '1.5rem' }} />
      <p style={{ color: 'var(--link-color)', fontSize: '1rem', fontWeight: 400, lineHeight: '1.5rem' }}>{offer.details}</p>
    </div>
  </div>
);

const OffersSection = () => {
  const isMobile = useIsMobile();

  return (
    <section>
      <div style={{ maxWidth: '1440px', width: '90%', margin: '12.38rem auto 0' }} className="offers-inner">
        {/* Header */}
        <header
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1.5rem',
            textAlign: 'center',
            maxWidth: '56rem',
            margin: '0 auto 6.75rem',
          }}
          className="offers-header"
        >
          <div style={{ fontSize: '4.75rem', fontWeight: 400 }} className="offers-h1">
            <MaskText phrases={desktopHeaderPhrases} tag="h1" style={{ fontWeight: 900 }} />
          </div>
          {isMobile ? (
            <MaskText phrases={mobileParagraphPhrase} tag="p" />
          ) : (
            <MaskText phrases={desktopParagraphPhrase} tag="p" />
          )}
        </header>

        {/* Row 1 */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="offers-row">
          <div style={{ flex: 2 }}><OfferCard offer={offers[0]} /></div>
          <div style={{ flex: 1 }}><OfferCard offer={offers[1]} /></div>
        </div>

        {/* Row 2 */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginTop: '2rem' }} className="offers-row">
          <div style={{ flex: 1 }}><OfferCard offer={offers[2]} /></div>
          <div style={{ flex: 2 }}><OfferCard offer={offers[3]} /></div>
        </div>
      </div>

      <style>{`
        .offers-inner { margin-top: 12.38rem; }
        .offers-header h1 { font-size: 4.75rem; font-weight: 400; color: var(--text); }
        .offers-header p { max-width: 41.75rem; color: var(--text-muted); font-size: 1.25rem; font-weight: 400; line-height: 1.75rem; }
        @media (max-width: 768px) {
          .offers-inner { margin-top: 6.44rem !important; }
          .offers-header { margin-bottom: 5rem !important; }
          .offers-header h1 { font-size: 2.25rem !important; }
          .offers-header p { font-size: 1rem !important; line-height: 1.5rem !important; }
          .offers-row { flex-direction: column !important; }
        }
      `}</style>
    </section>
  );
};

export default OffersSection;
