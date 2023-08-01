import React from 'react';
import '../../styles/footerStyle.css'; // Import the CSS file for the footer styling

const year = new Date().getFullYear()
const Footer = () => {
  return (
    <div className="footer">
      <p className="footer-text">Fixit List @{year}</p>
    </div>
  );
};

export default Footer;
