import React from 'react';
import { connect } from 'react-redux';
import { detailsThunk } from './details-actions';

class Details extends React.Component {

  static get contextTypes() {
    return {
      router: React.PropTypes.object.isRequired
    };
  }

  constructor(...args) {
    super(...args);
    let { index } = this.props.params;
    if (index) {
      this.props.dispatch(detailsThunk(index));
    } else {
      const { router } = this.context;
      setTimeout(() => {
        router.push("/list");
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