import '../../utils/object';

jest.unmock('../../utils/object');
jest.unmock('../index.js');

describe('actions test', () => {
  it('should have addTodo action', () => {
    const { addTodo, ADD_TODO } = require('../index.js');
    expect(addTodo).toBeDefined();
    expect(addTodo('Foo')).toEqual({
      type: ADD_TODO,
      text: 'Foo'
    });
  });
  it('should have completeTodo action', () => {
    const { completeTodo, COMPLETE_TODO } = require('../index.js');
    expect(completeTodo).toBeDefined();
    expect(completeTodo(1)).toEqual({
      type: COMPLETE_TODO,
      index: 1
    });
  });
  it('should have setVisibilityFilter action, and three filters', () => {
    const { setVisibilityFilter, SET_VISIBILITY_FILTER, VisibilityFilters} = require('../index.js');
    expect(setVisibilityFilter).toBeDefined();
    expect(setVisibilityFilter(VisibilityFilters.SHOW_ALL)).toEqual({
      type: SET_VISIBILITY_FILTER,
      filter: VisibilityFilters.SHOW_ALL
    });

    // how many filters?
    // let filters = Object.keys(VisibilityFilters).map(key => VisibilityFilters[key]);
    let filters = Object.values(VisibilityFilters);

    expect(filters.length).toEqual(3);
    expect(VisibilityFilters).toEqual({
      SHOW_ALL: 'SHOW_ALL',
      SHOW_COMPLETED: 'SHOW_COMPLETED',
      SHOW_ACTIVE: 'SHOW_ACTIVE'
    });
  });
});
