import React, { Component } from "react";

const withAuthenticate = WrappedComponent =>
  class extends Component {
    render() {
      return (
        <>
          <WrappedComponent {...this.props} />
        </>
      );
    }
  };

export default withAuthenticate;
