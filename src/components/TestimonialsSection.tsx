
import React, { useEffect, useRef } from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  company: string;
  avatar: string;
  quote: string;
  rating: number;
}

const TestimonialsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Алексей Смирнов",
      company: "ООО «Технологии будущего»",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100",
      quote: "Уже второй раз работаю с Виталием и снова в восторге от результата! Сайт был готов раньше срока, а его функциональность даже превзошла мои ожидания. Особенно ценю внимание к деталям и готовность всегда помочь советом.",
      rating: 5
    },
    {
      id: 2,
      name: "Елена Иванова",
      company: "Салон красоты «Эстетика»",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100",
      quote: "Благодаря новому сайту количество клиентов выросло на 40%! Виталий не просто создал красивый дизайн, но и помог с настройкой аналитики и оптимизацией для поисковиков. Мобильная версия работает просто безупречно.",
      rating: 5
    },
    {
      id: 3,
      name: "Дмитрий Петров",
      company: "Кафе «Гурман»",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100",
      quote: "Виталий разработал для нас бота в Telegram, который автоматизировал прием заказов. Клиенты довольны, а наша загрузка увеличилась! Всё сделано в короткие сроки и с учетом всех наших пожеланий. Будем сотрудничать и дальше.",
      rating: 5
    },
    {
      id: 4,
      name: "Мария Кузнецова",
      company: "Интернет-магазин «МодаСтиль»",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100",
      quote: "Разработка интернет-магазина была выполнена на высшем уровне. Удобная админка, интеграция с платежными системами, автоматизация работы с заказами — всё работает как часы. Виталий всегда на связи и оперативно решает любые вопросы.",
      rating: 5
    }
  ];

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
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, index) => (
      <Star 
        key={index} 
        className={`h-4 w-4 ${index < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <section id="testimonials" ref={sectionRef} className="py-20 bg-gradient-to-r from-web-soft-purple/20 to-web-soft-blue/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 mb-4 rounded-full bg-primary/10 text-primary font-medium">
            Что говорят клиенты
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">Истории успеха</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto animate-on-scroll">
            Доверие и удовлетворенность клиентов — мой главный приоритет. Вот что говорят те, кто уже доверил мне свои проекты
          </p>
        </div>
        
        <div className="animate-on-scroll">
          <Carousel
            opts={{
              align: "start",
              loop: true
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="pl-2 md:pl-4 sm:basis-1/1 md:basis-1/2 lg:basis-1/3">
                  <Card className="border bg-card shadow-md h-full hover-lift">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="absolute -top-3 -left-3 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white">
                        <Quote className="h-4 w-4" />
                      </div>
                      <div className="flex items-center gap-2 mb-4 mt-3">
                        {renderStars(testimonial.rating)}
                      </div>
                      <blockquote className="text-gray-700 italic mb-6 flex-grow">
                        "{testimonial.quote}"
                      </blockquote>
                      <div className="flex items-center mt-auto pt-4 border-t border-gray-100">
                        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                          <img 
                            src={testimonial.avatar} 
                            alt={testimonial.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <div className="font-semibold">{testimonial.name}</div>
                          <div className="text-sm text-gray-500">{testimonial.company}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:flex justify-end gap-2 mt-8">
              <CarouselPrevious className="static translate-y-0 hover:bg-primary hover:text-white" />
              <CarouselNext className="static translate-y-0 hover:bg-primary hover:text-white" />
            </div>
          </Carousel>
        </div>
        
        <div className="mt-16 text-center animate-on-scroll">
          <div className="inline-block bg-white shadow-lg rounded-2xl p-8 max-w-3xl hover-lift">
            <p className="text-lg font-medium mb-6">
              Готовы присоединиться к списку довольных клиентов?
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center h-12 px-8 font-medium text-white transition-transform duration-300 bg-primary rounded-full hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transform hover:scale-105"
            >
              Обсудить ваш проект
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
