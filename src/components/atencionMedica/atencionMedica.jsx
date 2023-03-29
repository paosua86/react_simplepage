import React from "react";
import "./atencionMedica.css";
import AOS from "aos";
import "aos/dist/aos.css";

class AtencionMedica extends React.Component {
  componentDidMount() {
    AOS.init({
      duration: 600,
      easing: "ease-in-sine",
    });
    AOS.refresh();
  }

  render() {
    return (
      <section className="atencionMedica" id="atencionMedica">
        <img data-aos="fade-right" className="fam-img-estatico" src="images/family.svg" alt="" />
        <h2 data-aos="fade-up" className="heading_h2">ASISTENCIA MÉDICA
        </h2>
        <p class="description-service" data-aos="fade-left">
          Cuidar de tu salud y la de tu familia con coberturas completas, respaldadas por las mejores redes de atenciones ambulatorias u hospitalarias a nivel nacional e internacional.
        </p>

        <h3 className="heading" id="segurodevida">POR QUÉ UN SEGURO DE VIDA?</h3>
        <p class="description-service" data-aos="fade-left">
          Persona prevenida, vale por dos
        </p>
        <div className="atencionMedica-container">
          <div className="atencionMedica-box">
            <i className="bx bx-check-circle"></i>
            <p>Sostiene el estilo de vida de tu familia</p>
          </div>
          <div className="atencionMedica-box">
            <i className="bx bx-check-circle"></i>
            <p>Te ayuda a pagar deudas</p>
          </div>
          <div className="atencionMedica-box">
            <i className="bx bx-check-circle"></i>
            <p>Sostiene el pago de estudios de tus hijos</p>
          </div>
          <div className="atencionMedica-box">
            <i className="bx bx-check-circle"></i>
            <p>Sostiene el pago de hipoteca de tu casa</p>
          </div>
        </div>
        <h4 id="segurodevida" className="heading">BENEFICIOS Y COBERTURAS</h4>
        <div className="atencionMedica-container">
          <div className="atencionMedica-box">
            <i className="bx bx-check-circle"></i>
            <p>Cobertura para enfermedades y accidentes</p>
          </div>
          <div className="atencionMedica-box">
            <i className="bx bx-check-circle"></i>
            <p>Cobertura para preexistencias</p>
          </div>
          <div className="atencionMedica-box">
            <i className="bx bx-check-circle"></i>
            <p>Cobertura para maternidad</p>
          </div>
          <div className="atencionMedica-box">
            <i className="bx bx-check-circle"></i>
            <p>Sin límites de edad</p>
          </div>
          <div className="atencionMedica-box">
            <i className="bx bx-check-circle"></i>
            <p>Agilidad en reembolsos</p>
          </div>
          <div className="atencionMedica-box">
            <i className="bx bx-check-circle"></i>
            <p>Diferentes formas de pago</p>
          </div>
        </div>
        <h4 id="segurodevida" className="heading">SERVICIOS COMPLEMENTARIOS</h4>
        <div className="atencionMedica-container">
          <div className="atencionMedica-box">
            <i className="bx bx-check-circle"></i>
            <p>Centros médicos ambulatorios sin aplicación de deducible o copago</p>
          </div>
          <div className="atencionMedica-box">
            <i className="bx bx-check-circle"></i>
            <p>Médico a domicilio</p>
          </div>
          <div className="atencionMedica-box">
            <i className="bx bx-check-circle"></i>
            <p>Farmacia a domicilio</p>
          </div>
          <div className="atencionMedica-box">
            <i className="bx bx-check-circle"></i>
            <p>Video-consultas</p>
          </div>
          <div className="atencionMedica-box">
            <i className="bx bx-check-circle"></i>
            <p>Asistencia en viaje</p>
          </div>
          <div className="atencionMedica-box">
            <i className="bx bx-check-circle"></i>
            <p>Servicio de ambulancia</p>
          </div>
        </div>
        <h3 className="heading" id="gastosmedicosmayores">GASTOS MÉDICOS MAYORES</h3>
        <p class="description-service" data-aos="fade-left">
          Si lo entiendes, definitivamente te da tranquilidad
        </p>
        <div className="atencionMedica-container-nosotros">
          <div className="atencionMedica-box">
            <h4>Qué es el seguro de Gastos Médicos Mayores?</h4>
            <p>Como su nombre lo indica, es un seguro que está diseñado para
              enfrentar enfermedades o accidentes graves que requieren un
              gasto muy alto por parte del paciente para poder curarse y que
              por lo general una póliza de salud estándar no alcanza porque
              tiene límites máximos de cobertura y no son suficientes.</p>
          </div>
          <div className="atencionMedica-box">
            <h4>Cómo funciona el seguro de Gastos Médicos Mayores?</h4>
            <p>Esta póliza no te servirá para cubrir enfermedades leves como una gripe por
              ejemplo. Se activa cuando por desgracia te ocurre una enfermedad fuerte o
              un accidente grave que requiera el desembolso de cuantiosas sumas para
              hacerlas frente. Ahí entra este maravilloso seguro que te cubre hasta USD
              500 mil dólares por incapacidad.</p>
          </div>
          <div className="atencionMedica-box">
            <h4>Necesito el seguro de Gastos Médicos Mayores?</h4>
            <p>Si eres de esas personas precavidas que están
              conscientes de que algún momento tu o tu
              familia pudieran enfrentar una situación grave,
              pero a la vez no quisieras perder todo tu
              patrimonio para cubrir esos gastos, entonces
              sí definitivamente necesitas este seguro.</p>
          </div>

        </div>
      </section>
    );
  }
}

export default AtencionMedica;
