import React from "react";
import info_success from "../images/info_success.svg";
import info_fail from "../images/info_fail.svg";

function InfoTooltip({ isOpen, onClose, onCloseSuccessClick }) {
  const classNamePopup = `popup popup_place_infotip-reg ${
    isOpen ? "popup_opened" : ""
  }`;
  function closeClick() {
    onClose();
    onCloseSuccessClick();
  }
  return (
    <div className={classNamePopup}>
      <div className="infotip-reg">
        <img
          className="infotip-reg__icon infotip-reg__icon_success"
          src={info_success}
          alt="Успешно"
        />
        <p className="infotip-reg__text">Вы успешно зарегистрировались!</p>
        <button
          className="popup__close popup__close-button popup__close-button_place_infotip-reg"
          type="button"
          onClick={closeClick}
        ></button>
      </div>
    </div>
  );
}

export default InfoTooltip;
