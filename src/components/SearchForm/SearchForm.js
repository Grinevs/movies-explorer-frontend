import React from "react";
import "./SearchForm.css";
import moviesApi from "../../utils/MoviesApi";
import api from "../../utils/MainApi";

function SearchForm(props) {
  const [searchString, setSearchString] = React.useState("");
  const [movies, setMovies] = React.useState([]);

  const handleButtonClick = (e) => {
    e.preventDefault();
    if (searchString === "") {
      return alert("Нужно ввести ключевое слово");
    }
    if (props.myMovies) {
      api
          .getMovies()
          .then((movies) => {
            const newMyMoviesArray = movies.filter((i) =>
          i.nameRU.includes(searchString)
        );
        props.setMoviesSelected(newMyMoviesArray);
        if (newMyMoviesArray.length === 0) {props.setNotFound(true)} else {props.setNotFound(false)}
          })
          .catch((err) => {
            console.log("Ошибка. Запрос не выполнен: ", err);
          })


    } else {
      moviesApi
      .getMovies()
      .then((data) => {
        props.setErrorRequest(false);
        setMovies(data);
        const newMoviesArray = data.filter((i) =>
          i.nameRU.includes(searchString)
        );
        props.setMoviesSelected(newMoviesArray);
        if (newMoviesArray.length === 0) {props.setNotFound(true)} else {props.setNotFound(false)}
      })
      .catch((err) => {
        props.setErrorRequest(true);
        console.log("Ошибка. Запрос не выполнен: ", err);
      })
      .finally(() => console.log("обработка завершена"));
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
      if (newMoviesArray.length === 0) {props.setNotFound(true)} else {props.setNotFound(false)}
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
    </section>
  );
}

export default SearchForm;
