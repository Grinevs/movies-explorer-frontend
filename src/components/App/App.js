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

function App() {
  const history = useHistory();
  const [sideBar, setSideBar] = React.useState(false);
  const [loginIn, setLoginIn] = React.useState(false);

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
    if ((window.visualViewport.width < 800) && sideBar) {
      history.push("/profile")
      setSideBar(false);
    } else {
      toggleSidebar()
    }
    if  (window.visualViewport.width > 800) {
      history.push("/profile")
      setSideBar(false);
    } else {
      toggleSidebar()
    }

  };

  const toggleSidebar = () => {
    setSideBar(sideBar ? false : true);
  };
  const handleSetLogin = () => {
    loginIn ? setLoginIn(false) : setLoginIn(true);
  };

  return (
    <div className="page">
      <Switch>
        <Route exact path="/">
          <Header
            logoClick={handleLinkClick}
            signUpClick={handleSignUpClick}
            signInClick={handleSignInClick}
            toProfile={handleToProfile}
            toggleSidebar={toggleSidebar}
            sideBar={sideBar}
            login={loginIn}
            toggleLogin={handleSetLogin}
          />
          <Main />
          <Footer />
        </Route>
        <Route exact path="/movies">
          <Header
            backColor="header_color"
            logoClick={handleLinkClick}
            signUpClick={handleSignUpClick}
            signInClick={handleSignInClick}
            toProfile={handleToProfile}
            toggleSidebar={toggleSidebar}
            sideBar={sideBar}
            login={loginIn}
            toggleLogin={handleSetLogin}
          />
          <Movies />
          <Footer />
        </Route>
        <Route exact path="/saved-movies">
          <Header
            backColor="header_color"
            logoClick={handleLinkClick}
            signUpClick={handleSignUpClick}
            signInClick={handleSignInClick}
            toProfile={handleToProfile}
            toggleSidebar={toggleSidebar}
            sideBar={sideBar}
            login={loginIn}
            toggleLogin={handleSetLogin}
          />
          <Movies myMovies />
          <Footer />
        </Route>
        <Route exact path="/profile">
          <Header
            backColor="header_color"
            logoClick={handleLinkClick}
            signUpClick={handleSignUpClick}
            signInClick={handleSignInClick}
            toProfile={handleToProfile}
            toggleSidebar={toggleSidebar}
            sideBar={sideBar}
            login={loginIn}
            toggleLogin={handleSetLogin}
          />
          <Profile />
        </Route>
        <Route exact path="/signup">
          <Register logoClick={handleLinkClick} />
        </Route>
        <Route exact path="/signin">
          <Login logoClick={handleLinkClick} />
        </Route>
        <Route exact path="*">
          <Notfound backClick={handleBackClick} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
