import React from "react";
import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";

function Login() {
  // let isAuthenticated = false;

  return (
    <div className="outer-container">
     
      <div className="main-square-auth">
        <div className="form-div">
          <div className="title-auth-div">
            <h3 className="title title-auth">Login</h3>
          </div>
          <form className="form">
            {/* associating label with input without ID -> nesting */}
            <label className="label">
              Email address / username
              <input className="input" type="email" />
            </label>
            <br />
            <br />

            <label className="label">
              Password
              <input className="input" type="password" />
            </label>
            <br />

            <button className="btn btn-control btn-auth" type="submit">
              Login
            </button>
          </form>
          <div className="auth-links-div">
            <p className="auth-link-item">
              No account?&nbsp;Register <Link to="/register" className="auth-link">here</Link>
            </p>

            <p className="auth-link-item">
              <Link to="/" className="auth-link">Back</Link>&nbsp;to speed typing
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;