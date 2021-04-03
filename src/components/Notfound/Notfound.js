import React from "react";

import "./Notfound.css";
import { Link } from 'react-router-dom';

function Notfound(props) {
  return (
    <section className="notfound">
      <h2 className="notfound__title">404</h2>
      <p className="notfound__tip">Страница не найдена</p>
      <Link className="notfound__link" to="#" onClick={props.backClick}>Назад</Link>
    </section>
  );
}

export default Notfound;
