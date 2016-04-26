import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';

export default class Root extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return <div>
      <h2>Hello React</h2>
      <hr/>
      <Link to="/">Home</Link>{" "}|{" "}
      <Link to="/todos">Todos</Link>{" "}|{" "}
      <Link to="/components">Components</Link>{" "}
      <button onClick={() => browserHistory.push('/todos')}>Go to /todos</button>
      <hr/>
      {this.props.children}
    </div>
  }
  
}
