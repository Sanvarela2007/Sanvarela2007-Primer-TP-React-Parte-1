import Cita from '../Cita.jsx'
import '../ListadoCitas.css'

const ListadoCitas = () => {


  return (
    <div class="one-half column">
      <h1>Listado</h1>
      <Cita nombre = 'Pedro' apellido='Garcia' fecha='9/12' comentarios='Ninguno'></Cita>
      <Cita nombre = 'Maximo' apellido='Gonzalez' fecha='12/10' comentarios='Realizar antes de tiempo'></Cita>
      <Cita nombre = 'Juan' apellido='Gonzalez' fecha='21/11' comentarios='Ninguno'></Cita>
    </div>
  )
}

export default ListadoCitas
