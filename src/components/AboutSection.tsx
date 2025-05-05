
import React, { useEffect, useRef } from 'react';
import { Award, Code, FileText, Briefcase, Coffee, Heart } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    const elements = document.querySelectorAll('.about-animate');
    elements.forEach((el) => observer.observe(el));
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-web-light-purple/10 rounded-full blur-3xl -translate-y-1/2 animate-float"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-web-soft-blue/10 rounded-full blur-3xl translate-y-1/2 animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-2/5 order-2 lg:order-1">
            <div className="relative animate-on-scroll">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-web-light-purple/30 blur-xl rounded-full transform rotate-12 scale-105 animate-pulse-shadow"></div>
              <div className="relative z-10 rounded-2xl overflow-hidden border-4 border-white shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=500" 
                  alt="Виталий Ковылин"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-xl bg-primary/20 -rotate-6 animate-float" style={{ animationDelay: '1s' }}></div>
              <div className="absolute -top-4 -left-4 w-24 h-24 rounded-xl bg-web-light-purple/30 rotate-12 animate-float" style={{ animationDelay: '1.5s' }}></div>
            </div>
          </div>
          
          <div className="lg:w-3/5 order-1 lg:order-2">
            <span className="inline-block px-4 py-1 mb-4 rounded-full bg-primary/10 text-primary font-medium">
              Обо мне
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-on-scroll">Привет, я Виталий!</h2>
            <p className="text-lg text-gray-700 mb-4 about-animate animate-on-scroll">
              Я веб-разработчик с более чем 5-летним опытом создания современных сайтов и приложений, которые не только отлично выглядят, но и эффективно решают бизнес-задачи.
            </p>
            <p className="text-lg text-gray-700 mb-6 about-animate animate-on-scroll">
              Моя миссия — помогать бизнесам расти в цифровом пространстве через создание функциональных и привлекательных веб-решений. Я специализируюсь на разработке сайтов на Tilda и WordPress, а также создании веб-приложений и интеграций с Telegram.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <Card className="border bg-card/50 about-animate animate-on-scroll hover-lift" style={{ transitionDelay: '100ms' }}>
                <CardContent className="p-4 flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                    <Briefcase className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Опыт работы</h4>
                    <p className="text-sm text-gray-600">Более 5 лет в веб-разработке</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border bg-card/50 about-animate animate-on-scroll hover-lift" style={{ transitionDelay: '200ms' }}>
                <CardContent className="p-4 flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Образование</h4>
                    <p className="text-sm text-gray-600">Степень в области компьютерных наук</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border bg-card/50 about-animate animate-on-scroll hover-lift" style={{ transitionDelay: '300ms' }}>
                <CardContent className="p-4 flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                    <Code className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Технологии</h4>
                    <p className="text-sm text-gray-600">Tilda, WordPress, React, JavaScript</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border bg-card/50 about-animate animate-on-scroll hover-lift" style={{ transitionDelay: '400ms' }}>
                <CardContent className="p-4 flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                    <Heart className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Увлечения</h4>
                    <p className="text-sm text-gray-600">Путешествия, фотография, музыка</p>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <p className="text-lg text-gray-700 about-animate animate-on-scroll">
              Каждый проект для меня — это возможность создать что-то уникальное и полезное. Я верю в индивидуальный подход к каждому клиенту и стремлюсь не просто выполнить задачу, но превзойти ожидания и создать решение, которое принесет реальную пользу.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
