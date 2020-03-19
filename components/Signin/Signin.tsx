import React from "react";
import Link from "next/link";
import { withTranslation } from "../../i18n";

const Signin = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-5">
          <h2 className="text-center mb-3">Sign In</h2>
          <form id="contact-form" method="post">
            <div className="messages"></div>
            <div className="form-group">
              <label>User Name</label>
              <input
                id="form_name"
                type="text"
                name="name"
                className="form-control"
                placeholder="User name"
                data-error="Username is required."
              />
              <div className="help-block with-errors"></div>
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                id="form_password"
                type="password"
                name="password"
                className="form-control"
                placeholder="Password"
                data-error="password is required."
              />
              <div className="help-block with-errors"></div>
            </div>
            <div className="form-group mt-4 mb-5">
              <div className="remember-checkbox d-flex align-items-center justify-content-between">
                <div className="checkbox">
                  <input type="checkbox" id="check2" name="check2" />
                  <label htmlFor="check2">Remember me</label>
                </div>
                <a href="#">Forgot Password?</a>
              </div>
            </div>{" "}
            <a href="#" className="btn btn-primary btn-block">
              Login Now
            </a>
          </form>
          <div className="d-flex align-items-center text-center justify-content-center mt-4">
            <span className="text-muted mr-1">Don't have an account?</span>
            <Link href="/singup">Sign Up</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default withTranslation("common")(Signin);
