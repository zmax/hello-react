import React, {Component} from 'react';
import classNames from 'classnames';

export default class LinkButton extends Component {
  constructor(props) {
    super(props);
    this.state = { isLiked: false };
  }
  toggleLike() {
    this.setState({ isLiked: !this.state.isLiked });
  }
  handleClick(e) {
    e.preventDefault();
    this.toggleLike();
  }
  render() {
    let btnClass = classNames({
      'btn': true,
      'btn-default': ! this.state.isLiked,
      'btn-primary': this.state.isLiked
    });
    let label = this.state.isLiked? 'Unlike' : 'Like';
    return <div className={btnClass} onClick={(e)=>this.handleClick(e)}>{label}</div>
  }
}
