import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
const Login = () => {
  const formHandler = (event) => {
    event.preventDefault();
  };
  return (
    <div className="loginContainer">
      <div className="loginBox">
        <h1 className="heading">Login</h1>
        <form className="form" onSubmit={formHandler}>
          <div>
            <input type="email" name="email" id="email" placeholder="E-mail" />
          </div>
          <div>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
          </div>
          <div className="bottom_text">
            <div className="remember">
              <input type="checkbox" name="checkbox" id="checkbox" />
              <p>Remember Me</p>
            </div>
            <div>
              <p>Forgot Password</p>
            </div>
          </div>
          <div>
            <button className="loginBtn">Log In</button>
          </div>
          <div className="signUpText">
            <p>Create Account</p>
            <Link to="/register" className="registerLink">
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
