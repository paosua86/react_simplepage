import React from 'react';

class Formulario extends React.Component {
  render() {
    return (
      <form>
        <label>
          Nombre:
          <input type="text" name="nombre" />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <br />
        <label>
          Mensaje:
          <textarea name="mensaje" />
        </label>
        <br />
        <button type="submit">Enviar</button>
      </form>
    );
  }
}

export default Formulario;
