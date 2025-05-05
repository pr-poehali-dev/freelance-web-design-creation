
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import PortfolioSection from '@/components/PortfolioSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { setupScrollAnimations } from '@/utils/animations';

const Index = () => {
  useEffect(() => {
    // Настраиваем анимации при скролле
    const cleanupAnimations = setupScrollAnimations();
    
    return () => {
      // Очищаем наблюдатели при размонтировании компонента
      cleanupAnimations();
    };
  }, []);

  return (
    <div className="min-h-screen antialiased">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <PortfolioSection />
        <TestimonialsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
