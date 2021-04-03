import React from "react";
import "./MoviesCard.css";
import pic from "../../images/pic.jpg"

function MoviesCard(props) {
  return (
    <li className="moviescard__item">
    <div className="moviesard">
      <img className="moviesard__img" src= {pic}/>
      <div className="moviesard__info">
        <div className="moviesard__about">
          <div className="moviesard__name">Никто</div>
          <div className="moviesard__checkbox-container">
            <input
              type={(props.myMovies)
              ? "button"
            : "checkbox"}
              name="movie-checkbox"
              className="moviesard__checkbox"
              id={props.anykey}
            ></input>
            <label className={(props.myMovies)
            ? "moviesard__label moviesard__label_my"
            : "moviesard__label"
          }
            htmlFor={props.anykey}></label>
          </div>
        </div>
        <p className="moviesard__duration">1h40m</p>
      </div>
    </div>
    </li>
  );
}

export default MoviesCard;
