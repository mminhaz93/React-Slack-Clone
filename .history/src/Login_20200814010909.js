import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "./firebase";
import { actionTypes } from "./context/reducer";
import { useAuthStateValue } from "./context/AuthContext";

const Login = () => {

    const [{user}, dispatch] = useAuthStateValue();

//   const handleSignIn = () => {
//     auth
//       .signInWithPopup(provider)
//       .then((result) => {
//         dispatch({
//           type: actionTypes.SET_USER,
//           user: result.user,
//         });
//       })
//       .catch((error) => {
//         alert(error.message);
//       });
//   };

  return (
    <div className="login">
      <div className="loginContainer">
        <img
          src="https://www.arthurterry.bham.sch.uk/wp-content/uploads/2016/09/login-logo.png"
          alt=""
        />
        <h1>Sign in to react slack app</h1>
        <Button onClick={handleSignIn}>Sign in with Google</Button>
      </div>
    </div>
  );
};

export default Login;
