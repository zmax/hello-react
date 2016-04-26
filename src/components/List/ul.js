import React, {Component} from 'react';

export default class Ul extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>{this.props.children}</ul>
    );
  }

}
