import React from 'react';
import { connect } from 'react-redux';
import { Item } from './item';
import { Filter } from './filter';
import { fetchThunk } from './list-actions';

class List extends React.Component {
  constructor(...args) {
    super(...args);
    this.props.dispatch(fetchThunk());
  }

  render() {

    let { items = [], filter } = this.props;
    return (
      <div>
        <Filter />

        <ul>
          { items
              .filter((item) => {
                if (!filter) return true;
                return ~item.name.toUpperCase().indexOf(filter.toUpperCase());
              })
              .map((item) =>
                <Item item={item} key={item.index} />) }
        </ul>
      </div>
    );
  }
}

List = connect((state) => {
  return {
    items: state.list,
    filter: state.filter
  };
})(List);

export { List };