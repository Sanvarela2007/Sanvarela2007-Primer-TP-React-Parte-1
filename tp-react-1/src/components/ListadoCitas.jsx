import Cita from '../Cita.jsx'
const ListadoCitas = () => {


  return (
    <>
    <h1>Listado</h1>
        <Cita nombre = 'Nombre: Pedro' apellido='Apellido: Garcia' fecha='Fecha: 9/12' comentarios='Comentarios: Ninguno'></Cita>
        <Cita mensaje = "Cita 2"></Cita>
        <Cita mensaje = "Cita 3"></Cita>
    </>
  )
}

export default ListadoCitas
