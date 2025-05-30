// src/components/Banner.js
import React from 'react';
import './Banner.css';

const Banner = () => {
  return (
    <section className="banner">
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
