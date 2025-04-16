import './Cita.css'


const Cita = ({nombre, apellido, fecha, comentarios}) => {
  return (
    <>
      <p>{nombre} {apellido} {fecha} {comentarios}</p>
      <p>{apellido}</p>
      <p>{fecha}</p>

    </>
  );
}

export default Cita;
