
import React, { useEffect, useRef } from 'react';
import { Code, Globe, Palette, Send } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ServicesSection: React.FC = () => {
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
    
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));
    
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const services = [
    {
      icon: <Palette className="h-10 w-10 text-primary" />,
      title: "Сайты на Tilda",
      description: "Создание стильных и функциональных сайтов на платформе Tilda. Идеально для лендингов, корпоративных сайтов и онлайн-витрин.",
    },
    {
      icon: <Globe className="h-10 w-10 text-primary" />,
      title: "WordPress разработка",
      description: "Разработка мощных и гибких сайтов на WordPress. Оптимальное решение для блогов, интернет-магазинов и сложных веб-проектов.",
    },
    {
      icon: <Send className="h-10 w-10 text-primary" />,
      title: "Telegram веб-приложения",
      description: "Создание интерактивных мини-приложений для Telegram. Расширьте возможности своего бизнеса с помощью Telegram Web Apps.",
    },
    {
      icon: <Code className="h-10 w-10 text-primary" />,
      title: "Заказная веб-разработка",
      description: "Разработка индивидуальных веб-приложений под ваши уникальные требования. Современные технологии и гибкие решения.",
    }
  ];

  return (
    <section id="services" ref={sectionRef} className="py-20 bg-gradient-to-b from-background to-web-soft-purple/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">Мои услуги</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto animate-on-scroll">
            Предлагаю полный спектр услуг веб-разработки, чтобы помочь вашему бизнесу эффективно представить себя в интернете
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="service-card animate-on-scroll" style={{ transitionDelay: `${index * 100}ms` }}>
              <CardHeader className="pb-2">
                <div className="service-icon mb-4 transition-colors duration-300">
                  {service.icon}
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-600">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 p-8 rounded-xl bg-gradient-to-r from-web-purple/10 to-web-light-purple/10 border border-web-light-purple/30 animate-on-scroll">
          <div className="flex flex-col md:flex-row md:items-center">
            <div className="md:w-3/4 mb-6 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-bold mb-3">Нужно что-то особенное?</h3>
              <p className="text-gray-700">
                У вас есть уникальный проект или специфические требования? Я предлагаю индивидуальные решения, адаптированные под ваши потребности.
              </p>
            </div>
            <div className="md:w-1/4 flex justify-center md:justify-end">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center h-12 px-6 font-medium text-white transition-colors bg-primary rounded-full hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                Обсудить проект
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
