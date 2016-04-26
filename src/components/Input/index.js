import React, {Component} from 'react';

import './input.scss';

export default class Input extends Component {

  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  getValue() {
    return this.state.value;
  }

  clear() {
    this.refs.input.value = '';
    this.setState({ value: '' });
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
    if (this.props.onChange) {
      return this.props.onChange(e);
    }
  }

  handleKeyPress(e) {
    if (this.props.onKeyPress)
      return this.props.onKeyPress(e);
  }

  render() {    
    return (
      <input type="text" ref="input"
        onChange={(e)=>this.handleChange(e)}
        onKeyPress={(e)=>this.handleKeyPress(e)}
        value={this.state.value} />
    );
  }

}
