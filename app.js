import React from 'react';
import { connect } from 'react-redux';
import { Menu } from './menu';
import { List } from './list';

class App extends React.Component {
  constructor(...args) {
    super(...args);
  }
  render() {
    return (
      <div className="app">
        <Menu />
        {this.props.children || 'welcome'}
      </div>
    );
  }
}

// App = connect(state => state)(App);

export { App };