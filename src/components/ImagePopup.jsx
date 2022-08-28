import React from "react";
import Popup from "./Popup";

function ImagePopup({card, onClose }) {
  // const classNamePopupImage = `popup popup-fullscreen ${
  //   !!card ? "popup_opened" : ""
  // }`;
  const cardLink = card ? card.link : "";
  const cardName = card ? card.name : "";

  return (
    // <div className={classNamePopupImage}>
    //   <div>
    //   <figure className="popup-fullscreen__figure">
    //     <img
    //       className="popup-fullscreen__image"
    //       src={cardLink}
    //       alt={cardName}
    //     />
    //     <figcaption className="popup-fullscreen__caption">
    //       {cardName}
    //     </figcaption>
    //     <button
    //       className="popup__close popup__close-button popup__close-button_place_fullscreen"
    //       type="button"
    //       onClick={onClose}
    //     ></button>
    //   </figure>
    //   </div>
    // </div>);
    <Popup isOpen={card} name={'image'} onClose={onClose}>

        <img
          className="popup-fullscreen__image"
          src={cardLink}
          alt={cardName}
        />
        <figcaption className="popup-fullscreen__caption">
          {cardName}
        </figcaption>
    </Popup>
  );
}
export default ImagePopup;
