console.log("Marketing bootstrap");

import React from "react";
import ReactDOM from "react-dom";
import { createMemoryHistory } from "history";
import App from "./App";

// Mount function to start up the app
const mountApp = (el, { onNavigate }) => {
  const history = createMemoryHistory();

  if (onNavigate) {
    history.listen((location) => {
      onNavigate(location.pathname);
    });
  }

  ReactDOM.render(<App history={history} />, el);

  return {
    onParentNavigate: (path) => {
      const { pathname: currentPath } = history.location;
      if (currentPath !== path) {
        history.push(path);
      }
    },
  };
};

// If we are in development and in isolation mode, we need to mount the app
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_marketing-dev-root");
  if (devRoot) mountApp(devRoot, {});
  else console.warn("Could not find the dev root");
}

export { mountApp };
