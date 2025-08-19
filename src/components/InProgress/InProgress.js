import React from 'react';
import './InProgress.css';
import { FaTools } from "react-icons/fa";

function InProgress() {
  return (
    <div className="inprogress-container">
      <h2>Funcionalidad en desarrollo</h2>
      <FaTools className="inprogress-icon" />
      <p>Esta sección estará disponible próximamente. ¡Gracias por tu paciencia!</p>
    </div>
  );
}

export default InProgress;
