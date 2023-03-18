import React from "react";
import "./hogar.css";
import AOS from "aos";
import "aos/dist/aos.css";

class Hogar extends React.Component {
  componentDidMount() {
    AOS.init({
      duration: 600,
      easing: "ease-in-sine",
    });
    AOS.refresh();
  }

  render() {
    return (
      <section className="hogar" id="hogar">
        <img data-aos="fade-right"className="house-img-estatico" src="images/house.svg" alt="" />
        <h2 data-aos="fade-up" className="heading">
          SEGUROS PARA HOGARES
        </h2>
        <p class="description-service" data-aos="fade-left">
        Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.
        </p>
        <div className="hogar-container">
          <div class="hogar-box">
            <i className="bx bx-check-circle"></i>
            <p>Lorem ipsum</p>
          </div>
          <div className="hogar-box">
            <i className="bx bx-check-circle"></i>
            <p>Lorem ipsum</p>
          </div>
          <div className="hogar-box">
            <i className="bx bx-check-circle"></i>
            <p>Lorem ipsum</p>
          </div>
          <div className="hogar-box">
            <i className="bx bx-check-circle"></i>
            <p>Lorem ipsum</p>
          </div>
          <div className="hogar-box">
            <i className="bx bx-check-circle"></i>
            <p>Lorem ipsum</p>
          </div>
          <div className="hogar-box">
            <i className="bx bx-check-circle"></i>
            <p>Lorem ipsum</p>
          </div>
          <div className="hogar-box">
            <i className="bx bx-check-circle"></i>
            <p>Lorem ipsum</p>
          </div>
          <div className="hogar-box">
            <i className="bx bx-check-circle"></i>
            <p>Lorem ipsum</p>
          </div>
          <div className="hogar-box">
            <i className="bx bx-check-circle"></i>
            <p>Lorem ipsum</p>
          </div>
        </div>
        <h3 className="heading">VENTAJAS Y NOVEDADES AL CONTRATAR CON NOSOTROS</h3>
        <div className="hogar-container-nosotros">
          <div className="hogar-box">
            <h4>Lorem ipsum:</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="hogar-box">
            <h4>Lorem ipsum:</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="hogar-box">
            <h4>Lorem ipsum:</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="hogar-box">
            <h4>Lorem ipsum:</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="hogar-box">
            <h4>Lorem ipsum:</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="hogar-box">
            <h4>Lorem ipsum:</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default Hogar;
