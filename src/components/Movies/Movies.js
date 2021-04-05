import React from "react";
import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function Movies(props) {
  return (
    <main className="movies global-padding-blocks">
      <SearchForm />
      <MoviesCardList myMovies={props.myMovies} />

    </main>
  );
}

export default Movies;
