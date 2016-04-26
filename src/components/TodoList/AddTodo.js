import React, {Component, PropTypes} from 'react';
import Input from '../Input';
import Button from '../Button';

import {addTodo} from '../../actions';
import {todos} from '../../reducers';

export default class AddTodo extends Component {

  static defaultProps = {
    buttonLabel: 'Add'
  }

  static propTypes = {
    onAddNewTodo: PropTypes.func.isRequired,
    buttonLabel: PropTypes.string
  }

  constructor(props) {
    super(props);
    this.state = { todo: '' };
  }

  handleInputChange(e) {
    e.preventDefault();
    this.setState({ todo: e.target.value });
  }

  handleButtonClick(e) {
    e.preventDefault();
    this.props.onAddNewTodo(this.state.todo.trim());

    this.setState({ todo: '' });
    this.refs.input.clear();
  }

  handleKeyPress(e) {
    if (e.which === 13)
      this.handleButtonClick(e);
  }

  render() {
    return (
      <div>
        <Input
          onChange={(e) => this.handleInputChange(e)}
          onKeyPress={(e) => this.handleKeyPress(e)}
          ref="input" value={this.state.todo} />
        {" "}
        <Button onClick={(e) => this.handleButtonClick(e)}>{this.props.buttonLabel}</Button>
      </div>
    );
  }

}
