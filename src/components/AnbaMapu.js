import React, { useEffect, useRef, useState } from 'react';
import './AnbaMapu.css';
const AnbaMapu = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [modalImg, setModalImg] = useState(null);

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

  // Bloque le scroll du body et compense la largeur de la scrollbar quand modal est ouverte
  useEffect(() => {
    if (modalImg) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [modalImg]);

  // Add your images array here or import it from elsewhere
  const images = [
    // Example: '/path/to/image1.jpg', '/path/to/image2.jpg'
  ];

  return (
    <section ref={ref} className={visible ? 'visible' : ''}>
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
            onClick={() => setModalImg(src)}
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

      {modalImg && (
        <div className="modal" onClick={() => setModalImg(null)}>
          <img
            src={modalImg}
            alt="Cartillage fullscreen"
            onClick={(e) => e.stopPropagation()} // Empêche fermeture au clic sur l’image
          />
          <span className="close" onClick={() => setModalImg(null)}>
            &times;
          </span>
        </div>
      )}
    </section>
  );
};

export default AnbaMapu;
