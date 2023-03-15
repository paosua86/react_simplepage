import React from 'react';
import './style.css';

class Header extends React.Component {
  render() {
    return (
      <a className="whatsapp_btn" href="https://wa.me/593998536569?text=Hola%20quiero%20cotizar%20un%20seguro" target="_blank" rel="noreferrer">
        <img src="images/whatsapp_btn.svg" alt="whatsapp" />
      </a>
    );
  }
}

export default Header;

