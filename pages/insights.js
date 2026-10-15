import BeforeHeroSection from '@/components/UI/BeforeHeroSection';
import FeaturedInsight from '@/components/UI/Insights/FeaturedInsight';
import InsightsGrid from '@/components/UI/Insights/InsightsGrid';
// import CTASection from '@/components/UI/Insights/CTASection';
import CTASection from '@/components/UI/Services/CTASection';

export default function Insights() {
  return (
    <main>
      <BeforeHeroSection backgroundImage="/images/insights-hero.jpg" />
      <FeaturedInsight />
      <InsightsGrid />
      <CTASection />
    </main>
  );
}
