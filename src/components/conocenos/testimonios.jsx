import React from 'react';
import './conocenos_section.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

class Testimonios extends React.Component {
  componentDidMount() {
    AOS.init({
      duration: 1200,
      easing: 'ease-in-sine',
    });
    AOS.refresh();
  }

  render() {
    return (
      <section className="testimonios" id="testimonios">
        <h2 data-aos="fade-left" className="heading">Nuestros clientes nos avalan</h2>
        <div className="tweet-carousel">
          <div class="tweeter-middle">
          <div className="tweet-card">
            <div className="tweet-header">
              <div>
                <p className="tweet-username">Roberto Barriga</p>
                <p className="tweet-handle">Vehículos</p>
                <a href="https://www.facebook.com/roberto.barriga.520?mibextid=ZbWKwL">
                  <i class="bx bxl-facebook-circle"></i>
                </a>
              </div>
            </div>
            <div className="tweet-body">
              <p>
              Soy cliente de Asegbrok varios años, estoy muy contento con el servicio y la asesoría brindada durante todo este tiempo. Muy recomendado.
              </p>
            </div>
            <div className="tweet-footer">
            </div>
          </div>
          <div className="tweet-card">
            <div className="tweet-header">
              <div>
                <p className="tweet-username">David Suarez</p>
                <p className="tweet-handle">Vehículos</p>
                <a href="https://www.facebook.com/profile.php?id=100013553477889">
                  <i class="bx bxl-facebook-circle"></i>
                </a>
              </div>
            </div>
            <div className="tweet-body">
              <p>
              Me cumple manifestar y agradecer a Asegbrok que es una empresa que cumple al 100 X 100 lo acordado soy un usuario altamente satisfecho e invitaría a todos mis amigos, allegados y más a ser parte de esta prestigiosa empresa.
              </p>
            </div>
            <div className="tweet-footer">
            </div>
          </div>
          <div className="tweet-card">
            <div className="tweet-header">
              <div>
                <p className="tweet-username">Daniela Suarez Bonilla</p>
                <p className="tweet-handle">Asistencia Medica</p>
                <a href="https://www.facebook.com/dany.suarez.31149">
                  <i class="bx bxl-facebook-circle"></i>
                </a>
              </div>
            </div>
            <div className="tweet-body">
              <p>
              A todos los que estén buscando asesoría en la contratación de un seguro de asistencia médica, Asegbrok brinda un servicio muy agradable los recomiendo.
              </p>
            </div>
            <div className="tweet-footer">
            </div>
          </div>

          <div className="tweet-card">
            <div className="tweet-header">
              <div>
                <p className="tweet-username">ZRestaurants</p>
                <p className="tweet-handle">Ramos Generales</p>
                <a href="https://www.facebook.com/zrestaurantes">
                  <i class="bx bxl-facebook-circle"></i>
                </a>
              </div>
            </div>
            <div className="tweet-body">
              <p>
              Asegbrok es nuestro Asesor de Seguros ya varios años; el servicio y la asesoría brindada es excelente.
              </p>
            </div>
            <div className="tweet-footer">
            </div>
          </div>
          <div className="tweet-card">
            <div className="tweet-header">
              <div>
                <p className="tweet-username">Lourdes Jarrin</p>
                <p className="tweet-handle">Casa Habitacion</p>
                <a href="https://www.facebook.com/lourdes.jarrin.3?mibextid=ZbWKwL">
                  <i class="bx bxl-facebook-circle"></i>
                </a>
              </div>
            </div>
            <div className="tweet-body">
              <p>
              Mis seguros los dejo en manos de  Asegbrok; estoy muy contenta con el asesoramiento brindado.
              </p>
            </div>
          </div>
          <div className="tweet-card">
            <div className="tweet-header">
              <div>
                <p className="tweet-username">Los Choris - Mauricio Delgado</p>
                <p className="tweet-handle">Ramos Generales</p>
                <a href="https://www.facebook.com/loschorisec/">
                  <i class="bx bxl-facebook-circle"></i>
                </a>
              </div>
            </div>
            <div className="tweet-body">
              <p>
              Trabajamos con Asegbrok ya varios años, el servicio y asesoría brindada es ágil y oportuna.
              </p>
            </div>
          </div>
          {/* se repite */}
          <div className="tweet-card">
            <div className="tweet-header">
              <div>
                <p className="tweet-username">Roberto Barriga</p>
                <p className="tweet-handle">Vehículos</p>
                <a href="https://www.facebook.com/roberto.barriga.520?mibextid=ZbWKwL">
                  <i class="bx bxl-facebook-circle"></i>
                </a>
              </div>
            </div>
            <div className="tweet-body">
              <p>
              Soy cliente de Asegbrok varios años, estoy muy contento con el servicio y la asesoría brindada durante todo este tiempo. Muy recomendado.
              </p>
            </div>
            <div className="tweet-footer">
            </div>
          </div>
          <div className="tweet-card">
            <div className="tweet-header">
              <div>
                <p className="tweet-username">David Suarez</p>
                <p className="tweet-handle">Vehículos</p>
                <a href="https://www.facebook.com/profile.php?id=100013553477889">
                  <i class="bx bxl-facebook-circle"></i>
                </a>
              </div>
            </div>
            <div className="tweet-body">
              <p>
              Me cumple manifestar y agradecer a Asegbrok que es una empresa que cumple al 100 X 100 lo acordado soy un usuario altamente satisfecho e invitaría a todos mis amigos, allegados y más a ser parte de esta prestigiosa empresa.
              </p>
            </div>
            <div className="tweet-footer">
            </div>
          </div>
          <div className="tweet-card">
            <div className="tweet-header">
              <div>
                <p className="tweet-username">Daniela Suarez Bonilla</p>
                <p className="tweet-handle">Asistencia Medica</p>
                <a href="https://www.facebook.com/dany.suarez.31149">
                  <i class="bx bxl-facebook-circle"></i>
                </a>
              </div>
            </div>
            <div className="tweet-body">
              <p>
              A todos los que estén buscando asesoría en la contratación de un seguro de asistencia médica, Asegbrok brinda un servicio muy agradable los recomiendo.
              </p>
            </div>
            <div className="tweet-footer">
            </div>
          </div>

          <div className="tweet-card">
            <div className="tweet-header">
              <div>
                <p className="tweet-username">ZRestaurants</p>
                <p className="tweet-handle">Ramos Generales</p>
                <a href="https://www.facebook.com/zrestaurantes">
                  <i class="bx bxl-facebook-circle"></i>
                </a>
              </div>
            </div>
            <div className="tweet-body">
              <p>
              Asegbrok es nuestro Asesor de Seguros ya varios años; el servicio y la asesoría brindada es excelente.
              </p>
            </div>
            <div className="tweet-footer">
            </div>
          </div>
          <div className="tweet-card">
            <div className="tweet-header">
              <div>
                <p className="tweet-username">Lourdes Jarrin</p>
                <p className="tweet-handle">Casa Habitacion</p>
                <a href="https://www.facebook.com/lourdes.jarrin.3?mibextid=ZbWKwL">
                  <i class="bx bxl-facebook-circle"></i>
                </a>
              </div>
            </div>
            <div className="tweet-body">
              <p>
              Mis seguros los dejo en manos de  Asegbrok; estoy muy contenta con el asesoramiento brindado.
              </p>
            </div>
          </div>
          <div className="tweet-card">
            <div className="tweet-header">
              <div>
                <p className="tweet-username">Los Choris - Mauricio Delgado</p>
                <p className="tweet-handle">Ramos Generales</p>
                <a href="https://www.facebook.com/loschorisec/">
                  <i class="bx bxl-facebook-circle"></i>
                </a>
              </div>
            </div>
            <div className="tweet-body">
              <p>
              Trabajamos con Asegbrok ya varios años, el servicio y asesoría brindada es ágil y oportuna.
              </p>
            </div>
          </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Testimonios;
