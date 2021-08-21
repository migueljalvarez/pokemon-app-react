import React from "react";
import {
  BrowserRouter as Router,
  // Redirect,
  Route,
  Switch,
} from "react-router-dom";
import NavBar from "../components/NavBar";
import Login from "../pages/Login";
import Pokemons from "../pages/Pokemons";
import { PublicRouter } from "./publicRouter";

const Routers = () => {
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <PublicRouter exact path="/login" component={Login} />
          <Route exact path="/pokemons" component={Pokemons} />
          <Route exact path="/" component={Pokemons} />
        </Switch>
      </Router>
    </div>
  );
};

export default Routers;
