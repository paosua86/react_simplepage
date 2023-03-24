import React from "react";
import "./hogar.css";
import AOS from "aos";
import "aos/dist/aos.css";

class Hogar extends React.Component {
  componentDidMount() {
    AOS.init({
      duration: 600,
      easing: "ease-in-sine",
    });
    AOS.refresh();
  }

  render() {
    return (
      <section className="hogar" id="hogar">
        <img data-aos="fade-right" className="house-img-estatico" src="images/house.svg" alt="" />
        <h2 data-aos="fade-up" className="heading">
          SEGUROS PARA HOGARES
        </h2>
        <h3 className="heading">Principales beneficios:</h3>
        <div className="hogar-container-nosotros">
          <p>Un seguro de hogar es respaldo y seguridad para nuestro patrimonio, ya que está cubierto la propiedad como tal, los contenidos, los equipos electrónicos entre lo principal, contra los riesgos contratados de acuerdo a cada aseguradora.
          </p>

          <p>De un seguro de hogar no solo se beneficia el propietario y su inmueble; también ayuda a la tranquilidad de tener asistencias para el hogar y cobertura si ocurre algún daño o lesión provocada a un vecino. El seguro de hogar permite que pueda contratarlo la persona que arrienda y proteger el contenido del inmueble.
          </p>
          <p>Lo mejor del producto su costo, que se adapta al presupuesto de cada persona.
          </p>

        </div>
        <h3 className="heading">El producto de hogar se complementa e incluyen servicios de asistencias, <br></br>entre las principales:</h3>
        <div className="hogar-container">
          <div class="hogar-box">
            <i className="bx bx-check-circle"></i>
            <p>Electricidad</p>
          </div>
          <div className="hogar-box">
            <i className="bx bx-check-circle"></i>
            <p>Cerrajería</p>
          </div>
          <div className="hogar-box">
            <i className="bx bx-check-circle"></i>
            <p>Vidriería</p>
          </div>
          <div className="hogar-box">
            <i className="bx bx-check-circle"></i>
            <p>Plomería</p>
          </div>
          <div className="hogar-box">
            <i className="bx bx-check-circle"></i>
            <p>Asistencia Contenido</p>
          </div>
          <div className="hogar-box">
            <i className="bx bx-check-circle"></i>
            <p>Asistencia para mascotas</p>
          </div>
          <div className="hogar-box">
            <i className="bx bx-check-circle"></i>
            <p>Marido Sustituto que incluye: colocación de cuadros, instalación de luminarias, revisión de tomacorrientes, instalación de persianas.</p>
          </div>
        </div>

      </section>
    );
  }
}

export default Hogar;
