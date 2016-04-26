import React, {Component} from 'react';

export default class Li extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li>{this.props.children}</li>
    );
  }

}
