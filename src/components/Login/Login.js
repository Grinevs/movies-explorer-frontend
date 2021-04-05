import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function Login(props) {
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
        ></input>
        <span className="register__hint">Что-то пошло не так...</span>
        <span className="register__tip">Пароль</span>
        <input
          className="register__input input"
          required
          type="password"
          placeholder="Пароль"
        ></input>
        <span className="register__hint register__hint_active">Что-то пошло не так...</span>
        <button className="register__button button" type="submit">
        Войти
        </button>
        <p className="register__text">Ещё не зарегистрированы?<Link className="register__link" to='/signup'>Регистрация</Link></p>

      </form>
    </section>
  );
}

export default Login;
