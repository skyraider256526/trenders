import styled, { css } from "styled-components";

import CartItem from "../cart-item/cart-item";

export const CartDropDownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
`;

export const CartItemsContainer = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  // to have only vertical scrollbar
  overflow-y: scroll;
`;

export const EmptyMessage = styled.span`
  margin: 50px auto;
  font-size: 18px;
`;
