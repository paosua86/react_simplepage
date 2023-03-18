import React from 'react';
import './individual.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

class Individual extends React.Component {
  componentDidMount() {
    AOS.init({
      duration: 1200,
      easing: 'ease-in-sine',
    });
    AOS.refresh();
  }

  render() {
    return (
      <section className="individual" id="individual">
        <h2 data-aos="fade-right" className="heading">SEGUROS INDIVIDUALES</h2>
        <p class="description-service" data-aos="fade-left">No podemos garantizar tu vida ... pero SÍ la tranquilidad económica de quienes amas</p>
        <div className="individual-container">
          <div  className="individual-box">
            <i className='bx bx-check-circle'></i>
            <p>Seguros de Vida de hasta de USD 1.000.000</p>
          </div>
          <div className="individual-box">
            <i className='bx bx-check-circle'></i>
            <p>Productos de Vida Pura o Vida más Ahorro.a</p>
          </div>
          <div className="individual-box">
            <i className='bx bx-check-circle'></i>
            <p>Planes de Jubilación.</p>
          </div>
          <div  className="individual-box">
            <i className='bx bx-check-circle'></i>
            <p>Seguros de Asistencia Médica</p>
          </div>
          <div  className="individual-box">
            <i className='bx bx-check-circle'></i>
            <p>Accidentes Personales</p>
          </div>
          <div  className="individual-box">
            <i className='bx bx-check-circle'></i>
            <p>Cobertura de mascotas</p>
          </div>
          <div  className="individual-box">
            <i className='bx bx-check-circle'></i>
            <p>Seguro de viaje</p>
          </div>

          <div class="opcionesindividual">
          <div class="atencionMedica-box">
            <i className="bx bx-check-circle"></i>
            <a href="/atencionmedica"><p>Seguro de vida</p></a>
          </div>
          <div class="atencionMedica-box">
            <i className="bx bx-check-circle"></i>
            <a href="/atencionmedica/"><p>Gastos Médicos Mayores</p></a>
          </div>
          <div class="atencionMedica-box">
            <i className="bx bx-check-circle"></i>
            <a href="/viajes"><p>Seguro de viajes</p></a>
          </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Individual;
