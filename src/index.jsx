import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './app';
import { List } from './list';
import { About } from './about';
import { Details } from './details';
import { listReducer } from './list-reducer';
import { detailsReducer } from './details-reducer';
import { filterReducer } from './filter-reducer';
import { fbReducer } from './fb-reducer';

import { compose, createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'


const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore)
const store = createStoreWithMiddleware(combineReducers({
  list: listReducer,
  filter: filterReducer,
  routing: routerReducer,
  details: detailsReducer,
  status: fbReducer
}));

const history = syncHistoryWithStore(browserHistory, store);
const root = document.getElementById('root');

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
