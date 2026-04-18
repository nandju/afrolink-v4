import BeforeHeroSection from '@/components/UI/BeforeHeroSection';
import ContactForm from '@/components/UI/ScheduleCall/ContactForm';

export default function ScheduleCall() {
  return (
    <main>
      <BeforeHeroSection backgroundImage="/images/schedule-hero.jpg" />
      <ContactForm />
    </main>
  );
}
