import { createStore } from 'redux';
import rootReducer from '../reducers';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import DevTools from '../components/DevTools';

function configureStore(initialState) {
  let store = createStore(rootReducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      let nextReducer = require('../reducers').default;
      store.replaceReducer(nextReducer);
    })
  }

  return store
}

const store = (__DEV__) ?
  configureStore(DevTools.instrument()) : configureStore({});

const history = syncHistoryWithStore(browserHistory, store);

export default store;
export { history, configureStore };
