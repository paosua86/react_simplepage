import React from "react";
import "./corporativo.css";
import AOS from "aos";
import "aos/dist/aos.css";

class Corporativo extends React.Component {
  componentDidMount() {
    AOS.init({
      duration: 600,
      easing: "ease-in-sine",
    });
    AOS.refresh();
  }

  render() {
    return (
      <section className="corporativo" id="corporativo">
        <img data-aos="fade-right" data-aos-once="true" className="ind-img-estatico" src="images/industry.svg" alt="" />
        <h2 data-aos="fade-up" className="heading">
          SEGUROS CORPORATIVOS
        </h2>
        <p class="description-corporativo" data-aos="fade-left">
          Tu compañía y tu personal siempre protegidos:
        </p>
        <a href="#SegurosPatrimonialesyTécnicos" ><p class="description-corporativo">Seguros Patrimoniales y Técnicos</p></a>
        <a href="#segurosdeVidayAsistenciaMédicaCorporativa" ><p class="description-corporativo">Seguros de Vida y Asistencia Médica Corporativa</p></a>
        <div className="corporativo-container-nosotros">
          <h3 className="heading" id="SegurosPatrimonialesyTécnicos">Seguros Patrimoniales y Técnicos</h3>
          <div className="corporativo-patriytec">
            <div className="corporativo-box">
              <i class='bx bxs-hot'></i>
              <p>Incendio</p>
            </div>
            <div className="corporativo-box">
              <i class='bx bx-check-shield'></i>
              <p>Robo y Asalto</p>
            </div>
            <div className="corporativo-box">
              <i class='bx bx-no-entry'></i>
              <p>Lucro Cesante</p>
            </div>
            <div className="corporativo-box">
              <i class='bx bx-badge-check'></i>
              <p>Fidelidad</p>
            </div>
            <div className="corporativo-box">
              <i class='bx bxs-bank'></i>
              <p>Dinero y Valores</p>
            </div>
            <div className="corporativo-box">
              <i class='bx bx-file'></i>
              <p>Responsabilidad Civil</p>
            </div>
            <div className="corporativo-box">
              <i class='bx bxs-car-garage'></i>
              <p>Transporte y Logística</p>
            </div>
            <div className="corporativo-box">
              <i class='bx bx-laptop'></i>
              <p>Equipo Electrónico</p>
            </div>
            <div className="corporativo-box">
              <i class='bx bxs-business'></i>
              <p>Rotura de Maquinaria</p>
            </div>
            <div className="corporativo-box">
              <i class='bx bx-building-house'></i>
              <p>Equipo y Maquinaria</p>
            </div>
            <div className="corporativo-box">
              <i class='bx bx-building'></i>
              <p>Todo Riesgo Construcción</p>
            </div>
            <div className="corporativo-box">
              <i class='bx bx-file-blank'></i>
              <p>Todo Riesgo Montaje</p>
            </div>
            <div className="corporativo-box">
              <i class='bx bx-check'></i>
              <p>Todo Riesgo Petróleo</p>
            </div>
            <div className="corporativo-box">
              <i class='bx bxs-plane-take-off'></i>
              <p>Casco Aéreo</p>
            </div>
            <div className="corporativo-box">
              <i class='bx bxs-ship'></i>
              <p>Casco Marítimo</p>
            </div>
          </div>
          <h3 className="heading" id="segurosdeVidayAsistenciaMédicaCorporativa">Seguros de Vida y Asistencia Médica Corporativa</h3>
          <p class="description-corporativo" data-aos="fade-left">Tranquilidad para el personal de tu empresa con la mejor cobertura de salud y vida</p>
          <div className="corporativo-fianzas">
            <div className="corporativo-box">
              <i className='bx bx-hotel'></i>
              <p>Vida</p>
            </div>
            <div className="corporativo-box">
              <i class='bx bx-donate-heart'></i>
              <p>Asistencia Médica</p>
            </div>
            <div className="corporativo-box">
              <i class='bx bx-happy-beaming'></i>
              <p>Seguro Dental</p>
            </div>
            <div className="corporativo-box">
              <i class='bx bx-book-bookmark'></i>
              <p>Seguro Estudiantil</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Corporativo;
