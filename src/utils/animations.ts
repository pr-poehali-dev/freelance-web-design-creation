
export const setupScrollAnimations = () => {
  // Находим все элементы с классом animate-on-scroll
  const animatedElements = document.querySelectorAll('.animate-on-scroll');

  // Создаем IntersectionObserver
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        // Если элемент виден в области просмотра
        if (entry.isIntersecting) {
          // Добавляем класс visible
          entry.target.classList.add('visible');
          // Опционально: прекращаем наблюдение за элементом после его появления
          // observer.unobserve(entry.target);
        }
      });
    },
    {
      // Элемент считается видимым, когда 10% его площади попадает в область просмотра
      threshold: 0.1,
      
      // Добавляем отступ, чтобы запустить анимацию до того, как элемент полностью попадет в область просмотра
      rootMargin: '0px 0px -50px 0px'
    }
  );

  // Начинаем наблюдение за каждым элементом
  animatedElements.forEach((el) => {
    observer.observe(el);
  });

  // Возвращаем функцию очистки для возможного использования в useEffect
  return () => {
    animatedElements.forEach((el) => {
      observer.unobserve(el);
    });
  };
};
