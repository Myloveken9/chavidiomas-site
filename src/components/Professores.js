import React from 'react';
import hervens from '../assets/hervens.jpg';
import legba from '../assets/legba.jpg';

export default function Professores() {
  return (
    <section>
      <h2>Nossos Professores</h2>
      <div style={{ display: 'flex', gap: '40px', justifyContent: 'center' }}>
        <div>
          <img src={hervens} alt="Tradutor Hervens" width="150" style={{ borderRadius: '50%' }} />
          <p>Tradutor Hervens</p>
        </div>
        <div>
          <img src={legba} alt="Professor Legba" width="150" style={{ borderRadius: '50%' }} />
          <p>Prof. Legba</p>
        </div>
      </div>
    </section>
  );
}
// src/components/Professores.js
// Este componente exibe informações sobre os professores da empresa Chavidiomas, incluindo imagens e nomes.