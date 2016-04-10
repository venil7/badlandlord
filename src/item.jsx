import React from 'react';
import { Link } from 'react-router'

class Item extends React.Component {
  render() {
    let { item } = this.props;
    return (
      <li>
        <Link to={`/details/${item.index}`}>{ item.name }</Link>
      </li>
    );
  }
}

export { Item };