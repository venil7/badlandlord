import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './app';
import { List } from './list';
import { About } from './about';
import { Details } from './details';
import { listReducer } from './list-reducer';
import { detailsReducer } from './details-reducer';

import { compose, createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createHistory } from 'history';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { syncHistory, routeReducer } from 'redux-simple-router';

const history = createHistory();
const routerMiddleware = syncHistory(/*browserHistory*/history);
const createStoreWithMiddleware = applyMiddleware(thunkMiddleware, routerMiddleware)(createStore)

const store = createStoreWithMiddleware(combineReducers({
  list: listReducer,
  routing: routeReducer,
  details: detailsReducer
}));

let root = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="list" component={List}/>
        <Route path="details" component={Details}>
          <Route path=":index" component={Details}/>
        </Route>
        <Route path="about" component={About}/>
      </Route>
    </Router>
  </Provider>,
  root);
