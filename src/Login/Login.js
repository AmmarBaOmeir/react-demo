/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import {
  PersonOutlineOutlined,
  AccountBox,
  LockOutlined,
  CheckBoxOutlineBlankOutlined,
  CheckBoxOutlined,
} from "@material-ui/icons";

import "./Login.css";

function Login() {
  const [isChecked, setchecked] = useState(false);
  return (
    <div className="login-page">
      <div className="login-pink">
        <div className="login-header">
          <hr />
          <div className="image-div">
            <PersonOutlineOutlined id="image" />
          </div>
        </div>
        <div className="input-container">
          <div className="username-field">
            <AccountBox
              className="field-icons"
              style={{
                fill: "#515559",
              }}
            />
            <input type="text" placeholder="USERNAME" />
          </div>
          <div className="pass-field">
            <LockOutlined
              className="field-icons"
              style={{
                backgroundColor: "#515559",
                fill: "#ffffff",
                borderRadius: "3px",
                zoom: "2",
                top: "44px",
                left: "0.7px",
                padding: "3px",
              }}
            />
            <input type="password" placeholder="Password" />
          </div>

          <div className="login-button">
            <input type="button" value="Login" />
          </div>
          <div>
            <div
              onClick={() => {
                setchecked(!isChecked);
              }}
              style={{ cursor: "pointer" }}
              className="remember-forgot-pass"
            >
              <div>
                {isChecked ? (
                  <CheckBoxOutlined style={{ fill: "#dadada" }} />
                ) : (
                  <CheckBoxOutlineBlankOutlined style={{ fill: "#dadada" }} />
                )}
                <span> Remember me </span>
              </div>
              <div>
                <a href="#">Forgot your password</a>
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
