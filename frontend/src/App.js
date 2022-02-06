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

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
    dispatch(songActions.getAll());
  }, [dispatch]);

  const sessionUser = useSelector(state => state.session.user);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          {
            !sessionUser &&
            <Route path="/logout">
              <LogoutPage />
            </Route>
          }
          {
            !sessionUser &&
            <Redirect to="/" />
          }
          <Route path="/library">
            <Library />
          </Route>
          <Route path="/upload">
            <Upload />
          </Route>
          <Route>
            Bad Guy!
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
