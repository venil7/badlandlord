import React from 'react';
import { Link } from 'react-router';

class Menu extends React.Component {
  render() {
    return (
      <div>
        <Link to="/"> Home |</Link>
        <Link to="/list"> List |</Link>
        <Link to="/details"> Details |</Link>
        <Link to="/about"> About </Link>
      </div>
    );
  }
}

export { Menu };