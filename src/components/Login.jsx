import React from "react";
import { useState, useEffect } from "react";

function Login({ onAuthorization }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onAuthorization({ password, email });
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
              type="email"
              name="email"
              value={email || ""}
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
              value={password || ""}
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
            Войти
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default Login;
