import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./reducers";
import rootSaga from "./sagas";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

const sagaMiddleware = createSagaMiddleware();
const store = (window.store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
));

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
