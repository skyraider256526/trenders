import React from "react";
import { ReactComponent as Logo } from "./crown.svg";

import { Link } from "react-router-dom";

import "./header.scss";

const Header = () => (
  <div className="header">
    <Link to="/" className="logo-container">
      <Logo className="logo"></Logo>
    </Link>
    <div className="options">
      <Link to="/shop" className="option">
        SHOP
      </Link>
      <Link to="/contact" className="option">
        CONTACT
      </Link>
    </div>
  </div>
);

export default Header;
