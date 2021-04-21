import React from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import validator from "validator";
import api from "../../utils/MainApi";

function Login(props) {
  const history = useHistory();
  const [buttonActive, setButtonActive] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loaderStatus, setLoaderStatus] = React.useState(false);
  const [inputActive, setInputActive] = React.useState(false);
  const [error, setError] = React.useState({
    email: true,
    password: true,
    editedEmail: false,
    editedPassword: false,
  });
  const [errorStatus, setErrorStatus] = React.useState("");
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setError({
      ...error,
      email: !validator.isEmail(e.target.value),
      editedEmail: true,
    });
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setError({
      ...error,
      password: !validator.isLength(e.target.value, { min: 2, max: 30 }),
      editedPassword: true,
    });
  };

  React.useLayoutEffect(() => {
    if (!error.email && !error.password) {
      setButtonActive(true);
    } else {
      setButtonActive(false);
    }
    setErrorStatus("");
  }, [error]);

  const handleClickReg = (e) => {
    e.preventDefault();
    setLoaderStatus(true);
    setInputActive(true)
    api
      .authUser({ email: email, password: password })
      .then((data) => {
        localStorage.setItem('token', data.token);
        props.setLoginIn(true)
        history.push('/saved-movies');
      })
      .catch((err) => {
        console.log("Ошибка. Запрос не выполнен: ", err);

        setErrorStatus(err.message);
      })
      .finally(() => {
        setLoaderStatus(false)
        setInputActive(false)
      });;
  };

  return (
    <section className="register global-padding-blocks">
      <div className="register__logo logo" onClick={props.logoClick}></div>
      <h2 className="register__title">Рады видеть!</h2>
      <form className="register__form">
        <span className="register__tip">E-mail</span>
        <input
          className="register__input input"
          required
          type="email"
          placeholder="E-mail"
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
        <span className="register__tip">Пароль</span>
        <input
          className="register__input input"
          required
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={handlePasswordChange}
          disabled={inputActive}
        ></input>
        <span
          className={
            error.password && error.editedPassword
              ? "register__hint register__hint_active"
              : "register__hint"
          }
        >
          Ввведите пароль от 2 до 30 символов.
        </span>
        <button
          className="register__button button"
          type="submit"
          disabled={!buttonActive}
          onClick={handleClickReg}
        >
          Войти
        </button>
        <p className="register__text">
          Ещё не зарегистрированы?
          <Link className="register__link" to="/signup">
            Регистрация
          </Link>
        </p>
      </form>
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

export default Login;
