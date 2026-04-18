import BeforeHeroSection from '@/components/UI/BeforeHeroSection';
import OurStory from '@/components/UI/AfroLink/OurStory';
import OurVision from '@/components/UI/AfroLink/OurVision';
import OurValues from '@/components/UI/AfroLink/OurValues';
import OurTeam from '@/components/UI/AfroLink/OurTeam';
import CTASection from '@/components/UI/AfroLink/CTASection';

export default function AfroLink() {
  return (
    <main>
      <BeforeHeroSection backgroundImage="/images/afrolink-hero.jpg" />
      <OurStory />
      <OurVision />
      <OurValues />
      <OurTeam />
      <CTASection />
    </main>
  );
}
