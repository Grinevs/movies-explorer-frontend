import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Movies from "../Movies/Movies";
import Profile from "../Profile/Profile";

function Protected(props) {
  return (<>
    { (props.path==="/profile") ?
      (<>
      <Header
      myMovies={props.myMovies}
      setMyMovies={props.setMyMovies}
      backColor={props.backColor}
      logoClick={props.logoClick}
      signUpClick={props.signUpClick}
      signInClick={props.signInClick}
      toProfile={props.toProfile}
      toggleSidebar={props.toggleSidebar}
      sideBar={props.sideBar}
      loginIn={props.loginIn}
    />
    <Profile setMyMovies={props.setMyMovies} setLoginIn={props.setLoginIn} setCurrentUser={props.setCurrentUser}/>
    </>)
    : <>
    <Header
    myMovies={props.myMovies}
    setMyMovies={props.setMyMovies}
    backColor={props.backColor}
    logoClick={props.logoClick}
    signUpClick={props.signUpClick}
    signInClick={props.signInClick}
    toProfile={props.toProfile}
    toggleSidebar={props.toggleSidebar}
    sideBar={props.sideBar}
    loginIn={props.loginIn}
  />
  <Movies myMovies={props.myMovies} setMyMovies={props.setMyMovies} />
  <Footer />
  </>
    }
  </>
  )
}

export default Protected;