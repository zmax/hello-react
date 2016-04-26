import React, {Component} from 'react';
import request from '../utils/request';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '', loading: false };
  }
  componentDidMount() {
    this.getData();
  }
  getData() {
    this.setState({ loading: true });
    return request('/users/' + this.props.userId).then( (user) => {
      // this.setState(Object.assign({ loading: false }, user));
      // transform-object-rest-spread or stage-2
      // http://babeljs.io/docs/plugins/transform-object-rest-spread/
      this.setState({ ...user, loading: false });
      
      return user;
    });
  }
  getName() {
    return this.state.name;
  }
  render() {
    if (this.state.loading === true) {
      return <div>Loading...</div>
    } else {
      let name = this.getName() === '' ? '' : ' ' + this.getName();
      return <div>Hello{name}</div>
    }
  }
}
