import React from "react";
import "./services_section.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

class Services extends React.Component {
  componentDidMount() {
    AOS.init({
      duration: 1200,
      easing: 'ease-in-sine',
    });
    AOS.refresh();
  }

  render() {
    return (
      <section className="services" id="services">
        <h2 data-aos="fade-right" className="heading">Variedad de seguros para cada necesidad</h2>
        <div className="services-container">
          <div data-aos="zoom-in-up"  className="services-box">
            <i className="bx bx-user"></i>
            <h3>Individuales</h3>
            <p>Viajes, vida y gastos médicos mayores</p>
            <a href="/individuales" className="btn-services">Conoce más</a>
          </div>
          <div data-aos="zoom-in-up" data-aos-delay="300" className="services-box">
            <i className="bx bx-check-shield"></i>
            <h3>Pymes</h3>
            <p>Cubre el patrimonio de empresas pequeñas y medianas.</p>
            <a href="/pymes" className="btn-services">Conoce más</a>
          </div>
          <div data-aos="zoom-in-up" data-aos-delay="600" className="services-box">
            <i className="bx bx-id-card"></i>
            <h3>Corporativos</h3>
            <p>Tu compañía y tu personal siempre protegidos</p>
            <a href="/corporativo" className="btn-services">Conoce más</a>
          </div>
          <div data-aos="zoom-in-down" data-aos-delay="600" className="services-container-spec">
            <div className="services-box-spec">
              <i className="bx bx-car"></i>
              <h3>Vehículos</h3>
              <p>Viajes, vida y gastos médicos mayores</p>
              <a className="service_layer" href="/vehiculo">Conoce más</a>
            </div>
            <div className="services-box-spec">
              <i className="bx bx-plus-medical"></i>
              <h3>Atención Médica</h3>
              <p>Diseñado para cubrir el patrimonio</p>
              <a className="service_layer" href="/atencionmedica">Conoce más</a>
            </div>
            <div className="services-box-spec">
              <i className="bx bx-body"></i>
              <h3>Accidentes Personales</h3>
              <p>Tu compañía y tu personal siempre protegidos</p>
              <a className="service_layer" href="/accidentespersonales">Conoce más</a>
            </div>
            <div className="services-box-spec">
              <i className="bx bx-briefcase-alt"></i>
              <h3>Viajes</h3>
              <p>Tu compañía y tu personal siempre protegidos</p>
              <a className="service_layer" href="/viajes">Conoce más</a>
            </div>
            <div className="services-box-spec">
              <i className="bx bx-home-smile"></i>
              <h3>Hogar</h3>
              <p>Tu compañía y tu personal siempre protegidos</p>
              <a className="service_layer" href="/hogar">Conoce más</a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Services;
