import './Cita.css'


const Cita = ({id, nombre, propietario, fecha, hora, sintomas, eliminar}) => {
  return (
    <div class="cita">
        <p >Mascota: <span>{nombre} </span></p>
        <p>Dueño: <span>{propietario}</span></p>
        <p>Fecha: <span>{fecha}</span></p>
        <p>Hora: <span>{hora}</span></p>
        <p>Sintomas: <span>{sintomas}</span></p>
        <button onClick={() => eliminar(id)} class="button elimnar u-full-width">Eliminar ×</button>
      </div>
  );
}

export default Cita;
