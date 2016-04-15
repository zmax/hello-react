import React, {Component} from 'react';
import request from '../utils/request';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = { name: ''};
  }
  componentDidMount() {
    this.getData();
  }
  getData() {
    return request('/users/' + this.props.userId).then( (user) => {
      this.setState(user);
      return user;
    });
  }
  getName() {
    return this.state.name;
  }
  render() {
    let name = this.getName() === '' ? '' : ' ' + this.getName();
    return <div>Hello{name}</div>
  }
}
