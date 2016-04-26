import { SET_VISIBILITY_FILTER } from '../constants/ActionTypes';
import { SHOW_ALL } from '../constants/FilterTypes';

/**
 * @arg {string} state SHOW_ALL (default)
 * @arg {string} action
 */
export default function visibilityFilter(state = SHOW_ALL, action = { type: '' }) {
  if (action.type == SET_VISIBILITY_FILTER)
    return action.filter;

  return state;
}
