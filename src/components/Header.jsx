import React from "react";
import logoMesto from "../images/logo.svg";
import { Link, useHistory } from "react-router-dom";

function Header({ isLoggedIn, email }) {
  const emailClassName = `header__username ${
    isLoggedIn ? "header__username_visible" : ""
  }`;
  const loginText = isLoggedIn ? "Выйти" : "Регистрация";
  const loginClassName = `header__button ${
    isLoggedIn ? "header__button_notfocus" : ""
  }`;
  const history = useHistory();

  function signOut() {
    localStorage.removeItem("token");
    history.push("/login");
  }

  return (
    <header className="header">
      <img className="header__logo" src={logoMesto} alt="Логотип Mesto" />
      <ul className="header__list-info">
        <li className={emailClassName}>
          <p className="header__email">{email}</p>
        </li>
        <li>
          <button onClick={signOut} className={loginClassName} href="#">{loginText}</button>
        </li>
      </ul>
    </header>
  );
}

export default Header;
