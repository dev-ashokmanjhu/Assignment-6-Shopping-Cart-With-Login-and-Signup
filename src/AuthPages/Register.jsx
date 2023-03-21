import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
const Register = () => {
  const formHandler = (event) => {
    event.preventDefault();
  };
  return (
    <div className="loginContainer">
      <div className="loginBox">
        <h1 className="heading">Register</h1>
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
            <button className="loginBtn">Register</button>
          </div>
          <div className="signUpText">
            <p>Have an Account</p>
            <Link to="/login" className="registerLink">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
