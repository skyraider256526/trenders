import React from "react";
import { ReactComponent as Logo } from "../../assests/crown.svg";

import { Link } from "react-router-dom";

import { connect } from "react-redux";

import { auth } from "firebase";

import CartIcon from "../cart-icon/cart-icon";
import CartDropdown from "../card-dropdown/card-dropdown";

import "./header.scss";

const Header = ({currentUser, hidden}) => (
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
      {currentUser == null ? (
        <div className="option" onClick={() => auth().signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden
});

export default connect(mapStateToProps)(Header);
