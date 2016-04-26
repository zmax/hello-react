import { combineReducers } from 'redux';
import {
  ADD_TODO,
  COMPLETE_TODO,
  UNCOMPLETE_TODO,
  SET_VISIBILITY_FILTER,
  VisibilityFilters
} from '../actions';

/**
 * @arg {string} state SHOW_ALL (default)
 * @arg {string} action
 */
export function visibilityFilter(state = VisibilityFilters.SHOW_ALL, action = { type: '' }) {
  if (action.type == SET_VISIBILITY_FILTER)
    return action.filter;

  return state;
}

/**
 * @arg {Array}  state
 * @arg {string} action
 */
export function todos(state = [], action = { type: '' }) {
  // action: ADD_TODO, COMPLETE_TODO
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        { text: action.text, completed: false, index: state.length }
      ];
    case COMPLETE_TODO:
      return [
        ...state.slice(0, action.index),
        // ({ ...state[action.index], { completed: true } }),
        Object.assign( {}, state[action.index], {completed: !state[action.index].completed} ),
        ...state.slice(action.index + 1)
      ];
  }

  return state;
}

const todoApp = combineReducers({
  visibilityFilter,
  todos
});

// export default (state = {}, action) => {
//   return {
//     visibilityFilter: visibilityFilter(state.visibilityFilter, action),
//     todos: todos(state.todos, action)
//   };
// };
export default todoApp;
