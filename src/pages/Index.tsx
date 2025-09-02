import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import TrainersSection from '@/components/TrainersSection';
import ScheduleSection from '@/components/ScheduleSection';
import ServicesSection from '@/components/ServicesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-pink-50">
      <Header />
      <HeroSection />
      <TrainersSection />
      <ScheduleSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;