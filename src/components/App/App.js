import React from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Movies from "../Movies/Movies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Notfound from "../Notfound/Notfound.js";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import api from "../../utils/MainApi";
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Protected from '../Protected/Protected';

function App() {
  const history = useHistory();
  const [currentUser, setCurrentUser] = React.useState();
  const [sideBar, setSideBar] = React.useState(false);
  const [loginIn, setLoginIn] = React.useState(false);
  const [myMovies, setMyMovies] = React.useState(false);

  React.useEffect(() => {
    const token = localStorage.getItem("token");
    token &&
      api
        .getJWT(token)
        .then((data) => {

          api._headers = {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          };
          setLoginIn(true);
          setCurrentUser(data);
        })
        .catch((err) => {
          setLoginIn(false);
        });
  }, [loginIn]);

  const handleLinkClick = (e) => {
    history.push("/");
  };
  const handleSignUpClick = (e) => {
    e.preventDefault();
    history.push("/signup");
  };
  const handleSignInClick = (e) => {
    e.preventDefault();
    history.push("/signin");
  };
  const handleBackClick = () => {
    history.goBack();
  };
  const handleToProfile = () => {
    if (window.visualViewport.width < 800 && sideBar) {
      history.push("/profile");
      setSideBar(false);
    } else {
      toggleSidebar();
    }
    if (window.visualViewport.width > 800) {
      history.push("/profile");
      setSideBar(false);
    } else {
      toggleSidebar();
    }
  };

  const toggleSidebar = () => {
    setSideBar(sideBar ? false : true);
  };

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Switch>
          <Route exact path="/">
            <Header
              myMovies={myMovies}
              setMyMovies={setMyMovies}
              logoClick={handleLinkClick}
              signUpClick={handleSignUpClick}
              signInClick={handleSignInClick}
              toProfile={handleToProfile}
              toggleSidebar={toggleSidebar}
              sideBar={sideBar}
              loginIn={loginIn}
            />
            <Main />
            <Footer />
          </Route>
          <ProtectedRoute exact path="/movies" loginIn={loginIn} myMovies={myMovies}
              setMyMovies={setMyMovies}
              backColor="header_color"
              logoClick={handleLinkClick}
              signUpClick={handleSignUpClick}
              signInClick={handleSignInClick}
              toProfile={handleToProfile}
              toggleSidebar={toggleSidebar}
              sideBar={sideBar}
              component={Protected}
        >

          </ProtectedRoute>
          <ProtectedRoute exact path="/saved-movies" loginIn={loginIn} myMovies={myMovies}
              setMyMovies={setMyMovies}
              backColor="header_color"
              logoClick={handleLinkClick}
              signUpClick={handleSignUpClick}
              signInClick={handleSignInClick}
              toProfile={handleToProfile}
              toggleSidebar={toggleSidebar}
              sideBar={sideBar}
              component={Protected}>

          </ProtectedRoute>
          <ProtectedRoute exact path="/profile" loginIn={loginIn} myMovies={myMovies}
              setMyMovies={setMyMovies}
              backColor="header_color"
              logoClick={handleLinkClick}
              signUpClick={handleSignUpClick}
              signInClick={handleSignInClick}
              toProfile={handleToProfile}
              toggleSidebar={toggleSidebar}
              sideBar={sideBar}
              setLoginIn={setLoginIn}
              component={Protected}
              >
          </ProtectedRoute>
          <Route exact path="/signup">
            <Register logoClick={handleLinkClick} setLoginIn={setLoginIn} />
          </Route>
          <Route exact path="/signin">
            <Login logoClick={handleLinkClick} setLoginIn={setLoginIn} />
          </Route>
          <Route path="*">
          <Header
              myMovies={myMovies}
              setMyMovies={setMyMovies}
              logoClick={handleLinkClick}
              signUpClick={handleSignUpClick}
              signInClick={handleSignInClick}
              toProfile={handleToProfile}
              toggleSidebar={toggleSidebar}
              sideBar={sideBar}
              loginIn={loginIn}
              backColor="header_color"
            />
            <Notfound backClick={handleBackClick} />
          </Route>
        </Switch>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
