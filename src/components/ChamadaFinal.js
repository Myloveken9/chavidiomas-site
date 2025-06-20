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
      <p>Transformado barreiras linguísticas em chaves e oportunidades desde 2017.</p>
      <a
        href="https://wa.me/+5511994951277"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-pedir-orcamento"
      >
        Entrar em contato
      </a>
    </section>
  );
};

export default ChamadaFinal;
