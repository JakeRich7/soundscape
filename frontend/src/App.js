import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import LogoutPage from "./components/LogoutPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Home from "./components/Home"
import * as songActions from './store/songs';
import Library from "./components/Library";
import Upload from "./components/Upload";
import Intro from "./components/Intro";
import ErrorPage from "./components/ErrorPage";
import About from "./components/About";
import * as commentsActions from './store/comments';

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const sessionUser = useSelector(state => state.session.user);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
    dispatch(songActions.getAll());
    dispatch(commentsActions.getAll());
  }, [dispatch]);

  return (
    <>
      <div className="nav-bar-color-extension"></div>
      <div className="body-main-div">
        <Navigation isLoaded={isLoaded} />
        {isLoaded && (
          <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/login">
              <LoginFormPage />
            </Route>
            <Route exact path="/signup">
              <SignupFormPage />
            </Route>
            <Route exact path="/logout">
              <LogoutPage />
            </Route>
            <Route exact path="/discover">
              <Home />
            </Route>
            <Route exact path="/library">
              <Library />
            </Route>
            <Route exact path="/upload">
              <Upload />
            </Route>
            {
              !sessionUser &&
              <Route exact path="/">
                <Intro />
              </Route>
            }
            {
              sessionUser &&
              <Route exact path="/">
                <Redirect to="/discover" />
              </Route>
            }
            <Route>
              <ErrorPage />
            </Route>
          </Switch>
        )}
      </div>
    </>
  );
}

export default App;
