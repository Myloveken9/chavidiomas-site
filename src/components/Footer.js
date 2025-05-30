// src/components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; {new Date().getFullYear()} Chavidiomas. Tous droits réservés.</p>
        <p>Site conçu avec ❤️ par Chavidiomas</p>
      </div>
    </footer>
  );
};

export default Footer;
// src/components/Footer.js
// This component defines the footer for the application.