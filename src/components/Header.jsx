import React from "react";
import logoMesto from "../images/logo.svg";
import Sign from "./Sign";
import { Switch, Link, Route, useHistory } from "react-router-dom";

function Header({ email }) {
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
          <Link className="header__link" to="/login">
            Войти
          </Link>
        </Route>
        <Route path="/login">
          <Link className="header__link" to="/sign-up">
            Регистрация
          </Link>
        </Route>
        <Route exact path="/">
          <Sign email={email} onLogedOut={loggedOut} />
        </Route>
      </Switch>
    </header>
  );
}

export default Header;
