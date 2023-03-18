import React from "react";
import "./nav.css";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeLink: "home" };
  }

  handleClick = (event) => {
    const linkId = event.target.href.split("#")[1];
    this.setState({ activeLink: linkId });
  };

  render() {
    const { activeLink } = this.state;
    return (
      <header className="header">
        <i className="bx bx-menu" id="menu-icon"></i>
        <nav className="navbar">
          <a
            href="/"
            className={activeLink === "home" ? "active" : ""}
            onClick={this.handleClick}
          >
            Home
          </a>
          <a
            href="/#services"
            className={activeLink === "services" ? "active" : ""}
            onClick={this.handleClick}
          >
            Servicios
          </a>
          <a
            href="/#testimonios"
            className={activeLink === "testimonios" ? "active" : ""}
            onClick={this.handleClick}
          >
            Conócenos
          </a>
          <a
            href="#contact"
            className={activeLink === "contact" ? "active" : ""}
            onClick={this.handleClick}
          >
            Reporta tu siniestro
          </a>
          <a
            href="/howden"
            className={activeLink === "/howden" ? "active" : ""}
            onClick={this.handleClick}
          >
            Howden
          </a>
        </nav>
        <img
          data-aos="fade-right"
          className="logo"
          src="images/logo-asegbrok.png"
          alt="Logo Asegbrok"
        />
      </header>
    );
  }
}

export default Nav;
