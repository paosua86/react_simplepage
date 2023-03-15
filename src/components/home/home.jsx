import React from 'react';
import './home_animation.css';

class Home extends React.Component {
  render() {
    return (
      <section className="home" id="home">
        <div className="home-content">
          <h1>CUIDADO LO QUE AMAS<br/>HOY, MAÑANA Y SIEMPRE</h1>
          <p>Productos Innovadores. Presencia Regional. Operación Local</p>
          <a href="#contact" className="btn_initial">Cotiza tu seguro</a>
        </div>
        <img className="bike-img" src="images/bike.svg" alt="" />
        <img className="car-img" src="images/car.svg" alt="" />
        <img className="fam-img" src="images/family.svg" alt="" />
        <img className="house-img" src="images/house.svg" alt="" />
        <img className="ind-img" src="images/industry.svg" alt="" />
        <img className="inha-img" src="images/inheritance.svg" alt="" />
        <img className="travel-img" src="images/travel.svg" alt="" />
      </section>
    );
  }
}

export default Home;

