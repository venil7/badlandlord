import * as React from 'react';
import FacebookLogin from 'react-facebook-login';
import { connect } from 'react-redux';

import { fbChangeStatus } from './fb-actions';

class AboutComponent extends React.Component<any, any> {
  responseFacebook(status) {
    console.log('fb status', status);
    this.props.dispatch(fbChangeStatus(status));
  }

  render() {
    // console.log('auth', this.props.status);
    if (this.props.status.authenticated) {
      return (<span>
          Logged in as {this.props.status.name}
        </span>);
    }
    return (
      <FacebookLogin
        appId={process.env.facebook_app_id}
        autoLoad={true}
        callback={(status) => this.responseFacebook(status)}
        icon="fa-facebook" />
    );
  }
}

const About = connect(({ status }) => ({ status }))(AboutComponent);

export { About };