import { lazy } from 'react';

// Lazy load components for better performance
export const LazyHero = lazy(() => import('../components/Hero/Hero'));
export const LazyAbout = lazy(() => import('../components/About/About'));
export const LazyServices = lazy(() => import('../components/Services/Services'));
export const LazyPortfolio = lazy(() => import('../components/Portfolio/Portfolio'));
export const LazyContact = lazy(() => import('../components/Contact/Contact'));

// Image lazy loading utility
export const lazyLoadImage = (img) => {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const image = entry.target;
        image.src = image.dataset.src;
        image.classList.remove('lazy');
        imageObserver.unobserve(image);
      }
    });
  });

  imageObserver.observe(img);
};