
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ServicesGrid from '@/components/ServicesGrid';
import WhyChooseUs from '@/components/WhyChooseUs';
import CaseStudies from '@/components/CaseStudies';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-brand-dark">
      <Header />
      <Hero />
      <ServicesGrid />
      <WhyChooseUs />
      <CaseStudies />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
