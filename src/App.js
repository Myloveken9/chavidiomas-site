import React from 'react';
import './App.css';
import logo from './assets/logo.jpg';
import QuemSomos from './components/QuemSomos';
import Servicos from './components/Servicos';
import Professores from './components/Professores';
import AnbaMapu from './components/AnbaMapu';
import Depoimentos from './components/Depoimentos';
import Contato from './components/Contato';

function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} alt="Chavidiomas logo" width="180" />
        <h1>Chavidiomas</h1>
        <p>8 anos de dedicação e foco transformando barreiras linguísticas em chaves e oportunidades.</p>
      </header>

      <QuemSomos />
      <Servicos />
      <Professores />
      <AnbaMapu />
      <Depoimentos />
      <Contato />

      <footer>
        <p>© 2025 Chavidiomas - Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
// src/App.js
// Este é o componente principal da aplicação Chavidiomas, que importa e organiza os componentes de Quem Somos, Serviços, Professores, Anba Mapu, Depoimentos e Contato.
// Ele também inclui o cabeçalho com o logo e informações da empresa, além do rodapé com direitos reservados.
// O estilo é aplicado através do arquivo App.css, e as imagens são importadas de uma pasta de assets.
