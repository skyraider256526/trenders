import ShopActionTypes from "./shops.types";

const INITIAL_STATE = {
  collections: null
};

const shopRducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.UPDATE_COLLECTIONS:
      return {
        collections: action.payload
      };
    default:
      return state;
  }
};

export default shopRducer;
