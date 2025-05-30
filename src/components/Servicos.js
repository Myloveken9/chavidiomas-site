// src/components/Servicos.js
import React from 'react';
import './Servicos.css';
import serviceImage from '../assets/images/info.jpg'; // ton image de services

const Servicos = () => {
  return (
    <section className="servicos">
      <div className="servicos-content">
        <h2>Nossos Serviços</h2>
        <p>Tradução, transcrição, legendagem e ensino de idiomas adaptado a diferentes públicos.</p>
        <img src={serviceImage} alt="Informações dos Serviços" className="servicos-img" />
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLScwZmESruG6BvoCbkM70i59lZnrL31XN9CzJQgcjyYnsnPDZA/viewform?usp=dialog"
          target="_blank"
          rel="noopener noreferrer"
          className="servicos-button"
        >
          Pedir Orçamento
        </a>
      </div>
    </section>
  );
};

export default Servicos;
