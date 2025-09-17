import React from 'react';
import './KartuSiswa.css';

const KartuSiswa = ({ nama, jurusan }) => {
  return (
    <div className="kartu-siswa">
      <h3>{nama}</h3>
      <p>Jurusan: {jurusan}</p>
    </div>
  );
};

export default KartuSiswa;