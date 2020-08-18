import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";

const Login = () => {
  return (
    <div className="login">
      <div className="loginContainer">
        <img
          src="https://banner2.cleanpng.com/20180426/lwq/kisspng-computer-icons-login-management-user-5ae155f3386149.6695613615247170432309.jpg"
          alt=""
        />
        <h1>Sign in to react slack app</h1>
        <Button>Sign in with Google</Button>
      </div>
    </div>
  );
};

export default Login;
