import React from 'react';
import infoImage from '../assets/info.jpg';

export default function Servicos() {
  return (
    <section>
      <h2>Serviços</h2>
      <img src={infoImage} alt="Informações de serviço" style={{ width: '100%', maxWidth: '600px' }} />

      {/* Aula de Francês */}
      <div style={{ marginTop: '40px', padding: '20px', backgroundColor: '#f0f8ff' }}>
        <h3>Aula de Francês</h3>
        <p>
          Você quer aprender francês de verdade? Com professor nativo e qualificado? Então você está no lugar certo.
          Desde 2017 Chavidiomas está ensinando Francês Língua Estrangeira (FLE) para os brasileiros. 
          Com nossa metodologia, alunos que começaram do zero alcançaram níveis B1 e B2 em apenas 60 horas de aula.
        </p>
        <p>
          Venha falar francês, um idioma com destaque global em áreas como diplomacia, ciência e economia!
        </p>
        <button
          style={{
            backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/6/6c/Flag-map_of_La_Francophonie.svg')",
            backgroundSize: 'cover',
            color: 'white',
            border: 'none',
            padding: '15px 25px',
            cursor: 'pointer',
            fontWeight: 'bold',
            marginTop: '10px'
          }}
        >
          Ingressar na turma
        </button>
      </div>

      {/* Aula de Crioulo Haitiano */}
      <div style={{ marginTop: '40px', padding: '20px', backgroundColor: '#fff5e1' }}>
        <h3>Aula de Crioulo Haitiano</h3>
        <p>
          O mundo é rico em diversidade linguística. O crioulo haitiano é uma das línguas mais expressivas do mundo,
          enraizada na resistência e liberdade. Nossa metodologia inovadora torna o aprendizado acessível e eficaz.
        </p>
        <p>
          Que Legba guie seus passos na superação das barreiras linguísticas!
        </p>
        <button
          style={{
            backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/5/56/Flag_of_Haiti.svg')",
            backgroundSize: 'cover',
            color: 'white',
            border: 'none',
            padding: '15px 25px',
            cursor: 'pointer',
            fontWeight: 'bold',
            marginTop: '10px'
          }}
        >
          Ingressar na turma
        </button>
      </div>

      {/* Tradução */}
      <div style={{ marginTop: '40px', padding: '20px', backgroundColor: '#e0ffe0' }}>
        <h3>Serviço de Tradução</h3>
        <p>
          Tradução de sites? Artigos? Manuais? Tá na mão! A Chavidiomas é especializada em tradução técnica nas combinações:
        </p>
        <ul>
          <li>Português - Francês</li>
          <li>Francês - Português</li>
          <li>Português - Crioulo</li>
          <li>Crioulo - Português</li>
          <li>Crioulo - Francês</li>
          <li>Francês - Crioulo</li>
        </ul>
        <p>
          CONFIDENCIALIDADE, EFICIÊNCIA e PROFISSIONALISMO são nossos valores.
        </p>
        <button
          style={{
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            padding: '15px 25px',
            cursor: 'pointer',
            fontWeight: 'bold',
            marginTop: '10px'
          }}
        >
          Pedir Orçamento
        </button>
      </div>

      {/* Legendagem */}
      <div style={{ marginTop: '40px', padding: '20px', backgroundColor: '#e0f7fa' }}>
        <h3>Serviço de Legendagem</h3>
        <p>
          Legendamos vídeos em Português, Francês e Crioulo Haitiano com adaptação cultural, sincronia e qualidade técnica.
        </p>
        <p>
          Profissionais nativos garantem fidelidade e clareza. Ideal para vídeos institucionais, documentários e mais!
        </p>
        <button
          style={{
            backgroundColor: '#007BFF',
            color: 'white',
            border: 'none',
            padding: '15px 25px',
            cursor: 'pointer',
            fontWeight: 'bold',
            marginTop: '10px'
          }}
        >
          Pedir Orçamento
        </button>
      </div>
    </section>
  );
}
// src/components/Servicos.js
// Este componente exibe os serviços oferecidos pela empresa Chavidiomas, incluindo aulas de francês e crioulo haitiano,