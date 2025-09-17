import React from "react";
import './header.css'


// Component Header
const Header = () => {
  return (
<header>
  <nav>
    <div>Aplikasi Saya</div>
    <ul>
      <li><a href="#">Beranda</a></li>
      <li><a href="#">Tentang</a></li>
      <li><a href="#">Kontak</a></li>
    </ul>
  </nav>
</header>

  );
};

export default Header;