import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router'

import { Menu } from './menu';
import { List } from './list';

class App extends React.Component {

  static get contextTypes() {
    return {
      router: React.PropTypes.object.isRequired
    };
  }

  render() {
    const {router} = this.context;
    return (
      <div className="app">
        <Menu router={router} />
        {this.props.children || 'welcome'}
      </div>
    );
  }
}

export { App };