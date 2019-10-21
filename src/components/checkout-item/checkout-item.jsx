import React from "react";

import { connect } from 'react-redux'

import { removeItem } from "../../redux/cart/cart.action";

import "./checkout-item.scss";
// import { selectCartItems } from '../../redux/cart/cart.selector';

const CheckoutItem = ({ cartItem: { name, imageUrl, price, quantity,id }, dispatch }) => (
  <div className="checkout-item">
    <div className="image-container">
      <img src={imageUrl} alt="item"></img>
    </div>
    <span className="name">{name}</span>
    <span className="quantity">{quantity}</span>
    <span className="price">{price}</span>
    <span className="remove-button" onClick={() => dispatch(removeItem(id))}>&#10005;</span>
  </div>
);

export default connect(null,)(CheckoutItem);
