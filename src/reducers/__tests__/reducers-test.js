import '../../utils/object';
// reducers
jest.unmock('../index');
jest.unmock('../todos');
jest.unmock('../visibilityFilter');
// actions
jest.unmock('../../actions');

import { combineReducers } from 'redux';
import {todos, visibilityFilter} from '../index';

import {
  addTodo,
  completeTodo,
  setVisibilityFilter
} from '../../actions';

describe('reducers test', () => {

  let todoApp;
  beforeEach(() => {
    todoApp = combineReducers({
      todos,
      visibilityFilter
    });
  });

  it("have two reducers", () => {
    let state = todoApp();
    expect((Object.values(state)).length).toEqual(2);
    expect(state).toEqual({
      visibilityFilter: "SHOW_ALL",
      todos: []
    });
  });

  it("can add new todo", () => {
    let state = todoApp();
    state = todoApp(state, addTodo('Foo'));
    expect(state.todos).toEqual([
      {
        index: 0,
        text: 'Foo',
        completed: false
      }
    ]);
  });

  it("can mark some todo as completed or uncomplete", () => {
    let state = todoApp();
    state = todoApp(state, addTodo('Foo'));
    state = todoApp(state, addTodo('Baz'));
    state = todoApp(state, addTodo('Qux'));
    state = todoApp(state, completeTodo(1));
    expect(state.todos).toEqual([
      {
        index: 0,
        text: "Foo",
        completed: false
      },
      {
        index: 1,
        text: "Baz",
        completed: true
      },
      {
        index: 2,
        text: "Qux",
        completed: false
      }
    ]);
    state = todoApp(state, completeTodo(1));
    expect(state.todos).toEqual([
      {
        index: 0,
        text: "Foo",
        completed: false
      },
      {
        index: 1,
        text: "Baz",
        completed: false
      },
      {
        index: 2,
        text: "Qux",
        completed: false
      }
    ]);
  });

});
