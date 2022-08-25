import React from "react";
import { Link } from "react-router-dom";

function Sign({ onLogedOut, email }) {
  return (
    <ul className="header__list-info">
      <li className='header__username header__username_visible'>
        <p className="header__email">{email}</p>
      </li>
      <li>
        <Link onClick={onLogedOut} className='header__link header__link_notfocus'>
          Выйти
        </Link>
      </li>
    </ul>

    // <div className="header__sign">
    //   <p className="header__email">{email}</p>
    //   <Link className="header__exit" onClick={onClose} to="/sign-in">Выйти</Link>
    // </div>
  );
}

export default Sign;
