/* eslint-disable no-unused-expressions */
export const addItemToCart = (cartItems, cartItemToAdd) => {
  // console.log(cartItems, cartItems.length);
  // if (cartItems.length) {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );
  //eslint disable nextline;
  if (existingCartItem) {
    cartItems.map(cartItem => console.log("after if", cartItem));
    const result = cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
    console.log(result);

    return result;
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, id) => {
  console.log("id of item", id);
  console.log("item", cartItems);
  const res = cartItems
  for (let i = 0; i < res.length; i++) {
    const element = res[i];
    if (element.id === id) {
      console.log(...res);
      res.splice(i, 1);
      return res.slice(0,i).concat(res.slice(i+1))
      return res
      break;
    }
  }
};
