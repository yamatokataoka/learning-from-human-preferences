import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import routes from "./routes";
import config from "../config.json";

function App(): JSX.Element {
  return (
    <>
      <Header title={config.title} />
      <Switch>
        {routes.map((route) => (
          <Route
            component={route.component}
            path={route.path}
            exact={route.exact}
            key={route.key}
          />
        ))}
      </Switch>
    </>
  );
}

export default App;
