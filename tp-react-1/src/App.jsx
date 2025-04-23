import './App.css'
import Formulario from './components/Formulario'
import ListadoCitas from './components/ListadoCitas'

function App() {
  return (
    <>
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div class="container">
        <Formulario />
        <ListadoCitas />
      </div>
    </>
  )
}

export default App
