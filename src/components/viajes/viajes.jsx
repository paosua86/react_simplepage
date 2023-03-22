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
          Durante tu viaje podrías tener un plan que solucione estos riesgos. Somos parte del equipaje.<br></br>
          Si viajas por placer, negocios o estudios te ofrecemos los mejores beneficios y coberturas para tu viaje.
        </p>

        <h3 className="heading">VENTAJAS Y NOVEDADES AL CONTRATAR CON NOSOTROS</h3>
        <div className="viajes-container-nosotros">
          <div className="viajes-box">
            <h4>Sin límite de edad</h4>
          </div>
          <div className="viajes-box">
            <h4>Bajo Costo</h4>
          </div>
          <div className="viajes-box">
            <h4>Amplias Coberturas</h4>
          </div>
          <div className="viajes-box">
            <h4>Agilidad en rembolsos</h4>
          </div>
          <div className="viajes-box">
            <h4>Gastos médicos por accidentes y/o enfermedades</h4>
          </div>
        </div>

        <h3 className="heading">SERVICIOS COMPLEMENTARIOS</h3>
        <div className="viajes-container">
          <div class="viajes-box">
            <i className="bx bx-check-circle"></i>
            <p>Asistencia por extravío y/o robo de documentos</p>
          </div>
          <div className="viajes-box">
            <i className="bx bx-check-circle"></i>
            <p>Asesoría legal para honorarios de abogados y/o adelanto de fianzas</p>
          </div>
          <div className="viajes-box">
            <i className="bx bx-check-circle"></i>
            <p>Pérdida de equipaje hasta el límite del plan contratado a partir de 72 horas de extraviado</p>
          </div>
          <div className="viajes-box">
            <i className="bx bx-check-circle"></i>
            <p>Repatriación de herido o enfermo por recomendación médica</p>
          </div>
          <div className="viajes-box">
            <i className="bx bx-check-circle"></i>
            <p>Repatriación en caso de fallecimiento</p>
          </div>
        </div>

      </section>
    );
  }
}

export default Viajes;
