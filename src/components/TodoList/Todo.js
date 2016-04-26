import React, {Component, PropTypes} from 'react';

export default class Todo extends Component {

  constructor(props) {
    super(props);
  }

  renderCompleted() {
    return <span><del>{this.props.text}</del></span>
  }

  renderUncomplete() {
    return <span>{this.props.text}</span>;
  }

  toggleCompleted(e) {
    if (this.props.onClick)
      this.props.onClick(e);
  }

  render() {
    let todoStyle = {
      cursor: 'pointer'
    };
    return (
      <div style={todoStyle} onClick={(e)=>this.toggleCompleted(e)}>
        {this.props.completed ? this.renderCompleted() : this.renderUncomplete() }
      </div>
    );
  }
}

Todo.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired
}
