
import React, { useEffect, useRef, useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  link: string;
}

const PortfolioSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [selectedCategory, setSelectedCategory] = useState("all");
  
  const projects: Project[] = [
    {
      id: 1,
      title: "Интернет-магазин мебели",
      description: "Современный интернет-магазин на WordPress с каталогом и корзиной",
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=600",
      category: "wordpress",
      link: "#"
    },
    {
      id: 2,
      title: "Лендинг для стартапа",
      description: "Стильный одностраничный сайт для технологического стартапа",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=600",
      category: "tilda",
      link: "#"
    },
    {
      id: 3,
      title: "Telegram мини-приложение",
      description: "Интерактивное приложение для заказа услуг внутри Telegram",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=600",
      category: "telegram",
      link: "#"
    },
    {
      id: 4,
      title: "Корпоративный сайт",
      description: "Многостраничный сайт для консалтинговой компании",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600",
      category: "wordpress",
      link: "#"
    },
    {
      id: 5,
      title: "Промо-страница мероприятия",
      description: "Лендинг для конференции с формой регистрации",
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=600",
      category: "tilda",
      link: "#"
    },
    {
      id: 6,
      title: "Веб-приложение для учета",
      description: "Система учета и аналитики для малого бизнеса",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600",
      category: "custom",
      link: "#"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const portfolioItems = document.querySelectorAll('.portfolio-item');
            portfolioItems.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add('visible');
              }, index * 100);
            });
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

  const filteredProjects = selectedCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="portfolio" ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">Мои работы</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto animate-on-scroll">
            Некоторые из моих последних проектов. Каждая работа — это уникальное решение, созданное с учетом потребностей клиента
          </p>
        </div>
        
        <Tabs defaultValue="all" className="mb-12">
          <div className="flex justify-center">
            <TabsList className="grid grid-cols-2 md:grid-cols-5 gap-2">
              <TabsTrigger
                value="all"
                onClick={() => setSelectedCategory("all")}
                className="px-6"
              >
                Все
              </TabsTrigger>
              <TabsTrigger
                value="tilda"
                onClick={() => setSelectedCategory("tilda")}
                className="px-6"
              >
                Tilda
              </TabsTrigger>
              <TabsTrigger
                value="wordpress"
                onClick={() => setSelectedCategory("wordpress")}
                className="px-6"
              >
                WordPress
              </TabsTrigger>
              <TabsTrigger
                value="telegram"
                onClick={() => setSelectedCategory("telegram")}
                className="px-6"
              >
                Telegram
              </TabsTrigger>
              <TabsTrigger
                value="custom"
                onClick={() => setSelectedCategory("custom")}
                className="px-6"
              >
                Веб-приложения
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value={selectedCategory}>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {filteredProjects.map((project) => (
                <div key={project.id} className="portfolio-item animate-on-scroll">
                  <div className="relative rounded-xl overflow-hidden aspect-[4/3] shadow-md group">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="portfolio-overlay">
                      <div className="portfolio-content">
                        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                        <p className="mb-4 text-gray-200">{project.description}</p>
                        <a
                          href={project.link}
                          className="inline-flex items-center text-white border-b border-white pb-1 hover:text-primary hover:border-primary transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Посмотреть
                          <ExternalLink className="ml-1 h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default PortfolioSection;
