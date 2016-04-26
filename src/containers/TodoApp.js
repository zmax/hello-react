import React, {Component} from 'react';
import { connect } from 'react-redux'
import TodoList, {AddTodo, TodoFilter} from '../components/TodoList';
// import * as actions from '../actions';

import {
  addTodo, completeTodo, setVisibilityFilter
} from '../actions';

import * as VisibilityFilters from '../constants/FilterTypes';

/**
 * TodoApp
 */
class TodoApp extends Component {

  constructor(props) {
    super(props);
  }

  /**
   * New todo
   */
  handleAddNewTodo(text) {
    let { addTodo } = this.props;
    return addTodo(text);
    // let { dispatch } = this.props;
    // return dispatch(addTodo(text));
  }

  /**
   * Mark todo as completed or uncomplete
   */
  handleToggleTodo(e, index) {
    let { visibleTodos, completeTodo } = this.props;
    completeTodo(index);
  }

  handleFilterChange(filter) {
    let { setVisibilityFilter } = this.props;
    return setVisibilityFilter(filter);
  }

  render() {
    let { visibleTodos, visibilityFilter } = this.props;
    return (
      <div>
        <AddTodo onAddNewTodo={(text) => this.handleAddNewTodo(text)} /> <br/>
        <TodoList todos={visibleTodos} onTodoClick={(e, index)=>this.handleToggleTodo(e, index)}/>
        <br/>
        <TodoFilter filter={visibilityFilter} onFilterChange={(filter)=>this.handleFilterChange(filter)} />
      </div>
    );
  }
}

function selectTodos(todos, filter) {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(todo => todo.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed);
    default:
      return todos;
  }
}

/**
 * @TODO 改用 reselect
 * https://github.com/faassen/reselect
 */
export default connect(
  // state
  state => ({
    visibleTodos: selectTodos(state.todos, state.visibilityFilter),
    visibilityFilter: state.visibilityFilter
  }),
  // actions
  {
    addTodo,
    completeTodo,
    setVisibilityFilter
  }
)(TodoApp);
