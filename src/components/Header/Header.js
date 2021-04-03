import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header(props) {
  return (
    <div
      className={
        props.backColor
          ? "header global-padding-blocks header_color-black"
          : "header global-padding-blocks"
      }
    >
      <div className="header__login-temp" onClick={props.toggleLogin}>
        AUTH {props.login ? "True" : "False"} click me to toggle
      </div>
      <div className="header__logo logo" onClick={props.logoClick}></div>
      <div className="header__nav ">
        {!props.login ? (
          <>
            <Link to="/movies" className="header__movie">
              Фильмы
            </Link>
            <Link to="/saved-movies" className="header__mymovie">
              Сохраненные фильмы
            </Link>
          </>
        ) : (
          <></>
        )}
      </div>

      <div className="header__auth ">
        {!props.login ? (
          <>
            <button
              className="header__profile"
              name="button__profile"
              id="button__profile"
              onClick={props.toProfile
                }
            ></button>
            <label className="header__label" htmlFor="button__profile">
              Аккаунт
            </label>
          </>
        ) : (
          <>
            <button
              className="header__registration"
              onClick={props.signUpClick}
            >
              Регистрация
            </button>
            <button className="header__login" onClick={props.signInClick}>
              Войти
            </button>
          </>
        )}
      </div>

      <div
        className={
          props.sideBar ? "header__menu header__menu_active" : "header__menu"
        }
      >
        <div
          className="header__sidebar-close"
          onClick={props.toggleSidebar}
        ></div>
        <div className="header__links-sidebar">
          <Link
            to="/"
            className="header__link-sidebar"
            onClick={props.toggleSidebar}
          >
            Главная
          </Link>
          <Link
            to="/movies"
            className="header__link-sidebar header__link-sidebar_active"
            onClick={props.toggleSidebar}
          >
            Фильмы
          </Link>
          <Link
            to="/saved-movies"
            className="header__link-sidebar"
            onClick={props.toggleSidebar}
          >
            Сохраненные фильмы
          </Link>
        </div>
        <div className="header__button-sidebar">
          <button
            className="header__profile-sidebar"
            name="button__profile-sidebar"
            id="button__profile-sidebar"
            onClick={props.toProfile}
          ></button>
          <label
            className="header__label-sidebar"
            htmlFor="button__profile-sidebar"
          >
            Аккаунт
          </label>
        </div>
      </div>
    </div>
  );
}

export default Header;
