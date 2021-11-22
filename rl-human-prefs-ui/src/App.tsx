import React from "react";
import { useRoutes } from "react-router-dom";
import Header from "./components/Header";
import routes from "./routes";

function App(): JSX.Element {
  const routing = useRoutes(routes);
  return (
    <>
      <Header />
      {routing}
    </>
  );
}

export default App;
