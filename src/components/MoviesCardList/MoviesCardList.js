import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {
  return (
    <section className="moviesardlist">
      <ul className="moviescardlist__container">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((card) =>
          <MoviesCard
          key={card}
          anykey={card}
          myMovies={props.myMovies}
          />
        )}
      </ul>
      <div className="moviesardlist__loader">Ещё</div>
    </section>
  );
}

export default MoviesCardList;
