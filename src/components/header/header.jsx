import React from "react";
import { ReactComponent as Logo } from "./crown.svg";

import { Link } from "react-router-dom";

import "./header.scss";
import { auth } from "firebase";

const Header = props => (
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
      {props.current ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="options" to="/signin">
          SIGN IN
        </Link>
      )}
    </div>
  </div>
);

export default Header;
