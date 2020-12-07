import React from "react";
import "./Header.css";

function Header() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar__logo"></div>
        <div className="navbar__vr"></div>
        <div className="navbar__title">Healthy Fruits</div>
      </nav>
    </>
  );
}

export default Header;
