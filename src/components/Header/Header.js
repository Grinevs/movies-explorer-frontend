import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header(props) {
  const handleClickMovies = () => {
    props.setMyMovies(false)
    props.toggleSidebar()
  }

  const handleClickMyMovies = () => {
    props.setMyMovies(true)
    props.toggleSidebar()
  }
  return (
    <div
      className={
        props.backColor
          ? "header global-padding-blocks header_color-black"
          : "header global-padding-blocks"
      }
    >
      <div className="header__logo logo" onClick={props.logoClick}></div>
      <div className="header__nav ">
        {props.loginIn ? (
          <>
            <Link to="/movies" className="header__movie" onClick={handleClickMovies}>
              Фильмы
            </Link>
            <Link to="/saved-movies" className="header__mymovie" onClick={handleClickMyMovies}>
              Сохраненные фильмы
            </Link>
          </>
        ) : (
          <></>
        )}
      </div>

      <div className="header__auth ">
        {props.loginIn ? (
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
            onClick={handleClickMovies}
          >
            Фильмы
          </Link>
          <Link
            to="/saved-movies"
            className="header__link-sidebar"
            onClick={handleClickMyMovies}
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
