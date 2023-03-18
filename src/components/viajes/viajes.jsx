import React from "react";
import "./viajes.css";
import AOS from "aos";
import "aos/dist/aos.css";

class Viajes extends React.Component {
  componentDidMount() {
    AOS.init({
      duration: 600,
      easing: "ease-in-sine",
    });
    AOS.refresh();
  }

  render() {
    return (
      <section className="viajes" id="viajes">
        <img data-aos="fade-right" className="viaje-img-estatico" src="images/travel.svg" alt="" />
        <h2 data-aos="fade-up" className="heading">
          SEGUROS PARA VIAJES
        </h2>
        <p class="description-service" data-aos="fade-left">
          Durante tu viaje podrías tener un plan que solucione estos riesgos. Es momento sólo de disfrutar.
        </p>
        <div className="viajes-container">
          <div class="viajes-box">
            <i className="bx bx-check-circle"></i>
            <p>Enfermedades</p>
          </div>
          <div className="viajes-box">
            <i className="bx bx-check-circle"></i>
            <p>Accidentes</p>
          </div>
          <div className="viajes-box">
            <i className="bx bx-check-circle"></i>
            <p>Emergencias</p>
          </div>
          <div className="viajes-box">
            <i className="bx bx-check-circle"></i>
            <p>Cumplir con requisitos consulares</p>
          </div>
          <div className="viajes-box">
            <i className="bx bx-check-circle"></i>
            <p>Perdida de equipaje</p>
          </div>
          <div className="viajes-box">
            <i className="bx bx-check-circle"></i>
            <p>
              Robo y asalto
            </p>
          </div>
        </div>
        <h3 className="heading">VENTAJAS Y NOVEDADES AL CONTRATAR CON NOSOTROS</h3>
        <div className="viajes-container-nosotros">
          <div className="viajes-box">
            <h4>xxx</h4>
            <p>xxx
            </p>
          </div>
          <div className="viajes-box">
            <h4>xxx</h4>
            <p>xxx
            </p>
          </div>
          <div className="viajes-box">
            <h4>xxx</h4>
            <p>xxx
            </p>
          </div>
          <div className="viajes-box">
            <h4>xxx</h4>
            <p>xxx
            </p>
          </div>
          <div className="viajes-box">
            <h4>xxx</h4>
            <p>xxx
            </p>
          </div>
          <div className="viajes-box">
            <h4>xxx</h4>
            <p>xxx
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default Viajes;
