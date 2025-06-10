import React, { useEffect, useRef, useState } from 'react';
import './AnbaMapu.css';

// Si tu utilises import direct (ex: Webpack ou CRA)
import cartillage1 from '../assets/images/cartillage1.jpg';
import cartillage2 from '../assets/images/cartillage2.jpg';
import cartillage3 from '../assets/images/cartillage3.jpg';
import cartillage4 from '../assets/images/cartillage4.jpg';
import cartillage5 from '../assets/images/cartillage5.jpg';
import cartillage6 from '../assets/images/cartillage6.jpg';
import cartillage7 from '../assets/images/cartillage7.jpg';
import cartillage8 from '../assets/images/cartillage8.jpg';
import cartillage9 from '../assets/images/cartillage9.jpg';

const AnbaMapu = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // stop observing after first appear
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // Tableau des images importées
  const images = [
    cartillage1,
    cartillage2,
    cartillage3,
    cartillage4,
    cartillage5,
    cartillage6,
    cartillage7,
    cartillage8,
    cartillage9,
  ];

  return (
    <section
      ref={ref}
      className={`anba-mapu ${visible ? 'fade-in-visible' : 'fade-in-hidden'}`}
    >
      <h2>Clube de Conversas - ANBA MAPU</h2>
      <p>
        Nesse link você encontra a Cartilha do clube de conversa em Crioulo, Francês e/ou Português Língua de Acolhimento.
      </p>

      {/* Conteneur des images */}
      <div className="cartillage-images" style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '16px' }}>
        {images.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Cartillage ${idx + 1}`}
            style={{ width: '80px', height: 'auto', borderRadius: '8px', objectFit: 'cover' }}
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
