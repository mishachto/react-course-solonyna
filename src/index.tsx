import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { configureStore, history } from "@shared/";
import { HeaderMain, Modal } from "./containers";
import styled from "./index.module.scss";

const { store } = configureStore(history);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <HeaderMain />
      <div className={styled.container}>
        <App />
      </div>
      <Modal />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root"),
);

reportWebVitals();
