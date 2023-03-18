import React from 'react';
import './cambio_section.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

class Cambio extends React.Component {
  componentDidMount() {
    AOS.init({
      duration: 1200,
      easing: 'ease-in-sine',
    });
    AOS.refresh();
  }

  render() {
    return (
      <section className="cambio" id="cambio">
        <h2 data-aos="fade-right" className="heading">Ya tienes seguro? Te ayudamos a cambiarte!</h2>
        <p data-aos="fade-left">En Asegbrok trabajamos como un equipo comprometido con la colaboración, la integridad y el enfoque centrado en el cliente para ofrecer soluciones excepcionales.</p>
        <div className="cambio-container">
          <div data-aos="zoom-in-up"  className="cambio-box">
            <i className='bx bx-check-circle'></i>
            <p>Ingeniería de riesgos ofreciendo inspecciones y recomendaciones</p>
          </div>
          <div data-aos="zoom-in-up" className="cambio-box">
            <i className='bx bx-check-circle'></i>
            <p>Soluciones de aprendizaje y formación a medida</p>
          </div>
          <div data-aos="zoom-in-up" className="cambio-box">
            <i className='bx bx-check-circle'></i>
            <p>Soluciones de seguros alternativas y herramientas patentadas a medida</p>
          </div>
          <div data-aos="zoom-in-up" className="cambio-box">
            <i className='bx bx-check-circle'></i>
            <p>Uniformidad en las  clausulas,  cumplimiento de regulaciones ,  aseguradoras con presencia  internacional</p>
          </div>
          <div data-aos="zoom-in-up" className="cambio-box">
            <i className='bx bx-check-circle'></i>
            <p>Ventajas en la cadena de corretaje generando economías de escala para el cliente y evitando duplicidad de pólizas</p>
          </div>

        </div>
      </section>
    );
  }
}

export default Cambio;
