jest.unmock('../index');
jest.unmock('../../actions');

import { createStore } from 'redux';
import todoApp from '../index';
import { addTodo } from '../../actions';

describe("store test", () => {

  const defaultState = { todos: [], visibilityFilter: "SHOW_ALL" };

  let store;
  beforeEach( () => {
    store = createStore(todoApp);
  });

  it("works", () => {
    expect(store).toBeDefined();
  })

  it("can get state", () => {
    expect(store.getState()).toEqual(defaultState);
  });

  it("can dispatch action to add new todo", () => {
    store.dispatch(addTodo("Foo"));
    // expect(store.getState()).toEqual({ todos: [
    //   { text: "Foo", completed: false }
    // ], visibilityFilter: "SHOW_ALL"});
    expect(store.getState()).toEqual(
      Object.assign({}, defaultState, { todos: [{ text: "Foo", completed: false }] })
    );
  });

  it("can be subscribed and unsubscribe", () => {
    let state = {}, unsubscribe, count = 0;
    unsubscribe = store.subscribe(() => {
      state = store.getState();
      count++;
    });
    store.dispatch(addTodo("Foo"));
    expect(state).not.toEqual({});
    expect(state.todos.length).toEqual(1);
    expect(count).toEqual(1);
    unsubscribe();
    store.dispatch(addTodo("Baz"));
    expect(count).toEqual(1);
    state = store.getState();
    expect(state.todos.length).toEqual(2);
  });

});
