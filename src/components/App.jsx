import React from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import EditProfilePopup from "./EditProfilePopup";
import AddPostPopup from "./AddPostPopup";
import UpdateAvatarPopup from "./UpdateAvatarPopup";
import ImagePopup from "./ImagePopup";
import Api from "../utils/Api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import Login from "./Login";
import ProtectedRout from "./ProtectedRoute";
import InfoTooltip from "./InfoTooltip";
import Register from "./Register";
import * as auth from "../utils/Auth";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = React.useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSuccessTip, setIsSuccessTip] = useState(false);
  const [email, setEmail] = useState('');
  const [isInfoTipOpen, setIsInfoTipOpen] = useState(false);

  const history = useHistory();

  function getUserInfo() {
    Promise.all([Api.getUserInfoApi(), Api.getInitialCards()]).then(
      ([userInfo, cards]) => {
        setCurrentUser(userInfo);
        setCards(cards);
      }
    );
  }

  React.useEffect(() => {
    if (isLoggedIn) {
      getUserInfo();
    }
  }, [isLoggedIn]);

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function onEditProfile() {
    setIsEditProfilePopupOpen(true);
  }

  function onAddPlace() {
    setIsAddPlacePopupOpen(true);
  }

  function onEditAvatar() {
    setIsEditAvatarPopupOpen(true);
  }

  function onSuccessTip() {
    setIsInfoTipOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(null);
    setIsInfoTipOpen(false);
  }

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    // Отправляем запрос в API и получаем обновлённые данные карточки
    Api.changeCardLikeStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((c) => (c._id === card._id ? newCard : c))
        );
      })
      .catch((err) => console.log(err));
  }

  function handleCardDelete(card) {
    const isOwn = card.owner._id === currentUser._id;
    Api.deletePost(card._id)
      .then(setCards((state) => state.filter((c) => c._id !== card._id)))
      .catch((err) => console.log(err));
  }

  function handleUpdateUser({ name, about }) {
    Api.updateUserInfo({ name, about })
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch((err) => console.log(err));
  }

  function handleUpdateAvatar({ avatar }) {
    Api.updateAvatar({ avatar })
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch((err) => console.log(err));
  }

  function handleAddPlaceSubmit({ name, link }) {
    Api.addNewCard({ name, link })
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch((err) => console.log(err));
  }

  function handleAuthorization({ password, email }) {
    auth.login({ password, email }).then((data) => {
      if (data.token) {
        setIsLoggedIn(true);
        localStorage.setItem("token", data.token);
        history.push("/");
      }
    }).catch((err) => {
      setIsInfoTipOpen(true);
      setIsSuccessTip(false);
    })
  }

  function onCloseSuccess() {
    history.push("/login");
  }

  function handleRegistration({ password, email }) {
    auth.register({ password, email }).then((data) => {
      if (data.data._id) {
        setIsSuccessTip(true);
        setIsInfoTipOpen(true);
      }
    }).catch((err) => {
      setIsInfoTipOpen(true);
      setIsSuccessTip(false);
    })
  }

  function tokenCheck() {
    const token = localStorage.getItem('token');
    if (token) {
      auth.getContent(token).then((res) => {
        if (res) {
          setEmail(res.data.email)
          setIsLoggedIn(true);
          history.push("/");
        }
      })
    }
  }

  React.useEffect(() => {
    tokenCheck();
  }, [isLoggedIn])

  React.useEffect(() => {
    if (isLoggedIn) {
      history.push('/');
    }
  }, [isLoggedIn])

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <Header email={email}/>
        <Switch>
          <ProtectedRout
            exact
            path="/"
            isLoggedIn={isLoggedIn}
            children={
              <>
                <Main
                  onEditProfileClick={onEditProfile}
                  onAddPlaceClick={onAddPlace}
                  onEditAvatarClick={onEditAvatar}
                  onCardClick={handleCardClick}
                  onCardLike={handleCardLike}
                  onCardDelete={handleCardDelete}
                  cards={cards}
                />
                <Footer />
                <EditProfilePopup
                  isOpen={isEditProfilePopupOpen}
                  onClose={closeAllPopups}
                  onUpdateUser={handleUpdateUser}
                />
                <AddPostPopup
                  isOpen={isAddPlacePopupOpen}
                  onClose={closeAllPopups}
                  onAddPlace={handleAddPlaceSubmit}
                />
                <UpdateAvatarPopup
                  isOpen={isEditAvatarPopupOpen}
                  onClose={closeAllPopups}
                  onUpdateAvatar={handleUpdateAvatar}
                />
                <ImagePopup card={selectedCard} onClose={closeAllPopups} />
              </>
            }
          />

          <Route path={"/sign-up"}>
            <Register onRegistration={handleRegistration} />
            <InfoTooltip
              isOpen={isInfoTipOpen}
              onClose={closeAllPopups}
              isSuccessTip={isSuccessTip}
            />
          </Route>

          <Route path={"/login"}>
            <Login onAuthorization={handleAuthorization} />
            <InfoTooltip
              isOpen={isInfoTipOpen}
              onClose={closeAllPopups}
              isSuccessTip={isSuccessTip}
            />
          </Route>
        </Switch>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
