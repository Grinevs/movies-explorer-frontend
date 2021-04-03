import React from "react";
import "./Navigation.css";
import { Link } from 'react-router-dom';


function Navigation() {
  return (
    <section className="global-padding-blocks navigation ">
       <h2 className="navigation__title">Портфолио</h2>
       <ul className="navigation__list">
         <li className="navigation__item">
            <Link className="navigation__link" to="#">Статичный сайт</Link>
            <div className="navigation__arrow"></div>
         </li>
         <li className="navigation__item">
            <Link className="navigation__link" to="#">Адаптивный сайт</Link>
            <div className="navigation__arrow"></div>
         </li>
         <li className="navigation__item">
            <Link className="navigation__link" to="#">Одностраничное приложение</Link>
            <div className="navigation__arrow"></div>
         </li>
       </ul>

    </section>
  );
}

export default Navigation;
