console.log("Marketing bootstrap");

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const mountApp = (el) => {
  ReactDOM.render(<App />, el);
};

// Mount function to start up the app

// If we are in development and in isolation mode, we need to mount the app
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_marketing-dev-root");
  if (devRoot) mountApp(devRoot);
  else console.error("Could not find the dev root");
}

export { mountApp };
