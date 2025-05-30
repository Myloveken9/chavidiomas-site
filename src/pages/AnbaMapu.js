// src/pages/AnbaMapu.js
import React from 'react';
import './AnbaMapu.css';

const AnbaMapu = () => {
  return (
    <section className="anba-mapu">
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
// src/components/AnbaMapu.css