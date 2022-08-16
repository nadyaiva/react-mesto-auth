import React from "react";

function Login() {

    return(
        <div className='login login__container'>
      <form
        className={`login__form`}
        name={`login`}
        // onSubmit={pass}
      >
        <h2 className="login__heading">Вход</h2>

        <fieldset className="login__input-container">
        <label className="login__label login__label_email">
        <input
          className="login__input login__input_email"
          placeholder="Email"
          defaultValue=""
          type="email"
          name="email"
          id="login-email"
          required
        //   ref={avatarRef}
        />
      </label>
      <label className="login__label login__label_password">
        <input
          className="login__input login__input_password"
          placeholder="Пароль"
          defaultValue=""
          type="password"
          name="password"
          id="password"
          required
        //   ref={avatarRef}
        />
      </label>
          <button
            className="login__save-button"
            type="submit"
          >
            Войти
          </button>
        </fieldset>
      </form>
    </div>
    );
}

export default Login;

