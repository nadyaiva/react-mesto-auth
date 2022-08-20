import React from "react";
import { useState, useEffect } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
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
        <h2 className="auth-content__heading">Вход</h2>

        <fieldset className="auth-content__input-container">
          <label className="auth-content__label">
            <input
              className="auth-content__input"
              placeholder="Email"
              defaultValue=""
              type="email"
              name="email"
              value={email || ""}
              id="auth-content-email"
              required
              onChange={handleChangeEmail}
              //   ref={avatarRef}
            />
          </label>
          <label className="auth-content__label">
            <input
              className="auth-content__input"
              placeholder="Пароль"
              defaultValue=""
              value={password || ""}
              type="password"
              name="password"
              id="auth-content-password"
              required
              onChange={handleChangePassword}
              //   ref={avatarRef}
            />
          </label>
          <button className="auth-content__save-button" type="submit">
            Войти
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default Login;
