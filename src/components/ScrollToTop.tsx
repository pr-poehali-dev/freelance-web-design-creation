
import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed right-6 bottom-6 rounded-full bg-primary p-3 text-white shadow-lg transition-all duration-300 z-50 hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 animate-pulse-shadow ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75 pointer-events-none'
      }`}
      aria-label="Прокрутить наверх"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
};

export default ScrollToTop;
