import React from "react";
import { useState } from "react";
import { register } from "../utils/Auth";

function Register({onRegistration}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onRegistration({email, password})
    setEmail("");
    setPassword("");
  }
  return (
    <div className="auth-content auth-content__container">
      <form
        className={`auth-content__form`}
        name={`login`}
        onSubmit={handleSubmit}
      >
        <h2 className="auth-content__heading"> Регистрация</h2>

        <fieldset className="auth-content__input-container">
          <label className="auth-content__label">
            <input
              className="auth-content__input"
              placeholder="Email"
              defaultValue=""
              type="email"
              name="email"
              id="auth-content-email"
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              //   ref={avatarRef}
            />
          </label>
          <label className="auth-content__label">
            <input
              className="auth-content__input"
              placeholder="Пароль"
              defaultValue=""
              type="password"
              name="password"
              id="auth-content-password"
              required
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              //   ref={avatarRef}
            />
          </label>
          <button className="auth-content__save-button" type="submit">
            Зарегистрироваться
          </button>
          <a className="auth-content__signup-link" href="#">
            Уже зарегистрированы? Войти
          </a>
        </fieldset>
      </form>
    </div>
  );
}

export default Register;
