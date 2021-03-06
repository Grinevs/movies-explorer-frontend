import React from "react";
import "./SearchForm.css";
import moviesApi from "../../utils/MoviesApi";
import api from "../../utils/MainApi";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function SearchForm(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const [searchString, setSearchString] = React.useState("");
  const [movies, setMovies] = React.useState([]);
  const [loaderStatus, setLoaderStatus] = React.useState(false);

  const handleButtonClick = (e) => {
    e.preventDefault();
    setLoaderStatus(true);
    props.setNotFound(false);
    if (searchString === "") {
      return alert("Нужно ввести ключевое слово");
    }
    if (props.myMovies) {
      api
          .getMovies()
          .then((movies) => {
            const MyMoviesArray = movies.filter((i) => i.owner === currentUser._id)
            const newMyMoviesArray = MyMoviesArray.filter((i) =>
          {const str = i.nameRU.toLowerCase()
          return str.includes(searchString.toLowerCase())}
        );
        props.setMoviesSelected(newMyMoviesArray);
        if (newMyMoviesArray.length === 0) {props.setNotFound(true)} else {props.setNotFound(false)}
          })
          .catch((err) => {
            console.log("Ошибка. Запрос не выполнен: ", err);
          })
          .finally(() => setLoaderStatus(false));


    } else {
      moviesApi
      .getMovies()
      .then((data) => {
        props.setErrorRequest(false);
        setMovies(data);
        const newMoviesArray = data.filter((i) =>
        {
          const str = i.nameRU.toLowerCase()
          return str.includes(searchString.toLowerCase())}
        );
        props.setMoviesSelected(newMoviesArray);
        if (newMoviesArray.length === 0) {props.setNotFound(true)} else {props.setNotFound(false)}
      })
      .catch((err) => {
        props.setErrorRequest(true);
        console.log("Ошибка. Запрос не выполнен: ", err);
      })
      .finally(() => setLoaderStatus(false));
    }

  };

  const handleChangeInput = (e) => {
    setSearchString(e.target.value);
  };

  const handleChangeCheckbox = (e) => {
    setMovies(props.moviesSelected);
    const newMoviesArray = props.moviesSelected.filter((i) => i.duration < 40);
    e.target.checked
      ? props.setMoviesSelected(newMoviesArray)
      : props.setMoviesSelected(movies);
      if (movies === 0) {props.setNotFound(true)} else {props.setNotFound(false)}
  };

  return (
    <section className="searchform">
      <form className="searchform__form" method="post">
        <input
          className="searchform__search-text"
          type="text"
          name="text"
          placeholder="Фильм"
          value={searchString}
          onChange={handleChangeInput}
        ></input>
        <button
          className="searchform__button"
          type="submit"
          onClick={handleButtonClick}
        >
          Найти
        </button>
      </form>
      <div className="searchform__filter">
        <input
          type="checkbox"
          name="checkbox"
          id="checkbox"
          className="searchform__checkbox"
          onChange={handleChangeCheckbox}
        />
        <label className="searchform__checkbox-text" htmlFor="checkbox">
          Короткометражки
        </label>
      </div>
      <span
          className={
            (loaderStatus)
              ? "loader__search loader_active"
              : "loader__search"
          }
        >
        </span>
    </section>
  );
}

export default SearchForm;
