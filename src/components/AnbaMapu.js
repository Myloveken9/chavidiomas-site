import React from 'react';
import anbaImage from '../assets/anba-mapu.jpg';

export default function AnbaMapu() {
  return (
    <section>
      <h2>Clube de Conversas - ANBA MAPU</h2>
      <img src={anbaImage} alt="ANBA MAPU" style={{ width: '100%', maxWidth: '600px' }} />
      <p>
        Nesse link você encontra a cartilha do clube de conversa:
        <br />
        <a href="https://docs.google.com/presentation/d/1MdHyocwvWFyKGZUI7N1U922fqJacKLsDLTpfjD3JAAc/edit?usp=sharing" target="_blank" rel="noreferrer">
          Ver Cartilha
        </a>
      </p>
    </section>
  );
}
// src/components/AnbaMapu.js
// Este componente exibe informações sobre o clube de conversas ANBA MAPU, incluindo uma imagem e um link para a cartilha do clube.