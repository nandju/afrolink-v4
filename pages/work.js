import BeforeHeroSection from '@/components/UI/BeforeHeroSection';
import FeaturedProjects from '@/components/UI/Work/FeaturedProjects';
import CaseStudies from '@/components/UI/Work/CaseStudies';
import BrandsWorkedWith from '@/components/UI/Work/BrandsWorkedWith';
import CTASection from '@/components/UI/Work/CTASection';

export default function Work() {
  return (
    <main>
      <BeforeHeroSection backgroundImage="/images/work-hero.jpg" />
      <FeaturedProjects />
      <CaseStudies />
      <BrandsWorkedWith />
      <CTASection />
    </main>
  );
}
