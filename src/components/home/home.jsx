import React from 'react';
import './home_animation.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

class Home extends React.Component {
  componentDidMount() {
    AOS.init({
      duration: 1200,
      easing: 'ease-in-sine',
      delay: 50,
    });
    AOS.refresh();
  }

  render() {
    return (
      <section className="home" id="home">
        <div className="home-content">
          <h1 data-aos="fade-up">CUIDANDO LO QUE AMAS<br />HOY, MAÑANA Y SIEMPRE</h1>
          <p data-aos="fade-left">Seguros Innovadores. Presencia Regional. Operación Local</p>
          <a href="#contact" className="btn_initial">Cotiza tu seguro</a>
        </div>
        <div className="view">
          <img className="bike-img" src="images/bike.svg" alt="" />
          <img className="car-img" src="images/car.svg" alt="" />
          <img className="fam-img" src="images/family.svg" alt="" />
          <img className="house-img" src="images/house.svg" alt="" />
          <img className="ind-img" src="images/industry.svg" alt="" />
          <img className="inha-img" src="images/inheritance.svg" alt="" />
          <img className="travel-img" src="images/travel.svg" alt="" />
        </div>
      </section>
    );
  }
}

export default Home;

