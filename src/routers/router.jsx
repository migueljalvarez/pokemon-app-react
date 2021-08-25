import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import NavBar from "../components/NavBar";
import Login from "../pages/Login";
import Pokemons from "../pages/Pokemons";
import { PublicRouter } from "./publicRouter";
import { QueryParamProvider } from "use-query-params";
import Locations from "../pages/Locations";
import { firebase } from "../config/firebaseConfig";
import { login } from "../redux/actions";
import { useDispatch } from "react-redux";
import Footer from "../components/Footer";

const Routers = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user.uid) {
        dispatch(login(user));
      }
    });
  }, []);
  return (
    <div>
      <Router>
        <QueryParamProvider ReactRouterRoute={Route}>
          <NavBar />
          <Switch>
            <PublicRouter exact path="/login" component={Login} />
            <Route exact path="/pokemons" component={Pokemons} />
            <Route exact path="/locations" component={Locations} />
            <Redirect to="/pokemons" />
          </Switch>
          <Footer />
        </QueryParamProvider>
      </Router>
    </div>
  );
};

export default Routers;
