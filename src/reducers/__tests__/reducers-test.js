import '../../utils/object';

jest.unmock('../index');
jest.unmock('redux');
jest.unmock('../../actions');

import todoApp, { visibilityFilter, todos } from '../index';
import {
  addTodo,
  completeTodo,
  setVisibilityFilter
} from '../../actions';

describe('reducers test', () => {

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
