import React from "react";

const Login = ({ onLoginClicked, onInputChange }) => {
  return (
    <div className="login">
      <form onSubmit={event => onLoginClicked(event)}>
        <input
          className="loginField"
          id="loginField"
          onChange={event => onInputChange(event)}
        />
        <button className="loginButton">Login</button>
      </form>
    </div>
  );
};

export default Login;
