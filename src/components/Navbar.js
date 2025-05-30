import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/images/logo.jpg';


const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Chavidiomas Logo" />
      </div>
      <nav className="navbar-links">
        <Link to="/">Início</Link>
        <Link to="/servicos">Serviços</Link>
        <Link to="/projetos">Projetos</Link>
        <Link to="/depoimentos">Depoimentos</Link>
        <Link to="/contato">Contato</Link>
      </nav>
    </header>
  );
};

export default Navbar;
// src/components/Navbar.js
// This component defines the navigation bar for the application.