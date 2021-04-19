import React from "react";
import "./MoviesCard.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import api from "../../utils/MainApi";

function MoviesCard(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const handleClickCheckbox = (e) => {
    const data = {
      country: props.country.slice(0, 29),
      director: props.director.slice(0, 29),
      year: props.year,
      description: props.description,
      duration: props.durationMinutes,
      image: props.url,
      trailer: props.trailerLink,
      nameRU: props.nameRU.slice(0, 29),
      nameEN: props.nameEN.slice(0, 29),

      thumbnail: props.url,
      owner: currentUser._id,
      movieId: props.movieId,
    };
    if (props.myMovies) {
      if (data.owner === currentUser._id) {
        api
          .deleteMovies(data.movieId)
          .then(() => {
            props.setDeleteMovie(true);
          })
          .catch((err) => {
            console.log("Ошибка. Запрос не выполнен: ", err);
          });
      } else {
        console.log("фильм сохранен другим пользователем");
      }
    } else {
      if (props.checked) {
        if (data.owner === currentUser._id) {
          api
            .deleteMovies(data.movieId)
            .then(() => {
              props.setDeleteMovie(true);
            })
            .catch((err) => {
              console.log("Ошибка. Запрос не выполнен: ", err);
            });
        } else {
          console.log("фильм сохранен другим пользователем");
        }
      } else {
        api
          .postMovies(data)
          .then((movie) => {
            props.setDeleteMovie(true);
          })
          .catch((err) => {
            console.log("Ошибка. Запрос не выполнен: ", err);
          });
      }
    }
  };
  return (
    <li className="moviescard__item">
      <div className="moviesard">
        <a href={props.trailerLink} target="_blank" rel="noreferrer">
          <img className="moviesard__img" src={props.url} alt={props.nameRU} />
        </a>
        <div className="moviesard__info">
          <div className="moviesard__about">
            <div className="moviesard__name">{props.nameRU}</div>
            <div className="moviesard__checkbox-container">
              <input
                type={props.myMovies ? "button" : "checkbox"}
                name="movie-checkbox"
                className="moviesard__checkbox"
                id={props.anykey}
                defaultChecked={props.checked}
                onClick={handleClickCheckbox}
              ></input>
              <label
                className={
                  props.myMovies
                    ? `moviesard__label moviesard__label_my ${
                        props.canDelete ? "" : "moviesard__label_notactive"
                      }`
                    : "moviesard__label"
                }
                htmlFor={props.anykey}
              ></label>
            </div>
          </div>
          <p className="moviesard__duration">{props.duration}</p>
        </div>
      </div>
    </li>
  );
}

export default MoviesCard;
