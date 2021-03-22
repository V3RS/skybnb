import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import configureStore from "./store";
import { Provider } from "react-redux";

const store = configureStore();

if (process.env.NODE_ENV !== "production") {
  // restoreCSRF();

  // window.csrfFetch = fetch;
  window.store = store;
  // window.sessionActions = sessionActions;
}
function Root() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById("root")
);
