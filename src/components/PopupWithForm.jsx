import React from "react";

function PopupWithForm(props) {
  const className = `popup popup_place_${props.name} ${
    props.isOpen ? "popup_opened" : ""
  }`;
  return (
    <div className={className}>
      <form
        className={`form form_${props.name}`}
        name={`${props.name}`}
        onSubmit={props.onSubmit}
      >
        <h2 className="popup__heading">{`${props.title}`}</h2>

        <fieldset className="popup__input-container">
          {props.children}
          <button
            className="popup__save-button popup__save-button_place_edit-profile"
            type="submit"
          >
            {props.button}
          </button>
        </fieldset>
        <button
          className="popup__close popup__close-button popup__close-button_place_edit-profile"
          onClick={props.onClose}
          type="button"
        ></button>
      </form>
    </div>
  );
}

export default PopupWithForm;
