// src/pages/Home.js
import React, { useEffect } from 'react';
import './Home.css';
import Professores from './Professores';
import Depoimentos from './Depoimentos';
import ChamadaFinal from '../components/ChamadaFinal';

const Home = () => {
  useEffect(() => {
  const btn = document.getElementById('scrollTopBtn');

  const handleScroll = () => {
    if (window.scrollY > 300) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  };

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  window.addEventListener("scroll", handleScroll);
  btn.addEventListener("click", handleClick);

  return () => {
    window.removeEventListener("scroll", handleScroll);
    btn.removeEventListener("click", handleClick);
  };
}, []);



  return (
    <>
      <section className="banner-container">
        <img
          src="/banner-chavidiomas.jpg"
          alt="Banner Chavidiomas"
          className="banner-image"
        />
        <div className="banner-buttons">
          <a
            href="https://wa.me/+5511994951277"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
          >
            Fale no WhatsApp
          </a>
        </div>
      </section>

      {/* Serviços */}
      <section className="servicos">
        <h2>Nossos Serviços</h2>
        <div className="servicos-grid">
          <div className="servico bloco-frances">
            <h2>Aula de Francês</h2>
            <h3>“Francês, para quem busca evolução pessoal, acadêmica e profissional.”</h3>
            <ul>
              <li>Você quer falar francês de verdade ?</li>
            </ul>
            <p>
              Você está no lugar certo. Desde 2017, a Chavidiomas tem se dedicado ao ensino de Francês como Língua Estrangeira (FLE) para o público brasileiro, com foco em qualidade, seriedade e resultados concretos.
            </p>
            <p>
              Nossa metodologia é especialmente desenvolvida para atender desde iniciantes absolutos até estudantes que buscam avançar rapidamente. Os resultados falam por si: diversos alunos que iniciaram sem qualquer conhecimento prévio do idioma atingiram, em apenas 60 horas de aula, níveis B1 no teste de nivelamento da Campus Langue e B2 na plataforma TV5 Monde — ambos reconhecidos internacionalmente.
            </p>
            <p>
              Pode parecer surpreendente, mas esses resultados não são fruto do acaso. Eles são fruto de um método eficaz, de um ensino comprometido e de um trabalho responsável, cuidadosamente planejado. É o “milagre” da dedicação, da experiência e da excelência no ensino de línguas.
            </p>
            <p>
              A Chavidiomas é uma escola de idiomas que se destaca por sua abordagem inovadora e eficaz no ensino do francês. Nossa missão é proporcionar uma experiência de aprendizado envolvente e acessível, adaptada às necessidades de cada aluno. Com professores nativos e qualificados, oferecemos aulas personalizadas que garantem resultados rápidos e duradouros.
            </p>
            <h3>Você também pode ser um desses alunos !</h3>
            <i><h3>Venha falar francês com a gente!</h3></i>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScwZmESruG6BvoCbkM70i59lZnrL31XN9CzJQgcjyYnsnPDZA/viewform?usp=dialog"
              target="_blank"
              rel="noreferrer"
              className="botao frances"
            >
              Venha falar francês
            </a>
          </div>

          <div className="servico bloco-crioulo">
            <h2>Aula de Crioulo Haitiano</h2>
            <p>
              O crioulo haitiano é uma das línguas mais expressivas do mundo, enraizada na resistência e na liberdade. Nossa metodologia inovadora torna o aprendizado acessível e eficaz, especialmente para brasileiros.
            </p>
            <p>
              O mundo é rico em diversidade linguística, com cerca de 7.000 línguas faladas atualmente, além de inúmeros dialetos locais. Essa pluralidade representa uma imensa riqueza cultural. Na Chavidiomas, escolhemos focar no ensino do crioulo haitiano e do francês.
            </p>
            <p>
              Esse foco reflete nosso compromisso com a qualidade, permitindo-nos aperfeiçoar continuamente nossas atividades e oferecer aos alunos um aprendizado aprofundado e significativo. O crioulo haitiano é uma das línguas mais expressivas do mundo, enraizada na resistência e na liberdade. Por meio do crioulo, podemos construir pontes culturais e derrubar barreiras linguísticas.
            </p>
            <p>
              Nossa metodologia inovadora, desenvolvida por professores nativos com ampla experiência no ensino torna o aprendizado acessível e eficaz, especialmente para brasileiros interessados em explorar essa rica herança cultural. Na Chavidiomas, acreditamos que a língua é uma chave para novas oportunidades e conexões.
            </p>
            <p>
              Convidamos você a explorar esse universo conosco e a descobrir como o aprendizado do crioulo haitiano e do francês pode abrir portas para um mundo de possibilidades.
            </p>
            <i><h2>Que Legba guie seus passos na superação das barreiras linguísticas!</h2></i>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScwZmESruG6BvoCbkM70i59lZnrL31XN9CzJQgcjyYnsnPDZA/viewform?usp=dialog"
              target="_blank"
              rel="noreferrer"
              className="botao crioulo"
            >
              Ingressar na turma
            </a>
          </div>

          <div className="servico">
            <h2>🎁 Serviço de Tradução</h2>
            <h3>“Tradução com identidade, precisão e propósito.”</h3>
            <i>Na era da comunicação global, traduzir vai muito além de converter palavras entre idiomas — trata-se de preservar significados, respeitar contextos e construir pontes culturais.</i>
            <p>
              A Chavidiomas é uma empresa especializada na tradução técnica e institucional, com ênfase nos idiomas Francês, Crioulo Haitiano e Português. Desde 2017, oferecemos soluções linguísticas de alta qualidade para empresas, organizações e indivíduos que buscam excelência e autenticidade na comunicação multilíngue.
            </p>
            <p>
              Fundada por um imigrante bilíngue nativo (crioulo haitiano e francês), fluente também em português, a Chavidiomas nasceu com uma visão clara: oferecer traduções especializadas que respeitem a profundidade cultural e técnica dos idiomas envolvidos.
            </p>
            <p><i>Nosso trabalho é fruto de competência linguística, compromisso com a qualidade e sensibilidade intercultural.</i></p>
            <h2>🌐 Pares de idiomas atendidos:</h2>
            <ul>
              <li>Português ⇄ Francês</li>
              <li>Francês ⇄ Português</li>
              <li>Português ⇄ Crioulo</li>
              <li>Crioulo ⇄ Português</li>
              <li>Crioulo ⇄ Francês</li>
              <li>Francês ⇄ Crioulo</li>
            </ul>
            <i>Atendemos projetos variados — desde sites institucionais, artigos acadêmicos e documentação técnica, até manuais, legendas, materiais publicitários e mais.</i>
            <p><i>Trabalhamos com agilidade, precisão e total respeito à confidencialidade das informações.</i></p>
            <h3>Nossos princípios são o que nos define:</h3>
            <ul>
              <li><strong>CONFIDENCIALIDADE</strong> - Garantimos sigilo absoluto sobre todo material recebido, respeitando a privacidade e os dados de nossos clientes.</li>
              <li><strong>EFICIÊNCIA</strong> - Otimizamos tempo e recursos para oferecer entregas pontuais, sem abrir mão da qualidade técnica e linguística.</li>
              <li><strong>PROFISSIONALISMO</strong> - Trabalhamos com seriedade e atenção aos detalhes, mantendo a fidelidade ao texto original e a integridade de seu conteúdo.</li>
            </ul>
            <p><i>No trabalho, respeitamos a identidade de cada palavra, aplicamos conformidade na formatação. Porque para nós, TRADUZIR é respeitar a identidade de cada palavra fonte, o contexto de seu uso e suas raízes na cultura de origem.</i></p>
            <h3>👇 Solicite um orçamento personalizado</h3>
            <a
        href="https://wa.me/+5511994951277"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-pedir-orcamento">
        Solicitar orçamento
      </a>
      </div>
      <div className="servico">
            <h2>Legendagem profissional com precisão linguística e impacto cultural</h2>
            <p>
              Na Chavidiomas, oferecemos serviços especializados de legendagem profissional, com foco nos pares de idiomas Português–Francês e Português–Crioulo Haitiano.
            </p>
            <p>
              Atuamos com excelência em projetos audiovisuais para empresas, instituições, produtoras de conteúdo e organizações que desejam ampliar seu alcance e comunicar-se com públicos multilíngues de forma clara, natural e eficaz.
            </p>
            <p>
              Nossa abordagem une competência linguística, sensibilidade cultural e rigor técnico para garantir uma legendagem que vai além da tradução literal — entregamos comunicação verdadeira, fiel à intenção do conteúdo original e adaptada ao universo do público-alvo.
            </p>
            <h3>Por que escolher a Chavidiomas?</h3>
            <ul>
              <li>Adaptação cultural e linguística</li>
              <p>Cada legenda é cuidadosamente ajustada para manter o tom, o ritmo e o impacto da mensagem original, respeitando nuances culturais e contextuais.</p>
              <li>Sincronia técnica de alto padrão</li>
              <p>Garantimos alinhamento preciso entre áudio e texto, seguindo as melhores práticas e exigências do setor audiovisual.</p>
              <li>Equipe qualificada e bilíngue</li>
              <p>Trabalhamos com profissionais nativos em um dos idiomas e com fluência avançada no outro, assegurando naturalidade e coerência em cada linha de legenda.</p>
              <li>Compromisso com prazos e qualidade</li>
              <p>Nossa entrega é sempre pontual, com qualidade consistente do início ao fim do projeto.</p>
            </ul>
            <p><i>Venha tornar seu projeto, seja filme, documentário, vídeo institucional ou outro conteúdo digital, acessível a um público-alvo do além!</i></p>
            <p><i>Seja um filme, documentário, vídeo institucional, campanha publicitária ou qualquer outro formato digital, conte com a Chavidiomas para tornar seu conteúdo acessível, atrativo e profissional para públicos que falam Francês ou Crioulo Haitiano.</i></p>
            <h1>🔗 Solicite um orçamento e leve sua mensagem além das fronteiras.</h1>
            <a
        href="https://wa.me/+5511994951277"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-pedir-orcamento"
      >
        Solicitar orçamento
      </a>
        </div>
        <div className="servicos"></div>
      <h2>Clube de Conversas - ANBA MAPU</h2>
    <p>
      Nesse link você encontra a Cartilha do clube de conversa em Crioulo, Francês e/ou Português Língua de Acolhimento.
    </p>
<div>
  <div className="anba-mapu">
    <div className="btn-container">
      <a href="https://docs.google.com/presentation/d/1MdHyocwvWFyKGZUI7N1U922fqJacKLsDLTpfjD3JAAc/edit?usp=sharing" className="btn ver-cartilha">Ver a Cartilha</a>
    </div>
  </div>
  <div className="Servicos">
    <div className="container">
      <h2>Quem Somos</h2>
      <p>
        A Chavidiomas é especializada no ensino de idiomas para imigrantes e na oferta de serviços
        de tradução, transcrição e legendagem. Nosso objetivo é aproximar culturas e facilitar a
        integração através da linguagem.
      </p>
      <p>
        Com professores experientes e uma abordagem pedagógica adaptada às necessidades dos alunos,
        promovemos um aprendizado eficiente e humanizado.
      </p>
      <p>
        Além disso, oferecemos serviços de tradução e legendagem para empresas e indivíduos que
        desejam expandir sua comunicação para o público falante de francês e crioulo haitiano.
      </p>
    </div>
  </div>
</div>
      </div> {/* <-- Add this line to close servicos-grid */}
</section>
<button id="scrollTopBtn" title="Voltar ao topo">↑</button>

      <Professores />

      <Depoimentos />

      <ChamadaFinal />
    </>
  );
};

export default Home;
