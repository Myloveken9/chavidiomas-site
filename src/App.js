// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Servicos from './pages/Servicos';
import Projetos from './pages/Projetos';
import Depoimentos from './pages/Depoimentos';
import Contato from './pages/Contato';




// import Servicos from '../components/Servicos';
// import Depoimentos from '../components/Depoimentos';




function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/" element={<Home />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/depoimentos" element={<Depoimentos />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </Router>
  );
}

export default App;<Routes>
  <Route path="/" element={<Home />} />
  {/* <Route path="/servicos" element={<Servicos />} />
  <Route path="/projetos" element={<Projetos />} />
  <Route path="/depoimentos" element={<Depoimentos />} />
  <Route path="/contato" element={<Contato />} /> */}
</Routes>

// src/App.js
// Este é o ponto de entrada da aplicação React. Ele configura o roteamento e renderiza os componentes principais da aplicação.
// O componente Navbar é importado e renderizado no topo, seguido pelas rotas definidas para cada página da aplicação.
// As páginas Home, Servicos, Projetos, Depoimentos e Contato são importadas e associadas às suas respectivas rotas.
// O componente Router do React Router é usado para gerenciar a navegação entre as diferentes páginas da aplicação.
// O componente Routes define as rotas da aplicação, onde cada Route especifica um caminho e o componente a ser renderizado quando esse caminho é acessado.
// O componente App é exportado como o componente principal da aplicação, que será renderizado no arquivo index.js.
// src/App.js
