import React from "react";
import "./Profile.css";

function Profile() {
  return (
    <section className="profile global-padding-blocks">
      <h2 className="profile__title">Привет, Виталий!</h2>
      <div className="profile__data">
        <div className="profile__name-email">
          <div className="profile__placeholder">Имя</div>
          <div className="profile__userinfo">Виталий</div>
        </div>
        <div className="profile__name-email">
          <div className="profile__placeholder">Email</div>
          <div className="profile__userinfo">aaddaa@gmail.com</div>
        </div>
      </div>
      <button className="profile__edit-button">Редактировать</button>
      <button className="profile__esc-button">Выйти из аккаунта</button>
    </section>
  );
}

export default Profile;
