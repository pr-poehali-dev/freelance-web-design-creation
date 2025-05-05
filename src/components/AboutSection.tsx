
import React, { useEffect, useRef } from 'react';
import { Award, Code, FileText, Briefcase } from 'lucide-react';
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
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-web-light-purple/10 rounded-full blur-3xl -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-web-soft-blue/10 rounded-full blur-3xl translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-2/5 order-2 lg:order-1">
            <div className="relative animate-on-scroll">
              <div className="relative z-10 rounded-2xl overflow-hidden border-4 border-white shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?auto=format&fit=crop&q=80&w=500" 
                  alt="Веб-разработчик"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-xl bg-primary/20 -rotate-6"></div>
              <div className="absolute -top-4 -left-4 w-24 h-24 rounded-xl bg-web-light-purple/30 rotate-12"></div>
            </div>
          </div>
          
          <div className="lg:w-3/5 order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-on-scroll">Обо мне</h2>
            <p className="text-lg text-gray-700 mb-4 about-animate animate-on-scroll">
              Привет! Меня зовут Александр, я веб-разработчик с более чем 5-летним опытом создания современных веб-сайтов и приложений.
            </p>
            <p className="text-lg text-gray-700 mb-6 about-animate animate-on-scroll">
              Моя цель — помогать бизнесам эффективно представлять себя в интернете через функциональные и эстетически привлекательные веб-решения. Я специализируюсь на разработке сайтов на Tilda и WordPress, а также создании веб-приложений и интеграций с Telegram.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <Card className="border bg-card/50 about-animate animate-on-scroll" style={{ transitionDelay: '100ms' }}>
                <CardContent className="p-4 flex items-start">
                  <Briefcase className="h-5 w-5 text-primary mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Опыт работы</h4>
                    <p className="text-sm text-gray-600">Более 5 лет в веб-разработке</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border bg-card/50 about-animate animate-on-scroll" style={{ transitionDelay: '200ms' }}>
                <CardContent className="p-4 flex items-start">
                  <Award className="h-5 w-5 text-primary mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Образование</h4>
                    <p className="text-sm text-gray-600">Степень в области компьютерных наук</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border bg-card/50 about-animate animate-on-scroll" style={{ transitionDelay: '300ms' }}>
                <CardContent className="p-4 flex items-start">
                  <Code className="h-5 w-5 text-primary mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Навыки</h4>
                    <p className="text-sm text-gray-600">Tilda, WordPress, React, JavaScript</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border bg-card/50 about-animate animate-on-scroll" style={{ transitionDelay: '400ms' }}>
                <CardContent className="p-4 flex items-start">
                  <FileText className="h-5 w-5 text-primary mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Сертификаты</h4>
                    <p className="text-sm text-gray-600">Tilda Expert, WordPress Professional</p>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <p className="text-lg text-gray-700 about-animate animate-on-scroll">
              Каждый проект для меня — это возможность создать что-то уникальное и полезное. Я верю в индивидуальный подход к каждому клиенту и в создание решений, которые не только выглядят отлично, но и достигают бизнес-целей.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
