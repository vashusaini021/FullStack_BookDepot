import React from "react";
import "./signup.css";

export const SignUp = () => {
    return (
        <div className="text-center">
  <div className="inner">
    <form>
    <h1 className="h3 mb-3 fw-normal">Sign Up</h1>
      <div className="form-group">
        <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="first name"
            />
            <label htmlFor="floatingInput">First Name</label>
        </div>
        <div className="form-floating">
          <input type="text" className="form-control" id="floatingInput" placeholder="last name"/>
          <label htmlFor="floatingInput">Last Name</label>
        </div>
      </div>
      <div className="form-floating">
        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
        <label htmlFor="floatingInput">Email</label>

      </div>
      <div className="form-floating">
        <input type="password" className="form-control" id="floatingPassword" placeholder="password"/>
        <label htmlFor="floatingPassword">Password</label>
      </div>
      <div className="form-floating">
        <input type="password" className="form-control" id="floatingPassword" placeholder="confirm password"/>
        <label htmlFor="floatingPassword">Confirm Password</label>
      </div>
      <br />
      <div className="mb-2">
        <input type="checkbox" className="box" />
        <label className="checkbox-primary"> I accept the Terms of Use & Privacy Policy </label>
      </div>

      <button className="w-100 btn btn-lg btn-primary bg-dark" type="submit" > Sign Up </button>
    </form>
  </div>
</div>

    );
};