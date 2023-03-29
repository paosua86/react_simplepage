import React from 'react';
import './howden.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

class Howden extends React.Component {
  componentDidMount() {
    AOS.init({
      duration: 1200,
      easing: 'ease-in-sine',
    });
    AOS.refresh();
  }

  render() {
    return (
      <section className="howden" id="howden">
        <h2 data-aos="fade-right" className="heading"><a href='https://www.howdengroup.com/' >Howden</a></h2>
        <h3 data-aos="fade-left">Formamos parte de la Red Internacional Howden One</h3>
        <p class="howden_p" data-aos="fade-left">Howden es el corredor de seguros internacional más grande del mundo fuera de los Estados Unidos. Ofrece una gama de soluciones de seguros especializadas a clientes de todo el mundo.</p>
        <div className="howden-container-one">
          <div className="howden-box">
            <i className='bx bx-check-circle'></i>
            <p>Sextos en el Ranking Nacional de asesores de seguros</p>
          </div>

          <div className="howden-box">
            <i className='bx bx-check-circle'></i>
            <p>Más de 58000 asegurados</p>
          </div>
          <div className="howden-box">
            <i className='bx bx-check-circle'></i>
            <p>Ventajas en la cadena de corretaje generando economías de escala para el cliente y evitando duplicidad de pólizas</p>
          </div>
          <div className="howden-box">
            <i className='bx bx-check-circle'></i>
            <p>Más de 36000 reclamos resueltos</p>
          </div>
          <div className="howden-box">
            <i className='bx bx-check-circle'></i>
            <p>Más de 22300000 dólares pagados en indemnizaciones</p>
          </div>

        </div>


        <h3 data-aos="fade-left">Soluciones Globales</h3>
        <p data-aos="fade-left">Red de servicios a nivel mundial y convenios con las más importantes representaciones internacionales.</p>

        <div className="howden-container-two">
          <div className="howden-box">
            <img data-aos="fade-right" className="howden-img" src="images/rkh.jpg" alt="" />
            <p>RKH SPECIALTY: Corredor líder e independiente especializado en crear soluciones para una amplia gama de industrias y clases de riesgo.</p>
          </div>
          <div className="howden-box">
            <img data-aos="fade-right" className="howden-img" src="images/howden.jpg" alt="" />
            <p>HOWDEN: Provee soluciones en seguros a diversos clientes a lo largo de Europa, Asia, Iberoamérica y Medio Oriente.</p>
          </div>
          <div className="howden-box">
            <img data-aos="fade-right" className="howden-img" src="images/ICBA.png" alt="" />
            <p>ICBA: Fundado en 2000, el ICBA es el segundo grupo independiente de corredores de seguros de crédito comercial más grande del mundo.</p>
          </div>
          <div className="howden-box">
            <img data-aos="fade-right" className="howden-img" src="images/qual.jpg" alt="" />
            <p>QUAL: La mayor agencia especialista de suscripción (MGA) internacional y de mayor “Coverholder” ante Lloyds.</p>
          </div>
          <div className="howden-box">
            <img data-aos="fade-right" className="howden-img" src="images/hwi.png" alt="" />
            <p>HWI: Corredor Independiente que ofrece soluciones rápidas a los intereses de nuestros clientes.</p>
          </div>

        </div>
      </section>
    );
  }
}

export default Howden;
