
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-sm py-2 shadow-sm'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-web-purple to-web-deep-blue">
              ВебМастер
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => scrollToSection('services')}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Услуги
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Портфолио
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Отзывы
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Обо мне
            </button>
            <Button 
              onClick={() => scrollToSection('contact')}
              size="sm"
              className="bg-primary hover:bg-primary/90 text-white"
            >
              Связаться
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pt-4 pb-2 flex flex-col space-y-4">
            <button
              onClick={() => scrollToSection('services')}
              className="text-sm font-medium py-2 hover:text-primary transition-colors"
            >
              Услуги
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="text-sm font-medium py-2 hover:text-primary transition-colors"
            >
              Портфолио
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-sm font-medium py-2 hover:text-primary transition-colors"
            >
              Отзывы
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-sm font-medium py-2 hover:text-primary transition-colors"
            >
              Обо мне
            </button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="w-full justify-center"
            >
              Связаться
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
