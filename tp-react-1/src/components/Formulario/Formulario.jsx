import { useState } from 'react'
import './Formulario.css'

const Formulario = ({agregarCita}) => {

  const [datos, setDatos] = useState(
    {
      nombre: '',
      propietario: '', 
      fecha: '',
      hora: '',
      sintomas: ''
    }
  )

  const cambios = (e) =>
  {
    setDatos({...datos, [e.target.name] : e.target.value})
  }


  
  const enviar = (e) =>
  {
    e.preventDefault()
    if(datos.nombre == '' || datos.propietario == '' || datos.fecha == '' || datos.hora == '' || datos.sintomas == '')
    {
      alert("Todos los campos son obligatorios")
      return;
    }

    const nuevaCita = {
      id: Date.now(), // me recomendaron esto
      ...datos,
    }

    if(confirm("¿Desea agregar la cita?"))
    {
    agregarCita(nuevaCita)

    setDatos({
      nombre: '',
      propietario: '', 
      fecha: '',
      hora: '',
      sintomas: ''
    })
  }
}
const hoy = new Date().toLocaleDateString('en-CA');

  return (
    <div class="one-half column">
      <h2>Formulario</h2>
      <form onSubmit={enviar}>
      <label>Nombre Mascota</label>
      <input type="text" name="nombre" class="u-full-width" placeholder="Nombre Mascota" value={datos.nombre} onChange={cambios}/>
      <label>Nombre Dueño</label>
      <input type="text" name="propietario" class="u-full-width" placeholder="Nombre dueño de la mascota" value={datos.propietario} onChange={cambios}/>
      <label>Fecha</label>
      <input type="date" name="fecha" class="u-full-width" value={datos.fecha} onChange={cambios}  min={hoy}/>
      <label>Hora</label>
      <input type="time" name="hora" class="u-full-width" value={datos.hora} onChange={cambios}/>
      <label>Sintomas</label>
      <textarea name="sintomas" class="u-full-width" value={datos.sintomas} onChange={cambios}></textarea>
      <button type="submit" class="u-full-width button-primary">Agregar Cita</button>
      </form>
    </div>
  )

}

export default Formulario
