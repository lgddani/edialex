import { useEffect } from 'react';

export const useScrollReveal = () => {
  useEffect(() => {
    // Seleccionar todos los elementos con clases de animación
    const elements = document.querySelectorAll(
      '.scroll-reveal, .fade-in, .slide-up, .slide-down, .slide-left, .slide-right, .scale-up, .zoom-in'
    );

    // Opciones del Intersection Observer
    const observerOptions = {
      threshold: 0.1, // El elemento debe estar al menos 10% visible
      rootMargin: '0px 0px -50px 0px' // Activar un poco antes de que entre completamente
    };

    // Callback cuando un elemento intersecta
    const observerCallback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          // Dejar de observar después de revelar para evitar conflictos con re-renders
          observer.unobserve(entry.target);
        }
      });
    };

    // Crear el observer
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observar cada elemento
    elements.forEach((element) => {
      observer.observe(element);
    });

    // Cleanup
    return () => {
      elements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);
};
