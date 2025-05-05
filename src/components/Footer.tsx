
import React from 'react';
import { Heart, Instagram, MessageCircle, Github } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-web-deep-blue text-white border-t border-white/10 pt-10 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-web-purple to-web-light-purple mb-2 animate-pulse-shadow">
              Kovylin.dev
            </h3>
            <p className="text-gray-400 max-w-md">
              Профессиональная веб-разработка для вашего бизнеса. Создаю эффективные решения, которые привлекают клиентов и увеличивают конверсию.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-8">
            <div>
              <h4 className="text-sm font-semibold mb-2">Навигация</h4>
              <div className="flex flex-col space-y-2">
                <button
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-sm text-gray-400 hover:text-primary transition-colors transform hover:translate-x-1"
                >
                  Услуги
                </button>
                <button
                  onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-sm text-gray-400 hover:text-primary transition-colors transform hover:translate-x-1"
                >
                  Портфолио
                </button>
                <button
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-sm text-gray-400 hover:text-primary transition-colors transform hover:translate-x-1"
                >
                  Обо мне
                </button>
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-sm text-gray-400 hover:text-primary transition-colors transform hover:translate-x-1"
                >
                  Контакты
                </button>
              </div>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold mb-2">Социальные сети</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-primary transition-colors transform hover:scale-110">
                  <MessageCircle className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors transform hover:scale-110">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors transform hover:scale-110">
                  <Github className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-4 md:mb-0">
            &copy; {currentYear} Kovylin.dev. Все права защищены.
          </p>
          
          <div className="flex items-center">
            <button 
              onClick={scrollToTop} 
              className="text-sm text-gray-400 hover:text-primary transition-colors transform hover:scale-105"
            >
              Вернуться наверх
            </button>
            <span className="mx-2 text-gray-600">•</span>
            <span className="text-sm text-gray-400 flex items-center">
              Сделано с <Heart className="h-3 w-3 text-red-500 mx-1 animate-pulse" /> в России
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
