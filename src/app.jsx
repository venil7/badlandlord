import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router'

import { Menu } from './menu';
import { Login } from './login';

class App extends React.Component {

  static get contextTypes() {
    return {
      router: React.PropTypes.object.isRequired
    };
  }

  render() {
    const { status } = this.props;
    if (status.authenticated) {
      const {router} = this.context;
      return (
        <div className="app">
          <Menu router={router} />
          {this.props.children || 'welcome'}
        </div>
      );
    }

    return <Login status={status} />
  }
}

App = connect(({status}) => ({status}))(App);

export { App };