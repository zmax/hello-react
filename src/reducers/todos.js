import { ADD_TODO, COMPLETE_TODO } from '../constants/ActionTypes';

/**
 * @arg {Array}  state
 * @arg {string} action
 */
export default function todos(state = [], action = { type: '' }) {
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
