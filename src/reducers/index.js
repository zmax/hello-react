import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

/**
 * Reducers
 */
import todos from './todos';
import visibilityFilter from './visibilityFilter';

const rootReducer = combineReducers({
  todos,
  visibilityFilter,
  routing: routerReducer,
});

export default rootReducer;
export {todos, visibilityFilter};
