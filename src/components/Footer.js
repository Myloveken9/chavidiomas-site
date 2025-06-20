// src/components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; {new Date().getFullYear()} Chavidiomas - desde 2017 - todos os direitos reservados.</p>
        <p> Developed by Mynek-Global </p>
      </div>
    </footer>
  );
};

export default Footer;
// src/components/Footer.js
// This component defines the footer for the application.