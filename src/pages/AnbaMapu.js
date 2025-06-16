import React, { useEffect, useRef, useState } from 'react';
import './AnbaMapu.css';

const AnbaMapu = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  // Define your images array here
  const images = [
    // Add image URLs or import statements here
    // Example:
    // require('../assets/cartillage1.png'),
    // require('../assets/cartillage2.png'),
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
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
        Clicar no link para encontrar a Cartilha do clube de conversa em Crioulo, Francês e/ou Português Língua de Acolhimento.
      </p>

      <div className="cartillage-images">
        {images.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Cartillage ${idx + 1}`}
            className="cartillage-img"
          />
        ))}
      </div>

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
