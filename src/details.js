import React from 'react';
import { connect } from 'react-redux';
import { detailsThunk } from './details-actions';

class Details extends React.Component {
  constructor(...args) {
    super(...args);
    let { index } = this.props.params;
    if (index) {
      this.props.dispatch(detailsThunk(index));
    } else {
      setTimeout(() => {
        this.props.history.push("/list");
      });
    }
  }

  render() {
    let { index } = this.props.params;

    return (
      <ul>
        {Object.keys(this.props.details).map((key) =>
          <li key={key} >{key}: {this.props.details[key]}</li>)}
      </ul>
    );
  }
}

Details = connect(state => {
  return {
    details: state.details
  }
})(Details);

export { Details };