import React from "react";
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

const Routers = () => {
  return (
    <div>
      <Router>
        <QueryParamProvider ReactRouterRoute={Route}>
          <NavBar />
          <Switch>
            <PublicRouter exact path="/login" component={Login} />
            <Route exact path="/pokemons" component={Pokemons} />
            <Redirect to="/pokemons" />
          </Switch>
        </QueryParamProvider>
      </Router>
    </div>
  );
};

export default Routers;
