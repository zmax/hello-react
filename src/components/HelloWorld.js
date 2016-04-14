import React, {Component} from 'react';

export default class HelloWorld extends Component {
  constructor(props) {
    super(props);
    // default state
    this.state = { isClicked: false };
  }
  onMouseClick(e) {
    this.setState({ isClicked: true });
  }
  render() {
    let additionMessage = this.state.isClicked ? ' (clicked)' : '';
    return (
      <div onClick={(e)=>this.onMouseClick(e)}>Hello World!!{additionMessage}</div>
    );
  }
}
