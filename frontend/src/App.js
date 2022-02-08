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
import * as commentsActions from './store/comments';

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
    dispatch(songActions.getAll());
    dispatch(commentsActions.getAll());
  }, [dispatch]);

  const sessionUser = useSelector(state => state.session.user);

  return (
    <>
      <div className="nav-bar-color-extension"></div>
      <div className="body-main-div">
        <Navigation isLoaded={isLoaded} />
        {isLoaded && (
          <Switch>
            <Route path="/login">
              <LoginFormPage />
            </Route>
            <Route path="/signup">
              <SignupFormPage />
            </Route>
            <Route path="/logout">
              <LogoutPage />
            </Route>
            <Route path="/discover">
              <Home />
            </Route>
            <Route path="/library">
              <Library />
            </Route>
            <Route path="/upload">
              <Upload />
            </Route>
            {
              !sessionUser &&
              <Route exact path="/">
                <Intro />
              </Route>
            }
            {
              !sessionUser &&
              <Redirect to="/" />
            }
            <Redirect to="/discover" />
          </Switch>
        )}
      </div>
    </>
  );
}

export default App;
