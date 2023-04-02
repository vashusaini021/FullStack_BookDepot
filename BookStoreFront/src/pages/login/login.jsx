import React from "react";
import "./login.css";

export const Login = () => {
  return (
    <div className="text-center">
      <div className="login-form-container w-100 m-auto">
        <form>
          <h1 className="h3 mb-3 fw-normal">Please Sign In</h1>
          <br />
          <br />
          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <div className="mb-2">
          <input type="checkbox" className="box" />
          <label className="checkbox-primary"> Remember Me </label>
          </div>

          <button
            className="w-100 btn btn-lg btn-primary bg-dark"
            type="submit"
          >
            Sign in
          </button>
          <label htmlFor="createAccount" className="signup-link">
            <a href="/signup" className="signup-link">
              Don't have an account? Sign up
            </a>
          </label>
        </form>
      </div>
    </div>
  );
};