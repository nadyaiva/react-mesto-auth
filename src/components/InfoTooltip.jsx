import React from "react";
import info_success from '../images/info_success.svg';
import info_fail from '../images/info_fail.svg';

function InfoTooltip() {
  return (
    <div className="popup popup_opened popup_place_infotip-reg">
        <div className="infotip-reg">
      <img className="infotip-reg__icon infotip-reg__icon_success" src={info_success} alt="Успешно" />
      <p className="infotip-reg__text">Вы успешно зарегистрировались!</p>
      <button
        className="popup__close popup__close-button popup__close-button_place_infotip-reg"
        type="button"
      ></button></div>
    </div>
  );
}

export default InfoTooltip;
