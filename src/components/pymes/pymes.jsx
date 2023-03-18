import React from "react";
import "./pymes.css";
import AOS from "aos";
import "aos/dist/aos.css";

class Pymes extends React.Component {
  componentDidMount() {
    AOS.init({
      duration: 600,
      easing: "ease-in-sine",
    });
    AOS.refresh();
  }

  render() {
    return (
      <section className="pymes" id="pymes">
        <img data-aos="fade-right" data-aos-once="true" className="inha-img-estatico" src="images/inheritance.svg" alt="" />
        <h2 data-aos="fade-up" className="heading">
          SEGURO PARA PYMES
        </h2>
        <p class="description-pymes" data-aos="fade-left">
          Protege tu esfuerzo a un costo bajo.
        </p>
        <div className="pymes-container-nosotros">
          <div className="pymes-box">
            <h4>Qué es el seguro PYMES?</h4>
            <p>Es un seguro diseñado para cubrir el patrimonio de empresas pequeñas y
              medianas frente a los diversos riesgos a las que están expuestas. Por
              desconocimiento general los emprendedores piensan que el seguro es muy
              caro y que sólo lo pueden costear las grandes compañías. Sin embargo cometen
              un error porque hay planes hechos a la medida específicamente para Pymes y
              su costo es relativamente bajo a comparación del beneficio adquirido.</p>
          </div>
          <div className="pymes-box">
            <h4>Cómo funciona el seguro PYMES?</h4>
            <p>En caso de un siniestro, tal como un incendio, explosión, daño por agua,
              robo, rotura de maquinaria, infidelidad de algún empleado, entre otros; el
              seguro se activa pagando una indemnización al emprendedor. De tal forma
              que termina protegiendo su esfuerzo de varios años manteniendo su
              patrimonio, su operación y evitando su quiebra.</p>
          </div>
          <div className="pymes-box">
            <h4>Necesito el seguro PYMES?</h4>
            <p>En el Ecuador 9 de cada 10 emprendedores no
              aseguran su negocio. Sin embargo,
              estadísticamente el 55% de estas empresas son
              propensas a padecer algún tipo de daño en sus
              instalaciones y el 40% corre el riesgo de sufrir
              algún tipo de robo. Basado en estos números, y
              conociendo que existen planes específicos para
              Pymes a un costo bajo, entonces sí,
              probablemente necesites este seguro.</p>
          </div>
          <h3 className="heading">Qué negocios se pueden asegurar?</h3>
          <p class="description-pymes" data-aos="fade-left">Mira los giros de negocios que podrían aplicar:</p>
          <div className="pymes-negocios">
            <div className="pymes-box">
              <i className='bx bx-hotel'></i>
              <p>Hoteles pequeños y Hostales</p>
            </div>
            <div className="pymes-box">
              <i class='bx bx-brush'></i>
              <p>Ferreterías</p>
            </div>
            <div className="pymes-box">
              <i class='bx bx-drink' ></i>
              <p>Bares y Discotecas</p>
            </div>
            <div className="pymes-box">
              <i class='bx bx-laptop'></i>
              <p>Oficinas y Talleres</p>
            </div>
            <div className="pymes-box">
              <i class='bx bx-bowl-hot'></i>
              <p>Restaurantes y Cafeterías</p>
            </div>
            <div className="pymes-box">
              <i class='bx bx-clinic'></i>
              <p>Clínicas y consultorios</p>
            </div>
            <div className="pymes-box">
              <i class='bx bxs-school'></i>
              <p>Colegios</p>
            </div>
            <div className="pymes-box">
              <i class='bx bxs-business'></i>
              <p>Comercio en General</p>
            </div>
          </div>
        </div>
        <div>
          <h3 className="heading">4 Motivos a tu Favor:</h3>
          <div className="pymes-container-motivos">
            <div className="pymes-box">
              <i class='bx bx-check-double'></i>
              <p>Costos Bajos</p>
            </div>
            <div className="pymes-box">
              <i class='bx bx-check-double'></i>
              <p>No importa si eres dueño o arrendatario</p>
            </div>
            <div className="pymes-box">
              <i class='bx bx-check-double'></i>
              <p>No requieres inspección para poder asegurar</p>
            </div>
            <div className="pymes-box">
              <i class='bx bx-check-double'></i>
              <p>No tienes que enviar listados</p>
            </div>
          </div>
        </div>
        <div>
          <h3 className="heading">Beneficios de tu seguro PYMES:</h3>
          <p class="description-pymes" data-aos="fade-left">
            Cubre los principales riesgos como incendio, robo, equipo electrónico, fidelidad, rotura de maquinaria,
            responsabilidad civil, y además obtienes estos beneficios extras sin costo:
          </p>
          <div className="pymes-container-beneficios">
            <div className="pymes-box">
              <i class='bx bxs-flag-checkered'></i>
              <p>Asistencia Legal</p>
            </div>
            <div className="pymes-box">
              <i class='bx bxs-flag-checkered'></i>
              <p>Médico a domicilio para tu empresa</p>
            </div>
            <div className="pymes-box">
              <i class='bx bxs-flag-checkered'></i>
              <p>Asistencia PC para computadores</p>
            </div>
            <div className="pymes-box">
              <i class='bx bxs-flag-checkered'></i>
              <p>Asistencia Conexión con profesionales</p>
            </div>
            <div className="pymes-box">
              <i class='bx bxs-flag-checkered'></i>
              <p>Protección de vidrios, letreros y vallas</p>
            </div>
            <div className="pymes-box">
              <i class='bx bxs-flag-checkered'></i>
              <p>Asistencia para plomería, electricidad, cerrajería</p>
            </div>
          </div>

        </div>
      </section>
    );
  }
}

export default Pymes;
