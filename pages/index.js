import {
  FAQ,
  Featured,
  FinancilaFreedom,
  HeroSection,
  OffersSection,
  BeforeHeroSection,
} from '@/components';

export default function Home() {
  return (
    <main>
      <BeforeHeroSection />
      <HeroSection />
      <Featured />
      <OffersSection />
      {/* <FinancilaFreedom /> */}
      <FAQ />
    </main>
  );
}
