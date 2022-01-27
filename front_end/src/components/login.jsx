import React from "react";
import { FcGoogle } from "react-icons/fc";
import { GoogleLogin } from "react-google-login";
import Logo from "../assets/logo.png";

const Login = () => {
    const responseGoogle = (response) => {
        console.log(response);
    }
  return (
    <div>
      <img alt="images" src={Logo} width="130px" />
      <div>
        <GoogleLogin
          clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
          render={(renderProps) => (
            <button
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            >
              <FcGoogle/>sign in with google
            </button>
          )}
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
        
      </div>
    </div>
  );
};
export default Login;
