// src/pages/Projetos.js
import React from 'react';
import './Projetos.css';

const Projetos = () => {
  return (
    <div className="projetos">
      <section className="projetos-header">
        <h1>Projetos Socias</h1>
        <p>Veja alguns dos nossos projetos de engajamento social.</p>
      </section>

      <section className="projetos-lista">
        <div className="projeto-item">
          <h2>An Kreyòl </h2>
          <p>
            O AN KREYÒL é uma iniciativa que oferece aulas gratuitas de crioulo haitiano para brasileiros interessados em aprender a língua e a cultura do Haiti. Com início em 2020, o projeto já está em sua quarta edição e utiliza material didático exclusivo, adaptado para facilitar o aprendizado. As aulas são ministradas por professores nativos qualificados, garantindo uma experiência autêntica e enriquecedora. O curso tem duração total de 40 horas, com encontros semanais online de uma hora, proporcionando flexibilidade para os participantes.
            </p>
            <br></br>
            <p>
            O objetivo principal do AN KREYÒL é promover a compreensão e o respeito mútuo entre as comunidades haitiana e brasileira, facilitando a integração cultural e oferecendo uma ferramenta de comunicação útil para quem trabalha com haitianos ou deseja conhecer mais sobre o país. Além disso, o projeto busca aprofundar o conhecimento sobre a história e as tradições do Haiti, fortalecendo laços culturais e humanitários.
          </p>
        </div>

        <div className="projeto-item">
          <h2>Português para Todos</h2>
          <p>
            Iniciado em 2020, o projeto "Português para Todos" oferece aulas gratuitas e online de português para imigrantes. Voltado a pessoas que buscam integrar-se cultural e socialmente no Brasil, o programa visa facilitar a comunicação no dia a dia, seja no trabalho, na escola ou em outras interações cotidianas. As aulas utilizam materiais adaptados às necessidades dos estudantes, criando um ambiente de aprendizado acolhedor e eficiente.
            </p>
            <br></br>
            <p>
            O diferencial do projeto está no corpo docente, formado por professores que também são migrantes e já enfrentaram os desafios de adaptação linguística e cultural. Essa experiência proporciona uma compreensão mais profunda do contexto dos estudantes, criando um vínculo empático e prático. Além de ensinar o idioma, o projeto promove a inclusão e a troca cultural, contribuindo para a construção de uma sociedade mais integrada e solidária.
            </p>
        </div>

        <div className="projeto-item">
          <h2>Quintessence</h2>
          <p>
            QUINTESSENCE é um programa gratuito de ensino de francês voltado para brasileiros, criado para celebrar o quinto aniversário de sua fundação. Atualmente em sua segunda edição, o projeto oferece aulas ministradas por professores nativos utilizando materiais didáticos próprios, adaptados para facilitar o aprendizado. Com uma abordagem comunicativa, o curso capacita iniciantes a desenvolverem uma base sólida no idioma em um módulo de 45 horas, dividido em duas aulas semanais de uma hora cada.
            </p>
            <br></br>
          <p>
            Os objetivos incluem tornar o aprendizado do francês acessível a quem enfrenta barreiras para estudar, promover oportunidades de intercâmbio cultural e profissional no mundo francófono, e reforçar o impacto social do projeto.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Projetos;
