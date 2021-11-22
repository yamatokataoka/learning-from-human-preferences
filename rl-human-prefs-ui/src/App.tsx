import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import routes from "./routes";

function App(): JSX.Element {
  return (
    <>
      <Header />
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
