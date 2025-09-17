import { useState } from 'react'
import Footer from './components/footer.jsx'
import Header from './components/header.jsx'
import KartuSiswa from './components/kartuSiswa.jsx'
import TemaToggle from './components/TemaToggle.jsx'
// import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Header />

      <div className="toggle-container">
        <TemaToggle darkMode={darkMode} onToggle={toggleDarkMode} />
      </div>

      <div className="cards">
        <KartuSiswa
          nama="Qaysar Aqeel Nugraha"
          jurusan="SIJA - Sistem Informasi Jaringan dan Aplikasi"
        />
        <KartuSiswa
          nama="Miftah Nur Firmansyah"
          jurusan="SIJA - Sistem Informasi Jaringan dan Aplikasi"
        />
        <KartuSiswa
          nama="Maulana Alghifari"
          jurusan="SIJA - Sistem Informasi Jaringan dan Aplikasi"
        />
      </div>

      <Footer />
    </div>
  )
}

export default App
