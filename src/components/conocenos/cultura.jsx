import React from 'react';
import './conocenos_section.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

class Cultura extends React.Component {
  componentDidMount() {
    AOS.init({
      duration: 1200,
      easing: 'ease-in-sine',
    });
    AOS.refresh();
  }

  render() {
    return (
      <section className="cultura">
        <h2 data-aos="fade-right" class="heading">Nuestra Cultura</h2>
        <p data-aos="fade-left">La cultura es un componente crítico de lo que hace que Asegbrok sea único. Trabajamos como un equipo comprometido con la colaboración, la integridad y el enfoque centrado en el cliente para ofrecer soluciones excepcionales.</p>
        <div class="cultura-container">
          <div class="cultura-box">
            <i class='bx bx-time'></i>
            <h3>Gestión</h3>
            <p>Asesoramiento y soporte técnico en el día a día</p>
          </div>
          <div class="cultura-box">
            <i class='bx bx-briefcase-alt-2'></i>
            <h3>Trabajo</h3>
            <p>Gestión de riesgos y revisión de pólizas</p>
          </div>
          <div class="cultura-box">
            <i class='bx bx-happy'></i>
            <h3>Soporte</h3>
            <p>Gestión de reclamos y asistencia en incidentes importantes</p>
          </div>
          <div class="cultura-box">
            <i class='bx bx-phone-call'></i>
            <h3>Entrega</h3>
            <p>Soluciones innovadoras con las mejores coberturas y tasas</p>
          </div>
        </div>
      </section>
    );
  }
}

export default Cultura;
