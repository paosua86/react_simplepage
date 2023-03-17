import React from "react";
import "./footer.css";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer-info1">
          <div>Horario :</div>
          <div>Dirección :</div>
          <div>Teléfono :</div>
          <div>Celular :</div>
          <div>Email :</div>
        </div>
        <div className="footer-info2">
          <div>8:30 - 17h30</div>
          <div>Shyris N34 - 152 y Holanda, Edificio Shyris Center, Piso 4</div>
          <div>+ 593 2 4799 917</div>
          <div>+ 593 998 049 134</div>
          <div>info@asegbrok.com.ec</div>
        </div>
        <div className="social-box">
          <div>Síguenos</div>
          <div className="social-media">
            <a href="https://www.facebook.com/Asegbrok/" target="_blank" className="social-icon">
              <i className="bx bxl-facebook"></i>
            </a>
            <a href="https://www.linkedin.com/in/maria-jose-ubilluz-5336a13a/" target="_blank" className="social-icon">
              <i className="bx bxl-linkedin"></i>
            </a>
            <a href="https://www.instagram.com/Asegbrok/" target="_blank" className="social-icon">
              <i className="bx bxl-instagram"></i>
            </a>
          </div>
          <div>Quito, Ecuador</div>

        </div>
      </footer>


    );
  }
}

export default Footer;
