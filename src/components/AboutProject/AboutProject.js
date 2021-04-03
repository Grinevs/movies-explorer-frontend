import React from "react";
import "./AboutProject.css";

function AboutProject() {
  return (
    <section className="aboutproject global-padding-blocks">
      <h2 className="section-title aboutproject__title">О проекте</h2>
      <div className="aboutproject__description">
        <div className="aboutproject__card">
          <h3 className="aboutproject__card-title">Дипломный проект включал 5 этапов</h3>
            <p className="aboutproject__card-text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className="aboutproject__card">
          <h3 className="aboutproject__card-title">На выполнение диплома ушло 5 недель</h3>
            <p className="aboutproject__card-text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
          <div className="aboutproject__card-title"></div>
            <div className="aboutproject__card-text"></div>
        </div>
      </div>
      <div className="aboutproject__progress">
          <div className="aboutproject__back-end">
            <div className="aboutproject__back-end-time">1 неделя</div>
            <div className="aboutproject__progress-title">Back-end</div>
          </div>
          <div className="aboutproject__front-end">
            <div className="aboutproject__front-end-time">4 недели</div>
            <div className="aboutproject__progress-title">Front-end</div>
          </div>
        </div>
    </section>
  );
}

export default AboutProject;
