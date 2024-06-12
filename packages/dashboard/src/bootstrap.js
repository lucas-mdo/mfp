console.log("Dashboard bootstrap!");

import { createApp } from "vue";
import Dashboard from "./components/Dashboard.vue";

// Mount function to start up the app
const mountApp = (el) => {
  const app = createApp(Dashboard);
  app.mount(el);
};

// If we are in development and in isolation mode, we need to mount the app
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_dashboard-dev-root");
  if (devRoot) mountApp(devRoot);
  else console.warn("Could not find the dev root");
}

export { mountApp };
