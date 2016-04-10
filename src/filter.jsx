import React from 'react';
import { connect } from 'react-redux';
import { filter } from './filter-actions';

class Filter extends React.Component {
  onChange(event) {
    this.props.dispatch(filter(event.target.value));
    // console.log(this.props);
  }
  render() {
    return (
      <input type="text"
        placeholder="filter.."
        onChange={(e) => this.onChange(e)} />
    );
  }
}

Filter = connect((state) => {
  return {
    filter: state.filter
  };
})(Filter);

export { Filter };