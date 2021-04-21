import React from "react";
import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function Movies(props) {
  const [moviesSelected, setMoviesSelected] = React.useState([]);
  const [errorRequest, setErrorRequest] = React.useState(false);
  const [notFound, setNotFound] = React.useState(false);


  const handleSetMovies = (data) => {
    setMoviesSelected(data);
  };

  const handleSetError = (data) => {
    setErrorRequest(data);
  };

  React.useEffect(() => {
    setNotFound(false)
    if (!props.myMovies) {
      setMoviesSelected([]);
    } 

  }, [props.myMovies]);

  return (
    <main className="movies global-padding-blocks">
      <SearchForm
        setMoviesSelected={handleSetMovies}
        moviesSelected={moviesSelected}
        errorRequest={errorRequest}
        setErrorRequest={handleSetError}
        myMovies={props.myMovies}
        setNotFound={setNotFound}
      />
      <MoviesCardList
        myMovies={props.myMovies}
        moviesSelected={moviesSelected}
        errorRequest={errorRequest}
        setMoviesSelected={handleSetMovies}
        notFound={notFound}
        setNotFound={setNotFound}

      />
    </main>
  );
}

export default Movies;
