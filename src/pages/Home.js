// src/pages/Home.js
import React from 'react';
import './Home.css';
import AnbaMapu from './AnbaMapu';
import Professores from './Professores';
import Depoimentos from './Depoimentos';
import ChamadaFinal from '../components/ChamadaFinal'; // ✅ Importando o componente ChamadaFinal
// src/pages/Home.js




const Home = () => {
  return (
    <div className="home-container">
      {/* Slogan */}
      <section className="slogan">
        <h1>Chavidiomas, 8 anos de dedicação e foco transformado barreiras linguísticas em chaves e oportunidades.</h1>
      </section>

{/* Quem Somos */}
      <section className="quem-somos">
        <h2>Quem Somos</h2>
        <p>
          Bem-vindo/a/e à Chavidiomas, uma empresa dedicada aos idiomas francês e crioulo. Fundada em 2017 em São Paulo, nossa missão é te proporcionar a chave do tamanho para abrir as portas do mundo para seus projetos através de serviços linguísticos personalizados.
        </p>
        <p>
          Na Chavidiomas, oferecemos aulas de:
          <br />
          <strong>- Francês (desde 2017)</strong><br />
          <strong>- Crioulo Haitiano (desde 2018)</strong><br />
          <strong>- Português língua de acolhimento (desde 2020)</strong>
        </p>
        <p>
          Nosso ensino é moldado às necessidades de cada aluno, seja para intercâmbios, viagens, crescimento profissional ou outros projetos pessoais. Além disso, já ajudamos várias pessoas a se destacarem em suas áreas de interesse.
        </p>
        <p>
          Também somos especializados em serviços de tradução, legendagem e transcrição nas seguintes combinações linguísticas:
          <br />
          <strong>Português, Crioulo Haitiano e Francês</strong>
        </p>
        <p>
          Nossos profissionais nativos garantem precisão e qualidade em cada projeto. Os princípios e valores de nosso trabalho são:
        </p>
        <ul>
          <li><strong>CONFIDENCIALIDADE:</strong> Asseguramos total sigilo das informações que nos são confiadas.</li>
          <li><strong>EFICIÊNCIA:</strong> Maximizamos o tempo e os recursos para oferecer sempre serviços pontuais e de qualidade.</li>
          <li><strong>PROFISSIONALISMO:</strong> Respeitamos a identidade de cada palavra utilizada no idioma de partida para a tradução mais fiel no idioma de chegada.</li>
          <li><strong>ENGAJAMENTO SOCIAL:</strong> Contribuímos para uma sociedade mais conectada e solidária. Sempre buscando ampliar nosso impacto social, desenvolvemos três projetos gratuitos que têm transformado vidas: <strong>An Kreyòl</strong>, <strong>Português para Todos</strong> e <strong>Quintessence</strong>.</li>
        </ul>
        <p>
          Na Chavidiomas, trabalhamos para ser mais do que uma empresa. Queremos ser a Chave do tamanho para seus projetos que envolvem idiomas.
        </p>
      </section>
{/* Serviços */}
  <section className="servicos">
    <h2>Nossos Serviços</h2>

{/* Aula de Francês */}
    <div className="servico bloco-frances">
      <h3>Aula de Francês</h3>
      <p>
        Você quer aprender francês de verdade? Com professor nativo e qualificado? Então você está no lugar certo. Desde 2017 Chavidiomas está ensinando Francês Língua Estrangeira (FLE) para os brasileiros.
      </p>
      <p>
        Com nossa metodologia, alunos que começaram do zero (zero mesmo) alcançaram B1 no teste de nível de Campus Langue e B2 no de TV5 Monde após 60h de aula. Pode até ser considerado como um milagre. Mas é o milagre da dedicação e do trabalho responsável e bem feito.
      </p>
      <h3>Você também pode ser um desses alunos. Venha aprender francês com a gente!</h3>
      <a href="https://docs.google.com/forms/d/e/1FAIpQLScwZmESruG6BvoCbkM70i59lZnrL31XN9CzJQgcjyYnsnPDZA/viewform?usp=dialog" target="_blank" rel="noreferrer" className="botao frances">
        Venha falar francês
      </a>
    </div>

{/* Aula de Crioulo Haitiano */}
    <div className="servico bloco-crioulo">
      <h3>Aula de Crioulo Haitiano</h3>
      <p>
        O crioulo haitiano é uma das línguas mais expressivas do mundo, enraizada na resistência e na liberdade. Nossa metodologia inovadora torna o aprendizado acessível e eficaz, especialmente para brasileiros.
      </p>
      <p>O mundo é rico em diversidade linguística, com cerca de 7.000 línguas faladas atualmente, além de inúmeros dialetos locais. Essa pluralidade representa uma imensa riqueza cultural. Na Chavidiomas, escolhemos focar no ensino do crioulo haitiano e do francês. Esse foco reflete nosso compromisso com a qualidade, permitindo-nos aperfeiçoar continuamente nossas atividades e oferecer aos alunos um aprendizado aprofundado e significativo. O crioulo haitiano é uma das línguas mais expressivas do mundo, enraizada na resistência e na liberdade. Por meio do crioulo, podemos construir pontes culturais e derrubar barreiras linguísticas. Nossa metodologia inovadora, desenvolvida por professores nativos com ampla experiência no ensino torna o aprendizado acessível e eficaz, especialmente para brasileiros interessados em explorar essa rica herança cultural. Na Chavidiomas, acreditamos que a língua é uma chave para novas oportunidades e conexões. Convidamos você a explorar esse universo conosco e a descobrir como o aprendizado do crioulo haitiano e do francês pode abrir portas para um mundo de possibilidades.</p>
      <p>
        Na Chavidiomas, acreditamos que a língua é uma chave para novas oportunidades e conexões.
      </p>
      <h3>Que Legba guie seus passos na superação das barreiras linguísticas!</h3>
      <a href="https://docs.google.com/forms/d/e/1FAIpQLScwZmESruG6BvoCbkM70i59lZnrL31XN9CzJQgcjyYnsnPDZA/viewform?usp=dialog" target="_blank" rel="noreferrer" className="botao crioulo">
        Ingressar na próxima turma
      </a>
    </div>

{/* Tradução */}
    <div className="servico">
      <h3>Serviço de Tradução</h3>
      <p>
        Você falou tradução de sites? Artigos? Manuais e outros? Então, tá mão! Somos Chavidiomas, empresa especializada em crioulo haitiano e francês. Agora a tradução de seus projetos está a um clique de você. Garantimos isso com profissionalismo e serviço de qualidade. Fundada em 2017 por imigrante de duas línguas maternas que são: crioulo haitiano e francês e que fala português fluentemente, Chavidiomas se especializou na tradução técnica que envolve os seguintes pares de idiomas:
      </p>
      
  <li style={{ listStyleType: 'none' }}>❖ Português - Francês </li>
  <li style={{ listStyleType: 'none' }}>❖ Francês - Português</li>
  <li style={{ listStyleType: 'none' }}>❖ Português - Crioulo </li>
  <li style={{ listStyleType: 'none' }}>❖ Crioulo - Português</li>
  <li style={{ listStyleType: 'none' }}>❖ Crioulo - Francês</li>
  <li style={{ listStyleType: 'none' }}>❖ Francês - Crioulo</li>

      <i>Nossos princípios e valores são nitidamente visíveis nos resultados alcançados. Nossos valores e princípios são esses: </i>
        <ul>
        <p> - CONFIDENCIALIDADE: Asseguramos total sigilo das informações que nos são confiadas.</p>
        <p> - EFICIÊNCIA: Maximizamos o tempo e os recursos para oferecer sempre serviços pontuais e de qualidade.</p>
        <p> - PROFISSIONALISMO: Respeitamos a identidade de cada palavra utilizada no idioma de partida para a tradução mais fiel no idioma de chegada.</p>
        <p> - ENGAJAMENTO SOCIAL: Contribuímos para uma sociedade mais conectada e solidária. Sempre buscando ampliar nosso impacto social, desenvolvemos três projetos gratuitos que têm transformado vidas: <strong>An Kreyòl</strong>, <strong>Português para Todos</strong> e <strong>Quintessence</strong>.</p>
        </ul>
      <p>
        No trabalho, respeitamos a identidade de cada palavra, aplicamos conformidade na formatação. Porque para nós, TRADUZIR é respeitar a identidade de cada palavra fonte, o contexto de seu uso e suas raízes na cultura de origem.
      </p>
      <a href="https://docs.google.com/forms/d/e/1FAIpQLScwZmESruG6BvoCbkM70i59lZnrL31XN9CzJQgcjyYnsnPDZA/viewform?usp=dialog" target="_blank" rel="noreferrer" className="botao padrao">
        Pedir orçamento
      </a>
    </div>

    {/* Legendagem */}
    <div className="servico">
      <h3>Serviços de Legendagem</h3>
      <p>
        Na Chavidiomas realizamos serviços profissionais de legendagem com foco nos pares de idiomas Português-Francês e Português-Crioulo Haitiano. Nosso trabalho é ideal para empresas, produtores de conteúdo e instituições que buscam alcançar públicos multilíngues com precisão e naturalidade.Garantimos:
      </p>
      <ul>
        <li>Adaptação cultural e linguística para transmitir a mensagem de forma clara e envolvente.</li>
        <li>Sincronia perfeita entre áudio e texto, respeitando padrões técnicos e boas práticas da indústria.</li>
        <li>Profissionais nativos em um dos idiomas e com domínio avançado no outro.</li>
        <li>Entrega pontual e de alta qualidade.</li>
      </ul>
      <i>Venha tornar seu projeto, seja filme, documentário, vídeo institucional ou outro conteúdo digital, acessível a um público-alvo do além!</i>
      
      <a href="https://docs.google.com/forms/d/e/1FAIpQLScwZmESruG6BvoCbkM70i59lZnrL31XN9CzJQgcjyYnsnPDZA/viewform?usp=dialog" target="_blank" rel="noreferrer" className="botao padrao">
        Pedir orçamento
      </a>
    </div>
  </section>
    {/* Anba Mapu */}
  <AnbaMapu />
    {/* Professores */}
  <Professores />
      {/* Depoimentos */}
      <Depoimentos />
      {/* Contato */}
      <section className="contato">
        <h2>Contato</h2>
        <p>
          Para mais informações sobre nossos serviços, entre em contato conosco através do e-mail: <a href="mailto:contato@chavidiomas.com">contato@chavidiomas.com</a>
        </p>
      </section>
      {/* Chamada Final */}
      <ChamadaFinal />
      
    </div> 
    
   
  );
};

export default Home;
// src/pages/Home.css