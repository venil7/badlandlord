import * as React from 'react';
import FacebookLogin from 'react-facebook-login';
import { connect } from 'react-redux';

import { fbChangeStatus } from './fb-actions';

interface LoginPropTypes {
  status: any;
  dispatch(a: any): any;
}

@connect()
class Login extends React.Component<LoginPropTypes, any> {

  responseFacebook(status) {
    this.props.dispatch(fbChangeStatus(status));
  }

  render() {
    const element = (this.props.status.authenticated) ?
      <span>Logged in as {this.props.status.name}</span> :
      (
      <FacebookLogin
        appId={process.env.facebook_app_id}
        autoLoad={true}
        callback={(status) => this.responseFacebook(status)}
        icon="fa-facebook" />
      );
    return element;
  }
}

export { Login };