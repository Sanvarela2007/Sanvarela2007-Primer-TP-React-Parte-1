import './Cita.css'


const Cita = ({nombre, apellido, fecha, hora, sintomas}) => {
  return (
    <div class="cita">
        <p>Mascota: <span>{nombre}</span></p>
        <p>Dueño: <span>{apellido}</span></p>
        <p>Fecha: <span>{fecha}</span></p>
        <p>Hora: <span>{hora}</span></p>
        <p>Sintomas: <span>{sintomas}</span></p>
        <button class="button elimnar u-full-width">Eliminar ×</button>
      </div>
  );
}

export default Cita;
