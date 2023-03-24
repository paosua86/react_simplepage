import React from "react";
import "./fianzas.css";
import AOS from "aos";
import "aos/dist/aos.css";

class Fianzas extends React.Component {
  componentDidMount() {
    AOS.init({
      duration: 600,
      easing: "ease-in-sine",
    });
    AOS.refresh();
  }

  render() {
    return (
      <section className="fianzas" id="fianzas">
        <img data-aos="fade-right" data-aos-once="true" className="ind-img-estatico" src="images/industry.svg" alt="" />
        <h2 data-aos="fade-up" className="heading">
          SEGUROS DE FIANZAS
        </h2>

          <p class="description-fianzas" data-aos="fade-left">Respaldo, seguridad y confianza para la ejecución de tus contratos</p>
          <div className="fianzas-fianzas">
            <div className="fianzas-box">
              <i class='bx bx-money-withdraw'></i>
              <p>Seriedad de oferta</p>
            </div>
            <div className="fianzas-box">
              <i class='bx bx-file'></i>
              <p>Cumplimiento de Contrato</p>
            </div>
            <div className="fianzas-box">
              <i class='bx bx-wallet-alt'></i>
              <p>Buen Uso de Anticipo</p>
            </div>
            <div className="fianzas-box">
              <i class='bx bxs-ship'></i>
              <p>Garantías Aduaneras</p>
            </div>
            <div className="fianzas-box">
              <i class='bx bx-check-square'></i>
              <p>Buena Calidad de Materiales</p>
            </div>
          </div>

      </section>
    );
  }
}

export default Fianzas;
