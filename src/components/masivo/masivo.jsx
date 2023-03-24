import React from "react";
import "./masivo.css";
import AOS from "aos";
import "aos/dist/aos.css";

class Masivo extends React.Component {
  componentDidMount() {
    AOS.init({
      duration: 600,
      easing: "ease-in-sine",
    });
    AOS.refresh();
  }

  render() {
    return (
      <section className="masivo" id="masivo">
        <img data-aos="fade-right" data-aos-once="true" className="ind-img-estatico" src="images/industry.svg" alt="" />
        <h2 data-aos="fade-up" className="heading">
          SEGUROS MASIVOS
        </h2>
          <p class="description-masivo" data-aos="fade-left">Programas de Fidelización para su empresa, clientes y proveedores a través de
            canales masivos</p>
          <div className="masivo-fianzas">
            <div className="masivo-box">
            <i class='bx bx-car'></i>
              <p>Asistencia Vehicular</p>
            </div>
            <div className="masivo-box">
            <i class='bx bx-building-house'></i>
              <p>Asistencia Hogar</p>
            </div>
            <div className="masivo-box">
            <i class='bx bx-money-withdraw'></i>
              <p>Diversos Productos para canal masivo</p>
            </div>
          </div>

      </section>
    );
  }
}

export default Masivo;
