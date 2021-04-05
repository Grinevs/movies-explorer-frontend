import React from 'react';
import './Techs.css';


function Techs() {
  return (
<section className="techs global-padding-blocks">
  <h2 className="section-title techs__title">Технологии</h2>
  <div className="techs__description">
    <h3 className="techs__subtitle">
    7 технологий
    </h3>
    <p className="techs__about">
    На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
    </p>
    <ul className="techs__list-techs">
      <li className="techs__one-tech">HTML</li>
      <li className="techs__one-tech">CSS</li>
      <li className="techs__one-tech">JS</li>
      <li className="techs__one-tech">Git</li>
      <li className="techs__one-tech">React</li>
      <li className="techs__one-tech">Express.js</li>
      <li className="techs__one-tech">MongoDB</li>
    </ul>
  </div>
</section>
  );
}

export default Techs;
