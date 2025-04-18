import React from 'react';
import '../hojas-de-estilo/Consulta.css';

function Consulta() {
  return (
    <div className="contenedor-consulta">
      <img
        className="imagen-cilat"
        src={require("../imagenes/cilat.png")}
        alt="logo de cilat"
      />
    </div>
  );
}
export default Consulta;

