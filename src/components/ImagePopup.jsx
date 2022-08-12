import React from "react";

function ImagePopup({ card, onClose }) {
  const classNamePopupImage = `popup popup-fullscreen ${
    !!card ? "popup_opened" : ""
  }`;
  const cardLink = card ? card.link : "";
  const cardName = card ? card.name : "";

  return (
    <div className={classNamePopupImage}>
      <figure className="popup-fullscreen__figure">
        <img
          className="popup-fullscreen__image"
          src={cardLink}
          alt={cardName}
        />
        <figcaption className="popup-fullscreen__caption">
          {cardName}
        </figcaption>
        <button
          className="popup__close popup__close-button popup__close-button_place_fullscreen"
          type="button"
          onClick={onClose}
        ></button>
      </figure>
    </div>
  );
}
export default ImagePopup;