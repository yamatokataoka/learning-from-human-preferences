import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import routes from "./routes";

function App(): JSX.Element {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/comparison">Comparison</Link>
          </li>
        </ul>
      </nav>

      <hr />

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
