// src/components/Depoimentos.js
import React from 'react';
import './Depoimentos.css';

const Depoimentos = () => {
  return (
    <section className="depoimentos">
      <div className="container">
        <h2>Depoimentos</h2>
        <div className="depoimentos-lista">
          <div className="depoimento">
            <p>"Os cursos da Chavidiomas me ajudaram a aprender francês rapidamente. Os professores são excelentes!"</p>
            <h4>– Maria Silva</h4>
          </div>
          <div className="depoimento">
            <p>"Graças à equipe da Chavidiomas, hoje consigo me comunicar com facilidade em português e francês."</p>
            <h4>– Jean Paul</h4>
          </div>
          <div className="depoimento">
            <p>"Ótimos serviços de tradução e legendagem. Recomendo totalmente!"</p>
            <h4>– Ana Oliveira</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Depoimentos;
// src/components/Depoimentos.js
// import React from 'react';