import React, { useEffect, useRef, useState } from 'react';
import './AnbaMapu.css';
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
  const [currentIndex, setCurrentIndex] = useState(null);

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

  const openModal = (index) => setCurrentIndex(index);
  const closeModal = () => setCurrentIndex(null);
  const prevImage = () => setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const nextImage = () => setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <section
      ref={ref}
      className={`anba-mapu ${visible ? 'fade-in-visible' : 'fade-in-hidden'}`}
    >
      <h2>Clube de Conversas - ANBA MAPU</h2>
      <p>
        Nesse link você encontra a Cartilha do clube de conversa em Crioulo, Francês e/ou Português Língua de Acolhimento.
      </p>

      <div className="cartillage-images">
        {images.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Cartillage ${idx + 1}`}
            className="cartillage-img"
            onClick={() => openModal(idx)}
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

      {currentIndex !== null && (
        <div className="modal" onClick={closeModal}>
          <img
            src={images[currentIndex]}
            alt={`Cartillage ${currentIndex + 1}`}
            onClick={(e) => e.stopPropagation()}
          />
          <span className="close" onClick={closeModal}>&times;</span>
          <button className="nav-button left" onClick={(e) => { e.stopPropagation(); prevImage(); }}>
            &#10094;
          </button>
          <button className="nav-button right" onClick={(e) => { e.stopPropagation(); nextImage(); }}>
            &#10095;
          </button>
        </div>
      )}
    </section>
    
  );
};

export default AnbaMapu;
