import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Components/App.jsx";
//redux
import { Provider } from "react-redux";
import { store } from "./redux/ConfigStore.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
