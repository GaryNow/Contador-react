import { useState } from 'react'
import './App.css'
import logo from './assets/imgs/logo.png'
import Boton from './components/Boton'
import Contador from './components/Contador'

function App() {
  
  const [numClics, setNumClics] = useState(0)

  const manejarClick = () => setNumClics(numClics + 1);
  
  const restarClick = () => setNumClics(numClics - 1);

  const reiniciarContador = () => setNumClics(0)
  

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img
          className='freecodecamp-logo'
          src={logo}
          alt='Logo de freeCodeCamp' />
      </div>
      <div className='contenedor-principal'>
        <Contador numClics={numClics} />
        <Boton 
          texto='Aumentar'
          esBotonDeClic={true}
          manejarClic={manejarClick} />
        <Boton 
          texto='Disminuir'
          esBotonDeClic={true}
          manejarClic={restarClick} />
        <Boton 
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={reiniciarContador} />
      </div>
    </div>
  )
}

export default App
