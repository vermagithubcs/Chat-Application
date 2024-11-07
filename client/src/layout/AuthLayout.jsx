import React from "react";
import logo from "../assets/logo.png";
import './AuthLayout.css'
function AuthLayout({ children }) {
  return (
    <>
      <header className="header">
        <img src={logo} alt="logo" width={180} height={60} />
      </header>

      {children}
    </>
  );
}

export default AuthLayout;
