import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";

const Login = () => {
  return (
    <div className="login">
      <div className="loginContainer">
        <img
          src="https://www.arthurterry.bham.sch.uk/wp-content/uploads/2016/09/login-logo.png"
          alt=""
        />
        <h1>Sign in to react slack app</h1>
        <Button>Sign in with Google</Button>
      </div>
    </div>
  );
};

export default Login;
