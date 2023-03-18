import React from "react";
import "./corporativo.css";
import AOS from "aos";
import "aos/dist/aos.css";

class Corporativo extends React.Component {
  componentDidMount() {
    AOS.init({
      duration: 600,
      easing: "ease-in-sine",
    });
    AOS.refresh();
  }

  render() {
    return (
      <section className="corporativo" id="corporativo">
        <img data-aos="fade-right" data-aos-once="true" className="ind-img-estatico" src="images/industry.svg" alt="" />
        <h2 data-aos="fade-up" className="heading">
          SEGUROS CORPORATIVOS
        </h2>
        <p class="description-corporativo" data-aos="fade-left">
          Tu compañía y tu personal siempre protegidos:
        </p>
        <a href="#SegurosPatrimonialesyTécnicos" ><p class="description-corporativo">Seguros Patrimoniales y Técnicos</p></a>
        <a href="#segurosdeVidayAsistenciaMédicaCorporativa" ><p class="description-corporativo">Seguros de Vida y Asistencia Médica Corporativa</p></a>
        <a href="#Fianzas" ><p class="description-corporativo">Seguros de Fianzas</p></a>
        <a href="#Masivos" ><p class="description-corporativo">Seguros Masivos</p></a>
        <a href="#Innovadores" ><p class="description-corporativo">Seguros Innovadores</p></a>
        <div className="corporativo-container-nosotros">
          <h3 className="heading" id="SegurosPatrimonialesyTécnicos">Seguros Patrimoniales y Técnicos</h3>
          <div className="corporativo-patriytec">
            <div className="corporativo-box">
              <i class='bx bxs-hot'></i>
              <p>Incendio</p>
            </div>
            <div className="corporativo-box">
              <i class='bx bx-check-shield'></i>
              <p>Robo y Asalto</p>
            </div>
            <div className="corporativo-box">
              <i class='bx bx-no-entry'></i>
              <p>Lucro Cesante</p>
            </div>
            <div className="corporativo-box">
              <i class='bx bx-badge-check'></i>
              <p>Fidelidad</p>
            </div>
            <div className="corporativo-box">
              <i class='bx bxs-bank'></i>
              <p>Dinero y Valores</p>
            </div>
            <div className="corporativo-box">
              <i class='bx bx-file'></i>
              <p>Responsabilidad Civil</p>
            </div>
            <div className="corporativo-box">
              <i class='bx bxs-car-garage'></i>
              <p>Transporte y Logística</p>
            </div>
            <div className="corporativo-box">
              <i class='bx bx-laptop'></i>
              <p>Equipo Electrónico</p>
            </div>
            <div className="corporativo-box">
              <i class='bx bxs-business'></i>
              <p>Rotura de Maquinaria</p>
            </div>
            <div className="corporativo-box">
              <i class='bx bx-building-house'></i>
              <p>Equipo y Maquinaria</p>
            </div>
            <div className="corporativo-box">
              <i class='bx bx-building'></i>
              <p>Todo Riesgo Construcción</p>
            </div>
            <div className="corporativo-box">
              <i class='bx bx-file-blank'></i>
              <p>Todo Riesgo Montaje</p>
            </div>
            <div className="corporativo-box">
              <i class='bx bx-check'></i>
              <p>Todo Riesgo Petróleo</p>
            </div>
            <div className="corporativo-box">
              <i class='bx bxs-plane-take-off'></i>
              <p>Casco Aéreo</p>
            </div>
            <div className="corporativo-box">
              <i class='bx bxs-ship'></i>
              <p>Casco Marítimo</p>
            </div>
          </div>
          <h3 className="heading" id="segurosdeVidayAsistenciaMédicaCorporativa">Seguros de Vida y Asistencia Médica Corporativa</h3>
          <p class="description-corporativo" data-aos="fade-left">Tranquilidad para el personal de tu empresa con la mejor cobertura de salud y vida</p>
          <div className="corporativo-fianzas">
            <div className="corporativo-box">
              <i className='bx bx-hotel'></i>
              <p>Vida</p>
            </div>
            <div className="corporativo-box">
              <i class='bx bx-donate-heart'></i>
              <p>Asistencia Médica</p>
            </div>
            <div className="corporativo-box">
              <i class='bx bx-happy-beaming'></i>
              <p>Seguro Dental</p>
            </div>
            <div className="corporativo-box">
              <i class='bx bx-book-bookmark'></i>
              <p>Seguro Estudiantil</p>
            </div>
          </div>
          <h3 className="heading" id="Fianzas">Seguros de Fianzas</h3>
          <p class="description-corporativo" data-aos="fade-left">Respaldo, seguridad y confianza para la ejecución de tus contratos</p>
          <div className="corporativo-fianzas">
            <div className="corporativo-box">
              <i class='bx bx-money-withdraw'></i>
              <p>Seriedad de oferta</p>
            </div>
            <div className="corporativo-box">
              <i class='bx bx-file'></i>
              <p>Cumplimiento de Contrato</p>
            </div>
            <div className="corporativo-box">
              <i class='bx bx-wallet-alt'></i>
              <p>Buen Uso de Anticipo</p>
            </div>
            <div className="corporativo-box">
              <i class='bx bxs-ship'></i>
              <p>Garantías Aduaneras</p>
            </div>
            <div className="corporativo-box">
              <i class='bx bx-check-square'></i>
              <p>Buena Calidad de Materiales</p>
            </div>
          </div>

          <h3 className="heading" id="Masivos">Seguros Masivos</h3>
          <p class="description-corporativo" data-aos="fade-left">Programas de Fidelización para su empresa, clientes y proveedores a través de
            canales masivos</p>
          <div className="corporativo-fianzas">
            <div className="corporativo-box">
            <i class='bx bx-car'></i>
              <p>Asistencia Vehicular</p>
            </div>
            <div className="corporativo-box">
            <i class='bx bx-building-house'></i>
              <p>Asistencia Hogar</p>
            </div>
            <div className="corporativo-box">
            <i class='bx bx-money-withdraw'></i>
              <p>Diversos Productos para canal masivo</p>
            </div>
          </div>
          <h3 className="heading" id="Innovadores">Seguros Innovadores</h3>
          <p class="description-corporativo" data-aos="fade-left">Los seguros más vanguardistas al alcance de tu mano</p>
          <div className="corporativo-innov">
            <div className="corporativo-box">
              <h4>CYBER RISK</h4>
              <p>En un seguro que permite cubrir el
                área digital y tecnológica de tu
                compañía. Te protege contra hackeos,
                fraudes electrónicos, cyber extorsión,
                robo de información, secuestro de
                datos, entre otros.</p>
            </div>
            <div className="corporativo-box">
              <h4>CRIME</h4>
              <p>En un seguro que te permite
                cubrir las pérdidas
                financieras a consecuencia
                de delitos realizados por tus
                propios empleados en contra
                de tu compañía</p>
            </div>
            <div className="corporativo-box">
              <h4>DRONES</h4>
              <p>En un seguro que te permite
                cubrir los daños que pudiere
                ocasionar tu dron en un
                sinnúmero de usos
                profesionales</p>
            </div>
            <div className="corporativo-box">
              <h4>STOCK THROUGHPUT STP</h4>
              <p>Es un seguro que cubre los bienes que
                sean transportados a lo largo de toda la
                cadena de suministro desde el inicio
                del viaje, fábrica de origen, hasta la
                distribución interna en el destino final,
                evitando cualquier brecha en la
                cobertura</p>
            </div>
            <div className="corporativo-box">
              <h4>DIRECTORES Y ADMINISTRADORES D&0</h4>
              <p>Es un seguro que cubre los perjuicios
                causados a terceros como consecuencia
                de un acto negligente, imprudente, error u
                omisión realizado por los directores o
                administradores de la compañía. De igual
                forma cubre los gastos de defensa si
                hubiere una demanda por dicho error.</p>
            </div>
            <div className="corporativo-box">
              <h4>PARAMÉTRICOS</h4>
              <p>Es un seguro que cubre la
                probabilidad de que ocurra un
                evento predefinido, parámetro o
                índice, en lugar de indemnizar la
                pérdida real incurrida.</p>
            </div>
            <div className="corporativo-box">
              <h4>RESPONSABILIDAD CIVIL PROFESIONAL</h4>
              <p>Es un seguro que cubre los daños que,
                involuntariamente, por sus errores u
                omisiones, el profesional haya podido
                causar a sus clientes en el ejercicio de
                su profesión</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Corporativo;
