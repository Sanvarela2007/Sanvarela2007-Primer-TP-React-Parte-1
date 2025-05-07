import Cita from '../Cita/Cita.jsx'

import './ListadoCitas.css'

const ListadoCitas = ({ citas, eliminar }) => {


  return (
    <div class="one-half column">
      <h1>Listado</h1>
      {citas.map((cita) => (
        <Cita
        id={cita.id}
        nombre={cita.nombre} 
        propietario={cita.propietario}
        fecha={cita.fecha}
        hora={cita.hora}
        sintomas={cita.sintomas}
        eliminar={eliminar}
        />
      ))}
    </div>
  )
}

export default ListadoCitas
