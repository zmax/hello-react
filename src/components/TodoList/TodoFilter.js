import React, { Component, PropTypes } from 'react';
import { VisibilityFilters } from '../../actions';

/**
 * TodoFilter
 *
 * SHOW_ALL
 * SHOW_COMPLETED
 * SHOW_ACTIVE
 */
export default class TodoFilter extends Component {

  filters = [
    { id: VisibilityFilters.SHOW_ALL, label: "All" },
    { id: VisibilityFilters.SHOW_COMPLETED, label: "Completed" },
    { id: VisibilityFilters.SHOW_ACTIVE, label: "Active" }
  ];

  constructor(props) {
    super(props);
  }

  renderFilter(filter, label) {
    return (
      (this.props.filter === filter) ?
        <span>{label}</span>
        :
        <a onClick={(e)=>this.props.onFilterChange(filter)}><span>{label}</span></a>
    );
  }

  render() {
    let filters = this.filters
      .map((f)=>this.renderFilter(f.id, f.label))
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
