import React from "react";
import "./footer.css";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="social-media">
          <a href="https://www.facebook.com/Asegbrok/" className="social-icon">
            <i className="bx bxl-facebook"></i>
          </a>
          <a href="https://www.linkedin.com/in/maria-jose-ubilluz-5336a13a/" className="social-icon">
            <i className="bx bxl-linkedin"></i>
          </a>
          <a href="https://www.instagram.com/Asegbrok/" className="social-icon">
            <i className="bx bxl-instagram"></i>
          </a>
        </div>
        <div className="footer-text">
          <p>Copyright; 2023 by US | All Rights Reserved</p>
        </div>
        <div className="footer-iconTop">
          <a href="#home">
            <i className="bx bx-up-arrow-circle"></i>
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;
