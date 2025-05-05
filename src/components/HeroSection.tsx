
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!imageRef.current) return;
      
      const { left, top, width, height } = imageRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;
      
      imageRef.current.style.transform = 
        `perspective(1000px) rotateY(${x * 5}deg) rotateX(${-y * 5}deg) scale3d(1.02, 1.02, 1.02)`;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-tr from-web-soft-purple/30 via-white to-web-soft-blue/20">
      <div className="absolute inset-0 bg-gradient-radial from-web-light-purple/20 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 py-20 mt-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-12 lg:mb-0 animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
            <span className="inline-block px-4 py-1 mb-6 rounded-full bg-primary/10 text-primary font-medium animate-pulse-shadow">
              Kovylin.dev 👋
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Создаю <span className="highlight-text">современные</span> и <span className="highlight-text">эффективные</span> веб-решения
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-xl">
              Привет! Я Виталий — профессиональный разработчик, который превращает ваши идеи в реальные проекты. Специализируюсь на создании сайтов, веб-приложений и Telegram-сервисов, которые приносят результат.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white font-medium transform transition-transform hover:scale-105"
              >
                Давайте обсудим ваш проект
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary/10 transform transition-transform hover:scale-105"
              >
                Посмотреть мои работы
              </Button>
            </div>
          </div>
          
          <div ref={imageRef} className="lg:w-1/2 animate-slide-in-right transition-all duration-300" style={{ animationDelay: '0.4s' }}>
            <div className="relative transform transition-transform">
              <div className="relative z-10 shadow-xl rounded-2xl overflow-hidden border-4 border-white animate-pulse-shadow">
                <img 
                  src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=1000" 
                  alt="Веб-разработка"
                  className="w-full h-auto object-cover aspect-[4/3]"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-float"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-web-light-purple/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-200 flex flex-wrap justify-center gap-x-12 gap-y-6 animate-scale-in" style={{ animationDelay: '0.8s' }}>
          <div className="text-center hover-lift">
            <div className="text-3xl font-bold text-primary mb-1">5+</div>
            <div className="text-sm text-gray-600">лет опыта</div>
          </div>
          <div className="text-center hover-lift">
            <div className="text-3xl font-bold text-primary mb-1">50+</div>
            <div className="text-sm text-gray-600">успешных проектов</div>
          </div>
          <div className="text-center hover-lift">
            <div className="text-3xl font-bold text-primary mb-1">100%</div>
            <div className="text-sm text-gray-600">довольных клиентов</div>
          </div>
          <div className="text-center hover-lift">
            <div className="text-3xl font-bold text-primary mb-1">24/7</div>
            <div className="text-sm text-gray-600">поддержка клиентов</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
