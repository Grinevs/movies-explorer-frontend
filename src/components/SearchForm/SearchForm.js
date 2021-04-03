
import React from "react";
import "./SearchForm.css";

function SearchForm() {
  return (
    <section className="searchform">
      <form className="searchform__form" method="post">
        <input className="searchform__search-text" type="text"   name="text" placeholder="Фильм" ></input>
        <button className="searchform__button" type="submit">
          Найти
        </button>
      </form>
      <div className="searchform__filter">
        <input type="checkbox" name="checkbox" id="checkbox" className="searchform__checkbox" />
        <label className="searchform__checkbox-text" htmlFor="checkbox">
        Короткометражки
        </label>
      </div>
    </section>
  );
}

export default SearchForm;
