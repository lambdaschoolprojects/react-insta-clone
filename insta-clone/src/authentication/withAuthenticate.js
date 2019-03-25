import React, { Component } from "react";

const withAuthenticate = AuthenticatedComponent => LoginPage =>
  class extends Component {
    render() {
      return (
        <>
          {this.props.authenticated ? (
            <AuthenticatedComponent {...this.props} />
          ) : (
            <LoginPage {...this.props} />
          )}
        </>
      );
    }
  };

export default withAuthenticate;
