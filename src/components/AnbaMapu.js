import React, { useEffect, useRef, useState } from 'react';
import './AnbaMapu.css';

const AnbaMapu = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // on arrête d'observer après la première apparition
        }
      },
      { threshold: 0.2 } // 20% visible pour déclencher
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={`anba-mapu ${visible ? 'fade-in-visible' : 'fade-in-hidden'}`}
    >
      <h2>Clube de Conversas - ANBA MAPU</h2>
      <p>
        Nesse link você encontra a Cartilha do clube de conversa em Crioulo, Francês e/ou Português Língua de Acolhimento.
      </p>
      <a
        href="https://docs.google.com/presentation/d/1MdHyocwvWFyKGZUI7N1U922fqJacKLsDLTpfjD3JAAc/edit?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="botao padrao"
      >
        Ver Cartilha
      </a>
    </section>
  );
};

export default AnbaMapu;
