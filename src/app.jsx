import React from 'react';
import { connect } from 'react-redux';
import { Menu } from './menu';
import { List } from './list';

class App extends React.Component {
  // constructor(...args) {
  //   super(...args);
  //   // console.log(this.props.location);
  // }
  render() {
    return (
      <div className="app">
        <Menu location={this.props.location} history={this.props.history}/>
        {this.props.children || 'welcome'}
      </div>
    );
  }
}

// App = connect(state => state)(App);

export { App };