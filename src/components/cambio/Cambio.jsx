import React from 'react';
import './cambio_section.css';

class Cambio extends React.Component {
  render() {
    return (
      <section className="cambio" id="cambio">
        <h2 className="heading">Ya tienes seguro? Te ayudamos a cambiarte!</h2>
        <p>La cultura es un componente crítico de lo que hace que Asegbrok sea único. Trabajamos como un equipo comprometido con la colaboración, la integridad y el enfoque centrado en el cliente para ofrecer soluciones excepcionales.</p>
        <div className="cambio-container">
          <div className="cambio-box">
            <i className='bx bx-check-circle'></i>
            <p>Asesoramiento y soporte técnico en el día a día</p>
          </div>
          <div className="cambio-box">
            <i className='bx bx-check-circle'></i>
            <p>Gestión de riesgos y revisión de pólizas</p>
          </div>
          <div className="cambio-box">
            <i className='bx bx-check-circle'></i>
            <p>Gestión de reclamos y asistencia en incidentes importantes</p>
          </div>
          <div className="cambio-box">
            <i className='bx bx-check-circle'></i>
            <p>Soluciones innovadoras con las mejores coberturas y tasas</p>
          </div>
        </div>
      </section>
    );
  }
}

export default Cambio;
