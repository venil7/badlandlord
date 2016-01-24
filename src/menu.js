import React from 'react';
import { Link } from 'react-router';

class Menu extends React.Component {
  active(pathname) {
    let {isActive} = this.props.history;
    return isActive(pathname) ? "active" : "";
  }
  render() {
    return (
      <div>
        <Link className={this.active("/")} to="/"> Home |</Link>
        <Link className={this.active("/list")} to="/list"> List |</Link>
        <Link className={this.active("/details")} to="/details"> Details |</Link>
        <Link className={this.active("/about")} to="/about"> About </Link>
      </div>
    );
  }
}

export { Menu };