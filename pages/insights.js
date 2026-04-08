import BeforeHeroSection from '@/components/UI/BeforeHeroSection';
import InsightsGrid from '@/components/UI/Insights/InsightsGrid';
import CTASection from '@/components/UI/Insights/CTASection';

export default function Insights() {
  return (
    <main>
      <BeforeHeroSection backgroundImage="/images/insights-hero.jpg" compact />
      <InsightsGrid />
      <CTASection />
    </main>
  );
}
