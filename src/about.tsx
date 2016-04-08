/// <reference path="./other.d.ts" />

import * as React from 'react';
import FacebookLogin from 'react-facebook-login';

class About extends React.Component<{}, {}> {

  responseFacebook(user) {
    console.log(user);
  }

  render() {
    console.log('process', process.env);
    return (
      <FacebookLogin
        appId={process.env.facebook_app_id}
        autoLoad={true}
        callback={(user) => this.responseFacebook(user)}
        icon="fa-facebook" />
    );
  }
}

export { About };