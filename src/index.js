import ReactDOM from "react-dom";
import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import Main from "./app/MainContainers/Main";
import rootReducer from "./app/Store/reducers";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";
// Just High Level Styles
require("uikit/dist/css/uikit.css");
require("./index.css");

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// dev tools middleware
const reduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// create a redux store with our root reducer above and middleware
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(sagaMiddleware),
    reduxDevTools
  )
);

// run the saga
sagaMiddleware.run(rootSaga);

class App extends React.PureComponent {
  render() {
    return <Main />;
  }
}

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
