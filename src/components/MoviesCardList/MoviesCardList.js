import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import api from "../../utils/MainApi";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function MoviesCardList(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const [moviesLoader, setMoviesLoader] = React.useState();
  const [lengthExtraMovies, setLengthExtraMovies] = React.useState(0);
  const [width, setWidth] = React.useState(window.innerWidth);
  const [arrayUniqueId, setArrayUniqueId] = React.useState([]);
  const [daleteMovie, setDeleteMovie] = React.useState(false);

  let lengthOfMovies;
  let lengthOfMoviesCurrent;

  React.useEffect(() => {
    props.setNotFound(false);
    if (!props.myMovies && currentUser) {
      api
        .getMovies()
        .then((movie) => {
          const MyMoviesArray = movie.filter((i) => i.owner === currentUser._id)
          const arr = MyMoviesArray.map((i) => i.movieId);
          setArrayUniqueId(arr);
        })
        .catch((err) => {
          console.log("Ошибка. Запрос не выполнен: ", err);
        });
    } else {
      props.myMovies && currentUser
        ? api
            .getMovies()
            .then((movie) => {
              const MyMoviesArray = movie.filter((i) => i.owner === currentUser._id)
              setMoviesLoader(MyMoviesArray);
              props.setMoviesSelected(MyMoviesArray);
            })
            .catch((err) => {
              console.log("Ошибка. Запрос не выполнен: ", err);
            })
        : setMoviesLoader();
    }
    if (daleteMovie) {
      handleLoader();
      setDeleteMovie(false);
    }
  }, [props.myMovies, currentUser, daleteMovie]);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  const handleLoader = () => {
    if (width >= 1005 ) {
      lengthOfMoviesCurrent = 12 + lengthExtraMovies;
    }
    if (width >= 668 && width <= 1004) {
      lengthOfMoviesCurrent = 8 + lengthExtraMovies;
    }
    if (width >= 320 && width <= 667) {
      lengthOfMoviesCurrent = 5 + lengthExtraMovies;
    }
    if (!props.myMovies) {
      setMoviesLoader(props.moviesSelected.slice(0, lengthOfMoviesCurrent));
    }
    if (props.myMovies) {
      setMoviesLoader(props.moviesSelected);
    }
  };

  React.useLayoutEffect(() => {
    handleLoader();
  }, [width, lengthExtraMovies, props.moviesSelected]);

  React.useLayoutEffect(() => {
    window.addEventListener("resize", handleResize);
    handleLoader();
    lengthOfMovies = props.moviesSelected.length;
    setLengthExtraMovies(0);
    return () => removeEventListener("resize", handleResize);
  }, [props.moviesSelected]);

  const handleClickPreloader = () => {
    if (width >= 1298) {
      lengthOfMoviesCurrent = 12;
      setLengthExtraMovies(lengthExtraMovies + 4);
    }
    if (width >= 1005 && width <= 1297) {
      lengthOfMoviesCurrent = 12;
      setLengthExtraMovies(lengthExtraMovies + 3);
    }
    if (width >= 668 && width <= 1004) {
      lengthOfMoviesCurrent = 8;
      setLengthExtraMovies(lengthExtraMovies + 2);
    }
    if (width >= 320 && width <= 667) {
      lengthOfMoviesCurrent = 5;
      setLengthExtraMovies(lengthExtraMovies + 2);
    }
  };

  return (
    <section className="moviesardlist">
      {moviesLoader ? (
        <>
          <ul className="moviescardlist__container">
            {moviesLoader.map((movie) => (
              <MoviesCard
                setDeleteMovie={setDeleteMovie}
                checked={arrayUniqueId.includes(String(movie.id))}
                canDelete={
                  props.myMovies ? movie.owner === currentUser._id : false
                }
                key={movie.id || movie._id}
                anykey={movie.id || movie._id}
                movieId={movie.id || movie.movieId}
                myMovies={props.myMovies}
                nameRU={movie.nameRU || "нет названия"}
                durationMinutes={movie.duration || 0}
                duration={
                  movie.duration
                    ? `${Math.floor(movie.duration / 60)}h ${
                        movie.duration % 60
                      }m`
                    : 0
                }
                trailerLink={movie.trailerLink || movie.trailer}
                url={
                  movie.image === null
                    ? "https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png"
                    : typeof movie.image === "object"
                    ? movie.image.url
                      ? `https://api.nomoreparties.co${movie.image.url}`
                      : "https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png"
                    : movie.image
                }
                country={movie.country || "Unknown"}
                director={movie.director || "Unknown"}
                year={movie.year || 1899}
                description={movie.description || "Unknown"}
                nameEN={movie.nameEN || "Unknown"}
                thumbnail={
                  movie.image === null
                  ? "https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png"
                  : typeof movie.image === "object"
                  ? movie.image.url
                    ? `https://api.nomoreparties.co${movie.image.url}`
                    : "https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png"
                  : movie.image
                }
              />
            ))}
          </ul>
          <div
            className={`moviesardlist__loader ${
              moviesLoader.length >= props.moviesSelected.length ||
              props.myMovies
                ? "moviesardlist__loader_disable"
                : ""
            }`}
            onClick={handleClickPreloader}
          >
            {props.notFound === true ? "Ничего не найдено" : "Ещё"}
          </div>
          <div className=" moviesardlist__loader moviesardlist__loader_error">
            {props.notFound === true ? "Ничего не найдено" : ""}
          </div>
        </>
      ) : (
        <>
          {props.errorRequest ? (
            <div className=" moviesardlist__loader moviesardlist__loader_error">
              Во время запроса произошла ошибка.
            </div>
          ) : (
            <div></div>
          )}
        </>
      )}
    </section>
  );
}

export default MoviesCardList;
