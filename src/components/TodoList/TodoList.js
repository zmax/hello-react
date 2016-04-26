import React, {Component, PropTypes} from 'react';
import {Ul, Li} from '../List';
import Todo from './Todo';

export default class TodoList extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>TodoList</h2>
        <Ul>
          {this.props.todos.map(
            (todo, index) =>
              <Li key={index}>
                <Todo key={index} text={todo.text} completed={todo.completed}
                  onClick={(e)=>this.props.onTodoClick(e, todo.index)} />
              </Li>
          )}
        </Ul>
      </div>
    );
  }

}

TodoList.propTypes = {
  onTodoClick: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired
    }).isRequired
  ).isRequired
}
