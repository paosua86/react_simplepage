import React from 'react';
import './formulario.css';

class Formulario extends React.Component {
  render() {
    return (
      <section className="contact" id="contact">
        <h2 className="heading">Contáctanos</h2>
        <p>A nuestro equipo le encantará atender tu solicitud</p>
        <form action="#">
          <div className="input-box">
            <input type="text" placeholder="Nombre" />
            <input type="text" placeholder="Apellido" />
          </div>
          <div className="input-box">
            <input type="email" placeholder="Email" />
            <input type="number" placeholder="Teléfono celular" />
          </div>
          <textarea name="" id="" cols="30" rows="10" placeholder="Tu mensaje"></textarea>
          <input type="submit" value="Enviar Mensaje" className="btn_contact" />
        </form>
      </section>
    );
  }
}

export default Formulario;
