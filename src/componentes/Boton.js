import React, { useState, useEffect } from 'react';
import '../hojas-de-estilo/Consulta.css';

function Boton() {
    const [documento, setDocumento] = useState('');
    const [valores, setValores] = useState([0, 0, 0, 0, 0, 0, 0]);

    // Cargar SweetAlert desde la CDN
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://unpkg.com/sweetalert/dist/sweetalert.min.js";
        script.async = true;
        document.body.appendChild(script);
    }, []);

    const handleChange = (e) => {
        setDocumento(e.target.value);
    };

    const handleConsulta = () => {
        if (!documento.trim()) {
            window.sweetAlert("Error", "Ingrese un número de identificación válido", "warning");
            return;
        }

        if (documento.length < 7 || documento.length > 10) {
            window.sweetAlert("Error", "Ingrese un número de identificación válido", "warning");
            return;
        }

        if (documento === '11111111') {
            setValores([1, 0, 0, 2, 0, 1, 0]);
        } else if (documento === '222222222') {
            setValores([0, 1, 3, 0, 0, 0, 2]);
        } else if (documento === '3333333333') {
            setValores([0, 0, 3, 2, 1, 0, 1]);
        } else if (documento === '1234567') {
            setValores([0, 0, 0, 0, 1, 0, 0]);
        }else {
            setValores([0, 0, 0, 0, 0, 0, 0]);
        }
    };

    return (
        <div className="consulta-boton">
            <div className="contenedor-texto-consulta">
                <input 
                    className="numero-documento" 
                    type="number" 
                    placeholder="Ingrese su documento"
                    value={documento}
                    onChange={handleChange}
                />
                <button className="boton-consulta" onClick={handleConsulta}>
                    Consultar
                </button>
            </div>

            {/* Tabla de Operadores */}
            <div className="contenedor-cuadro">
                <table className="tabla-cuadro">
                    <tbody>
                        <tr className='operadores'>
                            <td><a href="https://www.movistar.com.co/atencion-al-cliente/contacto" target="_blank" rel="noopener noreferrer" className='mo'>Movistar</a></td>
                            <td><a href="https://www.claro.com.co/personas/legal-y-regulatorio/procedimiento-y-tramite-de-pqrs/" target="_blank" rel="noopener noreferrer" className='cla'>Claro</a></td>
                            <td><a href="https://ayuda.tigo.com.co/hc/centro-de-ayuda/articles/1729094268-suplantacion-en-los-servicios-movil" target="_blank" rel="noopener noreferrer" className='ti'>Tigo</a></td>
                            <td><a href="https://www.wom.co/linea-honesta-wom?srsltid=AfmBOopoyOiSIhN6fFJCB6THhQ_DjfoRWemKuuBCoky0JZ8FNiTePf9W" target="_blank" rel="noopener noreferrer" className='wo'>Wom</a></td>
                            <td><a href="https://www.virginmobile.co/pqrs/#:~:text=Tu%20celu%20Virgin%20al%20*111" target="_blank" rel="noopener noreferrer" className='vi'>Virgin</a></td>
                            <td><a href="https://etb.com/formularioPQR.aspx" target="_blank" rel="noopener noreferrer" className='et'>Etb</a></td>
                            <td><a href="https://www.movilexito.com/servicios/peticion" target="_blank" rel="noopener noreferrer" className='me'>Movil Exito</a></td>
                        </tr>
                        <tr>
                            <td>{valores[0]}</td>
                            <td>{valores[1]}</td>
                            <td>{valores[2]}</td>
                            <td>{valores[3]}</td>
                            <td>{valores[4]}</td>
                            <td>{valores[5]}</td>
                            <td>{valores[6]}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Recomendación */}
            <div className='recomendacion'>
            <p className='parra'>
                    * Si encuentra líneas telefónicas activas asociadas a su cédula de ciudadanía que no reconoce como propias, le recomendamos acudir de inmediato al operador de telefonía móvil. Además, es fundamental presentar las denuncias correspondientes y solicitar la cancelación de dichas líneas para prevenir posibles fraudes y proteger la seguridad de su identidad y datos personales.
                </p>
                <p className='parra'>
                    * Puede hacer clic sobre el nombre de la empresa para dirigirse a la página web donde podrá registrar una PQR o denunciar la línea.
                </p>
            </div>
        </div>
    );
}

export default Boton;

