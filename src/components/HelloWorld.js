import React, {Component} from 'react';

export default class HelloWorld extends Component {
  constructor(props) {
    super(props);
    // default state
    this.state = {};
  }
  hasTitle() {
    return this.props.title !== '';
  }
  getTitle(prefix) {
    return prefix + this.props.title;
  }
  render() {
    let title = this.hasTitle()? this.getTitle(' ') : '';
    return (
      <span>Hello World!!{title}</span>
    );
  }
}

// default props
HelloWorld.defaultProps = {
  title: ''
};
