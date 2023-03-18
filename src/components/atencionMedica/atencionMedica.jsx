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
        <h2 data-aos="fade-up" className="heading">
          SEGURO PARA ATENCIÓN MÉDICA Y VIDA
        </h2>
        <p class="description-service" data-aos="fade-left">
        El seguro de Asistencia Médica ofrece a sus asegurados la tranquilidad de saber que están preparados para afrontar económicamente un posible accidente o enfermedad. Ofrecemos por medio de las principales aseguradoras del mercado toda una gama de servicios médicos, hospitalarios y complementarios, integrados a excelentes soluciones para una gran variedad de problemas de salud.
        </p>
        <div className="atencionMedica-container">
          <div class="atencionMedica-box">
            <i className="bx bx-check-circle"></i>
            <a href="#segurodevida"><p>Seguro de vida</p></a>
          </div>
          <div class="atencionMedica-box">
            <i className="bx bx-check-circle"></i>
            <a href="#segurodevida"><p>Atención médica</p></a>
          </div>
          <div className="atencionMedica-box">
            <i className="bx bx-check-circle"></i>
            <a href="#gastosmedicosmayores"><p>Gastos Médicos Mayores</p></a>
          </div>
        </div>
        <h3 id="segurodevida" className="heading">POR QUÉ UN SEGURO DE VIDA?</h3>
        <p class="description-service" data-aos="fade-left">
          Persona prevenida, vale por dos
        </p>
        <div className="atencionMedica-container-nosotros">
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
        <h3 id="segurodevida" className="heading">ATENCIÓN MÉDICA</h3>
        <p class="description-service" data-aos="fade-left">
        Lorem ipsum dolor sit amet, consectetur adipisci elit,
        </p>
        <div className="atencionMedica-container-nosotros">
          <div className="atencionMedica-box">
            <i className="bx bx-check-circle"></i>
            <p>Lorem ipsum dolor sit amet, consectetur adipisci elit,</p>
          </div>
          <div className="atencionMedica-box">
            <i className="bx bx-check-circle"></i>
            <p>Lorem ipsum dolor sit amet, consectetur adipisci elit,</p>
          </div>
          <div className="atencionMedica-box">
            <i className="bx bx-check-circle"></i>
            <p>Lorem ipsum dolor sit amet, consectetur adipisci elit,</p>
          </div>
          <div className="atencionMedica-box">
            <i className="bx bx-check-circle"></i>
            <p>Lorem ipsum dolor sit amet, consectetur adipisci elit,</p>
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
