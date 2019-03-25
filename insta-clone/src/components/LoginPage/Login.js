import React from "react";

import "./Login.scss";

const Login = ({ onLoginClicked, onInputChange }) => {
  return (
    <div className="loginPage">
      <form className="loginForm" onSubmit={event => onLoginClicked(event)}>
        <h1>Instaclone</h1>
        <input
          placeholder="Username"
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
