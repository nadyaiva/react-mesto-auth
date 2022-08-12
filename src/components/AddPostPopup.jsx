import PopupWithForm from "./PopupWithForm";
import React from "react";
import { useRef } from "react";

function AddPostPopup(props) {

  const nameRef = useRef();
  const linkRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    props.onAddPlace({
      name: nameRef.current.value,
      link: linkRef.current.value
    });
  }
  return (
    <PopupWithForm
      title="Новое место"
      name="add-photo"
      isOpen={props.isOpen}
      button="Создать"
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <label className="popup__label">
        <input
          className="popup__input popup__input_type_title"
          defaultValue=""
          placeholder="Название"
          type="text"
          name="cardname"
          id="title-input"
          minLength="2"
          maxLength="30"
          required
          ref={nameRef}
        />
        <span className="popup__input-error title-input-error"></span>
      </label>
      <label className="popup__label">
        <input
          className="popup__input popup__input_type_pic-link"
          placeholder="Ссылка на картинку"
          defaultValue=""
          type="url"
          name="link"
          id="link-input"
          required
          ref={linkRef}
        />
        <span className="popup__input-error link-input-error">
          Введите адрес сайта.
        </span>
      </label>
    </PopupWithForm>
  );
}

export default AddPostPopup;
