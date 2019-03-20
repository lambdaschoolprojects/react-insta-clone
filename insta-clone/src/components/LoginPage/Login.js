import React from "react";

const Login = ({ loginClicked }) => {
  return (
    <div className="login">
      <form onSubmit={loginClicked}>
        <button>Login</button>
      </form>
    </div>
  );
};
