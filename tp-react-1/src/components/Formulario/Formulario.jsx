import '../Formulario/Formulario.css'

const Formulario = () => {
  return (
    <div class="one-half column">
      <h2>Formulario</h2>
      <form>
      <label>Nombre Mascota</label>
      <input type="text" name="mascota" class="u-full-width" placeholder="Nombre Mascota"/>
      <label>Nombre Dueño</label>
      <input type="text" name="propietario" class="u-full-width" placeholder="Nombre dueño de la mascota"/>
      <label>Fecha</label>
      <input type="date" name="fecha" class="u-full-width"/>
      <label>hora</label>
      <input type="time" name="hora" class="u-full-width"/>
      <label>Sintomas</label>
      <textarea name="sintomas" class="u-full-width"></textarea>
      <button type="submit" class="u-full-width button-primary">Agregar Cita</button>
      </form>
    </div>

    //
  )

}

export default Formulario
