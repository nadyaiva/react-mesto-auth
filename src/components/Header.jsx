import React from "react";
import logoMesto from "../images/logo.svg";

function Header({isLoggedIn, email}) {
  const emailClassName = `header__userEmail ${isLoggedIn ? 'header__userEmail_visible' : ''}`
  const loginText = isLoggedIn ? 'Выйти' : 'Регистрация'
  return (
    <header className="header">
      <img className="header__logo" src={logoMesto} alt="Логотип Mesto" />
      <div className="header__login-info">
        <p className={emailClassName}>{email}</p>
      <a className="header__link header__link_" href="#">`${isLoggedIn} ? Выйти : Регистрация`</a>
      </div>
      
    </header>
  );
}

export default Header;
