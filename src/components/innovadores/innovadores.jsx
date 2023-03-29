import React from "react";
import "./innovadores.css";
import AOS from "aos";
import "aos/dist/aos.css";

class Innovadores extends React.Component {
  componentDidMount() {
    AOS.init({
      duration: 600,
      easing: "ease-in-sine",
    });
    AOS.refresh();
  }

  render() {
    return (
      <section className="innovadores" id="innovadores">
        <img data-aos="fade-right" data-aos-once="true" className="ind-img-estatico" src="images/industry.svg" alt="" />
        <h2 data-aos="fade-up" className="heading">
          SEGUROS INNOVADORES
        </h2>
        <p class="description-innovadores" data-aos="fade-left">Los seguros más vanguardistas al alcance de tu mano</p>
        <div className="innovadores-innov">
          <div className="innovadores-box">
            <h4>CYBER RISK</h4>
            <p>En un seguro que permite cubrir el
              área digital y tecnológica de tu
              compañía. Te protege contra hackeos,
              fraudes electrónicos, cyber extorsión,
              robo de información, secuestro de
              datos, entre otros.</p>
          </div>
          <div className="innovadores-box">
            <h4>CRIME</h4>
            <p>En un seguro que te permite
              cubrir las pérdidas
              financieras a consecuencia
              de delitos realizados por tus
              propios empleados en contra
              de tu compañía</p>
          </div>
          <div className="innovadores-box">
            <h4>DRONES</h4>
            <p>En un seguro que te permite
              cubrir los daños que pudiere
              ocasionar tu dron en un
              sinnúmero de usos
              profesionales</p>
          </div>
          <div className="innovadores-box">
            <h4>STOCK THROUGHPUT STP</h4>
            <p>Es un seguro que cubre los bienes que
              sean transportados a lo largo de toda la
              cadena de suministro desde el inicio
              del viaje, fábrica de origen, hasta la
              distribución interna en el destino final,
              evitando cualquier brecha en la
              cobertura</p>
          </div>
          <div className="innovadores-box">
            <h4>DIRECTORES Y ADMINISTRADORES D&0</h4>
            <p>Es un seguro que cubre los perjuicios
              causados a terceros como consecuencia
              de un acto negligente, imprudente, error u
              omisión realizado por los directores o
              administradores de la compañía. De igual
              forma cubre los gastos de defensa si
              hubiere una demanda por dicho error.</p>
          </div>
          <div className="innovadores-box">
            <h4>PARAMÉTRICOS</h4>
            <p>Es un seguro que cubre la
              probabilidad de que ocurra un
              evento predefinido, parámetro o
              índice, en lugar de indemnizar la
              pérdida real incurrida.</p>
          </div>
          <div className="innovadores-box">
            <h4>RESPONSABILIDAD CIVIL PROFESIONAL</h4>
            <p>Es un seguro que cubre los daños que,
              involuntariamente, por sus errores u
              omisiones, el profesional haya podido
              causar a sus clientes en el ejercicio de
              su profesión</p>
          </div>
        </div>
      </section >
    );
  }
}

export default Innovadores;
