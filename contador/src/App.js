import './App.css';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import { useState } from 'react';

function App() {

  const [numeroDeClics, setNumeroClics] = useState(0);

  const manejarClic = () => {
    setNumeroClics(numeroDeClics + 1);
  };

  const reiniciarContador = () => {
    setNumeroClics(0);
  };

  return (
    <div className="App">
      <div className='freecodecamp-log-contenedor'>
        <img 
          className='freecodecamp-logo' 
          src={freeCodeCampLogo}
          alt='Logo de freeCodeCamp'
          />
      </div>
      <div className='contenedor-principal'>
          <Contador 
            numeroDeClics={numeroDeClics}
          />
          <Boton 
            texto = 'Clic'
            esBotonDeClic = {true}
            manejarClic = {manejarClic}
          />
          <Boton 
            texto = 'Reiniciar'
            esBotonDeClic = {false}
            manejarClic = {reiniciarContador}
          />
      </div>
    </div>
  );
}

export default App;
