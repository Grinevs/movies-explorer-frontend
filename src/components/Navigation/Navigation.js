import React from "react";
import "./Navigation.css";
import { Link } from 'react-router-dom';


function Navigation() {
  return (
    <section className="global-padding-blocks navigation ">
       <h2 className="navigation__title">Портфолио</h2>
       <ul className="navigation__list">
         <li className="navigation__item">
            <a className="navigation__link" href="http://grinev.pro/" target="_blank" rel="noreferrer">Статичный сайт</a>
            <div className="navigation__arrow"></div>
         </li>
         <li className="navigation__item">
            <a className="navigation__link" href="http://grinev.pro/" target="_blank" rel="noreferrer">Адаптивный сайт</a>
            <div className="navigation__arrow"></div>
         </li>
         <li className="navigation__item">
            <a className="navigation__link" href="http://grinev.pro/" target="_blank" rel="noreferrer">Одностраничное приложение</a>
            <div className="navigation__arrow"></div>
         </li>
       </ul>

    </section>
  );
}

export default Navigation;
