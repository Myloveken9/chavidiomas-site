// src/pages/Professores.js
import React from 'react';
import './Professores.css';
import hervens from '../assets/images/hervens.jpg';
import legba from '../assets/images/legba.jpg';

const Professores = () => {
  return (
    <section className="professores">
      <div className="container">
        <h2>Nossos Colaboradores</h2>
        <div className="cards">
        <div className="card">
          <img src={hervens} alt="Tradutor Hervens" />
          <h3>Tradutor Hervens</h3>
          <p>
            Nativo do Haiti, professor de crioulo haitiano e francês. Formado em Direito e Relações Internacionais .
          </p>
        </div>
        <div className="card">
          <img src={legba} alt="Prof. Legba" />
          <h3>Prof. Legba</h3>
          <p>
            Especialista em ensino do francês como língua estrangeira. Apaixionado pela educação e pela diversidade linguística
          </p>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Professores;
