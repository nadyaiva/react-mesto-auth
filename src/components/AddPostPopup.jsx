import PopupWithForm from "./PopupWithForm";
import React from "react";
import { useState } from "react";

function AddPostPopup(props) {
 const [cardname, setCardname] = useState('');
 const [link, setLink] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    props.onAddPlace({
      name: cardname,
      link: link
    });
  }
  function handleCardnameChange(e) {
    setCardname(e.target.value)
  }
  function handleLinkChange(e) {
    setLink(e.target.value)
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
          value={cardname}
          placeholder="Название"
          type="text"
          name="cardname"
          id="title-input"
          minLength="2"
          maxLength="30"
          required
          onChange={handleCardnameChange}
        />
        <span className="popup__input-error title-input-error"></span>
      </label>
      <label className="popup__label">
        <input
          className="popup__input popup__input_type_pic-link"
          placeholder="Ссылка на картинку"
          value={link}
          type="url"
          name="link"
          id="link-input"
          required
          onChange={handleLinkChange}
        />
        <span className="popup__input-error link-input-error">
          Введите адрес сайта.
        </span>
      </label>
    </PopupWithForm>
  );
}

export default AddPostPopup;
