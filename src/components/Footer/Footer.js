import React from "react";
import "./Footer.css";
import { Link } from 'react-router-dom';

function Footer() {
  const today = new Date();
  return (
    <footer className="footer global-padding-blocks">
      <div className="footer__head">Учебный проект Яндекс.Практикум х BeatFilm.</div>
      <div className="footer__info">
        <div className="footer__date">© {today.getFullYear()}</div>
        <div className="footer__links">
          <a href="https://praktikum.yandex.ru/"  className="footer__link" target='_blank' rel="noreferrer">Яндекс.Практикум</a>
          <a href="https://github.com/"  className="footer__link" target='_blank' rel="noreferrer">Github</a>
          <a href="https://www.facebook.com/"  className="footer__link" target='_blank' rel="noreferrer">Facebook</a>
        </div>
      </div>

    </footer>
  );
}

export default Footer;
