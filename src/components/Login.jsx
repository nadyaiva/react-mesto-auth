import React from "react";

function Login() {

    return(
        <div className='login__container'>
      <form
        className={`form_login`}
        name={`login`}
        // onSubmit={pass}
      >
        <h2 className="login__heading">Вход</h2>

        <fieldset className="login__input-container">
        <label className="login__label login__label_email">
        <input
          className="input_place_login login__input_type_pic-link"
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
          className="input_place_login password__input password__input_type_pic-link"
          placeholder="Пароль"
          defaultValue=""
          type="email"
          name="password"
          id="password"
          required
        //   ref={avatarRef}
        />
      </label>
          <button
            className="login__save-button login__save-button_place_edit-profile"
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

