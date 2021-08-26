import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { useDispatch } from "react-redux";
import { PublicRouter } from "./publicRouter";
import { firebase } from "../config/firebaseConfig";
import { login } from "../redux/actions";

import Login from "../pages/Login";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Pokemons from "../pages/Pokemons";

const Routers = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch(login(user));
      }
    });
  }, [dispatch]);

  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <PublicRouter exact path="/login" component={Login} />
          <Route exact path="/pokemons" component={Pokemons} />
          <Redirect to="/pokemons" />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default Routers;
