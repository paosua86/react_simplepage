import React from 'react';
import './formulario.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

class Formulario extends React.Component {
  componentDidMount() {
    AOS.init({
      duration: 1200,
      easing: 'ease-in-sine',
    });
    AOS.refresh();
  }

  render() {
    return (
      <section className="contact" id="contact">
        <h2 data-aos="fade-right" className="heading">Contáctanos</h2>
        <p data-aos="fade-left">A nuestro equipo le encantará atender tu solicitud</p>
        <div className="contactandmap">
          <div className="mapouter">
            <div className="gmap_canvas">
              <iframe
                className="iframe1"
                title="Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d18978.782233116148!2d-78.48332974353386!3d-0.1851598048406027!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59a7d8b57ab7f%3A0xd3ccda6a0da4fb19!2sShyris%20Center%20Alvarezconst%20S.A.!5e0!3m2!1sen!2sus!4v1678999546349!5m2!1sen!2sus"
                width="800"
                height="600"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <form action="#">
            <div className="input-box">
              <input type="text" placeholder="Nombre" />
              <input type="text" placeholder="Apellido" />
            </div>
            <div className="input-box">
              <input type="email" placeholder="Email" />
              <input type="number" placeholder="Teléfono celular" />
            </div>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Tu mensaje"
            ></textarea>
            <input data-aos="zoom-in-up"
              type="submit"
              value="Enviar Mensaje"
              className="btn_contact"
            />
          </form>
        </div>
      </section>
    );
  }
}

export { Formulario };



