
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-web-soft-purple/50">
      <div className="absolute inset-0 bg-gradient-radial from-web-light-purple/20 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 py-20 mt-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-12 lg:mb-0 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Создаю <span className="text-primary">стильные</span> и <span className="text-primary">функциональные</span> веб-решения
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-xl">
              Профессиональная разработка сайтов, веб-приложений и Telegram-сервисов. 
              Ваш бизнес заслуживает качественного веб-присутствия.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white font-medium"
              >
                Обсудить проект
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary/10"
              >
                Смотреть работы
              </Button>
            </div>
          </div>
          
          <div className="lg:w-1/2 animate-slide-up">
            <div className="relative">
              <div className="relative z-10 shadow-xl rounded-2xl overflow-hidden border-4 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000" 
                  alt="Веб-разработка"
                  className="w-full h-auto object-cover aspect-[4/3]"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-web-light-purple/30 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-200 flex flex-wrap justify-center gap-x-12 gap-y-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-1">5+</div>
            <div className="text-sm text-gray-600">лет опыта</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-1">50+</div>
            <div className="text-sm text-gray-600">успешных проектов</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-1">100%</div>
            <div className="text-sm text-gray-600">довольных клиентов</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-1">24/7</div>
            <div className="text-sm text-gray-600">поддержка клиентов</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
