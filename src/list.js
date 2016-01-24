import React from 'react';
import { connect } from 'react-redux';
import { Item } from './item';
import { fetchThunk } from './list-actions';

class List extends React.Component {
  constructor(...args) {
    super(...args);
    this.props.dispatch(fetchThunk());
  }

  render() {
    let { items = [] } = this.props;
    return (
      <ul>
        { items.map((item) =>
          <Item item={item} key={item.index} />)}
      </ul>
    );
  }
}

List = connect(state => {
  return {
    items: state.list
  };
})(List);

export { List };