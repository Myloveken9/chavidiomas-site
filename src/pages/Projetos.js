// src/pages/Projetos.js
import React from 'react';
import './Projetos.css';

const Projetos = () => {
  return (
    <div className="projetos">
      <section className="projetos-header">
        <h1>Projetos Realizados</h1>
        <p>Veja alguns dos nossos trabalhos e colaborações recentes.</p>
      </section>

      <section className="projetos-lista">
        <div className="projeto-item">
          <h2>Tradução Juramentada para Imigrantes</h2>
          <p>
            Realizamos traduções oficiais de documentos para processos de imigração e naturalização.
          </p>
        </div>

        <div className="projeto-item">
          <h2>Curso de Português para Haitianos</h2>
          <p>
            Curso intensivo para integrar a comunidade haitiana no Brasil através da língua e da cultura.
          </p>
        </div>

        <div className="projeto-item">
          <h2>Legendagem de Vídeos Educacionais</h2>
          <p>
            Parceria com ONGs para tornar o conteúdo acessível em várias línguas através da legendagem.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Projetos;
