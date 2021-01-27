import React from "react";

function NavComp(props) {
  return (
    <nav>
      <div className="logo">
        <props.logo />
        SaasLand
      </div>

      <ul>
        <li>Home</li>
        <li>Pricing</li>
        <li>Security</li>
        <li>News</li>
        <li>Help</li>
      </ul>

      <div className="register">
        <a href="/">Login</a>
        <a href="/" className="sign-up">
          Sign Up
        </a>
      </div>
    </nav>
  );
}

export default NavComp;
