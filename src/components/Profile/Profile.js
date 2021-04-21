import React from "react";
import "./Profile.css";
import validator from "validator";
import api from "../../utils/MainApi";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { Link } from "react-router-dom";

function Profile(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const [buttonText, setButtonText] = React.useState('Редактировать');
  const [buttonActive, setButtonActive] = React.useState(false);
  const [inputActive, setInputActive] = React.useState(false);
  const [email, setEmail] = React.useState(currentUser ? currentUser.email : "E-mail");
  const [username, setUserName] = React.useState(currentUser ? currentUser.name : "Имя");
  const [loaderStatus, setLoaderStatus] = React.useState(false);
  const [error, setError] = React.useState({
    email: true,
    username: true,
    editedEmail: false,
    editedUsername: false,
  });
  const [errorStatus, setErrorStatus] = React.useState("");
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setError({
      ...error,
      email: !(validator.isEmail(e.target.value) && (e.target.value != currentUser.email)),
      editedEmail: true,
    });
  };

  const handleUsernameChange = (e) => {
    setUserName(e.target.value);
    setError({
      ...error,
      username: !(
        e.target.value.match(/^[a-zа-яё; -]+$/iu) &&
        validator.isLength(e.target.value, { min: 2, max: 30 }) && (e.target.value != currentUser.name)
      ),
      editedUsername: true,
    });
  };

  React.useLayoutEffect(() => {
    setEmail(currentUser ? currentUser.email : "E-mail");
    setUserName(currentUser ? currentUser.name : "Имя");
    setButtonText('Редактировать');

  }, [currentUser]);

  React.useLayoutEffect(() => {
    if (!error.email && !error.username) {
      setButtonActive(true);
    } else {
      setButtonActive(false);
    }
    setErrorStatus('');
    setButtonText('Редактировать');
  }, [error]);

  const handleClickReg = (e) => {
    e.preventDefault();
    setLoaderStatus(true);
    setInputActive(true)
    api
      .editUserProfile({ email: email, name: username })
      .then((data) => {
        setButtonText('Изменения внесены');
        setButtonActive(false);
        props.setCurrentUser(data)
      })
      .catch((err) => {
        console.log("Ошибка. Запрос не выполнен: ", err);

        setErrorStatus(err.message);
      })
      .finally(() => {
        setLoaderStatus(false);
        setInputActive(false)
      });
  };

  const signOut = () => {
    localStorage.removeItem('token');
    props.setLoginIn(false)
  }

  return (
    <section className="profile global-padding-blocks">
      <h2 className="profile__title">Привет, {currentUser ? currentUser.name : ''}!</h2>
      <div className="profile__data">
      <span className="register__tip">Имя</span>
        <input
          className="register__input input"
          required
          type="text"
          placeholder={currentUser ? currentUser.name : "Имя"}
          value={username}
          onChange={handleUsernameChange}
          disabled={inputActive}
        ></input>
        <span
          className={
            error.username && error.editedUsername
              ? "register__hint register__hint_active"
              : "register__hint"
          }
        >
          Введите имя от 2 до 30 символов.
        </span>
        <span className="register__tip">E-mail</span>
        <input
          className="register__input input"
          required
          type="email"
          placeholder={currentUser ? currentUser.email : "E-mail"}
          value={email}
          onChange={handleEmailChange}
          disabled={inputActive}
        ></input>
        <span
          className={
            error.email && error.editedEmail
              ? "register__hint register__hint_active"
              : "register__hint"
          }
        >
          не валидная почта
        </span>
      </div>
      <button className="profile__edit-button" onClick={handleClickReg} disabled={!buttonActive}>{buttonText}</button>
      <Link className="profile__esc-button" onClick={signOut} to='/'>Выйти из аккаунта</Link>
      <span
          className={
            (loaderStatus)
              ? "loader loader_active"
              : "loader"
          }
        >
        </span>
      <span
          className={
            (errorStatus !== "")
              ? "register__hint register__hint_active"
              : "register__hint"
          }
        >
         {errorStatus}
        </span>
    </section>
  );
}

export default Profile;
