import React from "react";
import "./accidentesPersonales.css";
import AOS from "aos";
import "aos/dist/aos.css";

class AccidentesPersonales extends React.Component {
  componentDidMount() {
    AOS.init({
      duration: 600,
      easing: "ease-in-sine",
    });
    AOS.refresh();
  }

  render() {
    return (
      <section className="accidentesPersonales" id="accidentesPersonales">
        <img data-aos="fade-right" className="fam-img-estatico" src="images/family.svg" alt="" />
        <h2 data-aos="fade-up" className="heading">
          SEGURO PARA ACCIDENTES PERSONALES
        </h2>
        <p class="description-service" data-aos="fade-left">
          Variedad de coberturas - 24 horas los 365 días del año en cualquier parte del mundo<br></br> - Precios asequibles - Menores limitaciones por el tipo de riesgo - Complemento a coberturas de Asistencia Médica
        </p>
        <h3 data-aos="fade-up" className="heading_h3">Coberturas Principales</h3>
        <div className="accidentesPersonales-container-nosotros">
          <div className="accidentesPersonales-box">
            <i className="bx bx-check-circle"></i>
            <p>Muerte accidental</p>
          </div>
          <div className="accidentesPersonales-box">
            <i className="bx bx-check-circle"></i>
            <p>Invalidez total o permanente</p>
          </div>
          <div className="accidentesPersonales-box">
            <i className="bx bx-check-circle"></i>
            <p>Gastos médicos por accidente</p>
          </div>
          <div className="accidentesPersonales-box">
            <i className="bx bx-check-circle"></i>
            <p>Desmembración accidental</p>
          </div>
        </div>
        <h3 data-aos="fade-up" className="heading_h3">Beneficios adicionales</h3>
        <div className="accidentesPersonales-container-nosotros">
          <div className="accidentesPersonales-box">
            <i className="bx bx-check-circle"></i>
            <p>Gastos de sepelio por muerte accidental</p>
          </div>
          <div className="accidentesPersonales-box">
            <i className="bx bx-check-circle"></i>
            <p>Renta diaria por hospitalización</p>
          </div>
          <div className="accidentesPersonales-box">
            <i className="bx bx-check-circle"></i>
            <p>Ambulancia</p>
          </div>
          <div className="accidentesPersonales-box">
            <i className="bx bx-check-circle"></i>
            <p>Crédito hospitalario en caso de accidentes</p>
          </div>
          <div className="accidentesPersonales-box">
            <i className="bx bx-check-circle"></i>
            <p>Red de proveedores donde podrá acceder a descuentos y precios preferenciales</p>
          </div>
        </div>


      </section>
    );
  }
}

export default AccidentesPersonales;
