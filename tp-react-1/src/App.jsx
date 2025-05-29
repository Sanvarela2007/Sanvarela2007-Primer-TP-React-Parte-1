import { useState } from 'react'
import './App.css'
import Formulario from './components/Formulario/Formulario'
import ListadoCitas from './components/ListadoCitas/ListadoCitas'
import { useEffect } from 'react'

function App() {

  const[citas, setCitas] = useState(
    [
    /*  {
        id: 1,
        nombre: "Santi",
        propietario: "Pedro", 
        fecha: "22/10",
        hora: "16:40",
        sintomas: "Camina mal"
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
      },*/
    ]
  )

  const agregarCita = (nuevaCita) => {
    setCitas([...citas, nuevaCita]);
  }

  const borrarCita = (id) => {
    if(confirm("¿Desea borrar la cita?"))    setCitas(citas.filter(cita => cita.id !== id))
  }

  useEffect(() => {
    const CitasGuardadas = localStorage.getItem('citas');
    if (CitasGuardadas) {
      setCitas(JSON.parse(CitasGuardadas));
    }
  }, []);

  useEffect(() => {
    if (citas.length) {
      localStorage.setItem('citas', JSON.stringify(citas));
    } else {
      localStorage.removeItem('citas');
    }
  }, [citas]);
  
  
  return (
    <>
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div class="container">
        <Formulario agregarCita={agregarCita}/>
        <ListadoCitas citas={citas} eliminar={borrarCita}/>
      </div>
    </>
  )
}

export default App
