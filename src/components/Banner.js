// src/components/Banner.js
import React, { useEffect, useRef } from 'react';
import './Banner.css';

const Banner = () => {
  const bannerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-visible');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (bannerRef.current) observer.observe(bannerRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="banner fade-in-hidden" ref={bannerRef}>
      <div className="banner-content">
        <h1>Bem-vindo à Chavidiomas</h1>
        <p>Aprenda idiomas com propósito e cultura</p>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLScwZmESruG6BvoCbkM70i59lZnrL31XN9CzJQgcjyYnsnPDZA/viewform?usp=dialog"
          target="_blank"
          rel="noopener noreferrer"
          className="banner-button"
        >
          Pedir Orçamento
        </a>
      </div>
    </section>
  );
};

export default Banner;
