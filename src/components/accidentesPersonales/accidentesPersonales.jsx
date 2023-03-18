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
        El seguro de accidentes se refiere a un tipo de cobertura cuya característica común es brindar un beneficio o compensación monetaria a la ocurrencia de un accidente cubierto en la póliza, entendiéndose como accidente a una lesión ocasionada por un agente externo de manera fortuita, imprevista.
        </p>
        <div className="accidentesPersonales-container">
        <div className="accidentesPersonales-box">
            <i className="bx bx-check-circle"></i>
            <p>Lorem ipsum dolor sit amet, consectetur adipisci elit</p>
          </div>
          <div className="accidentesPersonales-box">
            <i className="bx bx-check-circle"></i>
            <p>Lorem ipsum dolor sit amet, consectetur adipisci elit</p>
          </div>
          <div className="accidentesPersonales-box">
            <i className="bx bx-check-circle"></i>
            <p>Lorem ipsum dolor sit amet, consectetur adipisci elit</p>
          </div>
          <div className="accidentesPersonales-box">
            <i className="bx bx-check-circle"></i>
            <p>Lorem ipsum dolor sit amet, consectetur adipisci elit</p>
          </div>
          </div>
        <div className="accidentesPersonales-container-nosotros">
          <div className="accidentesPersonales-box">
            <i className="bx bx-check-circle"></i>
            <p>Lorem ipsum dolor sit amet, consectetur adipisci elit</p>
          </div>
          <div className="accidentesPersonales-box">
            <i className="bx bx-check-circle"></i>
            <p>Lorem ipsum dolor sit amet, consectetur adipisci elit</p>
          </div>
          <div className="accidentesPersonales-box">
            <i className="bx bx-check-circle"></i>
            <p>Lorem ipsum dolor sit amet, consectetur adipisci elit</p>
          </div>
          <div className="accidentesPersonales-box">
            <i className="bx bx-check-circle"></i>
            <p>Lorem ipsum dolor sit amet, consectetur adipisci elit</p>
          </div>
        </div>


      </section>
    );
  }
}

export default AccidentesPersonales;
