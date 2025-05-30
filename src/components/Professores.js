// src/components/Professores.js
import React from 'react';
import './Professores.css';
import hervensImage from '../assets/images/hervens.jpg';
import legbaImage from '../assets/images/legba.jpg';

const Professores = () => {
  return (
    <section className="professores">
      <div className="container">
        <h2>Nossos Professores</h2>
        <div className="professores-cards">
          <div className="professor-card">
            <img src={hervensImage} alt="Tradutor Hervens" />
            <h3>Tradutor Hervens</h3>
            <p>Especialista em tradução e interpretação multilíngue. Atua com paixão no ensino de idiomas para migrantes.</p>
          </div>
          <div className="professor-card">
            <img src={legbaImage} alt="Prof. Legba" />
            <h3>Prof. Legba</h3>
            <p>Professor de línguas com vasta experiência em contextos interculturais. Defensor do ensino acessível e inclusivo.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Professores;
// src/components/Professores.js
// import React from 'react';