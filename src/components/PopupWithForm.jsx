import React from "react";

function PopupWithForm({onSubmit, buttonText, isOpen, onClose, name, title, children}) {
  const className = `popup popup_place_${name} ${
    isOpen ? "popup_opened" : ""
  }`;
  return (
    <div className={className}>
      <div>
      <form
        className={`form form_${name}`}
        name={`${name}`}
        onSubmit={onSubmit}
      >
        <h2 className="popup__heading">{`${title}`}</h2>

        <fieldset className="popup__input-container">
          {children}
          <button
            className="popup__save-button popup__save-button_place_edit-profile"
            type="submit"
          >
            {buttonText}
          </button>
        </fieldset>
        <button
          className="popup__close popup__close-button popup__close-button_place_edit-profile"
          onClick={onClose}
          type="button"
        />
      </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
