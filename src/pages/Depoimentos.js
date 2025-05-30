// src/pages/Depoimentos.js
import React from 'react';
import './Depoimentos.css';
import depo1 from '../assets/images/depoimento1.jpg';
import depo2 from '../assets/images/depoimento2.jpg';
import depo3 from '../assets/images/depoimento3.jpg';
import depo4 from '../assets/images/depoimento4.jpg';
import depo5 from '../assets/images/depoimento5.jpg'
import depo6 from '../assets/images/depoimento6.jpg';

const Depoimentos = () => {
  const depoimentos = [
    {
      img: depo1,
      text: "Muito bom professor, ótima didática e paciência para ter certeza que o conteúdo foi passado corretamente.",
      autor: "Guilherme, Osasco, 2022"
    },
    {
      img: depo2,
      text: "Excelente professor, excelente explicação e ajuda muito na pronunciação. Sempre pontual.",
      autor: "Maria Eduarda, São Paulo, 2022"
    },
    {
      img: depo3,
      text: "Chavidiomas tem profissionais focados em oferecer o suporte necessário às necessidades do aluno. Gostei do método de ensino e da didática, recomendo.",
      autor: "Esmeraldo, São Paulo, 2019"
    },
    {
      img: depo4,
      text: "Profissional competente, ótima metodologia, muito atencioso.",
      autor: "Ana Paula, São Bernardo dos Campos, 2018"
    },
    {
      img: depo5,
      text: "Aulas dinâmicas e com conteúdo relevante. O professor é muito atencioso e sempre disposto a ajudar.",
  autor: "Lucas, São Paulo, 2023"
},
{
  img: depo6,
  text: "A experiência de aprender francês com a Chavidiomas foi incrível! O professor é super paciente e as aulas são muito bem estruturadas.",
  autor: "Fernanda, São Paulo, 2023"
}
  ];

  return (
    <section className="depoimentos">
      <div className="container">
        <h2>Depoimentos</h2>
        <div className="depoimentos-grid">
          {depoimentos.map((item, index) => (
            <div key={index} className="depo-card">
              <img src={item.img} alt={`Depoimento ${index + 1}`} />
              <p className="texto">"{item.text}"</p>
              <p className="autor">— {item.autor}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Depoimentos;
// src/components/Depoimentos.css