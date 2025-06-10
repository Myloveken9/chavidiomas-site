// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Servicos from './pages/Servicos';
import Projetos from './pages/Projetos';
import Depoimentos from './pages/Depoimentos';
import AnbaMapu from './pages/AnbaMapu';
import Contato from './pages/Contato'; // On garde le nom 'Contato'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/depoimentos" element={<Depoimentos />} />
        <Route path="/anbamapu" element={<AnbaMapu />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </Router>
  );
}

export default App;
