import React from "react";

function Login() {
  return (
    <div className="auth-content auth-content__container">
      <form
        className={`auth-content__form`}
        name={`login`}
        // onSubmit={pass}
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
              id="auth-content-email"
              required
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
