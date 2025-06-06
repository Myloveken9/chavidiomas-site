// src/components/ChamadaFinal.js
import React, { useRef, useEffect } from 'react';
import './ChamadaFinal.css';

const ChamadaFinal = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="chamada-final fade-in-hidden">
      <h2>Chavidiomas</h2>
      <p>8 anos de dedicação e foco transformado barreiras linguísticas em chaves e oportunidades.</p>
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLScwZmESruG6BvoCbkM70i59lZnrL31XN9CzJQgcjyYnsnPDZA/viewform?usp=dialog"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-pedir-orcamento"
      >
        Pedir Orçamento
      </a>
    </section>
  );
};

export default ChamadaFinal;
