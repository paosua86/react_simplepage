import React from "react";
import "./vehiculos.css";
import AOS from "aos";
import "aos/dist/aos.css";

class Vehiculos extends React.Component {
  componentDidMount() {
    AOS.init({
      duration: 600,
      easing: "ease-in-sine",
    });
    AOS.refresh();
  }

  render() {
    return (
      <section className="vehiculos" id="vehiculos">
        <img data-aos="fade-right" className="car-img-estatico" src="images/car.svg" alt="" />
        <h2 data-aos="fade-up" className="heading">
          SEGUROS PARA VEHÍCULOS
        </h2>
        <p class="description-service" data-aos="fade-left">
          Todo riesgo, incluyendo, choques, volcaduras, robo total y parcial,
          daño malicioso, motín y huelga, alborotos populares,incendio y/o rayo,
          explosión, conmoción civil, vandalismo, rotura de vidrios, impacto de
          proyectiles, desplome de edificios, caída de objetos extraños, de
          aeronaves y sus partes y/o muros y/o postes y/o árboles, derrumbe de
          puentes y carreteras, deslaves, deslizamiento de tierra, eventos de la
          naturaleza.
        </p>
        <div className="vehiculos-container">
          <div class="vehiculos-box">
            <i className="bx bx-check-circle"></i>
            <p>Amparo Patrimonial</p>
          </div>
          <div className="vehiculos-box">
            <i className="bx bx-check-circle"></i>
            <p>Responsabilidad Civil hasta LUC USD 20,000.00</p>
          </div>
          <div className="vehiculos-box">
            <i className="bx bx-check-circle"></i>
            <p>Accidentes personales/ocupante hasta USD 5,000.00.</p>
          </div>
          <div className="vehiculos-box">
            <i className="bx bx-check-circle"></i>
            <p>Gastos médicos/ocupante hasta USD 3,000.00.</p>
          </div>
          <div className="vehiculos-box">
            <i className="bx bx-check-circle"></i>
            <p>Gastos de sepelio/ocupante hasta USD 200.00.</p>
          </div>
          <div className="vehiculos-box">
            <i className="bx bx-check-circle"></i>
            <p>
              Cobertura de Muerte Accidental para el titular de la póliza a
              consecuencia de un evento cubierto en la misma USD 10,000.00.
            </p>
          </div>
          <div className="vehiculos-box">
            <i className="bx bx-check-circle"></i>
            <p>
              Asistencia legal-preliminar telefónica las 24 horas del día, 365
              días al año.
            </p>
          </div>
          <div className="vehiculos-box">
            <i className="bx bx-check-circle"></i>
            <p>
              Choque, accidente, robo, responsabilidad para cubrir a terceros
            </p>
          </div>
          <div className="vehiculos-box">
            <i className="bx bx-check-circle"></i>
            <p>
              Soat Incluido: Seguro OBLIGATORIO para todos los vehículos
              públicos y privados que transiten dentro del territorio
              ecuatoriano, que ampara los daños corporales que causen a las
              personas en accidentes de tránsito; ya sean estos peatones,
              pasajeros o conductores.
            </p>
          </div>
        </div>
        <h3 className="heading">VENTAJAS Y NOVEDADES AL CONTRATAR CON NOSOTROS</h3>
        <div className="vehiculos-container-nosotros">
          <div className="vehiculos-box">
            <h4>Cobertura de mascotas:</h4>
            <p>Consulta médica a domicilio o consulta telefónica en caso de accidente de tu mascota
            </p>
          </div>
          <div className="vehiculos-box">
            <h4>Conductor elegido:</h4>
            <p>Si tienes algún evento y consumas bebidas alcohólicas puedes solicitar un conductor elegido
            </p>
          </div>
          <div className="vehiculos-box">

            <h4>Conductor reemplazo:</h4>
            <p>Si sufres alguna dolencia que te imposibilite
              continuar conduciendo recibe la asistencia de conductor reemplazo
            </p>
          </div>
          <div className="vehiculos-box">
            <h4>Asistencia exequial:</h4>
            <p>Ante accidentes automovilísticos fatales
              recibe esta asistencia para poder cubrir gastos exequiales
            </p>
          </div>
          <div className="vehiculos-box">
            <h4>Asistencia Secuestro Express:</h4>
            <p>Asistencia por robo a través de
              retiro de dinero en tarjeta de débito y crédito bajo modalidad
              secuestro express
            </p>
          </div>
          <div className="vehiculos-box">
            <h4>Auto sustituto:</h4>
            <p>Recibe un Auto sustituto para poder movilizarte
              mientras tu vehículo se encuentre en reparación</p>

          </div>
        </div>
      </section>
    );
  }
}

export default Vehiculos;
