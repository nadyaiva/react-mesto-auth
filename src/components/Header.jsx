import React from "react";
import logoMesto from "../images/logo.svg";

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logoMesto} alt="Логотип Mesto" />
      <a className="header__link" href="#">Регистрация</a>
    </header>
  );
}

export default Header;
