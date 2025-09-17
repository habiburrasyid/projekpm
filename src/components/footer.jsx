import React from "react";
import './footer.css'

// Component Footer
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>&copy; {currentYear} Nama Perusahaan Anda. Semua Hak Cipta Dilindungi.</p>
    </footer>
  );
}; 

export default Footer;