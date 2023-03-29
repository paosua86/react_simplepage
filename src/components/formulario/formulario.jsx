import React from "react";
import "./formulario.css";
import AOS from "aos";
import "aos/dist/aos.css";

class Formulario extends React.Component {
  componentDidMount() {
    AOS.init({
      duration: 1200,
      easing: "ease-in-sine",
    });
    AOS.refresh();
  }

  render() {
    return (
      <section className="contact" id="contact">
        <h2 data-aos="fade-right" className="heading">
          Contáctanos
        </h2>
        <p data-aos="fade-left">
          A nuestro equipo le encantará atender tu solicitud
        </p>
        <form action="#">
          <div class="partes" id="uno">
            <div className="input-box">
              <input type="text" placeholder="Nombre" />
              <input type="text" placeholder="Apellido" />
            </div>
            <div className="input-box">
              <input type="email" placeholder="Email" />
              <input type="number" placeholder="Teléfono celular" />
              <input type="text" placeholder="Tipo de seguro/s" />
            </div>
          </div>
          <div class="partes">
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Tu mensaje"
            ></textarea>
            <input
              type="submit"
              value="Enviar Mensaje"
              className="btn_contact"
            />
          </div>
        </form>

        <div class="gps_img">
          <div>
            <img data-aos="fade-left" className="car_mov_img" src="images/carro_mov.gif" alt="" />
          </div>
          <div className="mapouter">
            <div className="gmap_canvas">
              <iframe
                className="iframe1"
                title="Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7976660239774!2d-78.48431688255614!3d-0.18436000000000238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59a7d8b57ab7f%3A0xd3ccda6a0da4fb19!2sShyris%20Center%20Alvarezconst%20S.A.!5e0!3m2!1sen!2sec!4v1680104730528!5m2!1sen!2sec"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>


        </div>
      </section>
    );
  }
}

export { Formulario };
