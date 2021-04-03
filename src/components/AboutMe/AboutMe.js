import React from "react";
import "./AboutMe.css";
import me from '../../images/me.jpg'

function AboutMe() {
  return (
    <section className="aboutme global-padding-blocks">
      <h2 className="section-title aboutme__title">Студент</h2>
      <div className="aboutme__student">
        <div className="aboutme__profile">
          <p className="aboutme__name">Виталий</p>
          <p className="aboutme__description">Фронтенд-разработчик, 30 лет</p>
          <p className="aboutme__text">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
          <div className="aboutme__list-of-links">
            <a className="aboutme__links" href="https://www.facebook.com/" target='_blank' rel="noreferrer">
            Facebook
            </a>
            <a className="aboutme__links" href="https://github.com/" target='_blank' rel="noreferrer">
            GitHub
            </a>
          </div>
        </div>
        <img className="aboutme__img" src={me} alt="мой портрет"/>
      </div>
    </section>
  );
}

export default AboutMe;
