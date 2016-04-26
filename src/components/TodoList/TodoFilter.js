import React, { Component, PropTypes } from 'react';
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../../constants/FilterTypes';

/**
 * TodoFilter
 *
 * SHOW_ALL
 * SHOW_COMPLETED
 * SHOW_ACTIVE
 */
export default class TodoFilter extends Component {

  filters = [
    { id: SHOW_ALL, label: "All" },
    { id: SHOW_COMPLETED, label: "Completed" },
    { id: SHOW_ACTIVE, label: "Active" }
  ];

  constructor(props) {
    super(props);
  }

  renderFilter(filter, label, index) {
    return (
      (this.props.filter === filter) ?
        <span key={index}>{label}</span>
        :
        <span key={index}><a onClick={(e)=>this.props.onFilterChange(filter)}>{label}</a></span>
    );
  }

  render() {
    let filters = this.filters
      .map((f, index)=>this.renderFilter(f.id, f.label, index))
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
      // reduce((prev, current, index, array) => { return [...prev, current] }, initialvalue)
      .reduce(
        (prev, current) =>
          prev === null ? [current] : [...prev, " | ", current]
      , null); // initialValue

    let filterStyle = {
      cursor: 'pointer'
    };

    return (
      <div style={filterStyle}>
        Show:{" "}{filters}
      </div>
    );
  }

}

TodoFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired
}
