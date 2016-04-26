import React, {Component} from 'react';
import classNames from 'classnames';

export default class Button extends Component {
  
  // state = { label: '' };
  static defaultProps = {
    onClick: (e) => {e},
    label: ''
  }

  constructor(props) {
    super(props);
    // console.log(this.props);
    // console.log(this.state);
  }

  render() {
    let btnClass = classNames({
        'btn': true,
        'btn-default': true,
        // 'btn-primary': this.state.isLiked
      }),
      label = (this.props.label === '') ? this.props.children : this.props.label;
    return (
      <div className={btnClass} onClick={(e) => this.props.onClick(e)}>{label}</div>
    );
  }

}
