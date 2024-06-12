console.log("Auth bootstrap");

import React from "react";
import ReactDOM from "react-dom";
import { createMemoryHistory, createBrowserHistory } from "history";
import App from "./App";

// Mount function to start up the app
const mountApp = (el, { onNavigate, defaultHistory, initialPath }) => {
  const history =
    defaultHistory ||
    createMemoryHistory({
      initialEntries: [initialPath],
    });

  if (onNavigate) {
    history.listen((location) => {
      console.log("Navigated to", location.pathname);
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
  const devRoot = document.querySelector("#_auth-dev-root");
  if (devRoot) mountApp(devRoot, { defaultHistory: createBrowserHistory() });
  else console.warn("Could not find the dev root");
}

export { mountApp };
