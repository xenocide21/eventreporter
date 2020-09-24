import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { Provider } from "react-redux"
import { PanelReducer } from './reducers/index'
import { BrowserRouter as Router } from "react-router-dom"

const logger = ({ getState }) => next => action => {
    next(action)
}

const store = createStore(PanelReducer, applyMiddleware(logger, thunk))

ReactDOM.render(
  <Provider store={store}>
      <Router>
          <App />
      </Router>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
