import './App.css';
import Consulta from './componentes/Consulta.js';
import Boton from './componentes/Boton.js';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Consulta e Identificación de Líneas Activas por Titular</h1>
        <Consulta />
        <Boton />
      </div>
      
    </div>
  );
}

export default App;
