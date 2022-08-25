import React from "react";
import logoMesto from "../images/logo.svg";
import Sign from "./Sign";
import {Switch, Link, Route, useHistory } from "react-router-dom";

function Header({ isLoggedIn, email }) {
  const emailClassName = `header__username ${
    isLoggedIn ? "header__username_visible" : ""
  }`;
  const loginText = isLoggedIn ? "Выйти" : "Регистрация";
  const loginClassName = `header__button ${
    isLoggedIn ? "header__button_notfocus" : ""
  }`;

  const history = useHistory();

  function loggedOut() {
    localStorage.removeItem("token");
    history.push("/login");
  }

  return (
    <header className="header">
      <img className="header__logo" src={logoMesto} alt="Логотип Mesto" />
      
        <Switch>
        <Route path="/sign-up">
              <Link className="header__link" to="/login">Войти</Link>
            </Route>
            <Route path="/login">
              <Link className="header__link" to="/sign-up">Регистрация</Link>
            </Route>
            </Switch>

            <Switch>
            <Route exact path="/">
              <Sign email={email} onLogedOut={loggedOut} />
            </Route>
          </Switch>
    </header>
  );
}

export default Header;
