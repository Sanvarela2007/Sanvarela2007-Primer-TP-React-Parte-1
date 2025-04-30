import { useState } from 'react'
import './App.css'
import Formulario from './components/Formulario/Formulario-'
import ListadoCitas from './components/ListadoCitas/ListadoCitas'

function App() {

  const[citas, setCitas] = useState(
    [
      {
        id: 1,
        nombre: "Santi",
        propietario: "Pedro",
        fecha: "22/10",
        hora: "16:40",
        sintomas: "Le duele la cola desde el 9/12"
      },
      {
        id: 2,
        nombre: "Firulais",
        propietario: "Juan",
        fecha: "23/10",
        hora: "10:30",
        sintomas: "Vomita cada mañana"
      },
      {
        id: 3,
        nombre: "Luna",
        propietario: "Ana",
        fecha: "24/10",
        hora: "14:00",
        sintomas: "Está muy decaída desde ayer"
      },
    ]
  )

  const agregarCita = (nuevaCita) => {
    setCitas(citas, nuevaCita);
  }

  const borrarCita = (id) => {
    setCitas(citas.filter(cita => cita.id !== id))
  }

  return (
    <>
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div class="container">
        <Formulario />
        <ListadoCitas citas={citas} eliminar={borrarCita}/>
      </div>
    </>
  )
}

export default App
