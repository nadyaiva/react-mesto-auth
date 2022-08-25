import React from "react";
import { Link } from "react-router-dom";

function Sign({ onLogedOut, email }) {
  return (
    <div className="header__list-info">
        <p className="header__email">{email}</p>

        <Link onClick={onLogedOut} to='/login' className='header__link header__link_notfocus'>
          Выйти
        </Link>
    </div>

    // <div className="header__sign">
    //   <p className="header__email">{email}</p>
    //   <Link className="header__exit" onClick={onClose} to="/sign-in">Выйти</Link>
    // </div>
  );
}

export default Sign;
