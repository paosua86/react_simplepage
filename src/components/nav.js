import React from "react";
import "./nav.css";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeLink: "home",
      menuActive: false
    };
  }

  handleClick = (event) => {
    const linkId = event.currentTarget.href.split("#")[1];
    this.setState({ activeLink: linkId, menuActive: false });
  };

  handleMenu = () => {
    this.setState((prevState) => ({ menuActive: !prevState.menuActive }));
  };

  render() {
    const { activeLink, menuActive } = this.state;
    return (
      <header className="header">
        <i
          className="bx bx-menu"
          id="menu-icon"
          onClick={this.handleMenu}
        ></i>
        <nav className={`navbar ${menuActive ? "active" : ""}`}>
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
            href="/howdenone"
            className={activeLink === "/howdenone" ? "active" : ""}
            onClick={this.handleClick}
          >
            Howden
          </a>
        </nav>
        <a href="/">
        <img
          data-aos="fade-right"
          className="logo"
          src="images/logo-asegbrok.png"
          alt="Logo Asegbrok"
        />
        </a>
      </header>
    );
  }
}

export default Nav;
