// src/pages/Depoimentos.js
import React from 'react';
import './Depoimentos.css';
import depo1 from '../assets/images/depoimento1.jpg';
import depo2 from '../assets/images/depoimento2.jpg';
import depo3 from '../assets/images/depoimento3.jpg';
import depo4 from '../assets/images/depoimento4.jpg';
import depo5 from '../assets/images/depoimento5.jpg'
import depo6 from '../assets/images/depoimento6.jpg';
import depo7 from '../assets/images/depoimento7.jpg';
import depo8 from '../assets/images/depoimento8.jpg';
import depo9 from '../assets/images/depoimento9.jpg';
import depo10 from '../assets/images/depoimento10.jpg';
import depo11 from '../assets/images/depoimento11.jpg';
import depo12 from '../assets/images/depoimento12.jpg';

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
      text: "Excelente professor. Muito profissional e didático em relação a pronúncia adequada da língua francesa, material de acompanhamento da aula, segue uma didática boa. ",
  autor: "Juliana, São Paulo, 2019"
},
{
  img: depo6,
  text: " Fiz aulas de francês online com o Hervens e fiquei muito satisfeito com os resultados. As aulas são bem preparadas e o conteudo seguido é relevante e completo. Além das aulas, ele sempre manteve contato passando atividades diarias, corrigindo exercicios e propondo diversas atividades complementares.",
  autor: "Albamar, São Paulo, 2023"
},

{
  img: depo7,
  text: "Ótimo professor. Tem didática e entendimento da necessidade do aluno. Estou gostando muito das aulas, as 2 horas passam rapidinho sem se tornarem enfadonhas.",
  autor: "Felipe, Québec Canada , Augosto 2023"
},

{
  img: depo8,
  text: "Hervens é um professor muito atencioso, bem humorado, repleto de materiais e slides interativos. Suas aulas tem uma grande variedade de formatos, sejam vídeos, leituras, áudios, com várias particularidades das culturas falantes do francês. Recomendo imensamente este querido professor.",
  autor: "Ligia, Paris, Julho 2023"
},

    {
      img: depo9,
      text: "O professor Hervens é muito dedicado e organizado com as suas aulas. Estou gostando muito do curso. Parabéns pelo empenho e dedicação. Sigamos em frente com o curso de francês!",
      autor: "Kenderson , Curumba, Julho 2023"
    },

    {
      img: depo10,
      text: "Iniciei as aulas de francês com o professor Hervens há exatamente 01 (um) ano e tenho evoluído bem no aprendizado dessa língua pela metodologia dinâmica e leve aplicada aliada à paciência e dedicação do professor. O Hervens é um professor competente, responsável e comprometido com o meu aprendizado enquanto sua aluna. Nesse período de 01 (um) ano, sinto que obtive interessante progresso, pois iniciei o aprendizado sem nenhum conhecimento prévio do francês e agora já consigo ler livros e jornais, bem como assistir séries e filmes em francês (escolho a dublagem em francês e acrescento a legenda também em francês). Ainda não consigo me expressar em francês, mas mantenho meu propósito nisso por perceber que com as aulas do Hervens conseguirei. Certamente Indico o professor Hervens a todos que desejem aprender a língua francês.",
      autor: "Barbara Gil, Salvador, Julho 2023"
    },

    {
      img: depo11,
      text: "Hervens é muito atencioso, pontual, didático e simpático! Faz questão de ajudar com o foco que o aluno precisa ao longo das aulas e ajuda muito com a compreensão da língua na visão de um nativo. ",
      autor: "Marina, São Paulo, 2018"
    },

    {
      img: depo12,
      text: "Hervens é muito prestativo e gentil, além de dominar a didática em ensinar remotamente o idioma. Excelente professor e recomendo para quem tem interesse em aprender o francês.",
      autor: "Ariana, São Bernado do Campo, 2018"
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