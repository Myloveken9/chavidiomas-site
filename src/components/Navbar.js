import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/images/logo.jpg';

const Navbar = () => {
  const navRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-visible');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (navRef.current) observer.observe(navRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header className="navbar fade-in-hidden" ref={navRef}>
        <div className="navbar-container">
          <div className="navbar-logo">
            <img src={logo} alt="Logo" />
          </div>

          <nav className="navbar-links">
            <Link to="/">Início</Link>
            <Link to="/servicos">Serviços</Link>
            <Link to="/projetos">Projetos</Link>
            <Link to="/depoimentos">Depoimentos</Link>
            <Link to="/contato">Contato</Link>
          </nav>
        </div>
      </header>

      <div className="navbar-slogan">
        Chavidiomas, transformando barreiras linguísticas em chaves e oportunidades desde 2017.
      </div>
    </>
  );
};

export default Navbar;
