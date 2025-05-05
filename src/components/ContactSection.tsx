
import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, Send, Coffee } from 'lucide-react';

const ContactSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Имитация отправки формы
    setTimeout(() => {
      toast({
        title: "Сообщение отправлено!",
        description: "Спасибо за ваше обращение. Я свяжусь с вами в ближайшее время.",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-gradient-to-b from-background to-web-deep-blue text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 mb-4 rounded-full bg-primary/20 text-primary font-medium">
            Давайте работать вместе
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll text-white">Связаться со мной</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto animate-on-scroll">
            Готовы обсудить ваш проект или есть вопросы? Заполните форму ниже, и я свяжусь с вами в ближайшее время
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="animate-on-scroll animate-slide-in-left">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 shadow-xl">
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <Coffee className="mr-2 h-5 w-5 text-primary" /> 
                Начнем разговор
              </h3>
              
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Как вас зовут?
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-primary/50"
                    placeholder="Ваше имя"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Ваш email для связи
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-primary/50"
                    placeholder="example@email.com"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Расскажите о вашем проекте
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="min-h-[120px] bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-primary/50"
                    placeholder="Опишите вашу задачу или идею..."
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 transform transition-transform hover:scale-105"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      Отправка...
                      <svg className="animate-spin ml-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    </span>
                  ) : (
                    <span className="flex items-center">
                      Отправить сообщение
                      <Send className="ml-2 h-4 w-4" />
                    </span>
                  )}
                </Button>
              </form>
            </div>
          </div>
          
          <div className="flex flex-col justify-center animate-on-scroll animate-slide-in-right">
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-6">Контактная информация</h3>
              
              <div className="space-y-6">
                <div className="flex items-start hover-lift transition-transform cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-300">Email</h4>
                    <p className="text-lg">hello@kovylin.dev</p>
                  </div>
                </div>
                
                <div className="flex items-start hover-lift transition-transform cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-300">Телефон</h4>
                    <p className="text-lg">+7 (999) 123-45-67</p>
                  </div>
                </div>
                
                <div className="flex items-start hover-lift transition-transform cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-300">Локация</h4>
                    <p className="text-lg">Москва, Россия</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm hover-lift">
              <h4 className="text-lg font-medium mb-3">Время работы</h4>
              <p className="text-gray-300 mb-2">Понедельник - Пятница: 9:00 - 18:00</p>
              <p className="text-gray-300">Выходные: по договоренности</p>
              <div className="mt-4 pt-4 border-t border-white/10">
                <p className="text-sm text-gray-400">Предпочитаете быстрый ответ? Напишите мне в Telegram или WhatsApp!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
