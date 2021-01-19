import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Persons } from "./pages/Persons";
import { Auth } from "./pages/Auth";
import { Create } from "./pages/Create";
import { Person } from "./pages/Person";

export const useRoutes = (isAuthenticated) => {
  if (isAuthenticated)
    return (
      <Switch>
        <Route path="/persons" exact>
          <Persons />
        </Route>
        <Route path="/create" exact>
          <Create />
        </Route>
        <Route path="/person/:id" exact>
          <Person />
        </Route>
        <Redirect to="/persons" />
      </Switch>
    );

  return (
    <Switch>
      <Route path="/" exact>
        <Auth />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
};
