import React from "react";
import "./nav.css";

class Nav extends React.Component {
  render() {
    return (
      <header className="header">
        <i className="bx bx-menu" id="menu-icon"></i>
        <nav className="navbar">
          <a href="#home">Home</a>
          <a href="#services">Servicios</a>
          <a href="#conocenos">Conócenos</a>
          <a href="#contact">Reporta tu siniestro</a>
          <a href="#howden">Howden</a>
        </nav>
        <img
          className="logo"
          src="images/logo-asegbrok.png"
          alt="Logo Asegbrok"
        />
      </header>
    );
  }
}

export default Nav;
