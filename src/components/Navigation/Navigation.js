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
            <a className="navigation__link" href="http://grinev.pro/" target="_blank" rel="noreferrer"><div className="navigation__arrow"></div></a>
         </li>
         <li className="navigation__item">
            <a className="navigation__link" href="http://grinev.pro/" target="_blank" rel="noreferrer">Адаптивный сайт</a><a className="navigation__link" href="http://grinev.pro/" target="_blank" rel="noreferrer">
            <div className="navigation__arrow"></div></a>
         </li>
         <li className="navigation__item">
            <a className="navigation__link" href="http://grinev.pro/" target="_blank" rel="noreferrer">Одностраничное приложение</a>
            <a className="navigation__link" href="http://grinev.pro/" target="_blank" rel="noreferrer"><div className="navigation__arrow"></div></a>
         </li>
       </ul>

    </section>
  );
}

export default Navigation;
