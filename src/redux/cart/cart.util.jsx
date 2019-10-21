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
  console.log('id of item',id);
  console.log('item',cartItems);
  
  for (let i = 0; i < cartItems.length; i++) {
    const element = cartItems[i];
    if(element.id === id){
    console.log(...cartItems);
    return cartItems.slice(0, i) + cartItems.slice(i,0)
      break
    }
  }
}