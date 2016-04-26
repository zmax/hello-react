import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import Root from 'containers/Root';
import TodoApp from 'containers/TodoApp';
import ComponentsPage from 'containers/ComponentsPage';
import DevTools from 'components/DevTools';

// import store from './store';
import * as reducers from './reducers';
// import {visibilityFilter, todos} from './reducers';
delete reducers.default;

const reducer = combineReducers({
  ...reducers,
  // visibilityFilter,
  // todos,
  routing: routerReducer
});

const store = createStore(reducer, DevTools.instrument());
const history = syncHistoryWithStore(browserHistory, store);

import './app.scss';

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Router history={history}>
        <Route path="/" component={Root}>
          {/*<IndexRoute component={Root}/>*/}
          <Route path="todos" component={TodoApp}/>
          <Route path="components" component={ComponentsPage}/>
        </Route>
      </Router>
      <DevTools />
    </div>
  </Provider>
  , document.getElementById('app')
);
