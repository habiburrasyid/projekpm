import React from "react";
import './TemaToggle.css';

const TemaToggle = ({ darkMode, onToggle }) => {
  return (
    <button className="toggle-button" onClick={onToggle}>
      {darkMode ? "🌙 Gelap" : "🌞 Cerah"}
    </button>
  );
};

export default TemaToggle;