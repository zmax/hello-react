import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';

import Root from 'containers/Root';
import TodoApp from 'containers/TodoApp';
import ComponentsPage from 'containers/ComponentsPage';
import DevTools from 'components/DevTools';

import store, { history } from './store';

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
      { (__DEV__)? <DevTools /> : "" }
    </div>
  </Provider>
  , document.getElementById('app')
);
